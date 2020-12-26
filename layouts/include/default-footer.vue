<template>
  <footer class="footer-main pl-7">
    <v-container fluid>
      <v-row>
        <v-col class="section" cols='12' md="6" lg="3" order-md="3" order-lg="1">
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
        <v-col cols='12' md="6" lg="3" order-md="1" order-lg="2">
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
              block
            >
              {{ service.title }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols='12' md="6" lg="3" order-md="2" order-lg="3">
          <h4 class="text-white text-uppercase">
           Meet ManyAutos
          </h4>
          <div>
            <v-btn
              text
              color='primary'
              v-for='(service, i) in meetManyautos'
              :key='i'
              :to="service.url"
              class='text-capitalize pl-0'
              block
            >
              {{ service.title }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols='12' md="6" lg="3" order-md="4" order-lg="4">
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
      {title: 'Front brake pads replacement', url: '/car-services'},
      {title: 'Rear brake pads replacement', url: '/car-services'},
      {title: 'Front brake discs & pads replacement', url: '/car-services'},
      {title: 'Rear brake discs & pads replacement', url: '/car-services'},
      {title: 'Timing belt replacement', url: '/car-services'},
      {title: 'Diagnostic inspection', url: '/car-services'},
      {title: 'Clutch kit replacement', url: '/car-services'},
      {title: 'Car battery replacement and fitting', url: '/car-services'},
      {title: 'Air conditioning regas', url: '/car-services'},
      {title: 'Water pump replacement', url: '/car-services'},
    ],
    meetManyautos: [
      {title: 'About Us', url: '/about'},
      {title: 'Terms of services', url: '/terms-and-conditions'},
      {title: 'Privacy Policy', url: '/privacy-policy'},
      {title: 'Contact Us', url: '/contact'},
      {title: 'Site Map', url: '/car-services'},
      {title: 'Register as Garage', url: '/car-services'},
      {title: 'Book a service', url: '/service-booking'},
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
  &::v-deep span.v-btn__content {
    display: block;

  }
}

</style>