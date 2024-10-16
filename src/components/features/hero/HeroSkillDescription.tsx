import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import { CtfRichText } from '@src/components/features/contentful';
import { PageHeroFieldsFragment } from '@src/lib/__generated/sdk';

interface Props {
  entryId: NonNullable<PageHeroFieldsFragment>['sys']['id'];
  description: NonNullable<PageHeroFieldsFragment>[
    | 'skill1Description'
    | 'skill2Description'
    | 'skill3Description'
    | 'skill4Description'];
}

export const HeroSkillDescription = ({ description, entryId }: Props) => {
  const inspectorProps = useContentfulInspectorMode({ entryId });

  return (
    <div
      {...inspectorProps({ fieldId: 'content' })}
      className="hyphens-auto whitespace-pre-wrap text-justify"
    >
      <CtfRichText json={description?.json} links={description?.links} />
    </div>
  );
};
