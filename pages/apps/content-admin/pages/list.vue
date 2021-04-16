<template>
  <div>
    <h3 class='text-h4 mb-6'>
      All Blogs
    </h3>

    <v-progress-linear
      v-if='isLoading'
      indeterminate
      color='primary'
    ></v-progress-linear>
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
          :to='`/apps/content-admin/blogs/edit/${item.id}`'
          small
          color='primary'
        >
          Edit
        </v-btn>
        <v-btn
          small
          color='error'
          :loading='!!item.loading'
          @click='handleDelete(item.id)'
        >
          Delete
        </v-btn>
        <v-btn
          small
          :color='item.status == "active" ? "warning" : "success"'
          @click='handlePublish(item.id, item.status == "active" ? "inactive" : "active")'
          :loading='!!item.loading'
        >
          {{ item.status == 'active' ? 'Unpublish' : 'Publish' }}
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import toastr from 'toastr';
import { deleteBlog, getAllBlogs, publishBlog } from '~/api/content-admin/blog'
export default {
  layout: 'content-admin-layout',

  data: () => ({
    headers: [
      { text: 'ID', value: 'id', sortable: true},
      { text: 'Thumbnail', value: 'thumbnail', sortable: false},
      { text: 'Title', value: 'title', sortable: true},
      { text: 'Publish Date', value: 'published_at', sortable: true},
      { text: 'Author', value: 'author', sortable: false},
      { text: 'Status', value: 'status', sortable: false},
      { text: 'Views', value: 'views', sortable: false},
      { text: 'Actions', value: 'actions', sortable: false},
    ],
    items: [],
    isLoading: true,
  }),

  mounted() {
    this.fetch();
  },

  methods: {
    fetch() {
      getAllBlogs(this.http).then(res => this.items = res.list.map(v => ({
        ...v, 
        loading: false
      }))).finally(() => this.isLoading = false);
    },

    handlePublish(id, status) {
      const i = this.items.findIndex(v => v.id == id);
      this.items[i].loading = true;
      const old = status;

      publishBlog(this.http, id, status).then(res => {
        const { status, message, errors } = res;

        if (!status) {
          toastr.error(message);
          return;
        }

        toastr.success(message);

        this.items[i].status = old;
      })
      .finally(() => 
        this.items[i].loading = false
      )
    },

    
    handleDelete(id) {
      const i = this.items.findIndex(v => v.id == id);
      this.items[i].loading = true;

      deleteBlog(this.http, id).then(res => {
        const { status, message, errors } = res;

        if (!status) {
          toastr.error(message);
          return;
        }

        toastr.success(message);

        this.$delete(this.items, i);
      })
    },


  }
}
</script>