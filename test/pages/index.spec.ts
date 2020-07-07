import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex, { Store } from 'vuex'
import { VuexModule, getModule } from 'vuex-module-decorators'
import Counter from '@/store/counter'
import { counterStore } from '@/store'
import index from '@/pages/index.vue'

let wrapper: any

describe('index', () => {
  const localVue = createLocalVue()
  Vue.use(Vuetify)

  const vuetify = new Vuetify({})

  Vue.use(Vuex)

  
  beforeEach(() => {
    let store: Store<any> = new Vuex.Store({})
    const module = getModule(Counter, store)
    
    wrapper = shallowMount(index, {
      localVue,
      vuetify,
      store
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
