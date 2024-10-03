import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import { CtfRichText } from '@src/components/features/contentful';
import { PageHeroFieldsFragment } from '@src/lib/__generated/sdk';

interface Props {
  entryId: NonNullable<PageHeroFieldsFragment>['sys']['id'];
  description: NonNullable<PageHeroFieldsFragment>['skill1Description'];
}
export const HeroSkillDescription = ({ description, entryId }: Props) => {
  const inspectorProps = useContentfulInspectorMode({ entryId });

  return (
    <div {...inspectorProps({ fieldId: 'content' })}>
      <CtfRichText json={description?.json} links={description?.links} />
    </div>
  );
};
