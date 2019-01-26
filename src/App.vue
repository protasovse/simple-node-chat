<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify </span>
        <span class="font-weight-light">Simple Chat</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
          v-if="!login"
          color="error"
          @click="asAdmin"
      >
        <span class="mr-2">As Admin</span>
      </v-btn>
      <v-btn
          v-if="!login"
          color="accent"
          @click="asUser"
      >
        <span class="mr-2">As User</span>
      </v-btn>
      <v-btn
          v-if="login"
          color="primary"
          @click="out"
      >
        <span class="mr-2">Out</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <app-chat v-if="chat"/>
    </v-content>
  </v-app>
</template>

<script>
  import AppChat from './components/AppChat'

  export default {
    name: 'App',
    components: {
      AppChat
    },
    data () {
      return {
        login: false
      }
    },
    methods: {
      asAdmin () {
        this.localStorage.user = 'Admin'
        this.$cookie.set('user', 'Admin')
        this.login = true
      },
      asUser () {
        this.localStorage.user = 'User'
        this.$cookie.set('user', 'User')
        this.login = true
      },
      out () {
        this.localStorage.user = 'non authorised'
        this.$cookie.delete('user')
        this.login = false
      }
    },
    computed: {
      user () {
        return this.localStorage.user
      },
      chat () {
        return this.user === 'Admin' || this.user === 'User'
      }
    }
  }
</script>
