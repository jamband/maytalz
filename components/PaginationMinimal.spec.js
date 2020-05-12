import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import PaginationMinimal from '~/components/PaginationMinimal'
import pluginFontAwesome from '~/plugins/fontawesome'

const localVue = createLocalVue()

localVue.use(pluginFontAwesome)

const factory = (props = {}, route = {}) => {
  return mount(PaginationMinimal, {
    localVue,
    propsData: props,
    stubs: {
      NLink: RouterLinkStub
    },
    mocks: {
      $route: route
    }
  })
}

const [FIRST, PREV, NEXT, LAST] = [0, 1, 2, 3]

test('total: 0', () => {
  const wrapper = factory({ total: 0 })
  expect(wrapper.html()).toBe('')
})

test('total: 5, currentPage: 1', () => {
  const wrapper = factory({ total: 5 }, { params: { page: 1 } })
  const li = wrapper.findAll('ul > li')

  expect(li.at(FIRST).classes()).toContain('disabled')
  expect(li.at(PREV).classes()).toContain('disabled')
  expect(li.at(NEXT).classes()).not.toContain('disabled')
  expect(li.at(LAST).classes()).not.toContain('disabled')

  expect(li.at(FIRST).find('a').props().to).toEqual({ name: 'index' })
  expect(li.at(PREV).find('a').props().to).toEqual({ name: 'posts-page-page', params: { page: 0 } })
  expect(li.at(NEXT).find('a').props().to).toEqual({ name: 'posts-page-page', params: { page: 2 } })
  expect(li.at(LAST).find('a').props().to).toEqual({ name: 'posts-page-page', params: { page: 3 } })

  expect(wrapper.find('.pagination-minimal-info').text()).toBe('1/3')
})

test('total: 5, current page: 2', () => {
  const wrapper = factory({ total: 5 }, { params: { page: 2 } })
  const li = wrapper.findAll('ul > li')

  expect(li.at(FIRST).classes()).not.toContain('disabled')
  expect(li.at(PREV).classes()).not.toContain('disabled')
  expect(li.at(NEXT).classes()).not.toContain('disabled')
  expect(li.at(LAST).classes()).not.toContain('disabled')

  expect(li.at(FIRST).find('a').props().to).toEqual({ name: 'index' })
  expect(li.at(PREV).find('a').props().to).toEqual({ name: 'posts-page-page', params: { page: 1 } })
  expect(li.at(NEXT).find('a').props().to).toEqual({ name: 'posts-page-page', params: { page: 3 } })
  expect(li.at(LAST).find('a').props().to).toEqual({ name: 'posts-page-page', params: { page: 3 } })

  expect(wrapper.find('.pagination-minimal-info').text()).toBe('2/3')
})

test('total: 5, current page: 3', () => {
  const wrapper = factory({ total: 5 }, { params: { page: 3 } })
  const li = wrapper.findAll('ul > li')

  expect(li.at(FIRST).classes()).not.toContain('disabled')
  expect(li.at(PREV).classes()).not.toContain('disabled')
  expect(li.at(NEXT).classes()).toContain('disabled')
  expect(li.at(LAST).classes()).toContain('disabled')

  expect(li.at(FIRST).find('a').props().to).toEqual({ name: 'index' })
  expect(li.at(PREV).find('a').props().to).toEqual({ name: 'posts-page-page', params: { page: 2 } })
  expect(li.at(NEXT).find('a').props().to).toEqual({ name: 'posts-page-page', params: { page: 4 } })
  expect(li.at(LAST).find('a').props().to).toEqual({ name: 'posts-page-page', params: { page: 3 } })

  expect(wrapper.find('.pagination-minimal-info').text()).toBe('3/3')
})
