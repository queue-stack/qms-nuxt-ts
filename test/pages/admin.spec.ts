import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import admin from '@/pages/admin.vue'

describe('admin', () => {
  const localVue = createLocalVue()
  Vue.use(Vuetify)

  const vuetify = new Vuetify({})

  const wrapper = shallowMount(admin, {
    localVue,
    vuetify
  })
  
  test('should be vue', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('should load 5 cards', () => {
    const card = wrapper.findAll('qms-card-stub')
    expect(card.length).toBe(5)
  })
})
