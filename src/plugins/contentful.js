export default ({ $config }, inject) => {
  const contentful = require('contentful')
  inject('contentful', contentful.createClient({
    space: $config.contentfulSpaceId,
    accessToken: $config.contentfulAccessToken
  }))
}
