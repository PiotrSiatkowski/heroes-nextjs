import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentAuthorCollection?: Maybe<ComponentAuthorCollection>;
  componentRichImageCollection?: Maybe<ComponentRichImageCollection>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageHeroCollection?: Maybe<PageHeroCollection>;
};


export type AssetLinkingCollectionsComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentRichImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsPageHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** To have author-related properties [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentAuthor) */
export type ComponentAuthor = Entry & _Node & {
  __typename?: 'ComponentAuthor';
  _id: Scalars['ID'];
  avatar?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentAuthorLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentAuthor) */
export type ComponentAuthorAvatarArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentAuthor) */
export type ComponentAuthorInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentAuthor) */
export type ComponentAuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To have author-related properties [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentAuthor) */
export type ComponentAuthorNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentAuthorCollection = {
  __typename?: 'ComponentAuthorCollection';
  items: Array<Maybe<ComponentAuthor>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentAuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentAuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentAuthorFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentAuthorLinkingCollections = {
  __typename?: 'ComponentAuthorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHeroCollection?: Maybe<PageHeroCollection>;
};


export type ComponentAuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentAuthorLinkingCollectionsPageHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorLinkingCollectionsPageHeroCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentAuthorLinkingCollectionsPageHeroCollectionOrder {
  AgiGainAsc = 'agiGain_ASC',
  AgiGainDesc = 'agiGain_DESC',
  AgiAsc = 'agi_ASC',
  AgiDesc = 'agi_DESC',
  AttributeAsc = 'attribute_ASC',
  AttributeDesc = 'attribute_DESC',
  IntGainAsc = 'intGain_ASC',
  IntGainDesc = 'intGain_DESC',
  IntAsc = 'int_ASC',
  IntDesc = 'int_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  RangeAsc = 'range_ASC',
  RangeDesc = 'range_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SpeedAsc = 'speed_ASC',
  SpeedDesc = 'speed_DESC',
  StrGainAsc = 'strGain_ASC',
  StrGainDesc = 'strGain_DESC',
  StrAsc = 'str_ASC',
  StrDesc = 'str_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentAuthorOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentRichImage) */
export type ComponentRichImage = Entry & _Node & {
  __typename?: 'ComponentRichImage';
  _id: Scalars['ID'];
  caption?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  fullWidth?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentRichImageLinkingCollections>;
  sys: Sys;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentRichImage) */
export type ComponentRichImageCaptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentRichImage) */
export type ComponentRichImageFullWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentRichImage) */
export type ComponentRichImageImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentRichImage) */
export type ComponentRichImageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To describe an image used in rich text fields [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentRichImage) */
export type ComponentRichImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentRichImageCollection = {
  __typename?: 'ComponentRichImageCollection';
  items: Array<Maybe<ComponentRichImage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentRichImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentRichImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentRichImageFilter>>>;
  caption?: InputMaybe<Scalars['String']>;
  caption_contains?: InputMaybe<Scalars['String']>;
  caption_exists?: InputMaybe<Scalars['Boolean']>;
  caption_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  caption_not?: InputMaybe<Scalars['String']>;
  caption_not_contains?: InputMaybe<Scalars['String']>;
  caption_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  fullWidth?: InputMaybe<Scalars['Boolean']>;
  fullWidth_exists?: InputMaybe<Scalars['Boolean']>;
  fullWidth_not?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentRichImageLinkingCollections = {
  __typename?: 'ComponentRichImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ComponentRichImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentRichImageOrder {
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  FullWidthAsc = 'fullWidth_ASC',
  FullWidthDesc = 'fullWidth_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentSeo) */
export type ComponentSeo = Entry & _Node & {
  __typename?: 'ComponentSeo';
  _id: Scalars['ID'];
  canonicalUrl?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentSeoLinkingCollections>;
  nofollow?: Maybe<Scalars['Boolean']>;
  noindex?: Maybe<Scalars['Boolean']>;
  pageDescription?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  shareImagesCollection?: Maybe<AssetCollection>;
  sys: Sys;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentSeo) */
export type ComponentSeoCanonicalUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentSeo) */
export type ComponentSeoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentSeo) */
export type ComponentSeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentSeo) */
export type ComponentSeoNofollowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentSeo) */
export type ComponentSeoNoindexArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentSeo) */
export type ComponentSeoPageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentSeo) */
export type ComponentSeoPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have SEO-related properties to the pages we render [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/componentSeo) */
export type ComponentSeoShareImagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type ComponentSeoCollection = {
  __typename?: 'ComponentSeoCollection';
  items: Array<Maybe<ComponentSeo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentSeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentSeoFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']>;
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentSeoLinkingCollections = {
  __typename?: 'ComponentSeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageHeroCollection?: Maybe<PageHeroCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type ComponentSeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageHeroCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentSeoLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentSeoLinkingCollectionsPageHeroCollectionOrder {
  AgiGainAsc = 'agiGain_ASC',
  AgiGainDesc = 'agiGain_DESC',
  AgiAsc = 'agi_ASC',
  AgiDesc = 'agi_DESC',
  AttributeAsc = 'attribute_ASC',
  AttributeDesc = 'attribute_DESC',
  IntGainAsc = 'intGain_ASC',
  IntGainDesc = 'intGain_DESC',
  IntAsc = 'int_ASC',
  IntDesc = 'int_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  RangeAsc = 'range_ASC',
  RangeDesc = 'range_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SpeedAsc = 'speed_ASC',
  SpeedDesc = 'speed_DESC',
  StrGainAsc = 'strGain_ASC',
  StrGainDesc = 'strGain_DESC',
  StrAsc = 'str_ASC',
  StrDesc = 'str_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoLinkingCollectionsPageLandingCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentSeoOrder {
  CanonicalUrlAsc = 'canonicalUrl_ASC',
  CanonicalUrlDesc = 'canonicalUrl_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NofollowAsc = 'nofollow_ASC',
  NofollowDesc = 'nofollow_DESC',
  NoindexAsc = 'noindex_ASC',
  NoindexDesc = 'noindex_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHero = Entry & _Node & {
  __typename?: 'PageHero';
  _id: Scalars['ID'];
  agi?: Maybe<Scalars['Int']>;
  agiGain?: Maybe<Scalars['Float']>;
  attribute?: Maybe<Scalars['String']>;
  author?: Maybe<ComponentAuthor>;
  avatar?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<Asset>;
  int?: Maybe<Scalars['Int']>;
  intGain?: Maybe<Scalars['Float']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageHeroLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  range?: Maybe<Scalars['Int']>;
  seoFields?: Maybe<ComponentSeo>;
  skill1Description?: Maybe<PageHeroSkill1Description>;
  skill1Image?: Maybe<Asset>;
  skill2Description?: Maybe<PageHeroSkill2Description>;
  skill2Image?: Maybe<Asset>;
  skill3Description?: Maybe<PageHeroSkill3Description>;
  skill3Image?: Maybe<Asset>;
  skill4Description?: Maybe<PageHeroSkill4Description>;
  skill4Image?: Maybe<Asset>;
  slug?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['Int']>;
  str?: Maybe<Scalars['Int']>;
  strGain?: Maybe<Scalars['Float']>;
  sys: Sys;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroAgiArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroAgiGainArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroAttributeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroAuthorArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentAuthorFilter>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroAvatarArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroIntArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroIntGainArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroPublishedDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroRangeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroSkill1DescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroSkill1ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroSkill2DescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroSkill2ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroSkill3DescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroSkill3ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroSkill4DescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroSkill4ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroSpeedArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroStrArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Individual hero description data. [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageHero) */
export type PageHeroStrGainArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PageHeroCollection = {
  __typename?: 'PageHeroCollection';
  items: Array<Maybe<PageHero>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageHeroFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageHeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageHeroFilter>>>;
  agi?: InputMaybe<Scalars['Int']>;
  agiGain?: InputMaybe<Scalars['Float']>;
  agiGain_exists?: InputMaybe<Scalars['Boolean']>;
  agiGain_gt?: InputMaybe<Scalars['Float']>;
  agiGain_gte?: InputMaybe<Scalars['Float']>;
  agiGain_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  agiGain_lt?: InputMaybe<Scalars['Float']>;
  agiGain_lte?: InputMaybe<Scalars['Float']>;
  agiGain_not?: InputMaybe<Scalars['Float']>;
  agiGain_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  agi_exists?: InputMaybe<Scalars['Boolean']>;
  agi_gt?: InputMaybe<Scalars['Int']>;
  agi_gte?: InputMaybe<Scalars['Int']>;
  agi_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  agi_lt?: InputMaybe<Scalars['Int']>;
  agi_lte?: InputMaybe<Scalars['Int']>;
  agi_not?: InputMaybe<Scalars['Int']>;
  agi_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  attribute?: InputMaybe<Scalars['String']>;
  attribute_contains?: InputMaybe<Scalars['String']>;
  attribute_exists?: InputMaybe<Scalars['Boolean']>;
  attribute_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  attribute_not?: InputMaybe<Scalars['String']>;
  attribute_not_contains?: InputMaybe<Scalars['String']>;
  attribute_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  author?: InputMaybe<CfComponentAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  avatar_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  int?: InputMaybe<Scalars['Int']>;
  intGain?: InputMaybe<Scalars['Float']>;
  intGain_exists?: InputMaybe<Scalars['Boolean']>;
  intGain_gt?: InputMaybe<Scalars['Float']>;
  intGain_gte?: InputMaybe<Scalars['Float']>;
  intGain_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  intGain_lt?: InputMaybe<Scalars['Float']>;
  intGain_lte?: InputMaybe<Scalars['Float']>;
  intGain_not?: InputMaybe<Scalars['Float']>;
  intGain_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  int_exists?: InputMaybe<Scalars['Boolean']>;
  int_gt?: InputMaybe<Scalars['Int']>;
  int_gte?: InputMaybe<Scalars['Int']>;
  int_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  int_lt?: InputMaybe<Scalars['Int']>;
  int_lte?: InputMaybe<Scalars['Int']>;
  int_not?: InputMaybe<Scalars['Int']>;
  int_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedDate?: InputMaybe<Scalars['DateTime']>;
  publishedDate_exists?: InputMaybe<Scalars['Boolean']>;
  publishedDate_gt?: InputMaybe<Scalars['DateTime']>;
  publishedDate_gte?: InputMaybe<Scalars['DateTime']>;
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedDate_lt?: InputMaybe<Scalars['DateTime']>;
  publishedDate_lte?: InputMaybe<Scalars['DateTime']>;
  publishedDate_not?: InputMaybe<Scalars['DateTime']>;
  publishedDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  range?: InputMaybe<Scalars['Int']>;
  range_exists?: InputMaybe<Scalars['Boolean']>;
  range_gt?: InputMaybe<Scalars['Int']>;
  range_gte?: InputMaybe<Scalars['Int']>;
  range_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  range_lt?: InputMaybe<Scalars['Int']>;
  range_lte?: InputMaybe<Scalars['Int']>;
  range_not?: InputMaybe<Scalars['Int']>;
  range_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  skill1Description_contains?: InputMaybe<Scalars['String']>;
  skill1Description_exists?: InputMaybe<Scalars['Boolean']>;
  skill1Description_not_contains?: InputMaybe<Scalars['String']>;
  skill1Image_exists?: InputMaybe<Scalars['Boolean']>;
  skill2Description_contains?: InputMaybe<Scalars['String']>;
  skill2Description_exists?: InputMaybe<Scalars['Boolean']>;
  skill2Description_not_contains?: InputMaybe<Scalars['String']>;
  skill2Image_exists?: InputMaybe<Scalars['Boolean']>;
  skill3Description_contains?: InputMaybe<Scalars['String']>;
  skill3Description_exists?: InputMaybe<Scalars['Boolean']>;
  skill3Description_not_contains?: InputMaybe<Scalars['String']>;
  skill3Image_exists?: InputMaybe<Scalars['Boolean']>;
  skill4Description_contains?: InputMaybe<Scalars['String']>;
  skill4Description_exists?: InputMaybe<Scalars['Boolean']>;
  skill4Description_not_contains?: InputMaybe<Scalars['String']>;
  skill4Image_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  speed?: InputMaybe<Scalars['Int']>;
  speed_exists?: InputMaybe<Scalars['Boolean']>;
  speed_gt?: InputMaybe<Scalars['Int']>;
  speed_gte?: InputMaybe<Scalars['Int']>;
  speed_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  speed_lt?: InputMaybe<Scalars['Int']>;
  speed_lte?: InputMaybe<Scalars['Int']>;
  speed_not?: InputMaybe<Scalars['Int']>;
  speed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  str?: InputMaybe<Scalars['Int']>;
  strGain?: InputMaybe<Scalars['Float']>;
  strGain_exists?: InputMaybe<Scalars['Boolean']>;
  strGain_gt?: InputMaybe<Scalars['Float']>;
  strGain_gte?: InputMaybe<Scalars['Float']>;
  strGain_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  strGain_lt?: InputMaybe<Scalars['Float']>;
  strGain_lte?: InputMaybe<Scalars['Float']>;
  strGain_not?: InputMaybe<Scalars['Float']>;
  strGain_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  str_exists?: InputMaybe<Scalars['Boolean']>;
  str_gt?: InputMaybe<Scalars['Int']>;
  str_gte?: InputMaybe<Scalars['Int']>;
  str_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  str_lt?: InputMaybe<Scalars['Int']>;
  str_lte?: InputMaybe<Scalars['Int']>;
  str_not?: InputMaybe<Scalars['Int']>;
  str_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageHeroLinkingCollections = {
  __typename?: 'PageHeroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type PageHeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageHeroLinkingCollectionsPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageHeroLinkingCollectionsPageLandingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageHeroLinkingCollectionsPageLandingCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageHeroOrder {
  AgiGainAsc = 'agiGain_ASC',
  AgiGainDesc = 'agiGain_DESC',
  AgiAsc = 'agi_ASC',
  AgiDesc = 'agi_DESC',
  AttributeAsc = 'attribute_ASC',
  AttributeDesc = 'attribute_DESC',
  IntGainAsc = 'intGain_ASC',
  IntGainDesc = 'intGain_DESC',
  IntAsc = 'int_ASC',
  IntDesc = 'int_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedDateAsc = 'publishedDate_ASC',
  PublishedDateDesc = 'publishedDate_DESC',
  RangeAsc = 'range_ASC',
  RangeDesc = 'range_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SpeedAsc = 'speed_ASC',
  SpeedDesc = 'speed_DESC',
  StrGainAsc = 'strGain_ASC',
  StrGainDesc = 'strGain_DESC',
  StrAsc = 'str_ASC',
  StrDesc = 'str_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageHeroSkill1Description = {
  __typename?: 'PageHeroSkill1Description';
  json: Scalars['JSON'];
  links: PageHeroSkill1DescriptionLinks;
};

export type PageHeroSkill1DescriptionAssets = {
  __typename?: 'PageHeroSkill1DescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageHeroSkill1DescriptionEntries = {
  __typename?: 'PageHeroSkill1DescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageHeroSkill1DescriptionLinks = {
  __typename?: 'PageHeroSkill1DescriptionLinks';
  assets: PageHeroSkill1DescriptionAssets;
  entries: PageHeroSkill1DescriptionEntries;
  resources: PageHeroSkill1DescriptionResources;
};

export type PageHeroSkill1DescriptionResources = {
  __typename?: 'PageHeroSkill1DescriptionResources';
  block: Array<PageHeroSkill1DescriptionResourcesBlock>;
  hyperlink: Array<PageHeroSkill1DescriptionResourcesHyperlink>;
  inline: Array<PageHeroSkill1DescriptionResourcesInline>;
};

export type PageHeroSkill1DescriptionResourcesBlock = ResourceLink & {
  __typename?: 'PageHeroSkill1DescriptionResourcesBlock';
  sys: ResourceSys;
};

export type PageHeroSkill1DescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'PageHeroSkill1DescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type PageHeroSkill1DescriptionResourcesInline = ResourceLink & {
  __typename?: 'PageHeroSkill1DescriptionResourcesInline';
  sys: ResourceSys;
};

export type PageHeroSkill2Description = {
  __typename?: 'PageHeroSkill2Description';
  json: Scalars['JSON'];
  links: PageHeroSkill2DescriptionLinks;
};

export type PageHeroSkill2DescriptionAssets = {
  __typename?: 'PageHeroSkill2DescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageHeroSkill2DescriptionEntries = {
  __typename?: 'PageHeroSkill2DescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageHeroSkill2DescriptionLinks = {
  __typename?: 'PageHeroSkill2DescriptionLinks';
  assets: PageHeroSkill2DescriptionAssets;
  entries: PageHeroSkill2DescriptionEntries;
  resources: PageHeroSkill2DescriptionResources;
};

export type PageHeroSkill2DescriptionResources = {
  __typename?: 'PageHeroSkill2DescriptionResources';
  block: Array<PageHeroSkill2DescriptionResourcesBlock>;
  hyperlink: Array<PageHeroSkill2DescriptionResourcesHyperlink>;
  inline: Array<PageHeroSkill2DescriptionResourcesInline>;
};

export type PageHeroSkill2DescriptionResourcesBlock = ResourceLink & {
  __typename?: 'PageHeroSkill2DescriptionResourcesBlock';
  sys: ResourceSys;
};

export type PageHeroSkill2DescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'PageHeroSkill2DescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type PageHeroSkill2DescriptionResourcesInline = ResourceLink & {
  __typename?: 'PageHeroSkill2DescriptionResourcesInline';
  sys: ResourceSys;
};

export type PageHeroSkill3Description = {
  __typename?: 'PageHeroSkill3Description';
  json: Scalars['JSON'];
  links: PageHeroSkill3DescriptionLinks;
};

export type PageHeroSkill3DescriptionAssets = {
  __typename?: 'PageHeroSkill3DescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageHeroSkill3DescriptionEntries = {
  __typename?: 'PageHeroSkill3DescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageHeroSkill3DescriptionLinks = {
  __typename?: 'PageHeroSkill3DescriptionLinks';
  assets: PageHeroSkill3DescriptionAssets;
  entries: PageHeroSkill3DescriptionEntries;
  resources: PageHeroSkill3DescriptionResources;
};

export type PageHeroSkill3DescriptionResources = {
  __typename?: 'PageHeroSkill3DescriptionResources';
  block: Array<PageHeroSkill3DescriptionResourcesBlock>;
  hyperlink: Array<PageHeroSkill3DescriptionResourcesHyperlink>;
  inline: Array<PageHeroSkill3DescriptionResourcesInline>;
};

export type PageHeroSkill3DescriptionResourcesBlock = ResourceLink & {
  __typename?: 'PageHeroSkill3DescriptionResourcesBlock';
  sys: ResourceSys;
};

export type PageHeroSkill3DescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'PageHeroSkill3DescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type PageHeroSkill3DescriptionResourcesInline = ResourceLink & {
  __typename?: 'PageHeroSkill3DescriptionResourcesInline';
  sys: ResourceSys;
};

export type PageHeroSkill4Description = {
  __typename?: 'PageHeroSkill4Description';
  json: Scalars['JSON'];
  links: PageHeroSkill4DescriptionLinks;
};

export type PageHeroSkill4DescriptionAssets = {
  __typename?: 'PageHeroSkill4DescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageHeroSkill4DescriptionEntries = {
  __typename?: 'PageHeroSkill4DescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageHeroSkill4DescriptionLinks = {
  __typename?: 'PageHeroSkill4DescriptionLinks';
  assets: PageHeroSkill4DescriptionAssets;
  entries: PageHeroSkill4DescriptionEntries;
  resources: PageHeroSkill4DescriptionResources;
};

export type PageHeroSkill4DescriptionResources = {
  __typename?: 'PageHeroSkill4DescriptionResources';
  block: Array<PageHeroSkill4DescriptionResourcesBlock>;
  hyperlink: Array<PageHeroSkill4DescriptionResourcesHyperlink>;
  inline: Array<PageHeroSkill4DescriptionResourcesInline>;
};

export type PageHeroSkill4DescriptionResourcesBlock = ResourceLink & {
  __typename?: 'PageHeroSkill4DescriptionResourcesBlock';
  sys: ResourceSys;
};

export type PageHeroSkill4DescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'PageHeroSkill4DescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type PageHeroSkill4DescriptionResourcesInline = ResourceLink & {
  __typename?: 'PageHeroSkill4DescriptionResourcesInline';
  sys: ResourceSys;
};

/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageLanding) */
export type PageLanding = Entry & _Node & {
  __typename?: 'PageLanding';
  _id: Scalars['ID'];
  contentfulMetadata: ContentfulMetadata;
  featuredHero?: Maybe<PageHero>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageLandingLinkingCollections>;
  seoFields?: Maybe<ComponentSeo>;
  sys: Sys;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageLanding) */
export type PageLandingFeaturedHeroArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageHeroFilter>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageLanding) */
export type PageLandingInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageLanding) */
export type PageLandingLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** To have an entry point for the app (e.g. Homepage) [See type definition](https://app.contentful.com/spaces/9md11hz3a4q5/content_types/pageLanding) */
export type PageLandingSeoFieldsArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ComponentSeoFilter>;
};

export type PageLandingCollection = {
  __typename?: 'PageLandingCollection';
  items: Array<Maybe<PageLanding>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageLandingFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageLandingFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredHero?: InputMaybe<CfPageHeroNestedFilter>;
  featuredHero_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seoFields?: InputMaybe<CfComponentSeoNestedFilter>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageLandingLinkingCollections = {
  __typename?: 'PageLandingLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLandingLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageLandingOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentAuthor?: Maybe<ComponentAuthor>;
  componentAuthorCollection?: Maybe<ComponentAuthorCollection>;
  componentRichImage?: Maybe<ComponentRichImage>;
  componentRichImageCollection?: Maybe<ComponentRichImageCollection>;
  componentSeo?: Maybe<ComponentSeo>;
  componentSeoCollection?: Maybe<ComponentSeoCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageHero?: Maybe<PageHero>;
  pageHeroCollection?: Maybe<PageHeroCollection>;
  pageLanding?: Maybe<PageLanding>;
  pageLandingCollection?: Maybe<PageLandingCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryComponentAuthorArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentAuthorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentAuthorFilter>;
};


export type QueryComponentRichImageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentRichImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentRichImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentRichImageFilter>;
};


export type QueryComponentSeoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentSeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentSeoFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryPageHeroArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageHeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageHeroFilter>;
};


export type QueryPageLandingArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageLandingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLandingOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageLandingFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  urn: Scalars['String'];
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type _Node = {
  _id: Scalars['ID'];
};

export type CfComponentAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentAuthorNestedFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfComponentSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfComponentSeoNestedFilter>>>;
  canonicalUrl?: InputMaybe<Scalars['String']>;
  canonicalUrl_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_exists?: InputMaybe<Scalars['Boolean']>;
  canonicalUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  canonicalUrl_not?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_contains?: InputMaybe<Scalars['String']>;
  canonicalUrl_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nofollow?: InputMaybe<Scalars['Boolean']>;
  nofollow_exists?: InputMaybe<Scalars['Boolean']>;
  nofollow_not?: InputMaybe<Scalars['Boolean']>;
  noindex?: InputMaybe<Scalars['Boolean']>;
  noindex_exists?: InputMaybe<Scalars['Boolean']>;
  noindex_not?: InputMaybe<Scalars['Boolean']>;
  pageDescription?: InputMaybe<Scalars['String']>;
  pageDescription_contains?: InputMaybe<Scalars['String']>;
  pageDescription_exists?: InputMaybe<Scalars['Boolean']>;
  pageDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageDescription_not?: InputMaybe<Scalars['String']>;
  pageDescription_not_contains?: InputMaybe<Scalars['String']>;
  pageDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle?: InputMaybe<Scalars['String']>;
  pageTitle_contains?: InputMaybe<Scalars['String']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shareImagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageHeroNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageHeroNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageHeroNestedFilter>>>;
  agi?: InputMaybe<Scalars['Int']>;
  agiGain?: InputMaybe<Scalars['Float']>;
  agiGain_exists?: InputMaybe<Scalars['Boolean']>;
  agiGain_gt?: InputMaybe<Scalars['Float']>;
  agiGain_gte?: InputMaybe<Scalars['Float']>;
  agiGain_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  agiGain_lt?: InputMaybe<Scalars['Float']>;
  agiGain_lte?: InputMaybe<Scalars['Float']>;
  agiGain_not?: InputMaybe<Scalars['Float']>;
  agiGain_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  agi_exists?: InputMaybe<Scalars['Boolean']>;
  agi_gt?: InputMaybe<Scalars['Int']>;
  agi_gte?: InputMaybe<Scalars['Int']>;
  agi_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  agi_lt?: InputMaybe<Scalars['Int']>;
  agi_lte?: InputMaybe<Scalars['Int']>;
  agi_not?: InputMaybe<Scalars['Int']>;
  agi_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  attribute?: InputMaybe<Scalars['String']>;
  attribute_contains?: InputMaybe<Scalars['String']>;
  attribute_exists?: InputMaybe<Scalars['Boolean']>;
  attribute_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  attribute_not?: InputMaybe<Scalars['String']>;
  attribute_not_contains?: InputMaybe<Scalars['String']>;
  attribute_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  author_exists?: InputMaybe<Scalars['Boolean']>;
  avatar_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  int?: InputMaybe<Scalars['Int']>;
  intGain?: InputMaybe<Scalars['Float']>;
  intGain_exists?: InputMaybe<Scalars['Boolean']>;
  intGain_gt?: InputMaybe<Scalars['Float']>;
  intGain_gte?: InputMaybe<Scalars['Float']>;
  intGain_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  intGain_lt?: InputMaybe<Scalars['Float']>;
  intGain_lte?: InputMaybe<Scalars['Float']>;
  intGain_not?: InputMaybe<Scalars['Float']>;
  intGain_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  int_exists?: InputMaybe<Scalars['Boolean']>;
  int_gt?: InputMaybe<Scalars['Int']>;
  int_gte?: InputMaybe<Scalars['Int']>;
  int_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  int_lt?: InputMaybe<Scalars['Int']>;
  int_lte?: InputMaybe<Scalars['Int']>;
  int_not?: InputMaybe<Scalars['Int']>;
  int_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedDate?: InputMaybe<Scalars['DateTime']>;
  publishedDate_exists?: InputMaybe<Scalars['Boolean']>;
  publishedDate_gt?: InputMaybe<Scalars['DateTime']>;
  publishedDate_gte?: InputMaybe<Scalars['DateTime']>;
  publishedDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedDate_lt?: InputMaybe<Scalars['DateTime']>;
  publishedDate_lte?: InputMaybe<Scalars['DateTime']>;
  publishedDate_not?: InputMaybe<Scalars['DateTime']>;
  publishedDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  range?: InputMaybe<Scalars['Int']>;
  range_exists?: InputMaybe<Scalars['Boolean']>;
  range_gt?: InputMaybe<Scalars['Int']>;
  range_gte?: InputMaybe<Scalars['Int']>;
  range_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  range_lt?: InputMaybe<Scalars['Int']>;
  range_lte?: InputMaybe<Scalars['Int']>;
  range_not?: InputMaybe<Scalars['Int']>;
  range_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  seoFields_exists?: InputMaybe<Scalars['Boolean']>;
  skill1Description_contains?: InputMaybe<Scalars['String']>;
  skill1Description_exists?: InputMaybe<Scalars['Boolean']>;
  skill1Description_not_contains?: InputMaybe<Scalars['String']>;
  skill1Image_exists?: InputMaybe<Scalars['Boolean']>;
  skill2Description_contains?: InputMaybe<Scalars['String']>;
  skill2Description_exists?: InputMaybe<Scalars['Boolean']>;
  skill2Description_not_contains?: InputMaybe<Scalars['String']>;
  skill2Image_exists?: InputMaybe<Scalars['Boolean']>;
  skill3Description_contains?: InputMaybe<Scalars['String']>;
  skill3Description_exists?: InputMaybe<Scalars['Boolean']>;
  skill3Description_not_contains?: InputMaybe<Scalars['String']>;
  skill3Image_exists?: InputMaybe<Scalars['Boolean']>;
  skill4Description_contains?: InputMaybe<Scalars['String']>;
  skill4Description_exists?: InputMaybe<Scalars['Boolean']>;
  skill4Description_not_contains?: InputMaybe<Scalars['String']>;
  skill4Image_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  speed?: InputMaybe<Scalars['Int']>;
  speed_exists?: InputMaybe<Scalars['Boolean']>;
  speed_gt?: InputMaybe<Scalars['Int']>;
  speed_gte?: InputMaybe<Scalars['Int']>;
  speed_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  speed_lt?: InputMaybe<Scalars['Int']>;
  speed_lte?: InputMaybe<Scalars['Int']>;
  speed_not?: InputMaybe<Scalars['Int']>;
  speed_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  str?: InputMaybe<Scalars['Int']>;
  strGain?: InputMaybe<Scalars['Float']>;
  strGain_exists?: InputMaybe<Scalars['Boolean']>;
  strGain_gt?: InputMaybe<Scalars['Float']>;
  strGain_gte?: InputMaybe<Scalars['Float']>;
  strGain_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  strGain_lt?: InputMaybe<Scalars['Float']>;
  strGain_lte?: InputMaybe<Scalars['Float']>;
  strGain_not?: InputMaybe<Scalars['Float']>;
  strGain_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  str_exists?: InputMaybe<Scalars['Boolean']>;
  str_gt?: InputMaybe<Scalars['Int']>;
  str_gte?: InputMaybe<Scalars['Int']>;
  str_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  str_lt?: InputMaybe<Scalars['Int']>;
  str_lte?: InputMaybe<Scalars['Int']>;
  str_not?: InputMaybe<Scalars['Int']>;
  str_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AuthorFieldsFragment = { __typename: 'ComponentAuthor', name?: string | null, sys: { __typename?: 'Sys', id: string }, avatar?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null };

export type ImageFieldsFragment = { __typename: 'Asset', title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, contentType?: string | null, sys: { __typename?: 'Sys', id: string } };

export type ReferencePageHeroFieldsFragment = { __typename: 'PageHero', slug?: string | null, publishedDate?: any | null, name?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, author?: (
    { __typename?: 'ComponentAuthor' }
    & AuthorFieldsFragment
  ) | null, featuredImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null };

export type PageHeroFieldsFragment = { __typename: 'PageHero', internalName?: string | null, slug?: string | null, publishedDate?: any | null, name?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, seoFields?: (
    { __typename?: 'ComponentSeo' }
    & SeoFieldsFragment
  ) | null, author?: (
    { __typename?: 'ComponentAuthor' }
    & AuthorFieldsFragment
  ) | null, featuredImage?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, avatar?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, skill1Image?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, skill2Image?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, skill3Image?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, skill4Image?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null, skill1Description?: { __typename?: 'PageHeroSkill1Description', json: any, links: { __typename?: 'PageHeroSkill1DescriptionLinks', entries: { __typename?: 'PageHeroSkill1DescriptionEntries', block: Array<{ __typename?: 'ComponentAuthor' } | (
          { __typename?: 'ComponentRichImage' }
          & RichImageFieldsFragment
        ) | { __typename?: 'ComponentSeo' } | { __typename?: 'PageHero' } | { __typename?: 'PageLanding' } | null> } } } | null, skill2Description?: { __typename?: 'PageHeroSkill2Description', json: any, links: { __typename?: 'PageHeroSkill2DescriptionLinks', entries: { __typename?: 'PageHeroSkill2DescriptionEntries', block: Array<{ __typename?: 'ComponentAuthor' } | (
          { __typename?: 'ComponentRichImage' }
          & RichImageFieldsFragment
        ) | { __typename?: 'ComponentSeo' } | { __typename?: 'PageHero' } | { __typename?: 'PageLanding' } | null> } } } | null, skill3Description?: { __typename?: 'PageHeroSkill3Description', json: any, links: { __typename?: 'PageHeroSkill3DescriptionLinks', entries: { __typename?: 'PageHeroSkill3DescriptionEntries', block: Array<{ __typename?: 'ComponentAuthor' } | (
          { __typename?: 'ComponentRichImage' }
          & RichImageFieldsFragment
        ) | { __typename?: 'ComponentSeo' } | { __typename?: 'PageHero' } | { __typename?: 'PageLanding' } | null> } } } | null, skill4Description?: { __typename?: 'PageHeroSkill4Description', json: any, links: { __typename?: 'PageHeroSkill4DescriptionLinks', entries: { __typename?: 'PageHeroSkill4DescriptionEntries', block: Array<{ __typename?: 'ComponentAuthor' } | (
          { __typename?: 'ComponentRichImage' }
          & RichImageFieldsFragment
        ) | { __typename?: 'ComponentSeo' } | { __typename?: 'PageHero' } | { __typename?: 'PageLanding' } | null> } } } | null };

export type PageHeroQueryVariables = Exact<{
  slug: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageHeroQuery = { __typename?: 'Query', pageHeroCollection?: { __typename?: 'PageHeroCollection', items: Array<(
      { __typename?: 'PageHero' }
      & PageHeroFieldsFragment
    ) | null> } | null };

export type PageHeroCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<InputMaybe<PageHeroOrder>> | InputMaybe<PageHeroOrder>>;
  where?: InputMaybe<PageHeroFilter>;
}>;


export type PageHeroCollectionQuery = { __typename?: 'Query', pageHeroCollection?: { __typename?: 'PageHeroCollection', items: Array<(
      { __typename?: 'PageHero' }
      & PageHeroFieldsFragment
    ) | null> } | null };

export type PageLandingFieldsFragment = { __typename: 'PageLanding', internalName?: string | null, sys: { __typename?: 'Sys', id: string, spaceId: string }, seoFields?: (
    { __typename?: 'ComponentSeo' }
    & SeoFieldsFragment
  ) | null, featuredHero?: (
    { __typename?: 'PageHero' }
    & ReferencePageHeroFieldsFragment
  ) | null };

export type PageLandingQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageLandingQuery = { __typename?: 'Query', pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<(
      { __typename?: 'PageLanding' }
      & PageLandingFieldsFragment
    ) | null> } | null };

export type PageLandingCollectionQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type PageLandingCollectionQuery = { __typename?: 'Query', pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<(
      { __typename?: 'PageLanding' }
      & PageLandingFieldsFragment
    ) | null> } | null };

export type RichImageFieldsFragment = { __typename: 'ComponentRichImage', internalName?: string | null, caption?: string | null, fullWidth?: boolean | null, sys: { __typename?: 'Sys', id: string }, image?: (
    { __typename?: 'Asset' }
    & ImageFieldsFragment
  ) | null };

export type SeoFieldsFragment = { __typename: 'ComponentSeo', pageTitle?: string | null, pageDescription?: string | null, canonicalUrl?: string | null, nofollow?: boolean | null, noindex?: boolean | null, shareImagesCollection?: { __typename?: 'AssetCollection', items: Array<(
      { __typename?: 'Asset' }
      & ImageFieldsFragment
    ) | null> } | null };

export type SitemapPagesFieldsFragment = { __typename?: 'Query', pageHeroCollection?: { __typename?: 'PageHeroCollection', items: Array<{ __typename?: 'PageHero', slug?: string | null, sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null, pageLandingCollection?: { __typename?: 'PageLandingCollection', items: Array<{ __typename?: 'PageLanding', sys: { __typename?: 'Sys', publishedAt?: any | null } } | null> } | null };

export type SitemapPagesQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type SitemapPagesQuery = (
  { __typename?: 'Query' }
  & SitemapPagesFieldsFragment
);

export const ImageFieldsFragmentDoc = gql`
    fragment ImageFields on Asset {
  __typename
  sys {
    id
  }
  title
  description
  width
  height
  url
  contentType
}
    `;
export const SeoFieldsFragmentDoc = gql`
    fragment SeoFields on ComponentSeo {
  __typename
  pageTitle
  pageDescription
  canonicalUrl
  nofollow
  noindex
  shareImagesCollection(limit: 3, locale: $locale) {
    items {
      ...ImageFields
    }
  }
}
    `;
export const AuthorFieldsFragmentDoc = gql`
    fragment AuthorFields on ComponentAuthor {
  __typename
  sys {
    id
  }
  name
  avatar {
    ...ImageFields
  }
}
    `;
export const RichImageFieldsFragmentDoc = gql`
    fragment RichImageFields on ComponentRichImage {
  __typename
  internalName
  sys {
    id
  }
  image {
    ...ImageFields
  }
  caption
  fullWidth
}
    `;
export const PageHeroFieldsFragmentDoc = gql`
    fragment PageHeroFields on PageHero {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  seoFields {
    ...SeoFields
  }
  slug
  author {
    ...AuthorFields
  }
  publishedDate
  name
  description
  featuredImage {
    ...ImageFields
  }
  avatar {
    ...ImageFields
  }
  skill1Image {
    ...ImageFields
  }
  skill2Image {
    ...ImageFields
  }
  skill3Image {
    ...ImageFields
  }
  skill4Image {
    ...ImageFields
  }
  skill1Description {
    json
    links {
      entries {
        block {
          ...RichImageFields
        }
      }
    }
  }
  skill2Description {
    json
    links {
      entries {
        block {
          ...RichImageFields
        }
      }
    }
  }
  skill3Description {
    json
    links {
      entries {
        block {
          ...RichImageFields
        }
      }
    }
  }
  skill4Description {
    json
    links {
      entries {
        block {
          ...RichImageFields
        }
      }
    }
  }
}
    `;
export const ReferencePageHeroFieldsFragmentDoc = gql`
    fragment ReferencePageHeroFields on PageHero {
  __typename
  sys {
    id
    spaceId
  }
  slug
  author {
    ...AuthorFields
  }
  publishedDate
  name
  description
  featuredImage {
    ...ImageFields
  }
}
    `;
export const PageLandingFieldsFragmentDoc = gql`
    fragment PageLandingFields on PageLanding {
  __typename
  sys {
    id
    spaceId
  }
  internalName
  seoFields {
    ...SeoFields
  }
  featuredHero {
    ...ReferencePageHeroFields
  }
}
    `;
export const SitemapPagesFieldsFragmentDoc = gql`
    fragment sitemapPagesFields on Query {
  pageHeroCollection(limit: 100, locale: $locale) {
    items {
      slug
      sys {
        publishedAt
      }
    }
  }
  pageLandingCollection(limit: 1, locale: $locale) {
    items {
      sys {
        publishedAt
      }
    }
  }
}
    `;
export const PageHeroDocument = gql`
    query pageHero($slug: String!, $locale: String, $preview: Boolean) {
  pageHeroCollection(
    limit: 1
    where: {slug: $slug}
    locale: $locale
    preview: $preview
  ) {
    items {
      ...PageHeroFields
    }
  }
}
    ${PageHeroFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${AuthorFieldsFragmentDoc}
${RichImageFieldsFragmentDoc}`;
export const PageHeroCollectionDocument = gql`
    query pageHeroCollection($locale: String, $preview: Boolean, $limit: Int, $order: [PageHeroOrder], $where: PageHeroFilter) {
  pageHeroCollection(
    limit: $limit
    locale: $locale
    preview: $preview
    order: $order
    where: $where
  ) {
    items {
      ...PageHeroFields
    }
  }
}
    ${PageHeroFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${AuthorFieldsFragmentDoc}
${RichImageFieldsFragmentDoc}`;
export const PageLandingDocument = gql`
    query pageLanding($locale: String, $preview: Boolean) {
  pageLandingCollection(limit: 1, locale: $locale, preview: $preview) {
    items {
      ...PageLandingFields
    }
  }
}
    ${PageLandingFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${ReferencePageHeroFieldsFragmentDoc}
${AuthorFieldsFragmentDoc}`;
export const PageLandingCollectionDocument = gql`
    query pageLandingCollection($locale: String, $preview: Boolean) {
  pageLandingCollection(limit: 100, locale: $locale, preview: $preview) {
    items {
      ...PageLandingFields
    }
  }
}
    ${PageLandingFieldsFragmentDoc}
${SeoFieldsFragmentDoc}
${ImageFieldsFragmentDoc}
${ReferencePageHeroFieldsFragmentDoc}
${AuthorFieldsFragmentDoc}`;
export const SitemapPagesDocument = gql`
    query sitemapPages($locale: String!) {
  ...sitemapPagesFields
}
    ${SitemapPagesFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    pageHero(variables: PageHeroQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageHeroQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageHeroQuery>(PageHeroDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageHero', 'query');
    },
    pageHeroCollection(variables?: PageHeroCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageHeroCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageHeroCollectionQuery>(PageHeroCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageHeroCollection', 'query');
    },
    pageLanding(variables?: PageLandingQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageLandingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageLandingQuery>(PageLandingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageLanding', 'query');
    },
    pageLandingCollection(variables?: PageLandingCollectionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageLandingCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageLandingCollectionQuery>(PageLandingCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'pageLandingCollection', 'query');
    },
    sitemapPages(variables: SitemapPagesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SitemapPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SitemapPagesQuery>(SitemapPagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sitemapPages', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;