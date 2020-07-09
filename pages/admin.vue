<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        v-for="widget in widgets"
        :key="widget.id"
      >
        <qms-card :title="widget.title" :icon="widget.icon">
          <v-card-text class="text-center">
            {{ widget.value }}
          </v-card-text>
        </qms-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import QmsCard from '../components/QmsCard.vue'
import { Vue, Component } from "nuxt-property-decorator"

@Component({
  components: { QmsCard }
})
export default class Waiting extends Vue {
  private widgets: object[] = [
    {
      id: 1,
      icon: 'tray-full',
      title: 'On waiting',
      value: 0
    },
    {
      id: 2,
      icon: 'remote-desktop',
      title: 'At Desks',
      value: 0
    },
    {
      id: 3,
      icon: 'ticket-account',
      title: 'Tickets',
      value: 0
    },
    {
      id: 4,
      icon: 'timeline-clock-outline',
      title: 'AWT',
      value: 0
    },
    {
      id: 5,
      icon: 'timeline-clock',
      title: 'Longest WT',
      value: 0
    },
  ]
}
</script>

<style scoped>

</style>