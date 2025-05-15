import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_sections';
  info: {
    displayName: 'AboutSection';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    displayName: 'ContactInfo';
  };
  attributes: {
    emailAddress: Schema.Attribute.Text;
    locationMapEmbed: Schema.Attribute.Text;
    phoneNumber: Schema.Attribute.Text;
  };
}

export interface SharedCustomerReview extends Struct.ComponentSchema {
  collectionName: 'components_shared_customer_reviews';
  info: {
    displayName: 'CustomerReview';
  };
  attributes: {
    name: Schema.Attribute.Text;
    reviewDate: Schema.Attribute.DateTime;
    reviewText: Schema.Attribute.Blocks;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedProductsService extends Struct.ComponentSchema {
  collectionName: 'components_shared_products_services';
  info: {
    displayName: 'productsService';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServiceOverview extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_overviews';
  info: {
    displayName: 'ServiceOverview';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedWhyChooseUsItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_choose_us_items';
  info: {
    displayName: 'WhyChooseUsItem';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-section': SharedAboutSection;
      'shared.contact-info': SharedContactInfo;
      'shared.customer-review': SharedCustomerReview;
      'shared.hero-section': SharedHeroSection;
      'shared.media': SharedMedia;
      'shared.products-service': SharedProductsService;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.service-overview': SharedServiceOverview;
      'shared.slider': SharedSlider;
      'shared.why-choose-us-item': SharedWhyChooseUsItem;
    }
  }
}
