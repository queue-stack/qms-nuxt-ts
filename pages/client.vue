<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col>
        <qms-card title="What would you like us to do for you?">
          <v-card-text>
            <h3>
              current services:
            </h3>
            <v-row>
              <v-col
                v-for="service in services"
                :key="service.number"
              >
                <v-btn
                  color="primary"
                  outlined
                >
                  Service #{{ service.number }}
                </v-btn>
              </v-col>
            </v-row>
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
  private services: object[] = [
    {
      number: 1
    },
    {
      number: 2
    },
    {
      number: 3
    },
    {
      number: 4
    },
    {
      number: 5
    },
  ]
}
</script>

<style scoped>

</style>