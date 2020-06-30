<template>
  <v-container
    class="ma-0 pa-0"
    fluid
  >
    <v-row
      no-gutters
      align="start"
      justify="start"
    >
      <v-col :cols="cols">
        <v-label
          :for="labelFor"
        >
          {{ label }}
          <span v-if="rules.length > 0" class="red--text">*</span>
        </v-label>
        <v-text-field
          v-if="!textArea"
          :hide-details="hideDetails"
          :hint="hint"
          :persistent-hint="persistentHint"
          :value="value"
          :rules="rules"
          :type="type"
          :placeholder="placeholder"
          :error-messages="errorMessages"
          :disabled="disabled"
          :clearable="clearable"
          @input="$emit('input', $event)"
          @keyup="$emit('keyup', $event)"
          @keyup.enter="$emit('enter')"
          dense
          color="black"
          single-line
          outlined
          background-color="#fafafa"
          clear-icon="mdi-close-circle-outline"
        />
        <v-textarea
          v-if="textArea"
          :dense="dense"
          :filled="filled"
          :disabled="disabled"
          :rules="rules"
          :value="value"
          class="sb-input-field"
          color="black"
          background-color="#fafafa"
          outlined
          single-line
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  props: {
    label: {
      type: String,
      default: null,
    },
    // enabel text-area
    textArea: {
      type: Boolean,
      default: false,
    },
    // text area attrs
    dense: {
      type: Boolean,
      default: false,
    },
    filled: {
      type: Boolean,
      default: false,
    },
    // all common attrs
    value: {
      type: [String || Number],
      default: null,
    },
    hint: {
      type: String,
      default: null,
    },
    persistentHint: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: null,
    },
    cols: {
      type: Number,
      default: 12,
    },
    labelFor: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    hideDetails: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    errorMessages: {
      type: Array,
      default: null,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
  },
})
export default class QmsInput extends Vue {}
</script>

<style>
</style>
