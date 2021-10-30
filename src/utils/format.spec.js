import { dateFormat, embedFormat } from './format'

test('dateFormat', () => {
  expect(dateFormat(new Date('2020-12-31'))).toBe('2020.12.31')
  expect(dateFormat(new Date('2020-1-1'))).toBe('2020.01.01')
})

const src = {
  YouTube: 'https://www.youtube.com/embed/foo',
  SoundCloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123'
}

test('embedFormat: when including YouTube embed', () => {
  expect(embedFormat(`<iframe src="${src.YouTube}"></iframe>`))
    .toBe(`<div class="ratio ratio-16x9"><iframe src="${src.YouTube}"></iframe></div>`)
})

test('embedFormat: when including SoundCloud embed', () => {
  expect(embedFormat(`<iframe src="${src.SoundCloud}"></iframe>`))
    .toBe(`<iframe style="width: 100%; height: 120px;" src="${src.SoundCloud}"></iframe>`)
})

test('embedFormat: when including multiple YouTube embed', () => {
  expect(embedFormat(`<iframe src="${src.YouTube}"></iframe>\n`.repeat(2)))
    .toBe(`<div class="ratio ratio-16x9"><iframe src="${src.YouTube}"></iframe></div>\n` +
      `<div class="ratio ratio-16x9"><iframe src="${src.YouTube}"></iframe></div>\n`)
})

test('embedFormat: when including YouTube and SoundCloud embed', () => {
  expect(embedFormat(`<iframe src="${src.YouTube}"></iframe>\n<iframe src="${src.SoundCloud}"></iframe>`))
    .toBe(`<div class="ratio ratio-16x9"><iframe src="${src.YouTube}"></iframe></div>\n` +
      `<iframe style="width: 100%; height: 120px;" src="${src.SoundCloud}"></iframe>`)
})
