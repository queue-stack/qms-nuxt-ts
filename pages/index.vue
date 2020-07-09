<template>
    <v-container fluid>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-row>
        <v-col
          v-for="item in dashCards"
          :key="item.title"
          :cols="$vuetify.breakpoint.xsOnly ? 12 : 3"
        >
          <QmsDashCard
            :title="item.title"
            :icon="item.icon"
            :routeName="item.routeName"
          />
        </v-col>
      </v-row>
    </v-container>
</template>

<script lang="ts">
import QmsDashCard from '../components/dashboard/QmsDashCard.vue'
import { Logo, VuetifyLogo } from '~/components'
import { Vue, Component, namespace } from 'nuxt-property-decorator'
import { counterStore } from '@/store'

// const counter = namespace('counter') // if using namespace

@Component({
  components: {
    Logo,
    VuetifyLogo,
    QmsDashCard
  }
})
export default class Index extends Vue {
  private dashCards: object[] = [
    {
      title: 'Agent Access',
      icon: 'face-agent',
      routeName: 'staff'
    },
    {
      title: 'Waiting Area Screen',
      icon: 'monitor',
      routeName: 'waiting'
    },
    {
      title: 'Client Access',
      icon: 'room-service',
      routeName: 'client'
    },
    {
      title: 'Admin',
      icon: 'monitor-dashboard',
      routeName: 'admin'
    },
  ]
  
  
  // get testMethod() {
  //   return counterStore.getCounter
  // }

  // if using namespace:

  // @counter.Action
  // increment!: () => void
  //  => this is equivalent to ...mapActions in computed prop

  // @counter.Mutation
  // INCREMENT_COUNTER!: () => void
    //  => this is equivalent to ...mapMutations in computed prop

  // if not using namespace:
  // private increment() {
  //   return counterStore.increment()
  // }
}
</script>
