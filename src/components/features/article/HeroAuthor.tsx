import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import { CtfImage } from '@src/components/features/contentful';
import { AuthorFieldsFragment } from '@src/lib/__generated/sdk';

interface Props {
  author: AuthorFieldsFragment;
}

export const HeroAuthor = ({ author }: Props) => {
  const inspectorProps = useContentfulInspectorMode({ entryId: author?.sys.id });

  return (
    <div className="flex items-center">
      <div
        className="border-blue500 mr-2 overflow-hidden rounded-full border"
        {...inspectorProps({ fieldId: 'avatar' })}
      >
        {author?.avatar && (
          <CtfImage
            nextImageProps={{
              width: 28,
              height: 28,
              sizes: undefined,
              placeholder: undefined,
            }}
            {...author.avatar}
          />
        )}
      </div>
      <span className="text-xs leading-none text-gray-600" {...inspectorProps({ fieldId: 'name' })}>
        {author?.name}
      </span>
    </div>
  );
};
