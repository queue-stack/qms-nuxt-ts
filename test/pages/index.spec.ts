import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import index from '@/pages/index.vue'

describe('index', () => {
  const localVue = createLocalVue()
  Vue.use(Vuetify)
  
  const vuetify = new Vuetify({})

  const wrapper = shallowMount(index, {
    localVue,
    vuetify
  })
  test('is a Vue instance with matching title', () => {
    const title = wrapper.find('v-card-title-stub')
    expect(wrapper.vm).toBeTruthy()
    expect(title.text()).toContain('Welcome to the Vuetify')
  })

  
  test('should load logos', () => {
    const logo = wrapper.find('Logo-stub')
    expect(logo.exists()).toBe(true)
  })
  
  test('should load logos', () => {
    const vuetifyLogo = wrapper.find('Logo-stub')
    expect(vuetifyLogo.exists()).toBe(true)
  })
  

  test('should have 5 paragraphs & 4 links', () => {
    const p = wrapper.findAll('p')
    const a = wrapper.findAll('a')
    
    expect(p.length).toBe(5)
    expect(a.length).toBe(5)
  })
  
})
