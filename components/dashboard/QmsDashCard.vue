<template>
  <qms-card :title="title">
    <v-card-text class="text-center">
      <v-icon x-large>
        mdi-{{ icon }}
      </v-icon>
    </v-card-text>
    <v-card-actions>
      <v-row justify="center">
        <v-btn
          color="primary"
          nuxt :to="{ name: routeName }"
        >
          Go
        </v-btn>
      </v-row>
    </v-card-actions>
  </qms-card>
</template>

<script lang="ts">
  import QmsCard from '@/components/QmsCard.vue'
  import { Vue, Component, Prop } from "nuxt-property-decorator"

  @Component({
    components: {
      QmsCard
    }
  })
  export default class QmsDashCard extends Vue {
    @Prop(String) title!: string
    @Prop({ type: String, default: 'face-agent' }) icon!: string
    @Prop(String) routeName!: string
  }
</script>

<style scoped>

</style>