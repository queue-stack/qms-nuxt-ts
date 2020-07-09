import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import client from '@/pages/client.vue'

describe('client', () => {
  const localVue = createLocalVue()
  Vue.use(Vuetify)

  const vuetify = new Vuetify({})

  const wrapper = shallowMount(client, {
    localVue,
    vuetify
  })
  
  test('should be vue', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should load 5 btns', () => {
    const btns = wrapper.findAll('v-btn-stub')
    expect(btns.length).toBe(5)
  })
})
