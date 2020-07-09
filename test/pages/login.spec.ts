import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import login from '@/pages/login.vue'

describe('login', () => {
  const localVue = createLocalVue()
  Vue.use(Vuetify)

  const vuetify = new Vuetify({})

  const wrapper = shallowMount(login, {
    localVue,
    vuetify
  })
  
  test('should be vue', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
