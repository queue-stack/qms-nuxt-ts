import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import staff from '@/pages/staff.vue'
import Vuex from 'vuex'
import VueQrcode from '@chenfengyuan/vue-qrcode'

describe('staff', () => {
  const localVue = createLocalVue()
  Vue.use(Vuetify)
  Vue.use(Vuex)
  localVue.use(VueQrcode)
  
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

  const wrapper = shallowMount(staff, {
    localVue,
    vuetify,
    store,
    stubs: ['qrcode']
  })
  
  test('should be vue', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
