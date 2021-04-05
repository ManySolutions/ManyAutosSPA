<template>
  <footer class="footer-main">
    <v-container fluid
      class='px-7 py-10'
    >
      <v-row>
        <v-col class="section" cols='12' md="6" lg="4" order-md="3" order-lg="1">
          <div class="logo-footer ml-0">
            <img src="https://static.manyautosltd.com/uploads/reading-default-logo.png" alt="">
          </div>
          <p
            class='text-body-1 font-weight-300'
            style='max-width:90%;color:#777'
          >
            Book your car now for free collection and delivery with <span class="font-weight-bold">Many Autos</span>
            and take advantage of our up front, clear and fair pricing.
            We offer a 12 months’
            <client-only>
              <v-icon 
              dark
              color="#777"
              >
              mdi-security
              </v-icon>
            </client-only>
            warranty on our parts and labour. We have full faith and confidence in
            all our garages and mechanics that work here.
          </p>
        </v-col>
        <v-col cols='12' md="6" lg="3" order-md="1" order-lg="2">
          <h4 class="text-uppercase" style="color:#01133c;">
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
        <v-col cols='12' md="6" lg="2" order-md="2" order-lg="3">
          <h4 class="text-uppercase" style="color:#01133c;">
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
          <h4 class="text-uppercase" style="color:#01133c;">
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
                    <v-icon v-text="item.icon" color="#0046e2"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title" style="color:#0046e2"></v-list-item-title>
                    <v-list-item-subtitle v-text='item.content' style="color:#0046e2"></v-list-item-subtitle>
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
          <p class='text-center text-caption mb-0'>
            © {{ date }} Many Autos LTD - All Rights Reserved
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
      {title: 'Car Services', url: '/car-service'},
      {title: 'Brake Pad Repair & Replacement', url: '/brake-pads'},
      {title: 'Brake Pad Sensor', url: '/brake-pad-sensor'},
      {title: 'Brake Discs', url: '/brake-disc'},
      {title: 'Brake Pipe', url: '/brake-pipe'},
      {title: 'Timing Belt Replacement', url: '/timing-belt'},
      {title: 'Vehicle Diagnostics', url: '/vehicle-engine-diagnostic-services'},
      {title: 'Clutch kit replacement', url: '/clutch-replacement'},
      {title: 'Oil Change', url: '/oil-change'},
      {title: 'Air Filter Replacement', url: '/air-filter-replacement'},
      {title: 'Water Pump Replacement', url: '/water-pump-replacement'},
    ],
    meetManyautos: [
      {title: 'About Us', url: '/about'},
      {title: 'Terms & Conditions', url: '/terms-and-conditions'},
      {title: 'Privacy Policy', url: '/privacy-policy'},
      {title: 'Contact Us', url: '/contact'},
      {title: 'Site Map', url: '/sitemap'},
      {title: 'Register as Garage', url: '/request-to-register-your-garage'},
      {title: 'Book a Service', url: '/service-booking'},
      {title: 'Login', url: '/login'},
      {title: 'Create a New Account', url: '/register'},
    ],
    contacts: [
      { content: '01189 876300', url: 'tel:+441189876300', title: 'Phone', icon: 'mdi-cellphone-basic'},
      { 
        content: 'info@manyautosltd.com', 
        url: 'mailto:info@manyautosltd.com', 
        title: 'Email', 
        icon: 'mdi-email'
      }
    ],
    socials: [
      {
        icon: 'mdi-facebook', 
        url: 'https://www.facebook.com/manyautos.co.uk',
        color: 'blue darken-1'
      },
      {
        icon: 'mdi-instagram', 
        url: 'https://www.instagram.com/manyauto/',
        color: 'red darken-1'
      },
      {
        icon: 'mdi-twitter', 
        url: 'https://twitter.com/manyautos',
        color: 'blue darken-3'
      },
       {
        icon: 'mdi-youtube', 
        url: 'https://www.youtube.com/channel/UCj5peOCn-mwfKkOplGkrD4w',
        color: 'red darken-1'
      },
    ],

    date: new Date().toISOString().substr(0, 4),
  })
}
</script>

<style lang="scss" scoped>
.footer-main{
  background:#eff2f2;
  &::v-deep .v-list-item__icon:first-child {
    margin-right: 12px;
  }
  .footer-lighter {
    background: whitesmoke;
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
      background: #ef0f3a;
      position: absolute;
      bottom: 0px;
      width: 20%;
    }
  }

  .footer-bottom {
    background: white;
    padding-top: 0;
    padding-bottom: 0;
  }
  &::v-deep span.v-btn__content {
    display: block;

  }
}

</style>