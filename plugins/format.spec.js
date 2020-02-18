import { createLocalVue } from '@vue/test-utils'
import pluginFormat from '~/plugins/format'

const localVue = createLocalVue()

localVue.use(pluginFormat)

const $format = localVue.prototype.$format

test('date: 2020-12-31 and 2021-1-1', () => {
  expect($format.date(new Date('2020-12-31'))).toBe('2020.12.31')
  expect($format.date(new Date('2020-1-1'))).toBe('2020.01.01')
})

const src = {
  YouTube: 'https://www.youtube.com/embed/foo',
  SoundCloud: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123'
}

test('embedResponsive: when including YouTube embed', () => {
  expect($format.embedResponsive(`<iframe src="${src.YouTube}"></iframe>`))
    .toBe(`<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="${src.YouTube}"></iframe></div>`)
})

test('embedResponsive: when including SoundCloud embed', () => {
  expect($format.embedResponsive(`<iframe src="${src.SoundCloud}"></iframe>`))
    .toBe(`<iframe style="width: 100%; height: 120px;" src="${src.SoundCloud}"></iframe>`)
})

test('embedResponsive: when including multiple YouTube embed', () => {
  expect($format.embedResponsive(`<iframe src="${src.YouTube}"></iframe>\n`.repeat(2)))
    .toBe(`<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="${src.YouTube}"></iframe></div>\n` +
      `<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="${src.YouTube}"></iframe></div>\n`)
})

test('embedResponsive: when including YouTube and SoundCloud embed', () => {
  expect($format.embedResponsive(`<iframe src="${src.YouTube}"></iframe>\n<iframe src="${src.SoundCloud}"></iframe>`))
    .toBe(`<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="${src.YouTube}"></iframe></div>\n` +
      `<iframe style="width: 100%; height: 120px;" src="${src.SoundCloud}"></iframe>`)
})
