/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export type CartItems = {
  product?: string | Product;
  quantity?: number;
  id?: string;
}[];

export interface Config {
  collections: {
    pages: Page;
    products: Product;
    orders: Order;
    media: Media;
    categories: Category;
    users: User;
    redirects: Redirect;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    settings: Settings;
    header: Header;
    footer: Footer;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  publishedOn?: string ;
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?:
      | {
      link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
          relationTo: 'pages';
          value: string | Page;
            } | null;
            url?: string | null;
        label: string;
        icon?: string | Media;
        appearance?: 'default' | 'primary' | 'secondary';
      };
      id?: string;
    }[];
    media: string | Media;
  };
  layout: (
    | {
        invertBackground?: boolean;
        richText: {
          [k: string]: unknown;
        }[];
        links?: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              relationTo: 'pages';
              value: string | Page;
            };
            url: string;
            label: string;
            icon?: string | Media;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean;
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              relationTo: 'pages';
              value: string | Page;
            };
            url: string;
            label: string;
            icon?: string | Media;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean;
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'products';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | {
              relationTo: 'products';
              value: string;
            }[]
          | {
              relationTo: 'products';
              value: Product;
            }[];
        populatedDocs?:
          | {
              relationTo: 'products';
              value: string;
            }[]
          | {
              relationTo: 'products';
              value: Product;
            }[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
  slug?: string;
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Media {
  id: string;
  alt: string;
  caption?: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Category {
  id: string;
  title: string;
  media?: string | Media;
  parent?: string | Category;
  breadcrumbs?: {
    doc?: string | Category;
    url?: string;
    label?: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Product {
  id: string;
  title: string;
  publishedOn?: string;
  layout?: (
    | {
        invertBackground?: boolean;
        richText: {
          [k: string]: unknown;
        }[];
        links?: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              relationTo: 'pages';
              value: string | Page;
            };
            url: string;
            label: string;
            icon?: string | Media;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean;
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              relationTo: 'pages';
              value: string | Page;
            };
            url: string;
            label: string;
            icon?: string | Media;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean;
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'products';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | {
              relationTo: 'products';
              value: string;
            }[]
          | {
              relationTo: 'products';
              value: Product;
            }[];
        populatedDocs?:
          | {
              relationTo: 'products';
              value: string;
            }[]
          | {
              relationTo: 'products';
              value: Product;
            }[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
  stripeProductID?: string;
  priceJSON?: string;
  enablePaywall?: boolean;
  paywall?: (
    | {
        invertBackground?: boolean;
        richText: {
          [k: string]: unknown;
        }[];
        links?: {
          link: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              relationTo: 'pages';
              value: string | Page;
            };
            url: string;
            label: string;
            icon?: string | Media;
            appearance?: 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean;
        columns?: {
          size?: 'oneThird' | 'half' | 'twoThirds' | 'full';
          richText: {
            [k: string]: unknown;
          }[];
          enableLink?: boolean;
          link?: {
            type?: 'reference' | 'custom';
            newTab?: boolean;
            reference: {
              relationTo: 'pages';
              value: string | Page;
            };
            url: string;
            label: string;
            icon?: string | Media;
            appearance?: 'default' | 'primary' | 'secondary';
          };
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean;
        position?: 'default' | 'fullscreen';
        media: string | Media;
        id?: string;
        blockName?: string;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: 'collection' | 'selection';
        relationTo?: 'products';
        categories?: string[] | Category[];
        limit?: number;
        selectedDocs?:
          | {
              relationTo: 'products';
              value: string;
            }[]
          | {
              relationTo: 'products';
              value: Product;
            }[];
        populatedDocs?:
          | {
              relationTo: 'products';
              value: string;
            }[]
          | {
              relationTo: 'products';
              value: Product;
            }[];
        populatedDocsTotal?: number;
        id?: string;
        blockName?: string;
        blockType: 'archive';
      }
  )[];
  categories?: string[] | Category[];
  relatedProducts?: string[] | Product[];
  slug?: string;
  skipSync?: boolean;
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Order {
  id: string;
  orderedBy?: string | User;
  stripePaymentIntentID?: string;
  total: number;
  items?: {
    product: string | Product;
    price?: number;
    quantity?: number;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface User {
  id: string;
  name?: string;
  roles?: ('admin' | 'customer')[];
  purchases?: string[] | Product[];
  stripeCustomerID?: string;
  cart?: {
    items?: CartItems;
  };
  skipSync?: boolean;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password: string;
}
export interface Redirect {
  id: string;
  from: string;
  to: {
    type?: 'reference' | 'custom';
    reference:
      | {
          relationTo: 'pages';
          value: string | Page;
        }
      | {
          relationTo: 'products';
          value: string | Product;
        };
    url: string;
  };
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string;
  batch?: number;
  updatedAt: string;
  createdAt: string;
}
export interface Settings {
  id: string;
  productsPage?: string | Page;
  updatedAt?: string;
  createdAt?: string;
}
export interface Header {
  id: string;
  navItems?: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        relationTo: 'pages';
        value: string | Page;
      };
      url: string;
      label: string;
      icon?: string | Media;
    };
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}
export interface Footer {
  id: string;
  copyright: string;
  navItems?: {
    link: {
      type?: 'reference' | 'custom';
      newTab?: boolean;
      reference: {
        relationTo: 'pages';
        value: string | Page;
      };
      url: string;
      label: string;
      icon?: string | Media;
    };
    id?: string;
  }[];
  updatedAt?: string;
  createdAt?: string;
}

/*
declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
  */