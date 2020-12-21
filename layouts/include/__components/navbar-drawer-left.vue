<template>
  <v-navigation-drawer
    v-model="open"
    absolute
    left
    temporary
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="group"
        active-class="deep-purple--text text--accent-4"
      >
        <v-list-item>
          <v-list-item-title>Foo</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Bar</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Fizz</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Buzz</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },

  data: () => ({
    open: false,
    group: null,
  }),

  mounted() {
    this.open = this.isOpen;
  },

  watch: {
    isOpen(isOpen) {
      this.open = isOpen;
    },

    open(open) {
      if (!open) this.$emit('close');
    }
  }
}
</script>