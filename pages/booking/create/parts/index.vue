<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class='heading__title text-center pb-lg-5'>
          <span class='font-weight-light'>
            Select a category to view parts
          </span>
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-breadcrumbs
          :items='breadcrumbs'
        ></v-breadcrumbs>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card>
          <v-card-subtitle>Part's Groups List</v-card-subtitle>
          <v-card-text>
            <v-list>
              <v-list-item-group>
                <v-list-item
                  v-for="item in items"
                  :key="item.title"
                >
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                  <v-list-item-icon>
                    <v-icon>
                      mdi-chevron-right
                    </v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  components: {
  },

  data: () => ({
    breadcrumbs: [
      {
        text: 'Services',
        disabled: false,
        href: '../services'
      },
      {
        text: 'Categories',
        disabled: true,
        href: '#'
      },
    ],
    items: [
      {
        title: 'Exterior',
      },
      {
        title: 'Interior',
      },
    ],
  })
}
</script>