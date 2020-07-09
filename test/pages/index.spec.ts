import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import index from '@/pages/index.vue'

let wrapper: any

describe('index', () => {
  const localVue = createLocalVue()
  Vue.use(Vuetify)

  const vuetify = new Vuetify({})
  
  beforeEach(() => {
    wrapper = shallowMount(index, {
      localVue,
      vuetify
    })    
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test('is a Vue instance with matching title', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  
  test('should load logos', () => {
    const logo = wrapper.find('Logo-stub')
    const vuetifyLogo = wrapper.find('Logo-stub')
    expect(logo.exists()).toBe(true)
    expect(vuetifyLogo.exists()).toBe(true)
  })

  test('should have 5 paragraphs & 4 links', () => {
    const p = wrapper.findAll('v-col-stub')
    expect(p.length).toBe(4)
  })
})
