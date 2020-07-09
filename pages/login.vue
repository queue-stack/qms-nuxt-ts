<template>
  <div>
    <v-row style="justify-content: center;">
      <v-alert
        v-if="componentError"
        type="error"
        dense
      >
        {{ componentError }}
      </v-alert>
    </v-row>

    <v-row style="justify-content: center;">
      <v-col
        cols="6"
      >
        <qms-card
          :loading="progress"
          :disabled="progress"
          raised
        >
          <template v-slot:custom-title>
            <span class="ml-2">Login</span>
          </template>

          <v-card-text>
            <v-alert
              icon="mdi-shield-lock-outline"
              prominent
              text
              dense
              type="info"
            >
              Testing Credentials
              <v-spacer />
              username: test
              <v-spacer />
              password: 123456
            </v-alert>
            <v-form ref="login" v-model="valid">
              <qms-input
                v-model="user.username"
                :rules="[
                  
                ]"
                label="Username"
                label-for="username"
                type="text"
                placeholder="Username"
              />

              <qms-input
                v-model.trim="user.password"
                :rules="[
                  
                ]"
                label="Password"
                label-for="password"
                type="password"
                placeholder="Password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />

            <v-btn
              :disabled="!valid"
              color="primary"
              class="mb-3"
            >
              Login
            </v-btn>
          </v-card-actions>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-chip
              to="../contact"
              color="primary"
              class="mr-2"
            >
              Contact Us
            </v-chip>
            <v-spacer />
          </v-card-actions>
        </qms-card>
      </v-col>
    </v-row>

    <v-row style="justify-content: center;">
      <v-alert
        v-if="error"
        type="error"
        dense
      >
        {{ error }}
      </v-alert>
    </v-row>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex'
import QmsCard from '../components/QmsCard.vue'
import QmsInput from '../components/QmsInput.vue'
// import formRules from '@/mixins/formRules'

import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: { QmsInput, QmsCard },
})
export default class Login extends Vue {
  valid: boolean = true

  user: object ={
    username: "",
    password: "",
  }

  componentError: string = ""

  progress: boolean = false

  // private loginUser () {
  //   this.progress = true
  //   if (this.$refs.login.validate()) {
  //     // let user = this.user
  //       // Do something
  //       // .then((res: { data: { success: any } }) => {
  //       //   if (res.data.success) {
  //       //     this.progress = false
  //       //     this.$router.push('/profile')
  //       //   }
  //       // })
  //       // .catch((err: string) => {
  //       //   this.progress = false
  //       //   this.componentError = err
  //       // })
  //   } else {
  //     // validation errs
  //     this.progress = false
  //     this.componentError = 'Kindly check your form fields'
  //   }
  // }
}
</script>
