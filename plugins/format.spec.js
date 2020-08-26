import { dateFormat, embedResponsiveFormat } from '~/plugins/format'

test('dateFormat', () => {
  expect(dateFormat(new Date('2020-12-31'))).toBe('2020.12.31')
  expect(dateFormat(new Date('2020-1-1'))).toBe('2020.01.01')
})

const src = {
  YouTube: 'https://www.youtube.com/embed/foo',
  SoundCloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123'
}

test('embedResponsiveFormat: when including YouTube embed', () => {
  expect(embedResponsiveFormat(`<iframe src="${src.YouTube}"></iframe>`))
    .toBe(`<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="${src.YouTube}"></iframe></div>`)
})

test('embedResponsiveFormat: when including SoundCloud embed', () => {
  expect(embedResponsiveFormat(`<iframe src="${src.SoundCloud}"></iframe>`))
    .toBe(`<iframe style="width: 100%; height: 120px;" src="${src.SoundCloud}"></iframe>`)
})

test('embedResponsiveFormat: when including multiple YouTube embed', () => {
  expect(embedResponsiveFormat(`<iframe src="${src.YouTube}"></iframe>\n`.repeat(2)))
    .toBe(`<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="${src.YouTube}"></iframe></div>\n` +
      `<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="${src.YouTube}"></iframe></div>\n`)
})

test('embedResponsiveFormat: when including YouTube and SoundCloud embed', () => {
  expect(embedResponsiveFormat(`<iframe src="${src.YouTube}"></iframe>\n<iframe src="${src.SoundCloud}"></iframe>`))
    .toBe(`<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="${src.YouTube}"></iframe></div>\n` +
      `<iframe style="width: 100%; height: 120px;" src="${src.SoundCloud}"></iframe>`)
})
