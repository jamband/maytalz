import { APP_NAME } from './plugins/constants'

export default {
  target: 'static',
  components: true,
  head: {
    titleTemplate: `%s - ${APP_NAME}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `${APP_NAME} is a simple blog` }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/css/app.scss'
  ],
  plugins: [
    '~/plugins/app.js',
    '~/plugins/contentful.js',
    '~/plugins/format.js'
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa'
  ],
  build: {
    // analyze: true
  },
  publicRuntimeConfig: {
    contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
    contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    contentfulMainTypeId: process.env.CONTENTFUL_MAIN_TYPE_ID,
    contentfulTagTypeId: process.env.CONTENTFUL_TAG_TYPE_ID
  },
  generate: {
    fallback: '404.html',
    routes: ['/']
  },
  // top level options for packages
  bootstrapVue: {
    componentPlugins: [
      'NavbarPlugin'
    ],
    components: [
      'BNav', 'BNavItem',
      'BNavbar', 'BNavbarBrand', 'BNavbarNav', 'BNavbarToggle',
      'BCollapse'
    ],
    directivePlugins: false,
    directives: false,
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  manifest: {
    name: APP_NAME,
    short_name: APP_NAME,
    description: `${APP_NAME} built on Nuxt.js + Contentful + Netlify`,
    lang: 'en',
    background_color: '#fff',
    display: 'standalone',
    start_url: '/'
  },
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    typography: true,
    use: []
  },
  styleResources: {
    scss: [
      './assets/css/_variables.scss',
      './node_modules/bootstrap/scss/mixins/_breakpoints.scss'
    ]
  }

}
