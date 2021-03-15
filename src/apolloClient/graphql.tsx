import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
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
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The Circle scalar type represents a circle, defined by the coordinates of its center and a radius. The Circle type is used to represent a searchable area together with the '_within_circle' filter. */
  Circle: any;
  /** The Rectangle scalar type represents a rectangle, defined by the coordinates of its top left and bottom right corners. The Rectangle type is used to represent a searchable area together with the '_within_rectangle' filter. */
  Rectangle: any;
};

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blogArticle?: Maybe<BlogArticle>;
  blogArticleCollection?: Maybe<BlogArticleCollection>;
  talentProfile?: Maybe<TalentProfile>;
  talentProfileCollection?: Maybe<TalentProfileCollection>;
  customPage?: Maybe<CustomPage>;
  customPageCollection?: Maybe<CustomPageCollection>;
  video?: Maybe<Video>;
  videoCollection?: Maybe<VideoCollection>;
  event?: Maybe<Event>;
  eventCollection?: Maybe<EventCollection>;
  image?: Maybe<Image>;
  imageCollection?: Maybe<ImageCollection>;
  multiImage?: Maybe<MultiImage>;
  multiImageCollection?: Maybe<MultiImageCollection>;
  article?: Maybe<Article>;
  articleCollection?: Maybe<ArticleCollection>;
  artCompetitonEntry?: Maybe<ArtCompetitonEntry>;
  artCompetitonEntryCollection?: Maybe<ArtCompetitonEntryCollection>;
  fiftyTwoGalleryEntry?: Maybe<FiftyTwoGalleryEntry>;
  fiftyTwoGalleryEntryCollection?: Maybe<FiftyTwoGalleryEntryCollection>;
  ctaEntry?: Maybe<CtaEntry>;
  ctaEntryCollection?: Maybe<CtaEntryCollection>;
  sponsor?: Maybe<Sponsor>;
  sponsorCollection?: Maybe<SponsorCollection>;
  venue?: Maybe<Venue>;
  venueCollection?: Maybe<VenueCollection>;
  eventOrganiser?: Maybe<EventOrganiser>;
  eventOrganiserCollection?: Maybe<EventOrganiserCollection>;
  genericContentPage?: Maybe<GenericContentPage>;
  genericContentPageCollection?: Maybe<GenericContentPageCollection>;
  announcement?: Maybe<Announcement>;
  announcementCollection?: Maybe<AnnouncementCollection>;
  amenity?: Maybe<Amenity>;
  amenityCollection?: Maybe<AmenityCollection>;
  sponsorSection?: Maybe<SponsorSection>;
  sponsorSectionCollection?: Maybe<SponsorSectionCollection>;
  communityPartner?: Maybe<CommunityPartner>;
  communityPartnerCollection?: Maybe<CommunityPartnerCollection>;
  paradeGroup2019?: Maybe<ParadeGroup2019>;
  paradeGroup2019Collection?: Maybe<ParadeGroup2019Collection>;
  paradeGroup?: Maybe<ParadeGroup>;
  paradeGroupCollection?: Maybe<ParadeGroupCollection>;
  featuredEvents?: Maybe<FeaturedEvents>;
  featuredEventsCollection?: Maybe<FeaturedEventsCollection>;
  author?: Maybe<Author>;
  authorCollection?: Maybe<AuthorCollection>;
  button?: Maybe<Button>;
  buttonCollection?: Maybe<ButtonCollection>;
  featuredArticle?: Maybe<FeaturedArticle>;
  featuredArticleCollection?: Maybe<FeaturedArticleCollection>;
  performance?: Maybe<Performance>;
  performanceCollection?: Maybe<PerformanceCollection>;
  headerBanner?: Maybe<HeaderBanner>;
  headerBannerCollection?: Maybe<HeaderBannerCollection>;
  wO1KrKenNQcWmSqaeysWo?: Maybe<Wo1KrKenNQcWmSqaeysWo>;
  wO1KrKenNQcWmSqaeysWoCollection?: Maybe<Wo1KrKenNQcWmSqaeysWoCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
};


export type QueryBlogArticleArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryBlogArticleCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<BlogArticleFilter>;
  order?: Maybe<Array<Maybe<BlogArticleOrder>>>;
};


export type QueryTalentProfileArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryTalentProfileCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<TalentProfileFilter>;
  order?: Maybe<Array<Maybe<TalentProfileOrder>>>;
};


export type QueryCustomPageArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCustomPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CustomPageFilter>;
  order?: Maybe<Array<Maybe<CustomPageOrder>>>;
};


export type QueryVideoArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryVideoCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<VideoFilter>;
  order?: Maybe<Array<Maybe<VideoOrder>>>;
};


export type QueryEventArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryEventCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<EventFilter>;
  order?: Maybe<Array<Maybe<EventOrder>>>;
};


export type QueryImageArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryImageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ImageFilter>;
  order?: Maybe<Array<Maybe<ImageOrder>>>;
};


export type QueryMultiImageArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryMultiImageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<MultiImageFilter>;
  order?: Maybe<Array<Maybe<MultiImageOrder>>>;
};


export type QueryArticleArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryArticleCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ArticleFilter>;
  order?: Maybe<Array<Maybe<ArticleOrder>>>;
};


export type QueryArtCompetitonEntryArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryArtCompetitonEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ArtCompetitonEntryFilter>;
  order?: Maybe<Array<Maybe<ArtCompetitonEntryOrder>>>;
};


export type QueryFiftyTwoGalleryEntryArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryFiftyTwoGalleryEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<FiftyTwoGalleryEntryFilter>;
  order?: Maybe<Array<Maybe<FiftyTwoGalleryEntryOrder>>>;
};


export type QueryCtaEntryArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCtaEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CtaEntryFilter>;
  order?: Maybe<Array<Maybe<CtaEntryOrder>>>;
};


export type QuerySponsorArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySponsorCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SponsorFilter>;
  order?: Maybe<Array<Maybe<SponsorOrder>>>;
};


export type QueryVenueArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryVenueCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<VenueFilter>;
  order?: Maybe<Array<Maybe<VenueOrder>>>;
};


export type QueryEventOrganiserArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryEventOrganiserCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<EventOrganiserFilter>;
  order?: Maybe<Array<Maybe<EventOrganiserOrder>>>;
};


export type QueryGenericContentPageArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryGenericContentPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<GenericContentPageFilter>;
  order?: Maybe<Array<Maybe<GenericContentPageOrder>>>;
};


export type QueryAnnouncementArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAnnouncementCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AnnouncementFilter>;
  order?: Maybe<Array<Maybe<AnnouncementOrder>>>;
};


export type QueryAmenityArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAmenityCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AmenityFilter>;
  order?: Maybe<Array<Maybe<AmenityOrder>>>;
};


export type QuerySponsorSectionArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySponsorSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SponsorSectionFilter>;
  order?: Maybe<Array<Maybe<SponsorSectionOrder>>>;
};


export type QueryCommunityPartnerArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCommunityPartnerCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<CommunityPartnerFilter>;
  order?: Maybe<Array<Maybe<CommunityPartnerOrder>>>;
};


export type QueryParadeGroup2019Args = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryParadeGroup2019CollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ParadeGroup2019Filter>;
  order?: Maybe<Array<Maybe<ParadeGroup2019Order>>>;
};


export type QueryParadeGroupArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryParadeGroupCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ParadeGroupFilter>;
  order?: Maybe<Array<Maybe<ParadeGroupOrder>>>;
};


export type QueryFeaturedEventsArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryFeaturedEventsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<FeaturedEventsFilter>;
  order?: Maybe<Array<Maybe<FeaturedEventsOrder>>>;
};


export type QueryAuthorArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryAuthorCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AuthorFilter>;
  order?: Maybe<Array<Maybe<AuthorOrder>>>;
};


export type QueryButtonArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryButtonCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ButtonFilter>;
  order?: Maybe<Array<Maybe<ButtonOrder>>>;
};


export type QueryFeaturedArticleArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryFeaturedArticleCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<FeaturedArticleFilter>;
  order?: Maybe<Array<Maybe<FeaturedArticleOrder>>>;
};


export type QueryPerformanceArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryPerformanceCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PerformanceFilter>;
  order?: Maybe<Array<Maybe<PerformanceOrder>>>;
};


export type QueryHeaderBannerArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryHeaderBannerCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<HeaderBannerFilter>;
  order?: Maybe<Array<Maybe<HeaderBannerOrder>>>;
};


export type QueryWo1KrKenNQcWmSqaeysWoArgs = {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryWo1KrKenNQcWmSqaeysWoCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<Wo1KrKenNQcWmSqaeysWoFilter>;
  order?: Maybe<Array<Maybe<Wo1KrKenNQcWmSqaeysWoOrder>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Sys = {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
};


export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
};



export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES'
}


export enum ImageFormat {
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

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  blogArticleCollection?: Maybe<BlogArticleCollection>;
  customPageCollection?: Maybe<CustomPageCollection>;
  videoCollection?: Maybe<VideoCollection>;
  eventCollection?: Maybe<EventCollection>;
  imageCollection?: Maybe<ImageCollection>;
  articleCollection?: Maybe<ArticleCollection>;
  artCompetitonEntryCollection?: Maybe<ArtCompetitonEntryCollection>;
  sponsorCollection?: Maybe<SponsorCollection>;
  genericContentPageCollection?: Maybe<GenericContentPageCollection>;
  announcementCollection?: Maybe<AnnouncementCollection>;
  communityPartnerCollection?: Maybe<CommunityPartnerCollection>;
  paradeGroupCollection?: Maybe<ParadeGroupCollection>;
  authorCollection?: Maybe<AuthorCollection>;
  headerBannerCollection?: Maybe<HeaderBannerCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsBlogArticleCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsCustomPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsVideoCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsEventCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsImageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsArticleCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsArtCompetitonEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsSponsorCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsGenericContentPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsAnnouncementCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsCommunityPartnerCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsParadeGroupCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsAuthorCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AssetLinkingCollectionsHeaderBannerCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
};

export type Entry = {
  sys: Sys;
};

export type BlogArticleCollection = {
  __typename?: 'BlogArticleCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<BlogArticle>>;
};

/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/blogArticle) */
export type BlogArticle = Entry & {
  __typename?: 'BlogArticle';
  sys: Sys;
  linkedFrom?: Maybe<BlogArticleLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  hero?: Maybe<Asset>;
  category?: Maybe<Scalars['String']>;
  content?: Maybe<BlogArticleContent>;
  author?: Maybe<TalentProfile>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/blogArticle) */
export type BlogArticleLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/blogArticle) */
export type BlogArticleTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/blogArticle) */
export type BlogArticleHeroArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/blogArticle) */
export type BlogArticleCategoryArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/blogArticle) */
export type BlogArticleContentArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/blogArticle) */
export type BlogArticleAuthorArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type BlogArticleLinkingCollections = {
  __typename?: 'BlogArticleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BlogArticleLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type BlogArticleContent = {
  __typename?: 'BlogArticleContent';
  json: Scalars['JSON'];
  links: BlogArticleContentLinks;
};


export type BlogArticleContentLinks = {
  __typename?: 'BlogArticleContentLinks';
  entries: BlogArticleContentEntries;
  assets: BlogArticleContentAssets;
};

export type BlogArticleContentEntries = {
  __typename?: 'BlogArticleContentEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type BlogArticleContentAssets = {
  __typename?: 'BlogArticleContentAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

/** Enter in Talent information which can be used as reference for the Art Competition or Talent Agency [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/talentProfile) */
export type TalentProfile = Entry & {
  __typename?: 'TalentProfile';
  sys: Sys;
  linkedFrom?: Maybe<TalentProfileLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  bio?: Maybe<TalentProfileBio>;
  website?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
};


/** Enter in Talent information which can be used as reference for the Art Competition or Talent Agency [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/talentProfile) */
export type TalentProfileLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Enter in Talent information which can be used as reference for the Art Competition or Talent Agency [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/talentProfile) */
export type TalentProfileNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Enter in Talent information which can be used as reference for the Art Competition or Talent Agency [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/talentProfile) */
export type TalentProfileBioArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Enter in Talent information which can be used as reference for the Art Competition or Talent Agency [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/talentProfile) */
export type TalentProfileWebsiteArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Enter in Talent information which can be used as reference for the Art Competition or Talent Agency [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/talentProfile) */
export type TalentProfileInstagramArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Enter in Talent information which can be used as reference for the Art Competition or Talent Agency [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/talentProfile) */
export type TalentProfileTwitterArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Enter in Talent information which can be used as reference for the Art Competition or Talent Agency [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/talentProfile) */
export type TalentProfileEmailArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Enter in Talent information which can be used as reference for the Art Competition or Talent Agency [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/talentProfile) */
export type TalentProfileFacebookArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type TalentProfileLinkingCollections = {
  __typename?: 'TalentProfileLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  blogArticleCollection?: Maybe<BlogArticleCollection>;
  fiftyTwoGalleryEntryCollection?: Maybe<FiftyTwoGalleryEntryCollection>;
};


export type TalentProfileLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type TalentProfileLinkingCollectionsBlogArticleCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type TalentProfileLinkingCollectionsFiftyTwoGalleryEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FiftyTwoGalleryEntryCollection = {
  __typename?: 'FiftyTwoGalleryEntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<FiftyTwoGalleryEntry>>;
};

/** This is a reference to bring artist and artwork together to display on the website [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/fiftyTwoGalleryEntry) */
export type FiftyTwoGalleryEntry = Entry & {
  __typename?: 'FiftyTwoGalleryEntry';
  sys: Sys;
  linkedFrom?: Maybe<FiftyTwoGalleryEntryLinkingCollections>;
  entryName?: Maybe<Scalars['String']>;
  artwork?: Maybe<ArtCompetitonEntry>;
  artist?: Maybe<TalentProfile>;
};


/** This is a reference to bring artist and artwork together to display on the website [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/fiftyTwoGalleryEntry) */
export type FiftyTwoGalleryEntryLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** This is a reference to bring artist and artwork together to display on the website [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/fiftyTwoGalleryEntry) */
export type FiftyTwoGalleryEntryEntryNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** This is a reference to bring artist and artwork together to display on the website [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/fiftyTwoGalleryEntry) */
export type FiftyTwoGalleryEntryArtworkArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** This is a reference to bring artist and artwork together to display on the website [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/fiftyTwoGalleryEntry) */
export type FiftyTwoGalleryEntryArtistArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FiftyTwoGalleryEntryLinkingCollections = {
  __typename?: 'FiftyTwoGalleryEntryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FiftyTwoGalleryEntryLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** This is used to input the art and info of the art for the yearly art competition [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/artCompetitonEntry) */
export type ArtCompetitonEntry = Entry & {
  __typename?: 'ArtCompetitonEntry';
  sys: Sys;
  linkedFrom?: Maybe<ArtCompetitonEntryLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  category?: Maybe<Scalars['String']>;
  info?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
  description?: Maybe<ArtCompetitonEntryDescription>;
  guidePrice?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['Boolean']>;
};


/** This is used to input the art and info of the art for the yearly art competition [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/artCompetitonEntry) */
export type ArtCompetitonEntryLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** This is used to input the art and info of the art for the yearly art competition [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/artCompetitonEntry) */
export type ArtCompetitonEntryTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** This is used to input the art and info of the art for the yearly art competition [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/artCompetitonEntry) */
export type ArtCompetitonEntryImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** This is used to input the art and info of the art for the yearly art competition [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/artCompetitonEntry) */
export type ArtCompetitonEntryCategoryArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** This is used to input the art and info of the art for the yearly art competition [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/artCompetitonEntry) */
export type ArtCompetitonEntryInfoArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** This is used to input the art and info of the art for the yearly art competition [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/artCompetitonEntry) */
export type ArtCompetitonEntryYearArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** This is used to input the art and info of the art for the yearly art competition [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/artCompetitonEntry) */
export type ArtCompetitonEntryDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** This is used to input the art and info of the art for the yearly art competition [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/artCompetitonEntry) */
export type ArtCompetitonEntryGuidePriceArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** This is used to input the art and info of the art for the yearly art competition [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/artCompetitonEntry) */
export type ArtCompetitonEntrySoldArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ArtCompetitonEntryLinkingCollections = {
  __typename?: 'ArtCompetitonEntryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  fiftyTwoGalleryEntryCollection?: Maybe<FiftyTwoGalleryEntryCollection>;
};


export type ArtCompetitonEntryLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ArtCompetitonEntryLinkingCollectionsFiftyTwoGalleryEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ArtCompetitonEntryDescription = {
  __typename?: 'ArtCompetitonEntryDescription';
  json: Scalars['JSON'];
  links: ArtCompetitonEntryDescriptionLinks;
};

export type ArtCompetitonEntryDescriptionLinks = {
  __typename?: 'ArtCompetitonEntryDescriptionLinks';
  entries: ArtCompetitonEntryDescriptionEntries;
  assets: ArtCompetitonEntryDescriptionAssets;
};

export type ArtCompetitonEntryDescriptionEntries = {
  __typename?: 'ArtCompetitonEntryDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type ArtCompetitonEntryDescriptionAssets = {
  __typename?: 'ArtCompetitonEntryDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type TalentProfileBio = {
  __typename?: 'TalentProfileBio';
  json: Scalars['JSON'];
  links: TalentProfileBioLinks;
};

export type TalentProfileBioLinks = {
  __typename?: 'TalentProfileBioLinks';
  entries: TalentProfileBioEntries;
  assets: TalentProfileBioAssets;
};

export type TalentProfileBioEntries = {
  __typename?: 'TalentProfileBioEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type TalentProfileBioAssets = {
  __typename?: 'TalentProfileBioAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type CustomPageCollection = {
  __typename?: 'CustomPageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CustomPage>>;
};

/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/customPage) */
export type CustomPage = Entry & {
  __typename?: 'CustomPage';
  sys: Sys;
  linkedFrom?: Maybe<CustomPageLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<Asset>;
  bodyText?: Maybe<CustomPageBodyText>;
  cta?: Maybe<CtaEntry>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/customPage) */
export type CustomPageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/customPage) */
export type CustomPageTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/customPage) */
export type CustomPageSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/customPage) */
export type CustomPageBannerImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/customPage) */
export type CustomPageBodyTextArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/customPage) */
export type CustomPageCtaArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type CustomPageLinkingCollections = {
  __typename?: 'CustomPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CustomPageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type CustomPageBodyText = {
  __typename?: 'CustomPageBodyText';
  json: Scalars['JSON'];
  links: CustomPageBodyTextLinks;
};

export type CustomPageBodyTextLinks = {
  __typename?: 'CustomPageBodyTextLinks';
  entries: CustomPageBodyTextEntries;
  assets: CustomPageBodyTextAssets;
};

export type CustomPageBodyTextEntries = {
  __typename?: 'CustomPageBodyTextEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type CustomPageBodyTextAssets = {
  __typename?: 'CustomPageBodyTextAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

/** Use this to create a CTA and then add to generic content pages or custom built pages [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/ctaEntry) */
export type CtaEntry = Entry & {
  __typename?: 'CtaEntry';
  sys: Sys;
  linkedFrom?: Maybe<CtaEntryLinkingCollections>;
  ctaTitle?: Maybe<Scalars['String']>;
  bodyText?: Maybe<Scalars['String']>;
  buttonUrl?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
};


/** Use this to create a CTA and then add to generic content pages or custom built pages [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/ctaEntry) */
export type CtaEntryLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Use this to create a CTA and then add to generic content pages or custom built pages [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/ctaEntry) */
export type CtaEntryCtaTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this to create a CTA and then add to generic content pages or custom built pages [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/ctaEntry) */
export type CtaEntryBodyTextArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this to create a CTA and then add to generic content pages or custom built pages [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/ctaEntry) */
export type CtaEntryButtonUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this to create a CTA and then add to generic content pages or custom built pages [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/ctaEntry) */
export type CtaEntryButtonTextArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type CtaEntryLinkingCollections = {
  __typename?: 'CtaEntryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  customPageCollection?: Maybe<CustomPageCollection>;
};


export type CtaEntryLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type CtaEntryLinkingCollectionsCustomPageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type VideoCollection = {
  __typename?: 'VideoCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Video>>;
};

/** Youtube video that can be embedded in rich text [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/video) */
export type Video = Entry & {
  __typename?: 'Video';
  sys: Sys;
  linkedFrom?: Maybe<VideoLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  videoId?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Asset>;
  image?: Maybe<Image>;
};


/** Youtube video that can be embedded in rich text [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/video) */
export type VideoLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Youtube video that can be embedded in rich text [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/video) */
export type VideoTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Youtube video that can be embedded in rich text [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/video) */
export type VideoHostArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Youtube video that can be embedded in rich text [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/video) */
export type VideoVideoIdArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Youtube video that can be embedded in rich text [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/video) */
export type VideoCaptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Youtube video that can be embedded in rich text [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/video) */
export type VideoCoverImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Youtube video that can be embedded in rich text [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/video) */
export type VideoImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type VideoLinkingCollections = {
  __typename?: 'VideoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type VideoLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** These images are used in any galleries created. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/image) */
export type Image = Entry & {
  __typename?: 'Image';
  sys: Sys;
  linkedFrom?: Maybe<ImageLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  caption?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
};


/** These images are used in any galleries created. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/image) */
export type ImageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** These images are used in any galleries created. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/image) */
export type ImageNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** These images are used in any galleries created. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/image) */
export type ImageImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** These images are used in any galleries created. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/image) */
export type ImageCaptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** These images are used in any galleries created. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/image) */
export type ImageAltTextArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ImageLinkingCollections = {
  __typename?: 'ImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  videoCollection?: Maybe<VideoCollection>;
  multiImageCollection?: Maybe<MultiImageCollection>;
};


export type ImageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ImageLinkingCollectionsVideoCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ImageLinkingCollectionsMultiImageCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type MultiImageCollection = {
  __typename?: 'MultiImageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<MultiImage>>;
};

/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/multiImage) */
export type MultiImage = Entry & {
  __typename?: 'MultiImage';
  sys: Sys;
  linkedFrom?: Maybe<MultiImageLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  imagesCollection?: Maybe<MultiImageImagesCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/multiImage) */
export type MultiImageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/multiImage) */
export type MultiImageTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/multiImage) */
export type MultiImageImagesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type MultiImageLinkingCollections = {
  __typename?: 'MultiImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type MultiImageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type MultiImageImagesCollection = {
  __typename?: 'MultiImageImagesCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Image>>;
};

export type EventCollection = {
  __typename?: 'EventCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Event>>;
};

/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type Event = Entry & {
  __typename?: 'Event';
  sys: Sys;
  linkedFrom?: Maybe<EventLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  location2?: Maybe<Scalars['String']>;
  ondemand?: Maybe<Scalars['Boolean']>;
  eventCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventDescription?: Maybe<Scalars['String']>;
  lineUp?: Maybe<Scalars['String']>;
  ticketingUrl?: Maybe<Scalars['String']>;
  cta?: Maybe<Scalars['String']>;
  audience?: Maybe<Array<Maybe<Scalars['String']>>>;
  locationName?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  date?: Maybe<Scalars['JSON']>;
  cost?: Maybe<Scalars['String']>;
  eventPriceLow?: Maybe<Scalars['Float']>;
  eventPriceHigh?: Maybe<Scalars['Float']>;
  accessibilityInformation?: Maybe<Array<Maybe<Scalars['String']>>>;
  accessibilityDetails?: Maybe<Scalars['String']>;
  organiser?: Maybe<EventOrganiser>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  individualEventPicture?: Maybe<Asset>;
  eventsListPicture?: Maybe<Asset>;
  featuredEvent?: Maybe<Scalars['Boolean']>;
  sponsorSection?: Maybe<SponsorSection>;
  eventUrl?: Maybe<Scalars['String']>;
  performancesCollection?: Maybe<EventPerformancesCollection>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  accessibilityOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  venueDetails?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventLocation2Args = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventOndemandArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventEventCategoriesArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventEventDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventLineUpArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventTicketingUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventCtaArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventAudienceArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventLocationNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventLocationArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventDateArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventCostArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventEventPriceLowArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventEventPriceHighArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventAccessibilityInformationArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventAccessibilityDetailsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventOrganiserArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventEmailArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventPhoneArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventIndividualEventPictureArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventEventsListPictureArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventFeaturedEventArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventSponsorSectionArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventEventUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventPerformancesCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventAddressLine1Args = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventAddressLine2Args = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventCityArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventPostcodeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventAccessibilityOptionsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Use this for events that appear on 'Coming Out'. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/event) */
export type EventVenueDetailsArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type EventLinkingCollections = {
  __typename?: 'EventLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  featuredEventsCollection?: Maybe<FeaturedEventsCollection>;
};


export type EventLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type EventLinkingCollectionsFeaturedEventsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FeaturedEventsCollection = {
  __typename?: 'FeaturedEventsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<FeaturedEvents>>;
};

/** Ordered list of featured events [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/featuredEvents) */
export type FeaturedEvents = Entry & {
  __typename?: 'FeaturedEvents';
  sys: Sys;
  linkedFrom?: Maybe<FeaturedEventsLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  eventsCollection?: Maybe<FeaturedEventsEventsCollection>;
};


/** Ordered list of featured events [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/featuredEvents) */
export type FeaturedEventsLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Ordered list of featured events [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/featuredEvents) */
export type FeaturedEventsTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Ordered list of featured events [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/featuredEvents) */
export type FeaturedEventsEventsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FeaturedEventsLinkingCollections = {
  __typename?: 'FeaturedEventsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FeaturedEventsLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FeaturedEventsEventsCollection = {
  __typename?: 'FeaturedEventsEventsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Event>>;
};

export type Location = {
  __typename?: 'Location';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/eventOrganiser) */
export type EventOrganiser = Entry & {
  __typename?: 'EventOrganiser';
  sys: Sys;
  linkedFrom?: Maybe<EventOrganiserLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  facebookUrl?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/eventOrganiser) */
export type EventOrganiserLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/eventOrganiser) */
export type EventOrganiserNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/eventOrganiser) */
export type EventOrganiserEmailArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/eventOrganiser) */
export type EventOrganiserPhoneNumberArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/eventOrganiser) */
export type EventOrganiserWebsiteUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/eventOrganiser) */
export type EventOrganiserFacebookUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/eventOrganiser) */
export type EventOrganiserInstagramUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/eventOrganiser) */
export type EventOrganiserTwitterUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type EventOrganiserLinkingCollections = {
  __typename?: 'EventOrganiserLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  eventCollection?: Maybe<EventCollection>;
};


export type EventOrganiserLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type EventOrganiserLinkingCollectionsEventCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** To add a set of sponsors to an Event or a Generic Content Page. Use this. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/sponsorSection) */
export type SponsorSection = Entry & {
  __typename?: 'SponsorSection';
  sys: Sys;
  linkedFrom?: Maybe<SponsorSectionLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  sponsorsCollection?: Maybe<SponsorSectionSponsorsCollection>;
};


/** To add a set of sponsors to an Event or a Generic Content Page. Use this. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/sponsorSection) */
export type SponsorSectionLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** To add a set of sponsors to an Event or a Generic Content Page. Use this. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/sponsorSection) */
export type SponsorSectionNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** To add a set of sponsors to an Event or a Generic Content Page. Use this. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/sponsorSection) */
export type SponsorSectionDisplayNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** To add a set of sponsors to an Event or a Generic Content Page. Use this. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/sponsorSection) */
export type SponsorSectionSponsorsCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SponsorSectionLinkingCollections = {
  __typename?: 'SponsorSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  eventCollection?: Maybe<EventCollection>;
};


export type SponsorSectionLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SponsorSectionLinkingCollectionsEventCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SponsorSectionSponsorsCollection = {
  __typename?: 'SponsorSectionSponsorsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Sponsor>>;
};

/** List of sponsors for Pride [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/sponsor) */
export type Sponsor = Entry & {
  __typename?: 'Sponsor';
  sys: Sys;
  linkedFrom?: Maybe<SponsorLinkingCollections>;
  sponsorName?: Maybe<Scalars['String']>;
  sponsorLevel?: Maybe<Scalars['String']>;
  sponsorUrl?: Maybe<Scalars['String']>;
  sponsorLogo?: Maybe<Asset>;
  svgLogo?: Maybe<Asset>;
};


/** List of sponsors for Pride [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/sponsor) */
export type SponsorLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** List of sponsors for Pride [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/sponsor) */
export type SponsorSponsorNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** List of sponsors for Pride [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/sponsor) */
export type SponsorSponsorLevelArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** List of sponsors for Pride [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/sponsor) */
export type SponsorSponsorUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** List of sponsors for Pride [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/sponsor) */
export type SponsorSponsorLogoArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** List of sponsors for Pride [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/sponsor) */
export type SponsorSvgLogoArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SponsorLinkingCollections = {
  __typename?: 'SponsorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  sponsorSectionCollection?: Maybe<SponsorSectionCollection>;
};


export type SponsorLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type SponsorLinkingCollectionsSponsorSectionCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type SponsorSectionCollection = {
  __typename?: 'SponsorSectionCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<SponsorSection>>;
};

export type EventPerformancesCollection = {
  __typename?: 'EventPerformancesCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Performance>>;
};

/** List of Performances which will be under a particular event [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/performance) */
export type Performance = Entry & {
  __typename?: 'Performance';
  sys: Sys;
  linkedFrom?: Maybe<PerformanceLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['DateTime']>;
};


/** List of Performances which will be under a particular event [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/performance) */
export type PerformanceLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** List of Performances which will be under a particular event [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/performance) */
export type PerformanceTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** List of Performances which will be under a particular event [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/performance) */
export type PerformanceStartTimeArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type PerformanceLinkingCollections = {
  __typename?: 'PerformanceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  eventCollection?: Maybe<EventCollection>;
};


export type PerformanceLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type PerformanceLinkingCollectionsEventCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ImageCollection = {
  __typename?: 'ImageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Image>>;
};

export type ArticleCollection = {
  __typename?: 'ArticleCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Article>>;
};

/** This is used for any News or Views article that should appear on our blog. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/article) */
export type Article = Entry & {
  __typename?: 'Article';
  sys: Sys;
  linkedFrom?: Maybe<ArticleLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  headerImage?: Maybe<Asset>;
  featuredImage?: Maybe<Asset>;
  author?: Maybe<Author>;
  article?: Maybe<ArticleArticle>;
  category?: Maybe<Scalars['String']>;
  datePublished?: Maybe<Scalars['DateTime']>;
  readTime?: Maybe<Scalars['Int']>;
};


/** This is used for any News or Views article that should appear on our blog. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/article) */
export type ArticleLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** This is used for any News or Views article that should appear on our blog. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/article) */
export type ArticleTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** This is used for any News or Views article that should appear on our blog. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/article) */
export type ArticleSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** This is used for any News or Views article that should appear on our blog. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/article) */
export type ArticleHeaderImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** This is used for any News or Views article that should appear on our blog. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/article) */
export type ArticleFeaturedImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** This is used for any News or Views article that should appear on our blog. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/article) */
export type ArticleAuthorArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** This is used for any News or Views article that should appear on our blog. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/article) */
export type ArticleArticleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** This is used for any News or Views article that should appear on our blog. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/article) */
export type ArticleCategoryArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** This is used for any News or Views article that should appear on our blog. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/article) */
export type ArticleDatePublishedArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** This is used for any News or Views article that should appear on our blog. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/article) */
export type ArticleReadTimeArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ArticleLinkingCollections = {
  __typename?: 'ArticleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  featuredArticleCollection?: Maybe<FeaturedArticleCollection>;
};


export type ArticleLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type ArticleLinkingCollectionsFeaturedArticleCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FeaturedArticleCollection = {
  __typename?: 'FeaturedArticleCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<FeaturedArticle>>;
};

/** On the news page one article can be featured with a large image. Select that here. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/featuredArticle) */
export type FeaturedArticle = Entry & {
  __typename?: 'FeaturedArticle';
  sys: Sys;
  linkedFrom?: Maybe<FeaturedArticleLinkingCollections>;
  featuredArticle?: Maybe<Article>;
};


/** On the news page one article can be featured with a large image. Select that here. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/featuredArticle) */
export type FeaturedArticleLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** On the news page one article can be featured with a large image. Select that here. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/featuredArticle) */
export type FeaturedArticleFeaturedArticleArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type FeaturedArticleLinkingCollections = {
  __typename?: 'FeaturedArticleLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FeaturedArticleLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/author) */
export type Author = Entry & {
  __typename?: 'Author';
  sys: Sys;
  linkedFrom?: Maybe<AuthorLinkingCollections>;
  displayName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Asset>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/author) */
export type AuthorLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/author) */
export type AuthorDisplayNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/author) */
export type AuthorFirstNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/author) */
export type AuthorLastNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/author) */
export type AuthorJobTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/author) */
export type AuthorEmailArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/author) */
export type AuthorThumbnailArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AuthorLinkingCollections = {
  __typename?: 'AuthorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  articleCollection?: Maybe<ArticleCollection>;
};


export type AuthorLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


export type AuthorLinkingCollectionsArticleCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ArticleArticle = {
  __typename?: 'ArticleArticle';
  json: Scalars['JSON'];
  links: ArticleArticleLinks;
};

export type ArticleArticleLinks = {
  __typename?: 'ArticleArticleLinks';
  entries: ArticleArticleEntries;
  assets: ArticleArticleAssets;
};

export type ArticleArticleEntries = {
  __typename?: 'ArticleArticleEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type ArticleArticleAssets = {
  __typename?: 'ArticleArticleAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type ArtCompetitonEntryCollection = {
  __typename?: 'ArtCompetitonEntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ArtCompetitonEntry>>;
};

export type SponsorCollection = {
  __typename?: 'SponsorCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Sponsor>>;
};

export type GenericContentPageCollection = {
  __typename?: 'GenericContentPageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<GenericContentPage>>;
};

/** Used to generate basic content pages within the website. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/genericContentPage) */
export type GenericContentPage = Entry & {
  __typename?: 'GenericContentPage';
  sys: Sys;
  linkedFrom?: Maybe<GenericContentPageLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  bannerColor?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<Asset>;
  content?: Maybe<GenericContentPageContent>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaImage?: Maybe<Asset>;
};


/** Used to generate basic content pages within the website. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/genericContentPage) */
export type GenericContentPageLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Used to generate basic content pages within the website. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/genericContentPage) */
export type GenericContentPageTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Used to generate basic content pages within the website. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/genericContentPage) */
export type GenericContentPageSlugArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Used to generate basic content pages within the website. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/genericContentPage) */
export type GenericContentPageSubtitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Used to generate basic content pages within the website. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/genericContentPage) */
export type GenericContentPageBannerColorArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Used to generate basic content pages within the website. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/genericContentPage) */
export type GenericContentPageBannerImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Used to generate basic content pages within the website. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/genericContentPage) */
export type GenericContentPageContentArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Used to generate basic content pages within the website. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/genericContentPage) */
export type GenericContentPageMetaTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Used to generate basic content pages within the website. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/genericContentPage) */
export type GenericContentPageMetaDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Used to generate basic content pages within the website. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/genericContentPage) */
export type GenericContentPageMetaImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type GenericContentPageLinkingCollections = {
  __typename?: 'GenericContentPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type GenericContentPageLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type GenericContentPageContent = {
  __typename?: 'GenericContentPageContent';
  json: Scalars['JSON'];
  links: GenericContentPageContentLinks;
};

export type GenericContentPageContentLinks = {
  __typename?: 'GenericContentPageContentLinks';
  entries: GenericContentPageContentEntries;
  assets: GenericContentPageContentAssets;
};

export type GenericContentPageContentEntries = {
  __typename?: 'GenericContentPageContentEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
};

export type GenericContentPageContentAssets = {
  __typename?: 'GenericContentPageContentAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
};

export type AnnouncementCollection = {
  __typename?: 'AnnouncementCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Announcement>>;
};

/** An announcement that is featured on the homepage [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/announcement) */
export type Announcement = Entry & {
  __typename?: 'Announcement';
  sys: Sys;
  linkedFrom?: Maybe<AnnouncementLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  url?: Maybe<Scalars['String']>;
};


/** An announcement that is featured on the homepage [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/announcement) */
export type AnnouncementLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** An announcement that is featured on the homepage [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/announcement) */
export type AnnouncementTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** An announcement that is featured on the homepage [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/announcement) */
export type AnnouncementImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** An announcement that is featured on the homepage [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/announcement) */
export type AnnouncementUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type AnnouncementLinkingCollections = {
  __typename?: 'AnnouncementLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AnnouncementLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type CommunityPartnerCollection = {
  __typename?: 'CommunityPartnerCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CommunityPartner>>;
};

/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartner = Entry & {
  __typename?: 'CommunityPartner';
  sys: Sys;
  linkedFrom?: Maybe<CommunityPartnerLinkingCollections>;
  venueName?: Maybe<Scalars['String']>;
  category?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  facebookUrl?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<Asset>;
  location?: Maybe<Location>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  accessibilityDetails?: Maybe<Array<Maybe<Scalars['String']>>>;
  genderNeutralToilets?: Maybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerVenueNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerCategoryArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerWebsiteUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerFacebookUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerTwitterUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerInstagramUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerFeaturedImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerLocationArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerAddressLine1Args = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerAddressLine2Args = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerCityArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerPostcodeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerAccessibilityDetailsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/communityPartner) */
export type CommunityPartnerGenderNeutralToiletsArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type CommunityPartnerLinkingCollections = {
  __typename?: 'CommunityPartnerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CommunityPartnerLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ParadeGroupCollection = {
  __typename?: 'ParadeGroupCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ParadeGroup>>;
};

/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup) */
export type ParadeGroup = Entry & {
  __typename?: 'ParadeGroup';
  sys: Sys;
  linkedFrom?: Maybe<ParadeGroupLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  category?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<Asset>;
  websiteUrl?: Maybe<Scalars['String']>;
  facebookUrl?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup) */
export type ParadeGroupLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup) */
export type ParadeGroupNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup) */
export type ParadeGroupCategoryArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup) */
export type ParadeGroupDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup) */
export type ParadeGroupFeaturedImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup) */
export type ParadeGroupWebsiteUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup) */
export type ParadeGroupFacebookUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup) */
export type ParadeGroupTwitterUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup) */
export type ParadeGroupInstagramUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ParadeGroupLinkingCollections = {
  __typename?: 'ParadeGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ParadeGroupLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AuthorCollection = {
  __typename?: 'AuthorCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Author>>;
};

export type HeaderBannerCollection = {
  __typename?: 'HeaderBannerCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<HeaderBanner>>;
};

/** Header of the home screen. Please create only one Header Banner item. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/headerBanner) */
export type HeaderBanner = Entry & {
  __typename?: 'HeaderBanner';
  sys: Sys;
  linkedFrom?: Maybe<HeaderBannerLinkingCollections>;
  title?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  headingLine2?: Maybe<Scalars['String']>;
  subHeading?: Maybe<Scalars['String']>;
  heroImage?: Maybe<Asset>;
  backgroundColour?: Maybe<Scalars['String']>;
};


/** Header of the home screen. Please create only one Header Banner item. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/headerBanner) */
export type HeaderBannerLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Header of the home screen. Please create only one Header Banner item. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/headerBanner) */
export type HeaderBannerTitleArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Header of the home screen. Please create only one Header Banner item. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/headerBanner) */
export type HeaderBannerHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Header of the home screen. Please create only one Header Banner item. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/headerBanner) */
export type HeaderBannerHeadingLine2Args = {
  locale?: Maybe<Scalars['String']>;
};


/** Header of the home screen. Please create only one Header Banner item. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/headerBanner) */
export type HeaderBannerSubHeadingArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Header of the home screen. Please create only one Header Banner item. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/headerBanner) */
export type HeaderBannerHeroImageArgs = {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};


/** Header of the home screen. Please create only one Header Banner item. [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/headerBanner) */
export type HeaderBannerBackgroundColourArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type HeaderBannerLinkingCollections = {
  __typename?: 'HeaderBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type HeaderBannerLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type SysFilter = {
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion?: Maybe<Scalars['Float']>;
  publishedVersion_not?: Maybe<Scalars['Float']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_gt?: Maybe<Scalars['Float']>;
  publishedVersion_gte?: Maybe<Scalars['Float']>;
  publishedVersion_lt?: Maybe<Scalars['Float']>;
  publishedVersion_lte?: Maybe<Scalars['Float']>;
};

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AssetCollection = {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Asset>>;
};

export type BlogArticleFilter = {
  author?: Maybe<CfTalentProfileNestedFilter>;
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  hero_exists?: Maybe<Scalars['Boolean']>;
  category_exists?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['String']>;
  category_not?: Maybe<Scalars['String']>;
  category_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_contains?: Maybe<Scalars['String']>;
  category_not_contains?: Maybe<Scalars['String']>;
  content_exists?: Maybe<Scalars['Boolean']>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  author_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<BlogArticleFilter>>>;
  AND?: Maybe<Array<Maybe<BlogArticleFilter>>>;
};

export type CfTalentProfileNestedFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  bio_exists?: Maybe<Scalars['Boolean']>;
  bio_contains?: Maybe<Scalars['String']>;
  bio_not_contains?: Maybe<Scalars['String']>;
  website_exists?: Maybe<Scalars['Boolean']>;
  website?: Maybe<Scalars['String']>;
  website_not?: Maybe<Scalars['String']>;
  website_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  website_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  website_contains?: Maybe<Scalars['String']>;
  website_not_contains?: Maybe<Scalars['String']>;
  instagram_exists?: Maybe<Scalars['Boolean']>;
  instagram?: Maybe<Scalars['String']>;
  instagram_not?: Maybe<Scalars['String']>;
  instagram_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagram_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagram_contains?: Maybe<Scalars['String']>;
  instagram_not_contains?: Maybe<Scalars['String']>;
  twitter_exists?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['String']>;
  twitter_not?: Maybe<Scalars['String']>;
  twitter_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_contains?: Maybe<Scalars['String']>;
  twitter_not_contains?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  facebook_exists?: Maybe<Scalars['Boolean']>;
  facebook?: Maybe<Scalars['String']>;
  facebook_not?: Maybe<Scalars['String']>;
  facebook_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebook_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebook_contains?: Maybe<Scalars['String']>;
  facebook_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfTalentProfileNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfTalentProfileNestedFilter>>>;
};

export enum BlogArticleOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TalentProfileFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  bio_exists?: Maybe<Scalars['Boolean']>;
  bio_contains?: Maybe<Scalars['String']>;
  bio_not_contains?: Maybe<Scalars['String']>;
  website_exists?: Maybe<Scalars['Boolean']>;
  website?: Maybe<Scalars['String']>;
  website_not?: Maybe<Scalars['String']>;
  website_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  website_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  website_contains?: Maybe<Scalars['String']>;
  website_not_contains?: Maybe<Scalars['String']>;
  instagram_exists?: Maybe<Scalars['Boolean']>;
  instagram?: Maybe<Scalars['String']>;
  instagram_not?: Maybe<Scalars['String']>;
  instagram_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagram_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagram_contains?: Maybe<Scalars['String']>;
  instagram_not_contains?: Maybe<Scalars['String']>;
  twitter_exists?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['String']>;
  twitter_not?: Maybe<Scalars['String']>;
  twitter_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitter_contains?: Maybe<Scalars['String']>;
  twitter_not_contains?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  facebook_exists?: Maybe<Scalars['Boolean']>;
  facebook?: Maybe<Scalars['String']>;
  facebook_not?: Maybe<Scalars['String']>;
  facebook_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebook_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebook_contains?: Maybe<Scalars['String']>;
  facebook_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<TalentProfileFilter>>>;
  AND?: Maybe<Array<Maybe<TalentProfileFilter>>>;
};

export enum TalentProfileOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC',
  InstagramAsc = 'instagram_ASC',
  InstagramDesc = 'instagram_DESC',
  TwitterAsc = 'twitter_ASC',
  TwitterDesc = 'twitter_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FacebookAsc = 'facebook_ASC',
  FacebookDesc = 'facebook_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TalentProfileCollection = {
  __typename?: 'TalentProfileCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<TalentProfile>>;
};

export type CustomPageFilter = {
  cta?: Maybe<CfCtaEntryNestedFilter>;
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  subtitle_exists?: Maybe<Scalars['Boolean']>;
  subtitle?: Maybe<Scalars['String']>;
  subtitle_not?: Maybe<Scalars['String']>;
  subtitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subtitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subtitle_contains?: Maybe<Scalars['String']>;
  subtitle_not_contains?: Maybe<Scalars['String']>;
  bannerImage_exists?: Maybe<Scalars['Boolean']>;
  bodyText_exists?: Maybe<Scalars['Boolean']>;
  bodyText_contains?: Maybe<Scalars['String']>;
  bodyText_not_contains?: Maybe<Scalars['String']>;
  cta_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CustomPageFilter>>>;
  AND?: Maybe<Array<Maybe<CustomPageFilter>>>;
};

export type CfCtaEntryNestedFilter = {
  sys?: Maybe<SysFilter>;
  ctaTitle_exists?: Maybe<Scalars['Boolean']>;
  ctaTitle?: Maybe<Scalars['String']>;
  ctaTitle_not?: Maybe<Scalars['String']>;
  ctaTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ctaTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ctaTitle_contains?: Maybe<Scalars['String']>;
  ctaTitle_not_contains?: Maybe<Scalars['String']>;
  bodyText_exists?: Maybe<Scalars['Boolean']>;
  bodyText?: Maybe<Scalars['String']>;
  bodyText_not?: Maybe<Scalars['String']>;
  bodyText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bodyText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bodyText_contains?: Maybe<Scalars['String']>;
  bodyText_not_contains?: Maybe<Scalars['String']>;
  buttonUrl_exists?: Maybe<Scalars['Boolean']>;
  buttonUrl?: Maybe<Scalars['String']>;
  buttonUrl_not?: Maybe<Scalars['String']>;
  buttonUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonUrl_contains?: Maybe<Scalars['String']>;
  buttonUrl_not_contains?: Maybe<Scalars['String']>;
  buttonText_exists?: Maybe<Scalars['Boolean']>;
  buttonText?: Maybe<Scalars['String']>;
  buttonText_not?: Maybe<Scalars['String']>;
  buttonText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonText_contains?: Maybe<Scalars['String']>;
  buttonText_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfCtaEntryNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfCtaEntryNestedFilter>>>;
};

export enum CustomPageOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type VideoFilter = {
  image?: Maybe<CfImageNestedFilter>;
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  host_exists?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
  host_not?: Maybe<Scalars['String']>;
  host_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  host_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  host_contains?: Maybe<Scalars['String']>;
  host_not_contains?: Maybe<Scalars['String']>;
  videoId_exists?: Maybe<Scalars['Boolean']>;
  videoId?: Maybe<Scalars['String']>;
  videoId_not?: Maybe<Scalars['String']>;
  videoId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  videoId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  videoId_contains?: Maybe<Scalars['String']>;
  videoId_not_contains?: Maybe<Scalars['String']>;
  caption_exists?: Maybe<Scalars['Boolean']>;
  caption?: Maybe<Scalars['String']>;
  caption_not?: Maybe<Scalars['String']>;
  caption_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  caption_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  caption_contains?: Maybe<Scalars['String']>;
  caption_not_contains?: Maybe<Scalars['String']>;
  coverImage_exists?: Maybe<Scalars['Boolean']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<VideoFilter>>>;
  AND?: Maybe<Array<Maybe<VideoFilter>>>;
};

export type CfImageNestedFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  caption_exists?: Maybe<Scalars['Boolean']>;
  caption?: Maybe<Scalars['String']>;
  caption_not?: Maybe<Scalars['String']>;
  caption_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  caption_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  caption_contains?: Maybe<Scalars['String']>;
  caption_not_contains?: Maybe<Scalars['String']>;
  altText_exists?: Maybe<Scalars['Boolean']>;
  altText?: Maybe<Scalars['String']>;
  altText_not?: Maybe<Scalars['String']>;
  altText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  altText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  altText_contains?: Maybe<Scalars['String']>;
  altText_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfImageNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfImageNestedFilter>>>;
};

export enum VideoOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HostAsc = 'host_ASC',
  HostDesc = 'host_DESC',
  VideoIdAsc = 'videoId_ASC',
  VideoIdDesc = 'videoId_DESC',
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type EventFilter = {
  organiser?: Maybe<CfEventOrganiserNestedFilter>;
  sponsorSection?: Maybe<CfSponsorSectionNestedFilter>;
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  location2_exists?: Maybe<Scalars['Boolean']>;
  location2?: Maybe<Scalars['String']>;
  location2_not?: Maybe<Scalars['String']>;
  location2_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  location2_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  location2_contains?: Maybe<Scalars['String']>;
  location2_not_contains?: Maybe<Scalars['String']>;
  ondemand_exists?: Maybe<Scalars['Boolean']>;
  ondemand?: Maybe<Scalars['Boolean']>;
  ondemand_not?: Maybe<Scalars['Boolean']>;
  eventCategories_exists?: Maybe<Scalars['Boolean']>;
  eventCategories_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventCategories_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventCategories_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventDescription_exists?: Maybe<Scalars['Boolean']>;
  eventDescription?: Maybe<Scalars['String']>;
  eventDescription_not?: Maybe<Scalars['String']>;
  eventDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventDescription_contains?: Maybe<Scalars['String']>;
  eventDescription_not_contains?: Maybe<Scalars['String']>;
  lineUp_exists?: Maybe<Scalars['Boolean']>;
  lineUp?: Maybe<Scalars['String']>;
  lineUp_not?: Maybe<Scalars['String']>;
  lineUp_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lineUp_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lineUp_contains?: Maybe<Scalars['String']>;
  lineUp_not_contains?: Maybe<Scalars['String']>;
  ticketingUrl_exists?: Maybe<Scalars['Boolean']>;
  ticketingUrl?: Maybe<Scalars['String']>;
  ticketingUrl_not?: Maybe<Scalars['String']>;
  ticketingUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ticketingUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ticketingUrl_contains?: Maybe<Scalars['String']>;
  ticketingUrl_not_contains?: Maybe<Scalars['String']>;
  cta_exists?: Maybe<Scalars['Boolean']>;
  cta?: Maybe<Scalars['String']>;
  cta_not?: Maybe<Scalars['String']>;
  cta_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cta_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cta_contains?: Maybe<Scalars['String']>;
  cta_not_contains?: Maybe<Scalars['String']>;
  audience_exists?: Maybe<Scalars['Boolean']>;
  audience_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  audience_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  audience_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  locationName_exists?: Maybe<Scalars['Boolean']>;
  locationName?: Maybe<Scalars['String']>;
  locationName_not?: Maybe<Scalars['String']>;
  locationName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  locationName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  locationName_contains?: Maybe<Scalars['String']>;
  locationName_not_contains?: Maybe<Scalars['String']>;
  location_exists?: Maybe<Scalars['Boolean']>;
  location_within_circle?: Maybe<Scalars['Circle']>;
  location_within_rectangle?: Maybe<Scalars['Rectangle']>;
  cost_exists?: Maybe<Scalars['Boolean']>;
  cost?: Maybe<Scalars['String']>;
  cost_not?: Maybe<Scalars['String']>;
  cost_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cost_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  cost_contains?: Maybe<Scalars['String']>;
  cost_not_contains?: Maybe<Scalars['String']>;
  eventPriceLow_exists?: Maybe<Scalars['Boolean']>;
  eventPriceLow?: Maybe<Scalars['Float']>;
  eventPriceLow_not?: Maybe<Scalars['Float']>;
  eventPriceLow_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  eventPriceLow_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  eventPriceLow_gt?: Maybe<Scalars['Float']>;
  eventPriceLow_gte?: Maybe<Scalars['Float']>;
  eventPriceLow_lt?: Maybe<Scalars['Float']>;
  eventPriceLow_lte?: Maybe<Scalars['Float']>;
  eventPriceHigh_exists?: Maybe<Scalars['Boolean']>;
  eventPriceHigh?: Maybe<Scalars['Float']>;
  eventPriceHigh_not?: Maybe<Scalars['Float']>;
  eventPriceHigh_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  eventPriceHigh_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  eventPriceHigh_gt?: Maybe<Scalars['Float']>;
  eventPriceHigh_gte?: Maybe<Scalars['Float']>;
  eventPriceHigh_lt?: Maybe<Scalars['Float']>;
  eventPriceHigh_lte?: Maybe<Scalars['Float']>;
  accessibilityInformation_exists?: Maybe<Scalars['Boolean']>;
  accessibilityInformation_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  accessibilityInformation_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  accessibilityInformation_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  accessibilityDetails_exists?: Maybe<Scalars['Boolean']>;
  accessibilityDetails?: Maybe<Scalars['String']>;
  accessibilityDetails_not?: Maybe<Scalars['String']>;
  accessibilityDetails_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  accessibilityDetails_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  accessibilityDetails_contains?: Maybe<Scalars['String']>;
  accessibilityDetails_not_contains?: Maybe<Scalars['String']>;
  organiser_exists?: Maybe<Scalars['Boolean']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  phone_exists?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  phone_not?: Maybe<Scalars['String']>;
  phone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_contains?: Maybe<Scalars['String']>;
  phone_not_contains?: Maybe<Scalars['String']>;
  individualEventPicture_exists?: Maybe<Scalars['Boolean']>;
  eventsListPicture_exists?: Maybe<Scalars['Boolean']>;
  featuredEvent_exists?: Maybe<Scalars['Boolean']>;
  featuredEvent?: Maybe<Scalars['Boolean']>;
  featuredEvent_not?: Maybe<Scalars['Boolean']>;
  sponsorSection_exists?: Maybe<Scalars['Boolean']>;
  event_url_exists?: Maybe<Scalars['Boolean']>;
  event_url?: Maybe<Scalars['String']>;
  event_url_not?: Maybe<Scalars['String']>;
  event_url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  event_url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  event_url_contains?: Maybe<Scalars['String']>;
  event_url_not_contains?: Maybe<Scalars['String']>;
  performancesCollection_exists?: Maybe<Scalars['Boolean']>;
  addressLine1_exists?: Maybe<Scalars['Boolean']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine1_not?: Maybe<Scalars['String']>;
  addressLine1_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressLine1_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressLine1_contains?: Maybe<Scalars['String']>;
  addressLine1_not_contains?: Maybe<Scalars['String']>;
  addressLine2_exists?: Maybe<Scalars['Boolean']>;
  addressLine2?: Maybe<Scalars['String']>;
  addressLine2_not?: Maybe<Scalars['String']>;
  addressLine2_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressLine2_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressLine2_contains?: Maybe<Scalars['String']>;
  addressLine2_not_contains?: Maybe<Scalars['String']>;
  city_exists?: Maybe<Scalars['Boolean']>;
  city?: Maybe<Scalars['String']>;
  city_not?: Maybe<Scalars['String']>;
  city_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_contains?: Maybe<Scalars['String']>;
  city_not_contains?: Maybe<Scalars['String']>;
  postcode_exists?: Maybe<Scalars['Boolean']>;
  postcode?: Maybe<Scalars['String']>;
  postcode_not?: Maybe<Scalars['String']>;
  postcode_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  postcode_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  postcode_contains?: Maybe<Scalars['String']>;
  postcode_not_contains?: Maybe<Scalars['String']>;
  accessibilityOptions_exists?: Maybe<Scalars['Boolean']>;
  accessibilityOptions_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  accessibilityOptions_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  accessibilityOptions_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  venueDetails_exists?: Maybe<Scalars['Boolean']>;
  venueDetails_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  venueDetails_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  venueDetails_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<Maybe<EventFilter>>>;
  AND?: Maybe<Array<Maybe<EventFilter>>>;
};

export type CfEventOrganiserNestedFilter = {
  sys?: Maybe<SysFilter>;
  Name_exists?: Maybe<Scalars['Boolean']>;
  Name?: Maybe<Scalars['String']>;
  Name_not?: Maybe<Scalars['String']>;
  Name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name_contains?: Maybe<Scalars['String']>;
  Name_not_contains?: Maybe<Scalars['String']>;
  Email_exists?: Maybe<Scalars['Boolean']>;
  Email?: Maybe<Scalars['String']>;
  Email_not?: Maybe<Scalars['String']>;
  Email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Email_contains?: Maybe<Scalars['String']>;
  Email_not_contains?: Maybe<Scalars['String']>;
  phoneNumber_exists?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumber_not?: Maybe<Scalars['String']>;
  phoneNumber_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber_contains?: Maybe<Scalars['String']>;
  phoneNumber_not_contains?: Maybe<Scalars['String']>;
  websiteUrl_exists?: Maybe<Scalars['Boolean']>;
  websiteUrl?: Maybe<Scalars['String']>;
  websiteUrl_not?: Maybe<Scalars['String']>;
  websiteUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl_contains?: Maybe<Scalars['String']>;
  websiteUrl_not_contains?: Maybe<Scalars['String']>;
  facebookUrl_exists?: Maybe<Scalars['Boolean']>;
  facebookUrl?: Maybe<Scalars['String']>;
  facebookUrl_not?: Maybe<Scalars['String']>;
  facebookUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebookUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebookUrl_contains?: Maybe<Scalars['String']>;
  facebookUrl_not_contains?: Maybe<Scalars['String']>;
  instagramUrl_exists?: Maybe<Scalars['Boolean']>;
  instagramUrl?: Maybe<Scalars['String']>;
  instagramUrl_not?: Maybe<Scalars['String']>;
  instagramUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagramUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagramUrl_contains?: Maybe<Scalars['String']>;
  instagramUrl_not_contains?: Maybe<Scalars['String']>;
  twitterUrl_exists?: Maybe<Scalars['Boolean']>;
  twitterUrl?: Maybe<Scalars['String']>;
  twitterUrl_not?: Maybe<Scalars['String']>;
  twitterUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitterUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitterUrl_contains?: Maybe<Scalars['String']>;
  twitterUrl_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfEventOrganiserNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfEventOrganiserNestedFilter>>>;
};

export type CfSponsorSectionNestedFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  displayName_exists?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['String']>;
  displayName_not?: Maybe<Scalars['String']>;
  displayName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName_contains?: Maybe<Scalars['String']>;
  displayName_not_contains?: Maybe<Scalars['String']>;
  sponsorsCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CfSponsorSectionNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfSponsorSectionNestedFilter>>>;
};



export enum EventOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  Location2Asc = 'location2_ASC',
  Location2Desc = 'location2_DESC',
  OndemandAsc = 'ondemand_ASC',
  OndemandDesc = 'ondemand_DESC',
  TicketingUrlAsc = 'ticketingUrl_ASC',
  TicketingUrlDesc = 'ticketingUrl_DESC',
  CtaAsc = 'cta_ASC',
  CtaDesc = 'cta_DESC',
  LocationNameAsc = 'locationName_ASC',
  LocationNameDesc = 'locationName_DESC',
  CostAsc = 'cost_ASC',
  CostDesc = 'cost_DESC',
  EventPriceLowAsc = 'eventPriceLow_ASC',
  EventPriceLowDesc = 'eventPriceLow_DESC',
  EventPriceHighAsc = 'eventPriceHigh_ASC',
  EventPriceHighDesc = 'eventPriceHigh_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  FeaturedEventAsc = 'featuredEvent_ASC',
  FeaturedEventDesc = 'featuredEvent_DESC',
  EventUrlAsc = 'event_url_ASC',
  EventUrlDesc = 'event_url_DESC',
  AddressLine1Asc = 'addressLine1_ASC',
  AddressLine1Desc = 'addressLine1_DESC',
  AddressLine2Asc = 'addressLine2_ASC',
  AddressLine2Desc = 'addressLine2_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  PostcodeAsc = 'postcode_ASC',
  PostcodeDesc = 'postcode_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ImageFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  caption_exists?: Maybe<Scalars['Boolean']>;
  caption?: Maybe<Scalars['String']>;
  caption_not?: Maybe<Scalars['String']>;
  caption_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  caption_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  caption_contains?: Maybe<Scalars['String']>;
  caption_not_contains?: Maybe<Scalars['String']>;
  altText_exists?: Maybe<Scalars['Boolean']>;
  altText?: Maybe<Scalars['String']>;
  altText_not?: Maybe<Scalars['String']>;
  altText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  altText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  altText_contains?: Maybe<Scalars['String']>;
  altText_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<ImageFilter>>>;
  AND?: Maybe<Array<Maybe<ImageFilter>>>;
};

export enum ImageOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CaptionAsc = 'caption_ASC',
  CaptionDesc = 'caption_DESC',
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type MultiImageFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  imagesCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<MultiImageFilter>>>;
  AND?: Maybe<Array<Maybe<MultiImageFilter>>>;
};

export enum MultiImageOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ArticleFilter = {
  author?: Maybe<CfAuthorNestedFilter>;
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  headerImage_exists?: Maybe<Scalars['Boolean']>;
  featuredImage_exists?: Maybe<Scalars['Boolean']>;
  author_exists?: Maybe<Scalars['Boolean']>;
  article_exists?: Maybe<Scalars['Boolean']>;
  article_contains?: Maybe<Scalars['String']>;
  article_not_contains?: Maybe<Scalars['String']>;
  category_exists?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['String']>;
  category_not?: Maybe<Scalars['String']>;
  category_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_contains?: Maybe<Scalars['String']>;
  category_not_contains?: Maybe<Scalars['String']>;
  datePublished_exists?: Maybe<Scalars['Boolean']>;
  datePublished?: Maybe<Scalars['DateTime']>;
  datePublished_not?: Maybe<Scalars['DateTime']>;
  datePublished_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  datePublished_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  datePublished_gt?: Maybe<Scalars['DateTime']>;
  datePublished_gte?: Maybe<Scalars['DateTime']>;
  datePublished_lt?: Maybe<Scalars['DateTime']>;
  datePublished_lte?: Maybe<Scalars['DateTime']>;
  readTime_exists?: Maybe<Scalars['Boolean']>;
  readTime?: Maybe<Scalars['Int']>;
  readTime_not?: Maybe<Scalars['Int']>;
  readTime_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  readTime_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  readTime_gt?: Maybe<Scalars['Int']>;
  readTime_gte?: Maybe<Scalars['Int']>;
  readTime_lt?: Maybe<Scalars['Int']>;
  readTime_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<ArticleFilter>>>;
  AND?: Maybe<Array<Maybe<ArticleFilter>>>;
};

export type CfAuthorNestedFilter = {
  sys?: Maybe<SysFilter>;
  displayName_exists?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['String']>;
  displayName_not?: Maybe<Scalars['String']>;
  displayName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName_contains?: Maybe<Scalars['String']>;
  displayName_not_contains?: Maybe<Scalars['String']>;
  firstName_exists?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_not?: Maybe<Scalars['String']>;
  firstName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_contains?: Maybe<Scalars['String']>;
  firstName_not_contains?: Maybe<Scalars['String']>;
  lastName_exists?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_not?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_contains?: Maybe<Scalars['String']>;
  lastName_not_contains?: Maybe<Scalars['String']>;
  jobTitle_exists?: Maybe<Scalars['Boolean']>;
  jobTitle?: Maybe<Scalars['String']>;
  jobTitle_not?: Maybe<Scalars['String']>;
  jobTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_contains?: Maybe<Scalars['String']>;
  jobTitle_not_contains?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  thumbnail_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CfAuthorNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfAuthorNestedFilter>>>;
};

export enum ArticleOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  DatePublishedAsc = 'datePublished_ASC',
  DatePublishedDesc = 'datePublished_DESC',
  ReadTimeAsc = 'readTime_ASC',
  ReadTimeDesc = 'readTime_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ArtCompetitonEntryFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  category_exists?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['String']>;
  category_not?: Maybe<Scalars['String']>;
  category_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_contains?: Maybe<Scalars['String']>;
  category_not_contains?: Maybe<Scalars['String']>;
  info_exists?: Maybe<Scalars['Boolean']>;
  info?: Maybe<Scalars['String']>;
  info_not?: Maybe<Scalars['String']>;
  info_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  info_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  info_contains?: Maybe<Scalars['String']>;
  info_not_contains?: Maybe<Scalars['String']>;
  year_exists?: Maybe<Scalars['Boolean']>;
  year?: Maybe<Scalars['String']>;
  year_not?: Maybe<Scalars['String']>;
  year_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  year_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  year_contains?: Maybe<Scalars['String']>;
  year_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  guidePrice_exists?: Maybe<Scalars['Boolean']>;
  guidePrice?: Maybe<Scalars['String']>;
  guidePrice_not?: Maybe<Scalars['String']>;
  guidePrice_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  guidePrice_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  guidePrice_contains?: Maybe<Scalars['String']>;
  guidePrice_not_contains?: Maybe<Scalars['String']>;
  sold_exists?: Maybe<Scalars['Boolean']>;
  sold?: Maybe<Scalars['Boolean']>;
  sold_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<ArtCompetitonEntryFilter>>>;
  AND?: Maybe<Array<Maybe<ArtCompetitonEntryFilter>>>;
};

export enum ArtCompetitonEntryOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  InfoAsc = 'info_ASC',
  InfoDesc = 'info_DESC',
  YearAsc = 'year_ASC',
  YearDesc = 'year_DESC',
  GuidePriceAsc = 'guidePrice_ASC',
  GuidePriceDesc = 'guidePrice_DESC',
  SoldAsc = 'sold_ASC',
  SoldDesc = 'sold_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FiftyTwoGalleryEntryFilter = {
  artwork?: Maybe<CfArtCompetitonEntryNestedFilter>;
  artist?: Maybe<CfTalentProfileNestedFilter>;
  sys?: Maybe<SysFilter>;
  entryName_exists?: Maybe<Scalars['Boolean']>;
  entryName?: Maybe<Scalars['String']>;
  entryName_not?: Maybe<Scalars['String']>;
  entryName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  entryName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  entryName_contains?: Maybe<Scalars['String']>;
  entryName_not_contains?: Maybe<Scalars['String']>;
  artwork_exists?: Maybe<Scalars['Boolean']>;
  artist_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<FiftyTwoGalleryEntryFilter>>>;
  AND?: Maybe<Array<Maybe<FiftyTwoGalleryEntryFilter>>>;
};

export type CfArtCompetitonEntryNestedFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  category_exists?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['String']>;
  category_not?: Maybe<Scalars['String']>;
  category_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_contains?: Maybe<Scalars['String']>;
  category_not_contains?: Maybe<Scalars['String']>;
  info_exists?: Maybe<Scalars['Boolean']>;
  info?: Maybe<Scalars['String']>;
  info_not?: Maybe<Scalars['String']>;
  info_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  info_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  info_contains?: Maybe<Scalars['String']>;
  info_not_contains?: Maybe<Scalars['String']>;
  year_exists?: Maybe<Scalars['Boolean']>;
  year?: Maybe<Scalars['String']>;
  year_not?: Maybe<Scalars['String']>;
  year_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  year_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  year_contains?: Maybe<Scalars['String']>;
  year_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  guidePrice_exists?: Maybe<Scalars['Boolean']>;
  guidePrice?: Maybe<Scalars['String']>;
  guidePrice_not?: Maybe<Scalars['String']>;
  guidePrice_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  guidePrice_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  guidePrice_contains?: Maybe<Scalars['String']>;
  guidePrice_not_contains?: Maybe<Scalars['String']>;
  sold_exists?: Maybe<Scalars['Boolean']>;
  sold?: Maybe<Scalars['Boolean']>;
  sold_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CfArtCompetitonEntryNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfArtCompetitonEntryNestedFilter>>>;
};

export enum FiftyTwoGalleryEntryOrder {
  EntryNameAsc = 'entryName_ASC',
  EntryNameDesc = 'entryName_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CtaEntryFilter = {
  sys?: Maybe<SysFilter>;
  ctaTitle_exists?: Maybe<Scalars['Boolean']>;
  ctaTitle?: Maybe<Scalars['String']>;
  ctaTitle_not?: Maybe<Scalars['String']>;
  ctaTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ctaTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ctaTitle_contains?: Maybe<Scalars['String']>;
  ctaTitle_not_contains?: Maybe<Scalars['String']>;
  bodyText_exists?: Maybe<Scalars['Boolean']>;
  bodyText?: Maybe<Scalars['String']>;
  bodyText_not?: Maybe<Scalars['String']>;
  bodyText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bodyText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bodyText_contains?: Maybe<Scalars['String']>;
  bodyText_not_contains?: Maybe<Scalars['String']>;
  buttonUrl_exists?: Maybe<Scalars['Boolean']>;
  buttonUrl?: Maybe<Scalars['String']>;
  buttonUrl_not?: Maybe<Scalars['String']>;
  buttonUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonUrl_contains?: Maybe<Scalars['String']>;
  buttonUrl_not_contains?: Maybe<Scalars['String']>;
  buttonText_exists?: Maybe<Scalars['Boolean']>;
  buttonText?: Maybe<Scalars['String']>;
  buttonText_not?: Maybe<Scalars['String']>;
  buttonText_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonText_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonText_contains?: Maybe<Scalars['String']>;
  buttonText_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CtaEntryFilter>>>;
  AND?: Maybe<Array<Maybe<CtaEntryFilter>>>;
};

export enum CtaEntryOrder {
  CtaTitleAsc = 'ctaTitle_ASC',
  CtaTitleDesc = 'ctaTitle_DESC',
  BodyTextAsc = 'bodyText_ASC',
  BodyTextDesc = 'bodyText_DESC',
  ButtonUrlAsc = 'buttonUrl_ASC',
  ButtonUrlDesc = 'buttonUrl_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CtaEntryCollection = {
  __typename?: 'CtaEntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<CtaEntry>>;
};

export type SponsorFilter = {
  sys?: Maybe<SysFilter>;
  sponsorName_exists?: Maybe<Scalars['Boolean']>;
  sponsorName?: Maybe<Scalars['String']>;
  sponsorName_not?: Maybe<Scalars['String']>;
  sponsorName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sponsorName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sponsorName_contains?: Maybe<Scalars['String']>;
  sponsorName_not_contains?: Maybe<Scalars['String']>;
  sponsorLevel_exists?: Maybe<Scalars['Boolean']>;
  sponsorLevel?: Maybe<Scalars['String']>;
  sponsorLevel_not?: Maybe<Scalars['String']>;
  sponsorLevel_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sponsorLevel_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sponsorLevel_contains?: Maybe<Scalars['String']>;
  sponsorLevel_not_contains?: Maybe<Scalars['String']>;
  sponsorUrl_exists?: Maybe<Scalars['Boolean']>;
  sponsorUrl?: Maybe<Scalars['String']>;
  sponsorUrl_not?: Maybe<Scalars['String']>;
  sponsorUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sponsorUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sponsorUrl_contains?: Maybe<Scalars['String']>;
  sponsorUrl_not_contains?: Maybe<Scalars['String']>;
  sponsorLogo_exists?: Maybe<Scalars['Boolean']>;
  svgLogo_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<SponsorFilter>>>;
  AND?: Maybe<Array<Maybe<SponsorFilter>>>;
};

export enum SponsorOrder {
  SponsorNameAsc = 'sponsorName_ASC',
  SponsorNameDesc = 'sponsorName_DESC',
  SponsorLevelAsc = 'sponsorLevel_ASC',
  SponsorLevelDesc = 'sponsorLevel_DESC',
  SponsorUrlAsc = 'sponsorUrl_ASC',
  SponsorUrlDesc = 'sponsorUrl_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type Venue = Entry & {
  __typename?: 'Venue';
  sys: Sys;
  linkedFrom?: Maybe<VenueLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  townOrCity?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  mapPin?: Maybe<Location>;
  genderNeutralToilets?: Maybe<Scalars['Boolean']>;
  accessibilityInformation?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  facebookUrl?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenueLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenueNameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenueTypeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenueDescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenueAddressLine1Args = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenueAddressLine2Args = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenueTownOrCityArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenuePostcodeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenueMapPinArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenueGenderNeutralToiletsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenueAccessibilityInformationArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenueWebsiteUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenuePhoneNumberArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenueFacebookUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenueTwitterUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/venue) */
export type VenueInstagramUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type VenueLinkingCollections = {
  __typename?: 'VenueLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type VenueLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type VenueFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  type_exists?: Maybe<Scalars['Boolean']>;
  type_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  addressLine1_exists?: Maybe<Scalars['Boolean']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine1_not?: Maybe<Scalars['String']>;
  addressLine1_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressLine1_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressLine1_contains?: Maybe<Scalars['String']>;
  addressLine1_not_contains?: Maybe<Scalars['String']>;
  addressLine2_exists?: Maybe<Scalars['Boolean']>;
  addressLine2?: Maybe<Scalars['String']>;
  addressLine2_not?: Maybe<Scalars['String']>;
  addressLine2_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressLine2_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressLine2_contains?: Maybe<Scalars['String']>;
  addressLine2_not_contains?: Maybe<Scalars['String']>;
  townOrCity_exists?: Maybe<Scalars['Boolean']>;
  townOrCity?: Maybe<Scalars['String']>;
  townOrCity_not?: Maybe<Scalars['String']>;
  townOrCity_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  townOrCity_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  townOrCity_contains?: Maybe<Scalars['String']>;
  townOrCity_not_contains?: Maybe<Scalars['String']>;
  postcode_exists?: Maybe<Scalars['Boolean']>;
  postcode?: Maybe<Scalars['String']>;
  postcode_not?: Maybe<Scalars['String']>;
  postcode_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  postcode_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  postcode_contains?: Maybe<Scalars['String']>;
  postcode_not_contains?: Maybe<Scalars['String']>;
  mapPin_exists?: Maybe<Scalars['Boolean']>;
  mapPin_within_circle?: Maybe<Scalars['Circle']>;
  mapPin_within_rectangle?: Maybe<Scalars['Rectangle']>;
  genderNeutralToilets_exists?: Maybe<Scalars['Boolean']>;
  genderNeutralToilets?: Maybe<Scalars['Boolean']>;
  genderNeutralToilets_not?: Maybe<Scalars['Boolean']>;
  accessibilityInformation_exists?: Maybe<Scalars['Boolean']>;
  accessibilityInformation_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  accessibilityInformation_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  accessibilityInformation_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl_exists?: Maybe<Scalars['Boolean']>;
  websiteUrl?: Maybe<Scalars['String']>;
  websiteUrl_not?: Maybe<Scalars['String']>;
  websiteUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl_contains?: Maybe<Scalars['String']>;
  websiteUrl_not_contains?: Maybe<Scalars['String']>;
  phoneNumber_exists?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumber_not?: Maybe<Scalars['String']>;
  phoneNumber_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber_contains?: Maybe<Scalars['String']>;
  phoneNumber_not_contains?: Maybe<Scalars['String']>;
  facebookUrl_exists?: Maybe<Scalars['Boolean']>;
  facebookUrl?: Maybe<Scalars['String']>;
  facebookUrl_not?: Maybe<Scalars['String']>;
  facebookUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebookUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebookUrl_contains?: Maybe<Scalars['String']>;
  facebookUrl_not_contains?: Maybe<Scalars['String']>;
  twitterUrl_exists?: Maybe<Scalars['Boolean']>;
  twitterUrl?: Maybe<Scalars['String']>;
  twitterUrl_not?: Maybe<Scalars['String']>;
  twitterUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitterUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitterUrl_contains?: Maybe<Scalars['String']>;
  twitterUrl_not_contains?: Maybe<Scalars['String']>;
  instagramUrl_exists?: Maybe<Scalars['Boolean']>;
  instagramUrl?: Maybe<Scalars['String']>;
  instagramUrl_not?: Maybe<Scalars['String']>;
  instagramUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagramUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagramUrl_contains?: Maybe<Scalars['String']>;
  instagramUrl_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<VenueFilter>>>;
  AND?: Maybe<Array<Maybe<VenueFilter>>>;
};

export enum VenueOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  AddressLine1Asc = 'addressLine1_ASC',
  AddressLine1Desc = 'addressLine1_DESC',
  AddressLine2Asc = 'addressLine2_ASC',
  AddressLine2Desc = 'addressLine2_DESC',
  TownOrCityAsc = 'townOrCity_ASC',
  TownOrCityDesc = 'townOrCity_DESC',
  PostcodeAsc = 'postcode_ASC',
  PostcodeDesc = 'postcode_DESC',
  GenderNeutralToiletsAsc = 'genderNeutralToilets_ASC',
  GenderNeutralToiletsDesc = 'genderNeutralToilets_DESC',
  WebsiteUrlAsc = 'websiteUrl_ASC',
  WebsiteUrlDesc = 'websiteUrl_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  FacebookUrlAsc = 'facebookUrl_ASC',
  FacebookUrlDesc = 'facebookUrl_DESC',
  TwitterUrlAsc = 'twitterUrl_ASC',
  TwitterUrlDesc = 'twitterUrl_DESC',
  InstagramUrlAsc = 'instagramUrl_ASC',
  InstagramUrlDesc = 'instagramUrl_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type VenueCollection = {
  __typename?: 'VenueCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Venue>>;
};

export type EventOrganiserFilter = {
  sys?: Maybe<SysFilter>;
  Name_exists?: Maybe<Scalars['Boolean']>;
  Name?: Maybe<Scalars['String']>;
  Name_not?: Maybe<Scalars['String']>;
  Name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name_contains?: Maybe<Scalars['String']>;
  Name_not_contains?: Maybe<Scalars['String']>;
  Email_exists?: Maybe<Scalars['Boolean']>;
  Email?: Maybe<Scalars['String']>;
  Email_not?: Maybe<Scalars['String']>;
  Email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Email_contains?: Maybe<Scalars['String']>;
  Email_not_contains?: Maybe<Scalars['String']>;
  phoneNumber_exists?: Maybe<Scalars['Boolean']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumber_not?: Maybe<Scalars['String']>;
  phoneNumber_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber_contains?: Maybe<Scalars['String']>;
  phoneNumber_not_contains?: Maybe<Scalars['String']>;
  websiteUrl_exists?: Maybe<Scalars['Boolean']>;
  websiteUrl?: Maybe<Scalars['String']>;
  websiteUrl_not?: Maybe<Scalars['String']>;
  websiteUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl_contains?: Maybe<Scalars['String']>;
  websiteUrl_not_contains?: Maybe<Scalars['String']>;
  facebookUrl_exists?: Maybe<Scalars['Boolean']>;
  facebookUrl?: Maybe<Scalars['String']>;
  facebookUrl_not?: Maybe<Scalars['String']>;
  facebookUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebookUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebookUrl_contains?: Maybe<Scalars['String']>;
  facebookUrl_not_contains?: Maybe<Scalars['String']>;
  instagramUrl_exists?: Maybe<Scalars['Boolean']>;
  instagramUrl?: Maybe<Scalars['String']>;
  instagramUrl_not?: Maybe<Scalars['String']>;
  instagramUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagramUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagramUrl_contains?: Maybe<Scalars['String']>;
  instagramUrl_not_contains?: Maybe<Scalars['String']>;
  twitterUrl_exists?: Maybe<Scalars['Boolean']>;
  twitterUrl?: Maybe<Scalars['String']>;
  twitterUrl_not?: Maybe<Scalars['String']>;
  twitterUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitterUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitterUrl_contains?: Maybe<Scalars['String']>;
  twitterUrl_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<EventOrganiserFilter>>>;
  AND?: Maybe<Array<Maybe<EventOrganiserFilter>>>;
};

export enum EventOrganiserOrder {
  NameAsc = 'Name_ASC',
  NameDesc = 'Name_DESC',
  EmailAsc = 'Email_ASC',
  EmailDesc = 'Email_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  WebsiteUrlAsc = 'websiteUrl_ASC',
  WebsiteUrlDesc = 'websiteUrl_DESC',
  FacebookUrlAsc = 'facebookUrl_ASC',
  FacebookUrlDesc = 'facebookUrl_DESC',
  InstagramUrlAsc = 'instagramUrl_ASC',
  InstagramUrlDesc = 'instagramUrl_DESC',
  TwitterUrlAsc = 'twitterUrl_ASC',
  TwitterUrlDesc = 'twitterUrl_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type EventOrganiserCollection = {
  __typename?: 'EventOrganiserCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<EventOrganiser>>;
};

export type GenericContentPageFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  subtitle_exists?: Maybe<Scalars['Boolean']>;
  subtitle?: Maybe<Scalars['String']>;
  subtitle_not?: Maybe<Scalars['String']>;
  subtitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subtitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subtitle_contains?: Maybe<Scalars['String']>;
  subtitle_not_contains?: Maybe<Scalars['String']>;
  bannerColor_exists?: Maybe<Scalars['Boolean']>;
  bannerColor?: Maybe<Scalars['String']>;
  bannerColor_not?: Maybe<Scalars['String']>;
  bannerColor_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bannerColor_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  bannerColor_contains?: Maybe<Scalars['String']>;
  bannerColor_not_contains?: Maybe<Scalars['String']>;
  bannerImage_exists?: Maybe<Scalars['Boolean']>;
  content_exists?: Maybe<Scalars['Boolean']>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  metaTitle_exists?: Maybe<Scalars['Boolean']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaTitle_not?: Maybe<Scalars['String']>;
  metaTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  metaTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  metaTitle_contains?: Maybe<Scalars['String']>;
  metaTitle_not_contains?: Maybe<Scalars['String']>;
  metaDescription_exists?: Maybe<Scalars['Boolean']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaDescription_not?: Maybe<Scalars['String']>;
  metaDescription_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  metaDescription_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  metaDescription_contains?: Maybe<Scalars['String']>;
  metaDescription_not_contains?: Maybe<Scalars['String']>;
  metaImage_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<GenericContentPageFilter>>>;
  AND?: Maybe<Array<Maybe<GenericContentPageFilter>>>;
};

export enum GenericContentPageOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  BannerColorAsc = 'bannerColor_ASC',
  BannerColorDesc = 'bannerColor_DESC',
  MetaTitleAsc = 'metaTitle_ASC',
  MetaTitleDesc = 'metaTitle_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AnnouncementFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  image_exists?: Maybe<Scalars['Boolean']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<AnnouncementFilter>>>;
  AND?: Maybe<Array<Maybe<AnnouncementFilter>>>;
};

export enum AnnouncementOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Parade day amenities [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/amenity) */
export type Amenity = Entry & {
  __typename?: 'Amenity';
  sys: Sys;
  linkedFrom?: Maybe<AmenityLinkingCollections>;
  type?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
};


/** Parade day amenities [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/amenity) */
export type AmenityLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Parade day amenities [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/amenity) */
export type AmenityTypeArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** Parade day amenities [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/amenity) */
export type AmenityLocationArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type AmenityLinkingCollections = {
  __typename?: 'AmenityLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AmenityLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type AmenityFilter = {
  sys?: Maybe<SysFilter>;
  type_exists?: Maybe<Scalars['Boolean']>;
  type?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  type_contains?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  location_exists?: Maybe<Scalars['Boolean']>;
  location_within_circle?: Maybe<Scalars['Circle']>;
  location_within_rectangle?: Maybe<Scalars['Rectangle']>;
  OR?: Maybe<Array<Maybe<AmenityFilter>>>;
  AND?: Maybe<Array<Maybe<AmenityFilter>>>;
};

export enum AmenityOrder {
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AmenityCollection = {
  __typename?: 'AmenityCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Amenity>>;
};

export type SponsorSectionFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  displayName_exists?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['String']>;
  displayName_not?: Maybe<Scalars['String']>;
  displayName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName_contains?: Maybe<Scalars['String']>;
  displayName_not_contains?: Maybe<Scalars['String']>;
  sponsorsCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<SponsorSectionFilter>>>;
  AND?: Maybe<Array<Maybe<SponsorSectionFilter>>>;
};

export enum SponsorSectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DisplayNameAsc = 'displayName_ASC',
  DisplayNameDesc = 'displayName_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CommunityPartnerFilter = {
  sys?: Maybe<SysFilter>;
  venueName_exists?: Maybe<Scalars['Boolean']>;
  venueName?: Maybe<Scalars['String']>;
  venueName_not?: Maybe<Scalars['String']>;
  venueName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  venueName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  venueName_contains?: Maybe<Scalars['String']>;
  venueName_not_contains?: Maybe<Scalars['String']>;
  category_exists?: Maybe<Scalars['Boolean']>;
  category_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  websiteUrl_exists?: Maybe<Scalars['Boolean']>;
  websiteUrl?: Maybe<Scalars['String']>;
  websiteUrl_not?: Maybe<Scalars['String']>;
  websiteUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl_contains?: Maybe<Scalars['String']>;
  websiteUrl_not_contains?: Maybe<Scalars['String']>;
  facebookUrl_exists?: Maybe<Scalars['Boolean']>;
  facebookUrl?: Maybe<Scalars['String']>;
  facebookUrl_not?: Maybe<Scalars['String']>;
  facebookUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebookUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebookUrl_contains?: Maybe<Scalars['String']>;
  facebookUrl_not_contains?: Maybe<Scalars['String']>;
  twitterUrl_exists?: Maybe<Scalars['Boolean']>;
  twitterUrl?: Maybe<Scalars['String']>;
  twitterUrl_not?: Maybe<Scalars['String']>;
  twitterUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitterUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitterUrl_contains?: Maybe<Scalars['String']>;
  twitterUrl_not_contains?: Maybe<Scalars['String']>;
  instagramUrl_exists?: Maybe<Scalars['Boolean']>;
  instagramUrl?: Maybe<Scalars['String']>;
  instagramUrl_not?: Maybe<Scalars['String']>;
  instagramUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagramUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagramUrl_contains?: Maybe<Scalars['String']>;
  instagramUrl_not_contains?: Maybe<Scalars['String']>;
  featuredImage_exists?: Maybe<Scalars['Boolean']>;
  location_exists?: Maybe<Scalars['Boolean']>;
  location_within_circle?: Maybe<Scalars['Circle']>;
  location_within_rectangle?: Maybe<Scalars['Rectangle']>;
  addressLine1_exists?: Maybe<Scalars['Boolean']>;
  addressLine1?: Maybe<Scalars['String']>;
  addressLine1_not?: Maybe<Scalars['String']>;
  addressLine1_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressLine1_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressLine1_contains?: Maybe<Scalars['String']>;
  addressLine1_not_contains?: Maybe<Scalars['String']>;
  addressLine2_exists?: Maybe<Scalars['Boolean']>;
  addressLine2?: Maybe<Scalars['String']>;
  addressLine2_not?: Maybe<Scalars['String']>;
  addressLine2_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressLine2_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressLine2_contains?: Maybe<Scalars['String']>;
  addressLine2_not_contains?: Maybe<Scalars['String']>;
  city_exists?: Maybe<Scalars['Boolean']>;
  city?: Maybe<Scalars['String']>;
  city_not?: Maybe<Scalars['String']>;
  city_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_contains?: Maybe<Scalars['String']>;
  city_not_contains?: Maybe<Scalars['String']>;
  postcode_exists?: Maybe<Scalars['Boolean']>;
  postcode?: Maybe<Scalars['String']>;
  postcode_not?: Maybe<Scalars['String']>;
  postcode_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  postcode_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  postcode_contains?: Maybe<Scalars['String']>;
  postcode_not_contains?: Maybe<Scalars['String']>;
  accessibilityDetails_exists?: Maybe<Scalars['Boolean']>;
  accessibilityDetails_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  accessibilityDetails_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  accessibilityDetails_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  genderNeutralToilets_exists?: Maybe<Scalars['Boolean']>;
  genderNeutralToilets?: Maybe<Scalars['Boolean']>;
  genderNeutralToilets_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<CommunityPartnerFilter>>>;
  AND?: Maybe<Array<Maybe<CommunityPartnerFilter>>>;
};

export enum CommunityPartnerOrder {
  VenueNameAsc = 'venueName_ASC',
  VenueNameDesc = 'venueName_DESC',
  WebsiteUrlAsc = 'websiteUrl_ASC',
  WebsiteUrlDesc = 'websiteUrl_DESC',
  FacebookUrlAsc = 'facebookUrl_ASC',
  FacebookUrlDesc = 'facebookUrl_DESC',
  TwitterUrlAsc = 'twitterUrl_ASC',
  TwitterUrlDesc = 'twitterUrl_DESC',
  InstagramUrlAsc = 'instagramUrl_ASC',
  InstagramUrlDesc = 'instagramUrl_DESC',
  AddressLine1Asc = 'addressLine1_ASC',
  AddressLine1Desc = 'addressLine1_DESC',
  AddressLine2Asc = 'addressLine2_ASC',
  AddressLine2Desc = 'addressLine2_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  PostcodeAsc = 'postcode_ASC',
  PostcodeDesc = 'postcode_DESC',
  GenderNeutralToiletsAsc = 'genderNeutralToilets_ASC',
  GenderNeutralToiletsDesc = 'genderNeutralToilets_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup2019) */
export type ParadeGroup2019 = Entry & {
  __typename?: 'ParadeGroup2019';
  sys: Sys;
  linkedFrom?: Maybe<ParadeGroup2019LinkingCollections>;
  objectId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  yearsMarched?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  lgbtContributions?: Maybe<Scalars['String']>;
  emailUrl?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
  facebookUrl?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup2019) */
export type ParadeGroup2019LinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup2019) */
export type ParadeGroup2019ObjectIdArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup2019) */
export type ParadeGroup2019NameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup2019) */
export type ParadeGroup2019CategoryArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup2019) */
export type ParadeGroup2019YearsMarchedArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup2019) */
export type ParadeGroup2019DescriptionArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup2019) */
export type ParadeGroup2019LgbtContributionsArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup2019) */
export type ParadeGroup2019EmailUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup2019) */
export type ParadeGroup2019WebsiteUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup2019) */
export type ParadeGroup2019TwitterUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup2019) */
export type ParadeGroup2019FacebookUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/paradeGroup2019) */
export type ParadeGroup2019InstagramUrlArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ParadeGroup2019LinkingCollections = {
  __typename?: 'ParadeGroup2019LinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ParadeGroup2019LinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ParadeGroup2019Filter = {
  sys?: Maybe<SysFilter>;
  objectId_exists?: Maybe<Scalars['Boolean']>;
  objectId?: Maybe<Scalars['String']>;
  objectId_not?: Maybe<Scalars['String']>;
  objectId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectId_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectId_contains?: Maybe<Scalars['String']>;
  objectId_not_contains?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  category_exists?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['String']>;
  category_not?: Maybe<Scalars['String']>;
  category_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_contains?: Maybe<Scalars['String']>;
  category_not_contains?: Maybe<Scalars['String']>;
  yearsMarched_exists?: Maybe<Scalars['Boolean']>;
  yearsMarched_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  yearsMarched_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  yearsMarched_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  lgbtContributions_exists?: Maybe<Scalars['Boolean']>;
  lgbtContributions?: Maybe<Scalars['String']>;
  lgbtContributions_not?: Maybe<Scalars['String']>;
  lgbtContributions_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lgbtContributions_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lgbtContributions_contains?: Maybe<Scalars['String']>;
  lgbtContributions_not_contains?: Maybe<Scalars['String']>;
  emailUrl_exists?: Maybe<Scalars['Boolean']>;
  emailUrl?: Maybe<Scalars['String']>;
  emailUrl_not?: Maybe<Scalars['String']>;
  emailUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  emailUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  emailUrl_contains?: Maybe<Scalars['String']>;
  emailUrl_not_contains?: Maybe<Scalars['String']>;
  websiteUrl_exists?: Maybe<Scalars['Boolean']>;
  websiteUrl?: Maybe<Scalars['String']>;
  websiteUrl_not?: Maybe<Scalars['String']>;
  websiteUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl_contains?: Maybe<Scalars['String']>;
  websiteUrl_not_contains?: Maybe<Scalars['String']>;
  twitterUrl_exists?: Maybe<Scalars['Boolean']>;
  twitterUrl?: Maybe<Scalars['String']>;
  twitterUrl_not?: Maybe<Scalars['String']>;
  twitterUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitterUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitterUrl_contains?: Maybe<Scalars['String']>;
  twitterUrl_not_contains?: Maybe<Scalars['String']>;
  facebookUrl_exists?: Maybe<Scalars['Boolean']>;
  facebookUrl?: Maybe<Scalars['String']>;
  facebookUrl_not?: Maybe<Scalars['String']>;
  facebookUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebookUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebookUrl_contains?: Maybe<Scalars['String']>;
  facebookUrl_not_contains?: Maybe<Scalars['String']>;
  instagramUrl_exists?: Maybe<Scalars['Boolean']>;
  instagramUrl?: Maybe<Scalars['String']>;
  instagramUrl_not?: Maybe<Scalars['String']>;
  instagramUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagramUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagramUrl_contains?: Maybe<Scalars['String']>;
  instagramUrl_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<ParadeGroup2019Filter>>>;
  AND?: Maybe<Array<Maybe<ParadeGroup2019Filter>>>;
};

export enum ParadeGroup2019Order {
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  EmailUrlAsc = 'emailUrl_ASC',
  EmailUrlDesc = 'emailUrl_DESC',
  WebsiteUrlAsc = 'websiteUrl_ASC',
  WebsiteUrlDesc = 'websiteUrl_DESC',
  TwitterUrlAsc = 'twitterUrl_ASC',
  TwitterUrlDesc = 'twitterUrl_DESC',
  FacebookUrlAsc = 'facebookUrl_ASC',
  FacebookUrlDesc = 'facebookUrl_DESC',
  InstagramUrlAsc = 'instagramUrl_ASC',
  InstagramUrlDesc = 'instagramUrl_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ParadeGroup2019Collection = {
  __typename?: 'ParadeGroup2019Collection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ParadeGroup2019>>;
};

export type ParadeGroupFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  category_exists?: Maybe<Scalars['Boolean']>;
  category_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  featuredImage_exists?: Maybe<Scalars['Boolean']>;
  websiteUrl_exists?: Maybe<Scalars['Boolean']>;
  websiteUrl?: Maybe<Scalars['String']>;
  websiteUrl_not?: Maybe<Scalars['String']>;
  websiteUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl_contains?: Maybe<Scalars['String']>;
  websiteUrl_not_contains?: Maybe<Scalars['String']>;
  facebookUrl_exists?: Maybe<Scalars['Boolean']>;
  facebookUrl?: Maybe<Scalars['String']>;
  facebookUrl_not?: Maybe<Scalars['String']>;
  facebookUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebookUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  facebookUrl_contains?: Maybe<Scalars['String']>;
  facebookUrl_not_contains?: Maybe<Scalars['String']>;
  twitterUrl_exists?: Maybe<Scalars['Boolean']>;
  twitterUrl?: Maybe<Scalars['String']>;
  twitterUrl_not?: Maybe<Scalars['String']>;
  twitterUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitterUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  twitterUrl_contains?: Maybe<Scalars['String']>;
  twitterUrl_not_contains?: Maybe<Scalars['String']>;
  instagramUrl_exists?: Maybe<Scalars['Boolean']>;
  instagramUrl?: Maybe<Scalars['String']>;
  instagramUrl_not?: Maybe<Scalars['String']>;
  instagramUrl_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagramUrl_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  instagramUrl_contains?: Maybe<Scalars['String']>;
  instagramUrl_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<ParadeGroupFilter>>>;
  AND?: Maybe<Array<Maybe<ParadeGroupFilter>>>;
};

export enum ParadeGroupOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  WebsiteUrlAsc = 'websiteUrl_ASC',
  WebsiteUrlDesc = 'websiteUrl_DESC',
  FacebookUrlAsc = 'facebookUrl_ASC',
  FacebookUrlDesc = 'facebookUrl_DESC',
  TwitterUrlAsc = 'twitterUrl_ASC',
  TwitterUrlDesc = 'twitterUrl_DESC',
  InstagramUrlAsc = 'instagramUrl_ASC',
  InstagramUrlDesc = 'instagramUrl_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FeaturedEventsFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  eventsCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<FeaturedEventsFilter>>>;
  AND?: Maybe<Array<Maybe<FeaturedEventsFilter>>>;
};

export enum FeaturedEventsOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AuthorFilter = {
  sys?: Maybe<SysFilter>;
  displayName_exists?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['String']>;
  displayName_not?: Maybe<Scalars['String']>;
  displayName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName_contains?: Maybe<Scalars['String']>;
  displayName_not_contains?: Maybe<Scalars['String']>;
  firstName_exists?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_not?: Maybe<Scalars['String']>;
  firstName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_contains?: Maybe<Scalars['String']>;
  firstName_not_contains?: Maybe<Scalars['String']>;
  lastName_exists?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_not?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_contains?: Maybe<Scalars['String']>;
  lastName_not_contains?: Maybe<Scalars['String']>;
  jobTitle_exists?: Maybe<Scalars['Boolean']>;
  jobTitle?: Maybe<Scalars['String']>;
  jobTitle_not?: Maybe<Scalars['String']>;
  jobTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_contains?: Maybe<Scalars['String']>;
  jobTitle_not_contains?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  thumbnail_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<AuthorFilter>>>;
  AND?: Maybe<Array<Maybe<AuthorFilter>>>;
};

export enum AuthorOrder {
  DisplayNameAsc = 'displayName_ASC',
  DisplayNameDesc = 'displayName_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** A button that can be embedded in rich text [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/button) */
export type Button = Entry & {
  __typename?: 'Button';
  sys: Sys;
  linkedFrom?: Maybe<ButtonLinkingCollections>;
  buttonContent?: Maybe<Scalars['String']>;
  buttonHref?: Maybe<Scalars['String']>;
  buttonPrimary?: Maybe<Scalars['Boolean']>;
};


/** A button that can be embedded in rich text [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/button) */
export type ButtonLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** A button that can be embedded in rich text [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/button) */
export type ButtonButtonContentArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A button that can be embedded in rich text [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/button) */
export type ButtonButtonHrefArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** A button that can be embedded in rich text [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/button) */
export type ButtonButtonPrimaryArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type ButtonLinkingCollections = {
  __typename?: 'ButtonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type ButtonLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type ButtonFilter = {
  sys?: Maybe<SysFilter>;
  buttonContent_exists?: Maybe<Scalars['Boolean']>;
  buttonContent?: Maybe<Scalars['String']>;
  buttonContent_not?: Maybe<Scalars['String']>;
  buttonContent_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonContent_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonContent_contains?: Maybe<Scalars['String']>;
  buttonContent_not_contains?: Maybe<Scalars['String']>;
  buttonHref_exists?: Maybe<Scalars['Boolean']>;
  buttonHref?: Maybe<Scalars['String']>;
  buttonHref_not?: Maybe<Scalars['String']>;
  buttonHref_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonHref_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonHref_contains?: Maybe<Scalars['String']>;
  buttonHref_not_contains?: Maybe<Scalars['String']>;
  buttonPrimary_exists?: Maybe<Scalars['Boolean']>;
  buttonPrimary?: Maybe<Scalars['Boolean']>;
  buttonPrimary_not?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<ButtonFilter>>>;
  AND?: Maybe<Array<Maybe<ButtonFilter>>>;
};

export enum ButtonOrder {
  ButtonContentAsc = 'buttonContent_ASC',
  ButtonContentDesc = 'buttonContent_DESC',
  ButtonHrefAsc = 'buttonHref_ASC',
  ButtonHrefDesc = 'buttonHref_DESC',
  ButtonPrimaryAsc = 'buttonPrimary_ASC',
  ButtonPrimaryDesc = 'buttonPrimary_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ButtonCollection = {
  __typename?: 'ButtonCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Button>>;
};

export type FeaturedArticleFilter = {
  featuredArticle?: Maybe<CfArticleNestedFilter>;
  sys?: Maybe<SysFilter>;
  featuredArticle_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<FeaturedArticleFilter>>>;
  AND?: Maybe<Array<Maybe<FeaturedArticleFilter>>>;
};

export type CfArticleNestedFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  slug_exists?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  headerImage_exists?: Maybe<Scalars['Boolean']>;
  featuredImage_exists?: Maybe<Scalars['Boolean']>;
  author_exists?: Maybe<Scalars['Boolean']>;
  article_exists?: Maybe<Scalars['Boolean']>;
  article_contains?: Maybe<Scalars['String']>;
  article_not_contains?: Maybe<Scalars['String']>;
  category_exists?: Maybe<Scalars['Boolean']>;
  category?: Maybe<Scalars['String']>;
  category_not?: Maybe<Scalars['String']>;
  category_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_contains?: Maybe<Scalars['String']>;
  category_not_contains?: Maybe<Scalars['String']>;
  datePublished_exists?: Maybe<Scalars['Boolean']>;
  datePublished?: Maybe<Scalars['DateTime']>;
  datePublished_not?: Maybe<Scalars['DateTime']>;
  datePublished_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  datePublished_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  datePublished_gt?: Maybe<Scalars['DateTime']>;
  datePublished_gte?: Maybe<Scalars['DateTime']>;
  datePublished_lt?: Maybe<Scalars['DateTime']>;
  datePublished_lte?: Maybe<Scalars['DateTime']>;
  readTime_exists?: Maybe<Scalars['Boolean']>;
  readTime?: Maybe<Scalars['Int']>;
  readTime_not?: Maybe<Scalars['Int']>;
  readTime_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  readTime_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  readTime_gt?: Maybe<Scalars['Int']>;
  readTime_gte?: Maybe<Scalars['Int']>;
  readTime_lt?: Maybe<Scalars['Int']>;
  readTime_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<CfArticleNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfArticleNestedFilter>>>;
};

export enum FeaturedArticleOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PerformanceFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  startTime_exists?: Maybe<Scalars['Boolean']>;
  startTime?: Maybe<Scalars['DateTime']>;
  startTime_not?: Maybe<Scalars['DateTime']>;
  startTime_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  startTime_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  startTime_gt?: Maybe<Scalars['DateTime']>;
  startTime_gte?: Maybe<Scalars['DateTime']>;
  startTime_lt?: Maybe<Scalars['DateTime']>;
  startTime_lte?: Maybe<Scalars['DateTime']>;
  OR?: Maybe<Array<Maybe<PerformanceFilter>>>;
  AND?: Maybe<Array<Maybe<PerformanceFilter>>>;
};

export enum PerformanceOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  StartTimeAsc = 'startTime_ASC',
  StartTimeDesc = 'startTime_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PerformanceCollection = {
  __typename?: 'PerformanceCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Performance>>;
};

export type HeaderBannerFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  heading_exists?: Maybe<Scalars['Boolean']>;
  heading?: Maybe<Scalars['String']>;
  heading_not?: Maybe<Scalars['String']>;
  heading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_contains?: Maybe<Scalars['String']>;
  heading_not_contains?: Maybe<Scalars['String']>;
  headingLine2_exists?: Maybe<Scalars['Boolean']>;
  headingLine2?: Maybe<Scalars['String']>;
  headingLine2_not?: Maybe<Scalars['String']>;
  headingLine2_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  headingLine2_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  headingLine2_contains?: Maybe<Scalars['String']>;
  headingLine2_not_contains?: Maybe<Scalars['String']>;
  subHeading_exists?: Maybe<Scalars['Boolean']>;
  subHeading?: Maybe<Scalars['String']>;
  subHeading_not?: Maybe<Scalars['String']>;
  subHeading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subHeading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subHeading_contains?: Maybe<Scalars['String']>;
  subHeading_not_contains?: Maybe<Scalars['String']>;
  heroImage_exists?: Maybe<Scalars['Boolean']>;
  backgroundColour_exists?: Maybe<Scalars['Boolean']>;
  backgroundColour?: Maybe<Scalars['String']>;
  backgroundColour_not?: Maybe<Scalars['String']>;
  backgroundColour_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  backgroundColour_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  backgroundColour_contains?: Maybe<Scalars['String']>;
  backgroundColour_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<HeaderBannerFilter>>>;
  AND?: Maybe<Array<Maybe<HeaderBannerFilter>>>;
};

export enum HeaderBannerOrder {
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  HeadingLine2Asc = 'headingLine2_ASC',
  HeadingLine2Desc = 'headingLine2_DESC',
  SubHeadingAsc = 'subHeading_ASC',
  SubHeadingDesc = 'subHeading_DESC',
  BackgroundColourAsc = 'backgroundColour_ASC',
  BackgroundColourDesc = 'backgroundColour_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/wO1krKenNQcWMSqaeysWo) */
export type Wo1KrKenNQcWmSqaeysWo = Entry & {
  __typename?: 'WO1KrKenNQcWmSqaeysWo';
  sys: Sys;
  linkedFrom?: Maybe<Wo1KrKenNQcWmSqaeysWoLinkingCollections>;
  nicename?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/wO1krKenNQcWMSqaeysWo) */
export type Wo1KrKenNQcWmSqaeysWoLinkedFromArgs = {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/wO1krKenNQcWMSqaeysWo) */
export type Wo1KrKenNQcWmSqaeysWoNicenameArgs = {
  locale?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/0ho16wyr4i9n/content_types/wO1krKenNQcWMSqaeysWo) */
export type Wo1KrKenNQcWmSqaeysWoNameArgs = {
  locale?: Maybe<Scalars['String']>;
};

export type Wo1KrKenNQcWmSqaeysWoLinkingCollections = {
  __typename?: 'WO1KrKenNQcWmSqaeysWoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type Wo1KrKenNQcWmSqaeysWoLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
};

export type Wo1KrKenNQcWmSqaeysWoFilter = {
  sys?: Maybe<SysFilter>;
  nicename_exists?: Maybe<Scalars['Boolean']>;
  nicename?: Maybe<Scalars['String']>;
  nicename_not?: Maybe<Scalars['String']>;
  nicename_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nicename_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nicename_contains?: Maybe<Scalars['String']>;
  nicename_not_contains?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<Wo1KrKenNQcWmSqaeysWoFilter>>>;
  AND?: Maybe<Array<Maybe<Wo1KrKenNQcWmSqaeysWoFilter>>>;
};

export enum Wo1KrKenNQcWmSqaeysWoOrder {
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Wo1KrKenNQcWmSqaeysWoCollection = {
  __typename?: 'WO1KrKenNQcWmSqaeysWoCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Wo1KrKenNQcWmSqaeysWo>>;
};
