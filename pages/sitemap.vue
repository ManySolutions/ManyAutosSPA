<template>
  <page-layout
    title='Sitemap'
    heading-bg='customer-v2/static-pages/allpics/sitemap1.jpg'
  >
    <v-container class='sitemap-container'>
      <v-row style="padding-top:40px;">
        <v-col cols='12' md="3" >
          <a href="#landing-page" id="landing-page" class='has-hashed'>
            <h4 class="text-left text-uppercase pb-5">
              Landing Page
            </h4>
          </a>
          <div style="margin-bottom: 50px;">
            <v-btn
              text
              color='primary'
              v-for='(index, i) in landingPageLinks'
              :key='i'
              :to="index.url"
              class='text-capitalize pl-0'
              block
              style="display:inline-block;"
            >
              {{ index.title }}
            </v-btn>
          </div>
          <a href="#help" id="help" class='has-hashed'>
            <h4 class="text-left text-uppercase pb-5 ">
              Help
            </h4>
          </a>
          <div style="margin-bottom: 50px;">
            <v-btn
              text
              color='primary'
              v-for='(index, i) in helpLinks'
              :key='i'
              :to="index.url"
              class='text-capitalize pl-0'
              block
              style="display:inline-block;"
            >
              {{ index.title }}
            </v-btn>
          </div>
          <a href="#blogs" id="blogs" class='has-hashed'>
            <h4 class="text-left text-uppercase pb-5 ">
              Blogs
            </h4>
          </a>
          <div style="margin-bottom: 50px;">
            <v-btn
              text
              color='primary'
              v-for='(index, i) in blogs'
              :key='i'
              :to="`/blogs/${index.slug}`"
              class='text-capitalize pl-0'
              block
              style="display:inline-block;"
            >
              {{ index.title }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols='12' md="3">
          <a href="#action-pages" id="action-pages" class='has-hashed'>
            <h4 class="text-left text-uppercase pb-5">
              Action Pages
            </h4>
          </a>
          <div style="margin-bottom: 50px;">
            <v-btn
              text
              color='primary'
              v-for='(index, i) in actionPageLinks'
              :key='i'
              :to="index.url"
              class='text-capitalize pl-0'
              block
              style="display:inline-block;"
            >
              {{ index.title }}
            </v-btn>
          </div>
          <a href="#help" id="help" class='has-hashed'>
            <h4 class="text-left text-uppercase pb-5 ">
              Locations
            </h4>
          </a>
          <div style="margin-bottom: 50px;">
            <v-btn
              text
              color='primary'
              v-for='(index, i) in locationLinks'
              :key='i'
              :to="index.url"
              class='text-capitalize pl-0'
              block
              style="display:inline-block;"
            >
              {{ index.title }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols='12' md="3" >
          <a href="#car-services" id="car-services" class='has-hashed'>
            <h4 class="text-left text-uppercase pb-5">
              Car Services
            </h4>
          </a>
          <div style="margin-bottom: 50px;">
            <v-btn
              text
              color='primary'
              v-for='(index, i) in carServiceLinks'
              :key='i'
              :to="index.url"
              class='text-capitalize pl-0'
              block
            >
              {{ index.title }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols='12' md="3">
          <a href="#car-repairs" id="car-repairs" class='has-hashed'>
            <h4 class="text-left text-uppercase pb-5">
              Car Repairs
            </h4>
          </a>
          <div style="margin-bottom: 50px;">
            <v-btn
              text
              color='primary'
              v-for='(index, i) in carRepairLinks'
              :key='i'
              :to="index.url"
              class='text-capitalize pl-0'
              block
            >
              {{ index.title }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </page-layout>
</template>

<script>
import PageLayout from '@/layouts/page-layout';

const URL = process.env.APP_URL;

export default {
  data: () =>({
    landingPageLinks:[
      {title:'Home Page', url:'/'}
    ],
    helpLinks:[
      {title:'Contact Us' , url:'/contact'},
      {title:'FAQ' , url:'/faq'},
      {title: 'Car Services', url: '/car-service'},
      {title:'MOT' , url:'/mot'},
      {title:'How It Works' , url:'/how-it-works'},
      {title:'About Us' , url:'/about'},
      {title:'Privacy Policy' , url:'/privacy-policy'},
      {title:'Terms Of Service' , url:'/terms-and-conditions'},
    ],
    actionPageLinks:[
      {title:'Book A Service' , url:'/service-booking'},
      {title: 'Login', url: '/login'},
      {title:'Create Your Account' , url:'/register'},
      {title:'My bookings' , url:'/my/booking'},
      {title:'Register As Garage' , url:'/request-to-register-your-garage'},
      {title:'Covid19 Installment Plan' , url:'/car-repair-during-covid-19'},
      {title:'Refer A Friend & Earn' , url:'/refer-a-friend'},
    ],
    locationLinks:[
      {title: 'Basingstoke', url: '/basingstoke'},
      {title: 'Bracknell', url: '/bracknell'},
      {title: 'Bradfield', url: '/bradfield'},
      {title: 'Aldershot', url: '/aldershot'},
      {title: 'Goring', url: '/goring'},
      {title: 'Henley On Thames', url: '/henley-on-thames'},
      {title: 'Farnborough', url: '/farnborough'},
      {title: 'Maidenhead', url: '/maidenhead'},
      {title: 'Newbury', url: '/newbury'},
      {title: 'Pangbourne', url: '/pangbourne'},
      {title: 'Reading', url: '/car-service/reading'},
      {title: 'Sonning', url: '/sonning'},
      {title: 'Spencers Wood', url: '/spencers-wood'},
      {title: 'Thatcham', url: '/thatcham'},
      {title: 'Twyford', url: '/twyford'},
      {title: 'Woking', url: '/woking'},
      {title: 'Wokingham', url: '/wokingham'},
      {title: 'Woodley', url: '/woodley'},
    ],
     carServiceLinks:[
        {title: 'Daewoo Car Service', url: '/daewoo-service'},
        {title: 'Fiat Car Service', url: '/fiat-service'},
	      {title: 'Ford Car Service', url: '/ford-service'},
        {title: 'Honda Car Service', url: '/honda-service'},
        {title: 'Kia Car Service', url: '/kia-service'},
        {title: 'Land Rover Car Service', url: '/land-rover-service'},
        {title: 'Lexus Car Service', url: '/lexus-service'},
        {title: 'Mazda Car Service', url: '/mazda-service'},
        {title: 'Mercedes Car Service', url: '/mercedes-service'},
        {title: 'Mini Car Service', url: '/mini-service'},
        {title: 'Mitsubishi Car Service', url: '/mitsubishi-service'},
        {title: 'Renault Car Service', url: '/renault-service'},
        {title: 'Saab Car Service', url: '/saab-service'},
        {title: 'Seat Car Service', url: '/seat-service'},
        {title: 'Toyota Car Service', url: '/toyota-service'},
        {title: 'Vauxhall Car Service', url: '/vauxhall-service'},
        {title: 'Volvo Car Service', url: '/volvo-service'},
        {title: 'Peugoet Car Service', url: '/peugeot-service'},
        {title: 'Alfa Romeo Car Service', url: '/alfa-romeo-service'},
        {title: 'Chevrolet Car Service', url: '/chevrolet-service'},
        {title: 'Chrysler Car Service', url: '/chrysler-service'},
        {title: 'Ds Car Service', url: '/ds-service'},
        {title: 'Dacia Car Service', url: '/dacia-service'},
        {title: 'Nissan Car Service', url: '/nissan-service'},
        {title: 'VW Car Service', url: '/vw-service'},
        {title: 'Jeep Car Service', url: '/jeep-service'},
        {title: 'Infiniti Car Service', url: '/infiniti-service'},
        {title: 'Lotus Car Service', url: '/lotus-service'},
        {title: 'Mg Car Service', url: '/mg-service'},
        {title: 'Hyundai Car Service', url: '/hyundai-service'},
        {title: 'Jaguar Car Service', url: '/jaguar-service'},
        {title: 'Skoda Car Service', url: '/skoda-service'},
        {title: 'Smart Car Service', url: '/smart-service'},
        {title: 'Ssangyong Car Service', url: '/ssangyong-service'},
        {title: 'Subaru Car Service', url: '/subaru-service'},
        {title: 'Suzuki Car Service', url: '/suzuki-service'},
    ],
     carRepairLinks:[
        {title: 'Abs Controllers', url: '/abs-controllers'},
        {title: 'Abs Hydraulic Units', url: '/abs-hydraulic-units'},
        {title: 'Abs Pump', url: '/abs-pump'},
        {title: 'Abs Ring', url: '/abs-ring'},
        {title: 'Abs Sensor', url: '/abs-sensor'},
        {title: 'Abs ', url: '/abs'},
        {title: 'Air Filter Replacement', url: '/air-filter-replacement'},
        {title: 'Air Suspension', url: '/air-suspension'},
        {title: 'Alternator', url: '/alternator'},
        {title: 'Anti Roll Bar Link', url: '/anti-roll-bar-link'},
        {title: 'Auto Locksmith', url: '/auto-locksmith'},
        {title: 'Brake Caliper', url: '/brake-caliper'},
        {title: 'Brake Disc', url: '/brake-disc'},
        {title: 'Brake Drums', url: '/brake-drums'},
        {title: 'Brake Fluid', url: '/brake-fluid'},
        {title: 'Brake Hose', url: '/brake-hose'},
        {title: 'Brake Master Cylinder', url: '/brake-master-cylinder'},
        {title: 'Brake Pad Sensor', url: '/brake-pad-sensor'},
        {title: 'Brake Pads Repair & Replacement', url: '/brake-pads'},
        {title: 'Brake Pipe', url: '/brake-pipe'},
        {title: 'Brake Service', url: '/brake-service'},
        {title: 'Brake Servo', url: '/brake-servo'},
        {title: 'Brake Shoes', url: '/brake-shoes'},
        {title: 'Camshaft Sensor', url: '/camshaft-sensor'},
        {title: 'Catalytic Converter', url: '/catalytic-converter'},
        {title: 'Clutch Problems', url: '/clutch-problems'},
        {title: 'Clutch Replacement', url: '/clutch-replacement'},
        {title: 'Coil Springs', url: '/coil-springs'},
        {title: 'Collection and Delivery', url: '/collection-and-delivery'},
        {title: 'Crank Sensor', url: '/crank-sensor'},
        {title: 'Cv Joint', url: '/cv-joint'},
        {title: 'Drag Links', url: '/drag-links'},
        {title: 'Drive Shaft', url: '/drive-shaft'},
        {title: 'EGR', url: '/egr'},
        {title: 'Exhaust Repair', url: '/exhaust-repair'},
        {title: 'Exhaust Services', url: '/exhaust-services'},
        {title: 'Finance', url: '/finance'},
        {title: 'Flywheel', url: '/flywheel'},
        {title: 'Fuel Filter', url: '/fuel-filter'},
        {title: 'Fuel Injector', url: '/fuel-injector'},
        {title: 'Fuel Pump', url: '/fuel-pump'},
        {title: 'Glow Plug', url: '/glow-plug'},
        {title: 'Handbrake Cable', url: '/handbrake-cable'},
        {title: 'Head Gasket', url: '/head-gasket'},
        {title: 'New Tyres', url: '/new-tyres'},
        {title: 'Oil Change', url: '/oil-change'},
        {title: 'Online Service Book', url: '/online-service-book'},
        {title: 'Radiator', url: '/radiator'},
        {title: 'Starter Motor', url: '/starter-motor'},
        {title: 'Steering Services', url: '/steering-services'},
        {title: 'Suspension Arm', url: '/suspension-arm'},
        {title: 'Suspension Rear Axle', url: '/suspension-rear-axle'},
        {title: 'Suspension Services', url: '/suspension-services'},
        {title: 'Thermostat Service', url: '/thermostat-service'},
        {title: 'Timing Belt', url: '/timing-belt'},
        {title: 'Tyre Balancing', url: '/tyre-balancing'},
        {title: 'Unwanted Cars', url: '/unwanted-cars'},
        {title: 'Vacuum Pump', url: '/vacuum-Pump'},
        {title: 'Vehicle Engine Diagnostic Services', url: '/vehicle-engine-diagnostic-services'},
        {title: 'Water pump Replacement', url: '/water-pump-replacement'},
        {title: 'Wheel Alignment and Tracking', url: '/wheel-alignment-and-tracking'},
        {title: 'Wheel Cylinder', url: '/wheel-cylinder'},
    ],

  }),
  components: {
    PageLayout
  },

  async asyncData({$axios}) {
    const {data} = await $axios.get(`${process.env.API_URL}customer/blogs/slugs`);
    console.log(data);
    return {
      blogs: data
    };
  },

  head: {
    title: 'Sitemap',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'Many Autos keeps it simple: you book, we collect, service and deliver. We aim to provide you the best prices for fro a hassle free service through out the UK. Simply book the service and we will take care of the rest. We offer free collection and delivery. Book online or call us at 01189 876300'
      },
      {
        name: 'keywords', 
        content: 'how it works, free collection and delivery, car service, repair, MOT, free collection, free delivery, collection and delivery, sitemap'
      },
      {
        hid: 'og:title',
        property: "og:title", 
        content: "Sitemap | ManyAutos LTD"
      },
      {
        hid: 'og:type',
        property: "og:type", 
        content: "website"
      },
      {
        hid: 'og:url',
        property: "og:url", 
        content: URL
      },
      {
        hid: 'og:image',
        property: "og:image", 
        content: "logo-default.png"
      },
      {
        hid: 'og:site_name',
        property: "og:site_name", 
        content: "ManyAutos LTD"
      },
      {
        hid: 'og:description',  property: 'og:description', 
        content: "Many Autos keeps it simple: you book, we collect, service and deliver. We aim to provide you the best prices for fro a hassle free service through out the UK. Simply book the service and we will take care of the rest. We offer free collection and delivery. Book online or call us at 01189 876300"
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Sitemap | ManyAutos LTD"
      },
      {
        name: "twitter:description", 
        content: "Many Autos keeps it simple: you book, we collect, service and deliver. We aim to provide you the best prices for fro a hassle free service through out the UK. Simply book the service and we will take care of the rest. We offer free collection and delivery. Book online or call us at 01189 876300"
      },
      {
        name: "twitter:image", 
        content: "logo-default.png"
      },
      {
        itemprop: "image", 
        content: "logo-default.png"
      },
      {
        hid: 'og:type',
        property: "og:type", 
        content: "business.business"
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
.sitemap-container {
  h4 {
    font-weight: 600;
    font-size: 17px;
  }
  &::v-deep span.v-btn__content {
    display: inline-block;
  }
  &::v-deep .v-btn {
    display: inline-block;
  }
  .has-hashed {
    color: black;
    text-decoration: none;
    display: block;
  }
}
::v-deep .v-btn.v-btn--text {
  white-space: normal;
  height: auto !important;
  margin-bottom: 14px;
}
</style>