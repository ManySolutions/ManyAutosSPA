<template>
  <footer class="footer-main">
    <v-container fluid>
      <v-row>
        <v-col cols='12'>
          <div class="logo-footer ml-0">
            <img :src="assets('/customer-v2/logo-default.png')" alt="">
          </div>
          <p class='text-white text-body-1 font-weight-300'>
            <strong>Many Autos</strong> 
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore agna aliquam erat . wisi enim ad minim veniam, quis
            tation. sit amet, consec tetuer.ipsum dolor sit amet, consectetuer.
          </p>
        </v-col>
        <v-col cols='12'>
          <h4 class="text-white text-uppercase">
            Popular Car Services
          </h4>
          <div>
            <v-btn
              text
              color='primary'
              v-for='(service, i) in popularServices'
              :key='i'
              :to="service.url"
              class='text-capitalize pl-0'
            >
              {{ service.title }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols='12'>
          <h4 class="text-white text-uppercase">
            Our Service
          </h4>
          <div>
            <v-btn
              text
              color='primary'
              v-for='(service, i) in popularServices'
              :key='i'
              :to="service.url"
              class='text-capitalize pl-0'
            >
              {{ service.title }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols='12'>
          <h4 class="text-white text-uppercase">
            Contact Us
          </h4>
          <div>
            <v-list 
              rounded
              dark
              class='bg-transparent pl-0'
            >
              <v-list-item-group
                color="primary"
              >
                <v-list-item
                  v-for="(item, i) in contacts"
                  :key="i"
                  :href='item.url'
                  class='footer-lighter'
                >
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-list-item-subtitle v-text='item.content'></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>
          <div
            class='mt-2'
          >
            <v-btn
              v-for='(social, i) in socials'
              :key='i'
              elevation='0'
              style='min-width: 0px'
              class='px-2 mr-2'
              :href='social.url'
              target="_blank"
              :color='social.color' 
              dark
            >
              <v-icon v-text='social.icon'></v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid
      class='footer-bottom'
    >
      <v-row>
        <v-col>
          <p class='text-center text-caption text-white mb-0'>
            © Many Autos LTD - All Rights Reserved
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  data: () => ({
    popularServices: [
      {title: 'Car Services', url: '/car-services'},
    ],
    meetManyautos: [
      {title: 'Register Your Garage', url: '/car-services'},
    ],
    contacts: [
      { content: '01189 876300', url: 'tel:+441189876300', title: 'Phone', icon: 'mdi-cellphone-basic'},
      { 
        content: 'team@manyautos.co.uk', 
        url: 'mailto:team@manyautos.co.uk', 
        title: 'Email', 
        icon: 'mdi-email'
      }
    ],
    socials: [
      {
        icon: 'mdi-whatsapp', 
        url: 'https://wa.me/+4401189876300',
        color: 'teal lighten-6'
      },
      {
        icon: 'mdi-facebook-messenger', 
        url: 'http://m.me/manyautos.co.uk?ref=contact_from_website',
        color: 'blue darken-1'
      },
      {
        icon: 'mdi-instagram', 
        url: 'https://wa.me/+4401189876300',
        color: 'red darken-1'
      },
      {
        icon: 'mdi-twitter', 
        url: 'https://wa.me/+4401189876300',
        color: 'blue darken-3'
      },
    ]
  })
}
</script>

<style lang="scss" scoped>
.footer-main{
  background:#394f52;
  &::v-deep .v-list-item__icon:first-child {
    margin-right: 12px;
  }
  .footer-lighter {
    background: #3a4c4f;
  }
  .logo-footer{
    width: 200px;
    margin-bottom: 6px;
    img {
      max-width: 100%;
      width: 100%;
      height: auto;
    }
  }
  h4 {
    font-size: 18px !important;
    font-weight: 500;
    letter-spacing: 1px;
    position: relative;
    padding-bottom: 6px;
    margin-bottom: 6px;
    &:before {
      content: "";
      display: block;
      height: 2px;
      background: white;
      position: absolute;
      bottom: 0px;
      width: 20%;
    }
  }

  .footer-bottom {
    background: #233234;
    padding-top: 0;
    padding-bottom: 0;
  }
}

</style>