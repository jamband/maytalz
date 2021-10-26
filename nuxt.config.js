import { APP_NAME, APP_DESCRIPTION, APP_URL } from './constants/app'

export default {
  target: 'static',
  ssr: true,
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/icons', pathPrefix: false }
  ],
  head: {
    titleTemplate: `%s - ${APP_NAME}`,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: APP_DESCRIPTION },

      { hid: 'og:site_name', property: 'og:site_name', content: APP_NAME },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: APP_URL }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    './assets/css/app.scss'
  ],
  plugins: [
    '~/plugins/contentful.js'
  ],
  buildModules: [
    'nuxt-purgecss'
  ],
  modules: [
    '@nuxtjs/markdownit'
  ],
  build: {
    // analyze: true,
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
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    typography: true,
    use: []
  },
  purgeCSS: {
    // enabled: true,
    paths: [
      './icons/**/*.vue',
      './utils/*.js'
    ],
    whitelist: () => [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6'
    ],
    extractors: () => []
  }
}
