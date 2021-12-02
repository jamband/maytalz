module.exports =
  process.env.NODE_ENV === 'production'
    ? {
        content: [
          './dist/**/*.html',
          './src/**/*.vue',
          './src/utils/*.js'
        ],
        defaultExtractor (content) {
          const _content = content.replace(/<style[^]+?<\/style>/gi, '')
          return _content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
        },
        safelist: [
          '__layout',
          '__nuxt',
          'body',
          'html',
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^nuxt-link(|-exact)-active$/,
          /^nuxt-progress(|-failed)$/,
          /data-v-.*/,
          /^post\[data-v-.*\] */
        ]
      }
    : false
