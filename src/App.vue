<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify </span>
        <span class="font-weight-light">Simple Chat</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
          v-if="!isLogged"
          color="error"
          @click="login('Admin')"
      >
        <span class="mr-2">As Admin</span>
      </v-btn>
      <v-btn
          v-if="!isLogged"
          color="accent"
          @click="login('User')"
      >
        <span class="mr-2">As User</span>
      </v-btn>
      <v-btn
          v-if="isLogged"
          color="primary"
          @click="out"
      >
        <span class="mr-2">Out</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <app-chat v-if="isLogged"/>
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
      }
    },
    methods: {
      login (user) {
        this.localStorage.user = user
        this.$cookie.set('user', user)
        window.location.reload()
      },
      out () {
        this.localStorage.user = null
        this.$cookie.delete('user')
        window.location.reload()
      }
    },
    computed: {
      isLogged () {
        return !!this.localStorage.user
      },
    }
  }
</script>
