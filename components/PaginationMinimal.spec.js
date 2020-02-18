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

test('total: 0', () => {
  const wrapper = factory({ total: 0 })
  expect(wrapper.html()).toBe('')
})

test('total: 5, currentPage: 1', () => {
  const wrapper = factory({ total: 5 }, { params: { page: 1 } })
  const li = wrapper.findAll('ul > li')

  expect(li.at(0).classes()).toContain('disabled')
  expect(li.at(1).classes()).toContain('disabled')
  expect(li.at(2).classes()).not.toContain('disabled')
  expect(li.at(3).classes()).not.toContain('disabled')

  expect(li.at(0).find(RouterLinkStub).props().to).toEqual({ name: 'index' })
  expect(li.at(1).find(RouterLinkStub).props().to).toEqual({ name: 'posts-page-page', params: { page: 0 } })
  expect(li.at(2).find(RouterLinkStub).props().to).toEqual({ name: 'posts-page-page', params: { page: 2 } })
  expect(li.at(3).find(RouterLinkStub).props().to).toEqual({ name: 'posts-page-page', params: { page: 3 } })

  expect(wrapper.find('.pagination-minimal-info').text()).toBe('1/3')
})

test('total: 5, current page: 2', () => {
  const wrapper = factory({ total: 5 }, { params: { page: 2 } })
  const li = wrapper.findAll('ul > li')

  expect(li.at(0).classes()).not.toContain('disabled')
  expect(li.at(1).classes()).not.toContain('disabled')
  expect(li.at(2).classes()).not.toContain('disabled')
  expect(li.at(3).classes()).not.toContain('disabled')

  expect(li.at(0).find(RouterLinkStub).props().to).toEqual({ name: 'index' })
  expect(li.at(1).find(RouterLinkStub).props().to).toEqual({ name: 'posts-page-page', params: { page: 1 } })
  expect(li.at(2).find(RouterLinkStub).props().to).toEqual({ name: 'posts-page-page', params: { page: 3 } })
  expect(li.at(3).find(RouterLinkStub).props().to).toEqual({ name: 'posts-page-page', params: { page: 3 } })

  expect(wrapper.find('.pagination-minimal-info').text()).toBe('2/3')
})

test('total: 5, current page: 3', () => {
  const wrapper = factory({ total: 5 }, { params: { page: 3 } })
  const li = wrapper.findAll('ul > li')

  expect(li.at(0).classes()).not.toContain('disabled')
  expect(li.at(1).classes()).not.toContain('disabled')
  expect(li.at(2).classes()).toContain('disabled')
  expect(li.at(3).classes()).toContain('disabled')

  expect(li.at(0).find(RouterLinkStub).props().to).toEqual({ name: 'index' })
  expect(li.at(1).find(RouterLinkStub).props().to).toEqual({ name: 'posts-page-page', params: { page: 2 } })
  expect(li.at(2).find(RouterLinkStub).props().to).toEqual({ name: 'posts-page-page', params: { page: 4 } })
  expect(li.at(3).find(RouterLinkStub).props().to).toEqual({ name: 'posts-page-page', params: { page: 3 } })

  expect(wrapper.find('.pagination-minimal-info').text()).toBe('3/3')
})
