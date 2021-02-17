<template>
  <v-row justify="center">
    <v-col lg='6' md=8>
      
      <v-form 
        @submit.prevent="handleSubmit()"
        ref="form"
      >
        <v-card>
          <v-card-title>
            Edit Blog #{{$route.params.id}}
          </v-card-title>

          <v-card-text>
            <v-text-field
              label="Blog Title"
              outlined
              v-model='form.title'
              :error='!!errors.title'
              :hint="errors.title ? errors.title[0] : null"
              required
            ></v-text-field>
            <v-text-field
              label="Slug"
              outlined
              v-model='form.slug'
              :error='!!errors.slug'
              :hint="errors.slug ? errors.slug[0] : null"
              required
            ></v-text-field>
            <v-text-field
              label="Meta Keywords"
              outlined
              v-model='form.meta_keywords'
              :error='!!errors.meta_keywords'
              :hint="errors.meta_keywords ? errors.meta_keywords[0] : null"
              required
            ></v-text-field>
            <v-text-field
              label="Meta Description"
              outlined
              v-model='form.meta_description'
              :error='!!errors.meta_description'
              :hint="errors.meta_description ? errors.meta_description[0] : null"
              required
            ></v-text-field>
            <client-only>
              <editor
                api-key='3jnbfshn83xk4kof0whkkztpmhtwsy3av8hgjgnfa6ns6alt'
                v-model='form.description'
                required
                :initialValue='form.description'
                plugins='a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste paste table advtable tinymcespellchecker'
                toolbar='a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table'
              ></editor>
              <small v-if='errors.description' class='red--text d-block'>
                {{ errors.description[0] }}
              </small>
              <br>
            </client-only>
            <v-text-field
              label="Order"
              :placeholder='`Order will sort the blogs in descending order`'
              outlined
              v-model='form.order'
              :error='!!errors.order'
              :hint="errors.order ? errors.order[0] : null"
              required
            ></v-text-field>
            <v-file-input
              outlined
              label='Featured Image (Leave empty for unchanged)'
              truncate-length="15"
              v-model='form.featured_image'
              :error='!!errors.featured_image'
              :hint="errors.featured_image ? errors.featured_image[0] : null"
              required
            ></v-file-input>
            <v-checkbox
              v-model='form.is_featured'
              :error='!!errors.is_featured'
              :hint="errors.is_featured ? errors.is_featured[0] : null"
              label='Featured'
            ></v-checkbox>
          </v-card-text>
          
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              large
              elevation="2"
              :loading='isUpdating'
              type='submit'
              color='primary'
            >
              Update
            </v-btn>
            <v-btn
              large
              elevation="2"
              :loading='isPublishing'
              :color='form.status == "active" ? "warning" : "success"'
              @click='handlePublish(form.status == `active` ? `inactive` : `active`)'
            >
              {{ form.status == 'active' ? 'Unpublish & Save' : 'Publish & Save' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import {getBlog,  updateBlog} from '~/api/content-admin/blog';
import toastr from 'toastr';

export default {
  layout: 'content-admin-layout',

  components: {
    Editor,
  },

  data: () => ({
    form: {
      title: '',
      meta_keywords: '',
      meta_description: '',
      description: '',
      is_featured: false,
      order: 0,
      status: 'inactive',
      type: 'blog',
      slug: '',
      featured_image: null,
    },
    errors: {},
    isUpdating: false,
    isPublishing: false,
    oldStatus: '',
  }),

  mounted() {
    this.fetch();
  },

  methods: {
    fetch() {
      getBlog(this.http, this.$route.params.id).then(({blog}) => {
        this.form = {
          ...this.form,
          title: blog.title,
          meta_keywords: blog.meta_keywords,
          meta_description: blog.meta_description,
          description: blog.description,
          is_featured: blog.is_featured,
          order: blog.order,
          status: blog.status,
          type: blog.type,
          slug: blog.slug,
          featured_image_path: blog.media[0].path,
        };
      });
    },

    handleSubmit() {
      this.isUpdating = true;
      this.errors = {};

      const formData = new FormData;

      Object.keys(this.form).map(v => {
        const elm = this.form[v];
        
        if (!elm) return;

        formData.append(
          v, 
          typeof this.form[v] == 'boolean'
          ? !!this.form[v]
          : this.form[v]
        )
      });

      updateBlog(this.http, this.$route.params.id, formData).then(res => {
        const { status, message, errors} = res;

        if (!status) {
          toastr.error(message);
          this.errors=errors;
          this.form.status = this.oldStatus;
          return;
        }

        toastr.success(message);
      })
      .finally(() => {
        this.isUpdating = false
        this.isPublishing = false
      })
    },

    handlePublish(status) {
      this.isPublishing = true;
      this.form.status = status;
      this.oldStatus = (status == 'active') ? 'inactive' : 'active';
      
      this.handleSubmit();
    }
  }
}
</script>