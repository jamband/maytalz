module.exports =
  process.env.NODE_ENV === 'production'
    ? {
        content: [
          './src/**/*.vue',
          './src/utils/*.js'
        ],
        defaultExtractor (content) {
          const _content = content.replace(/<style[^]+?<\/style>/gi, '')
          return _content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
        },
        safelist: {
          standard: [
            '__layout',
            '__nuxt',
            'body',
            'html',
            /-(leave|enter|appear)(|-(to|from|active))$/,
            /^(?!(|.*?:)cursor-move).+-move$/,
            /^nuxt-link(|-exact)-active$/,
            /^nuxt-progress(|-failed)$/,
            /data-v-.*/
          ],
          deep: [
            /^post$/,
            /^h(1|2|3|4|5|6)$/
          ]
        }
      }
    : false
