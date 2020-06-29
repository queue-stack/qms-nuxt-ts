import Vue from "vue"
import { mount, createLocalVue } from "@vue/test-utils"
import Vuetify from "vuetify"
import QmsCard from "@/components/QmsCard.vue"

describe("QmsCard", () => {
  // global
  let wrapper: any
  const localVue = createLocalVue()
  const vuetify = new Vuetify()
  Vue.use(Vuetify)

  beforeEach(() => {
    // using mount with subtree components
    wrapper = mount(QmsCard, {
      localVue,
      vuetify,
      slots: {
        // default slot <slot></slot>
        default: "<h3 class='sb-test'></h3>",
        // named slots
        "custom-title": "<div>subsbase</div>",
        "header-actions": "<span>header actions</span>",
      },
    })
  })

  test("should load title slot", () => {
    const fakeTitle = wrapper.findAll(".sb-test")
    expect(fakeTitle.length).toBe(1)
  })

  test("should load named slots correctly", () => {
    const customTitleWapper = wrapper.find(".container").find("div")
    const headerActionsWrapper = wrapper.find(".v-card").find("span")

    expect(customTitleWapper.text()).toBe("subsbase")
    expect(headerActionsWrapper.text()).toBe("header actions")
  })

  test("should test all props", () => {
    wrapper.setProps({ title: "subsbase", })

    expect(wrapper.props().title).toBe("subsbase")
    expect(typeof wrapper.props().raised).toBe("boolean")
    expect(typeof wrapper.props().loading).toBe("boolean")
    expect(typeof wrapper.props().disabled).toBe("boolean")
  })
})

describe("tests card reusability", () => {
  const localVue = createLocalVue()
  const vuetify = new Vuetify()

  const comp = {
    template: `<sb-card>
      <template v-slot:custom-title>
        <span class="test">{{ customTitle }}</span>
      </template>
      <template v-slot:header-actions>
        <h4>actions</h4>
      </template>
      <h1>content</h1>
    </sb-card>`,
  }
  const wrapper = mount(comp, {
    localVue,
    vuetify,
    components: {
      "sb-card": QmsCard,
    },
    data () {
      return {
        customTitle: "title",
      }
    },
  })

  test("should load card", () => {
    // locating the <div class="flex">
    const flexElement = wrapper.find(".flex")
    const title = wrapper.find(".test")
    const actions = wrapper.find("h4")

    // ensuring the header-actions are positioned as desired in the sb card component
    expect(flexElement.classes()).toContain("justify-space-between")
    // ensuring that header has subsbase custome styling
    expect(flexElement.classes()).toContain("profile-header")
    // custom title with content
    expect(actions.text()).toContain("actions")
    expect(title.text()).toContain("title")
  })
})
