import Vue from "vue"
import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import Vuetify from "vuetify"
import QmsInput from "@/components/QmsInput.vue"

describe("QmsInput", () => {
  let wrapper: any
  const localVue = createLocalVue()

  Vue.use(Vuetify)

  const vuetify = new Vuetify()

  beforeEach(() => {
    wrapper = shallowMount(QmsInput, {
      localVue,
      vuetify,
      propsData: {
        label: "meow",
        hideDetails: false,
        rules: []
      },
    })
  })

  afterEach(() => {
    wrapper.destroy()
  })

  test("checks props type", () => {
    expect(typeof wrapper.vm.$props).toBe("object")
  })

  test("emits correct events", () => {
    const stub = jest.fn()
    wrapper.vm.$on("enter", stub)
    wrapper.vm.$on("input", stub)

    wrapper.vm.$emit("enter")
    wrapper.vm.$emit("input", "some text")
    expect(stub).toBeCalled()
    expect(stub).toBeCalledWith("some text")
  })

  test("should load label", async () => {
    const label = wrapper.find("v-label-stub")
    wrapper.setProps({ label: "test label", })

    await wrapper.vm.$nextTick()

    expect(label.exists()).toBe(true)
    expect(label.text()).toBe("test label")
  })

  test("should load input value", async () => {
    const input = wrapper.find("v-text-field-stub")
    wrapper.setProps({ value: null, })
    
    await wrapper.vm.$nextTick()

    expect(input.exists()).toBe(true)
    expect(!wrapper.vm.$props.value).toBeTruthy()
  })

  test('should test textarea', async () => {
    wrapper.setProps({ textArea: true })
    await wrapper.vm.$nextTick()

    const textarea = wrapper.find('v-textarea-stub')
    if (wrapper.vm.$props.textArea === true) {
      expect(textarea.exists()).toBe(true)
    } else {
      expect(textarea.exists()).toBe(false)
    }
  })

  test("should test true added attrs into input", () => {
    const input = wrapper.find("v-text-field-stub")
    expect(input.attributes().outlined).toBe("true")
    expect(input.attributes().singleline).toBe("true")
  })

  test("should load rules", async () => {
    const input = wrapper.find("v-text-field-stub")
    const mockedRules = [false]
    wrapper.setProps({ rules: mockedRules, })
    await wrapper.vm.$nextTick()
    expect(input.props("rules")).toContain(mockedRules[0])
  })
})

describe("testing input reusability", () => {
  Vue.use(Vuetify)
  const comp = {
    template: "<qms-input :value='value' :hide-details='false' :rules='[rules]' label='label' />",
    components: { "qms-input": QmsInput, },
  }
  const validator = () => false
  const localVue = createLocalVue()
  const wrapper = mount(comp, {
    localVue,
    data () {
      return {
        rules: validator,
        value:null
      }
    },
  })

  test("should load component", async () => {
    const input = wrapper.find(".v-input")
    const label = wrapper.find(".v-label")
    const messages = wrapper.find(".v-messages__wrapper")

    expect(label.exists()).toBe(true)
    expect(messages.exists()).toBe(true)

    expect(input.attributes().value).toBe(undefined)

    wrapper.vm.$data.value = '10'

    await wrapper.vm.$nextTick()
    console.log(input.attributes().value)
  })

  test("should load the rules", () => {
    const input = wrapper.find(".v-input")

    expect(input.props("rules")).toContain(validator)
  })
})