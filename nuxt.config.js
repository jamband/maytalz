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
    color: '#fff'
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/app.scss'
  ],
  plugins: [
    '~/plugins/fontawesome.js'
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa'
  ],
  build: {
    analyze: true
  },
  bootstrapVue: {
    componentPlugins: [
      'NavbarPlugin'
    ],
    components: [
      'BNav', 'BNavItem', 'BNavItemDropdown',
      'BNavbar', 'BNavbarBrand', 'BNavbarNav', 'BNavbarToggle',
      'BDropdown', 'BDropdownDivider', 'BDropdownItem',
      'BCollapse'
    ],
    directivePlugins: false,
    directives: false,
    bootstrapCSS: false,
    bootstrapVueCSS: false
  }
}
