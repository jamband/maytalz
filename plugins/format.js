export function dateFormat (value) {
  const date = new Date(value)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = (date.getDate()).toString().padStart(2, '0')
  return `${year}.${month}.${day}`
}

export function embedResponsiveFormat (value) {
  const pattern = {
    SoundCloud: /(<iframe)(.+https:\/\/w\.soundcloud\.com\/player.+><\/iframe>)/g,
    YouTube: /(<iframe)(.+https:\/\/www\.youtube\.com\/embed.+><\/iframe>)/g
  }
  const html = {
    SoundCloud: '$1 style="width: 100%; height: 120px;"$2',
    YouTube: '<div class="embed-responsive embed-responsive-16by9">$1 class="embed-responsive-item"$2</div>'
  }
  if (pattern.YouTube.test(value)) {
    value = value.replace(pattern.YouTube, html.YouTube)
  }
  if (pattern.SoundCloud.test(value)) {
    value = value.replace(pattern.SoundCloud, html.SoundCloud)
  }
  return value
}
