<template>
  <v-row justify="center">
    <v-col lg='8' md=10>
      
      <v-form 
        @submit.prevent="handleSubmit()"
        ref="form"
      >
        <v-card>
          <v-card-title>
            Create new blog
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
            <v-file-input
              outlined
              label='Featured Image'
              truncate-length="15"
              v-model='form.featured_image'
              :error='!!errors.featured_image'
              :hint="errors.featured_image ? errors.featured_image[0] : null"
              required
            ></v-file-input>
            <client-only>
              <editor
                api-key='3jnbfshn83xk4kof0whkkztpmhtwsy3av8hgjgnfa6ns6alt'
                v-model='form.description'
                required
                plugins='a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste paste table advtable tinymcespellchecker'
                toolbar='a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table'
              ></editor>
              <small v-if='errors.description' class='red--text'>
                {{ errors.description[0] }}
              </small>
              <br>
            </client-only>
            <v-text-field
              label="Order"
              :messages='`Order will sort the blogs in descending order`'
              outlined
              v-model='form.order'
              :error='!!errors.order'
              :hint="errors.order ? errors.order[0] : null"
              required
            ></v-text-field>
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
              :loading='isDrafting'
              type='submit'
              color='primary'
            >
              Save
            </v-btn>
            <v-btn
              @click.prevent='handlePublish()'
              color="success"
              large
              elevation="2"
              :loading='isPublishing'
            >
              Publish Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import {postBlog} from '~/api/content-admin/blog';
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
    isDrafting: false,
    isPublishing: false,
  }),

  methods: {
    handleSubmit() {
      this.isDrafting = true;
      this.errors = {};

      const formData = new FormData;

      Object.keys(this.form).map(v => 
        formData.append(
          v, 
          typeof this.form[v] == 'boolean'
          ? !!this.form[v]
          : this.form[v]
        )
      );

      postBlog(this.http, formData).then(res => {
        const { status, message, errors} = res;

        if (!status) {
          toastr.error(message);
          this.errors=errors;
          return;
        }

        toastr.success(message);
        this.$refs.form.reset();
        this.form.status = 'inactive';
      })
      .finally(() => {
        this.isDrafting = false
        this.isPublishing = false
      })
    },

    handlePublish() {
      this.isPublishing = true;
      this.form.status = 'active';

      this.handleSubmit();
    }
  }
}
</script>