import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptions}
 */
const config = {
  name: 'Fluent Commerce',
  entryPointUriPath,
  cloudIdentifier: 'gcp-eu',
  env: {
    development: {
      initialProjectKey: 'commercetools-learning',
    },

    production: {
      applicationId: 'cl46u4u0r14245201nlx953v75i',
      url: 'https://commercetool-learning.pages.dev/',
    },
  },

  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },

  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Fluent Commerce',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },

  submenuLinks: [
    // {
    //   uriPath: 'channels',
    //   defaultLabel: 'Channels',
    //   labelAllLocales: [],
    //   permissions: [PERMISSIONS.View],
    // },
    {
      uriPath: 'product-sync',
      defaultLabel: 'Product Sync',
    },
    {
      uriPath: 'category-sync',
      defaultLabel: 'Category Sync',
    },
    {
      uriPath: 'inventory-sync',
      defaultLabel: 'Inventory Sync',
    },
    {
      uriPath: 'store-locator-grid',
      defaultLabel: 'Store Locator Grid',
    },
    {
      uriPath: 'store-locator-sync',
      defaultLabel: 'Store Locator Sync',
    },
    {
      uriPath: 'fluent-commerce-log',
      defaultLabel: 'Fluent Commerce Log',
    },
  ],
};

export default config;
