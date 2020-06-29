import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import inspire from '@/pages/inspire.vue'

describe('inspire', () => {
  const localVue = createLocalVue()
  Vue.use(Vuetify)
  
  const vuetify = new Vuetify({})

  const wrapper = shallowMount(inspire, {
    localVue,
    vuetify
  })

  test('should be a vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.vm.$data.test).toBe(true)
  })
})
