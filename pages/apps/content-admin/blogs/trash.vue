<template>
  <div>
    <h3 class='text-h4 mb-6'>
      Deleted Blogs
    </h3>

    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="10"
      class="elevation-1"
    >
      <template #item.thumbnail='{ item }'>
        <v-img width="60" :src='item.thumbnail' class='my-2'></v-img>
      </template>
      <template #item.actions='{ item }'>
        <v-btn
          v-if='item.is_restored'
          text
          color='success'
          @click.prevent='""'
        >
          Restored
        </v-btn>
        <v-btn
          v-else
          small
          color='primary'
          @click='handleRestore(item.id)'
          :loading='!!item.loading'
        >
          Restore
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import toastr from 'toastr';
import { getDeletedBlog, restoreBlog } from '~/api/content-admin/blog'
export default {
  layout: 'content-admin-layout',

  data: () => ({
    headers: [
      { text: 'ID', value: 'id', sortable: true},
      { text: 'Thumbnail', value: 'thumbnail', sortable: false},
      { text: 'Title', value: 'title', sortable: true},
      { text: 'Author', value: 'author', sortable: false},
      { text: 'Actions', value: 'actions', sortable: false},
    ],
    items: [],
  }),

  mounted() {
    this.fetch();
  },

  methods: {
    fetch() {
      getDeletedBlog(this.http).then(res => this.items = res.list.map(v => ({
        ...v, 
        loading: false,
        is_restored: false,
      })));
    },
    
    handleRestore(id) {
      const i = this.items.findIndex(v => v.id == id);
      this.items[i].loading = true;

      restoreBlog(this.http, id).then(res => {
        const { status, message } = res;

        if (!status) {
          toastr.error(message);
          return;
        }

        toastr.success(message);

        this.items[i].is_restored = true;
      })
      .finally(() => this.items[i].loading = false)
    },


  }
}
</script>