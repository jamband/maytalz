import { mount } from '@vue/test-utils'
import CreatedDate from '~/components/CreatedDate'

const factory = (slot) => {
  return mount(CreatedDate, {
    slots: {
      default: slot
    }
  })
}

test('date: 2020.01.01', () => {
  const wrapper = factory('2020.01.01')
  expect(wrapper.text()).toBe('2020.01.01')
})
