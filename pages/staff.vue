<template>
<v-container>
  <v-row justify="center">
    <v-col :cols="$vuetify.breakpoint.xsOnly ? 12 : 6">
      <qms-card title="Service Name">
        <v-card-text>
          <v-row align="center" justify="center">
            <qrcode :value="qrValue" :options="options" />
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-row justify="center">
            <v-btn color="primary">Stop service</v-btn>
          </v-row>
        </v-card-actions>
      </qms-card>
    </v-col>

    <v-col :cols="$vuetify.breakpoint.xsOnly ? 12 : 6">
      <QmsCard title="Choose Desk">
        <v-card-text>
          <v-row justify="center">
            <v-col
              v-for="desk in desks"
              :key="desk.desk"
            >
              <v-btn
                outlined
                color="secondary"
              >Desk {{desk.desk}}</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </QmsCard>
    </v-col>

    <v-col :cols="$vuetify.breakpoint.xsOnly ? 12 : 6">
      <v-card>
        <v-card-title>
          Queue management
        </v-card-title>
        <v-card-text class="text-center">
          <v-card outlined>
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
            <v-card-actions>
              <v-btn small color="yellow darken-4" disabled>Call client</v-btn>
              <v-spacer></v-spacer>
              <v-btn small color="green darken-4">Next client</v-btn>
            </v-card-actions>
          </v-card>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script lang="ts">
import QmsCard from '../components/QmsCard.vue'
import { Vue, Component } from "nuxt-property-decorator"
import { counterStore } from '@/store'

@Component({
  components: { QmsCard }
})
export default class Staff extends Vue {
  private options: object = {
    width: '50%',
    color: { dark: '#2075d8' }
  }

  private qrValue: string = 'https://github.com/sniperadmin'

  private desks: object[] = [
    {
      desk: 1
    },
    {
      desk: 2
    },
    {
      desk: 3
    },
    {
      desk: 4
    },
    {
      desk: 5
    }
  ]
}
</script>

<style scoped>

</style>
