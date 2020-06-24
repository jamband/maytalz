import { shallowMount } from '@vue/test-utils'
import CreatedDate from '~/components/CreatedDate'

const factory = ({ slot }) => {
  return shallowMount(CreatedDate, {
    slots: {
      default: slot
    }
  })
}

test('date: 2020.01.01', () => {
  const wrapper = factory({ slot: '2020.01.01' })
  expect(wrapper.text()).toBe('2020.01.01')
})
