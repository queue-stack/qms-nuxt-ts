import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import waiting from '@/pages/waiting.vue'
import Vuex from 'vuex';

describe('waiting', () => {
  const localVue = createLocalVue()
  Vue.use(Vuetify)
  Vue.use(Vuex)

  const vuetify = new Vuetify({})

  const counter = {
    state: {},
    getters: {},
    mutations: {},
    actions: {}
  }
  const store = new Vuex.Store({
    modules: {
      counter
    }
  })
  const wrapper = shallowMount(waiting, {
    localVue,
    vuetify,
    store
  })
  
  test('should be vue', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should load 2 cards', () => {
    const cards = wrapper.findAll('qms-card-stub')
    expect(cards.length).toBe(2)
  })
})
