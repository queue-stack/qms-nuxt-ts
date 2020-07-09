<template>
  <v-card
    :width="width"
    :loading="loading"
    :disabled="disabled"
    :raised="raised"
    :flat="flat"
  >
    <v-flex
      v-if="!noTitle"
      class="profile-header d-flex justify-space-between"
    >
      <v-container fluid>
        <v-icon v-if="icon" left>mdi-{{ icon }}</v-icon>
        {{ title }}
        <slot name="custom-title" />
      </v-container>
      <v-card flat color="#fafafa">
        <slot name="header-actions" />
      </v-card>
    </v-flex>
    <v-divider></v-divider>
    <slot />
  </v-card>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component({
  name: "Card",
  props: {
    noTitle: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null,
    },
    width: {
      type: [String, Number],
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    raised: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
  },
})
export default class QmsCard extends Vue {}
</script>

<style scoped>
.profile-header {
    /* background-color: #fafafa !important; */
    /* color: #20407d !important; */
    font-size: 18px !important;
    font-weight: 500 !important;
}
</style>
