<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <!-- code here -->
          <v-alert>
            {{ testMethod }}
          </v-alert>
          <v-btn @click="increment" color="primary"> + </v-btn>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Logo, VuetifyLogo } from '~/components'
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import { counterStore } from '@/store'

const counter = namespace('counter') // if using namespace

@Component({
  components: {
    Logo,
    VuetifyLogo
  }
})
export default class Index extends Vue {
  get testMethod() {
    return counterStore.getCounter
  }

  // if using namespace:

  // @counter.Action
  // increment!: () => void
  //  => this is equivalent to ...mapActions in computed prop

  // @counter.Mutation
  // INCREMENT_COUNTER!: () => void
    //  => this is equivalent to ...mapMutations in computed prop

  // if not using namespace:
  private increment() {
    return counterStore.increment()
  }
}
</script>
