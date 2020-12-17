<template>
  <v-card
    elevation="0"
  >
    <v-card-text
      class='pl-0'
    >
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Your Car Collection date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
            filled
            rounded
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    menu: false,
    date: new Date().toISOString().substr(0, 10),
  }),

  watch: {
    date(date) {
      this.$emit('change', date);
    }
  }
}
</script>