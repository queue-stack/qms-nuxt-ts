import Vue from 'vue'
import Vuetify from 'vuetify'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import QmsDashCard from '@/components/dashboard/QmsDashCard.vue'

describe('QmsDashCard', () => {
  const localVue = createLocalVue()
  Vue.use(Vuetify)

  const vuetify = new Vuetify({})

  const wrapper = shallowMount(QmsDashCard, {
    localVue,
    vuetify
  })
  
  test('should be vue', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
