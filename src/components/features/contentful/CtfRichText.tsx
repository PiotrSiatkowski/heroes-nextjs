import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';

import { ComponentRichImage } from '@src/lib/__generated/sdk';
import { HeroImage } from 'src/components/features/hero';
import { SanitizedHTML } from 'src/components/shared/sanitized-html';

export type EmbeddedEntryType = ComponentRichImage | null;

export interface ContentfulRichTextInterface {
  json: Document;
  links?:
    | {
        entries: {
          block: Array<EmbeddedEntryType>;
        };
      }
    | any;
}

export const EmbeddedEntry = (entry: EmbeddedEntryType) => {
  switch (entry?.__typename) {
    case 'ComponentRichImage':
      return <HeroImage image={entry} />;
    default:
      return null;
  }
};

export const contentfulBaseRichTextOptions = ({ links }: ContentfulRichTextInterface): Options => ({
  renderText: text => {
    return <SanitizedHTML html={text.replace(/\//g, '/&#8203;')} />;
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (
        node &&
        Array.isArray(node.content) &&
        node.content.length === 1 &&
        'value' in node.content[0] &&
        node.content[0]?.value?.trim() === ''
      ) {
        return null;
      }

      return <p>{children}</p>;
    },
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      const entry = links?.entries?.block?.find(
        (item: EmbeddedEntryType) => item?.sys?.id === node.data.target.sys.id,
      );

      if (!entry) return null;

      return <EmbeddedEntry {...entry} />;
    },
  },
});

export const CtfRichText = ({ json, links }: ContentfulRichTextInterface) => {
  const baseOptions = contentfulBaseRichTextOptions({ links, json });

  return (
    <article className="prose-custom prose prose-sm !prose-invert prose-slate max-w-none dark:prose-invert">
      {documentToReactComponents(json, baseOptions)}
    </article>
  );
};
