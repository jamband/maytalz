require('dotenv').config()

const contentful = require('./plugins/contentful').default

export default {
  mode: 'universal',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'foo' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: {
    color: '#f27242'
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/app.scss'
  ],
  plugins: [
    '~/plugins/app.js',
    '~/plugins/format.js',
    '~/plugins/fontawesome.js'
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/markdownit',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  build: {
    // analyze: true
  },
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
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_FOO_TYPE_ID: process.env.CONTENTFUL_FOO_TYPE_ID
  },
  generate: {
    fallback: true,
    async routes () {
      const [posts, tags] = await Promise.all([
        contentful.getEntries({
          content_type: process.env.CONTENTFUL_FOO_TYPE_ID
        }),
        contentful.getEntries({
          content_type: process.env.CONTENTFUL_TAG_TYPE_ID
        })
      ])
      return [
        ...posts.items.map((post) => {
          return {
            route: post.fields.slug,
            payload: post
          }
        }),
        ...tags.items.map((tag) => {
          return {
            route: `tags/${tag.sys.id}`,
            payload: tag
          }
        })
      ]
    }
  },
  // top level options for packages
  manifest: {
    name: 'Foo',
    short_name: 'Foo',
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
      '~/assets/css/variables/*.scss'
    ]
  }
}
