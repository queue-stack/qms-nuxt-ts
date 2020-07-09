<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col>
        <qms-card title="Waiting Tickets will be here">
          <v-card-text>
            <h3>
              current client:
            <!-- this should show the current number -->
              {{ $store.getters['counter/getCounter'] }}
            </h3>
            <h3>
              People in line:
              0
            </h3>
          </v-card-text>
        </qms-card>
      </v-col>
      <v-col>
        <qms-card title="Some Ads on this Area">
          <v-card-text>
            <h3>Ads. Here</h3>
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
export default class Waiting extends Vue {}
</script>

<style scoped>

</style>