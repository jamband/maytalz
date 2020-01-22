import { createLocalVue } from '@vue/test-utils'
import pluginFormat from '~/plugins/format'

const localVue = createLocalVue()

localVue.use(pluginFormat)

describe('plugins: format', () => {
  const $format = localVue.prototype.$format

  test('date', () => {
    expect('2020.12.31').toBe($format.date(new Date('2020-12-31')))
    expect('2021.01.01').toBe($format.date(new Date('2021-1-1')))
  })
})
