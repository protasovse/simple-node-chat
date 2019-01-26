<template>
  <v-layout align-center justify-center row fill-height>
    <v-flex sm10 md6>
      <v-card>

        <v-card-title primary-title>
          <h3 class="headline mb-0">Chat as {{ user }}</h3>
        </v-card-title>

        <v-card-text>

          <v-sheet
              class="pa-2 mb-2"
              color="grey lighten-3"
              v-for="msg in messages"
          >
            <h4>{{ msg.user }}</h4>
            {{ msg.msg }}
          </v-sheet>

          <v-text-field
              @keydown.enter="sendMsg"
              name="input-1-1"
              label="type a message & press «enter»..."
              row="1"
              v-model="text"
          ></v-text-field>
        </v-card-text>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'AppChat',
    data () {
      return {
        messages: [],
        text: '',
      }
    },
    sockets: {
      messageArrived: function (data) {
        this.messages.push(data)
      }
    },
    methods: {
      sendMsg () {
        let data = {
          user: this.user,
          msg: this.text,
        }
        this.$socket.emit('sendMessage', data)
        this.text = ''
      }
    },
    computed: {
      user () {
        return this.localStorage.user
      },
    }
  }
</script>

<style scoped>

</style>