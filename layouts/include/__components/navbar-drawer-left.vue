<template>
  <v-navigation-drawer
    v-model="open"
    absolute
    left
    temporary
  >
    <div
      class='main-menu'
      :class='activeChild ? "hide-main-menu" : ""'
    >
      <template v-for='(item,i) in menu'>
        <div 
          :key='i'
          class='px-2'
        >
          <v-btn
            :to='item.url'
            color='default'
            exact-active-class="primary--text"
            text
            block
            class='text-capitalize text-left my-1'
            large
            @click="item.children ? handleGetChildren(i) : ''"
          >
            <span class='w-100 font-weight-600'>
              {{ item.title }}
            </span>
            <v-icon v-if='item.children'>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
        <!-- <v-divider :key='i' v-if='i < menu.length - 1'></v-divider> -->
      </template>
    </div>

    <div
      class='child-menu'
      :class='activeChild ? "show-child-menu" : ""'
    >
      <v-btn
        color='primary'
        text
        block
        large
        class='text-capitalize text-left my-1 justify-start'
        @click='activeChild = null'
      >
        <v-icon>mdi-chevron-left</v-icon>
        <span class='ml-3'>
          {{ activeChildName }}
        </span>
      </v-btn>
      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="secondary white--text pl-4"
        >
          <v-list-item
            v-for='(child,i) in activeChildMenu'
            :key='i'
            :to='child.url'
          >
            <v-list-item-title>
              <strong>
                {{child.title}}
              </strong>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
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
    menu: [
      {title: 'Home', url: '/'},
      {title: 'Car MOT Tests', url: '/mot'},
      {title: 'How it Works?', url: '/how-it-works'},
      {title: 'Book a Service', url: '/service-booking'},
      {title: 'Car Full Service', url: '/service-booking'},
      {title: 'Car Interim Service', url: '/service-booking'},
      {title: 'Car Services in UK', url: null, children: [
        {title: 'Audi Car Service', url: '/audi-service'},
        {title: 'BMW Car Service', url: '/BMW-service'},
        {title: 'Citroen Car Service', url: '/citroen-service'},
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
      ]},
      {title: 'Car Repair in UK', url: null, children: [
        {title: 'Abs Controllers', url: '/abs-controllers'},
        {title: 'Abs Hydraulic Units', url: '/abs-hydraulic-units'},
        {title: 'Abs Pump', url: '/abs-pump'},
        {title: 'Abs Ring', url: '/abs-ring'},
        {title: 'Abs Sensor', url: '/abs-sensor'},
        {title: 'Abs ', url: '/abs'},
        {title: 'Air Filter Replacement', url: '/air-filter-replacement'},
        {title: 'Air Suspension', url: '/air-suspension'},
        {title: 'Aldershot', url: '/aldershot'},
        {title: 'Alternator', url: '/alternator'},
        {title: 'Anti Roll Bar Link', url: '/anti-roll-bar-link'},
        {title: 'Auto Locksmith', url: '/auto-locksmith'},
        {title: 'Basingstoke', url: '/basingstoke'},
        {title: 'Bracknell', url: '/bracknell'},
        {title: 'Bradfield', url: '/bradfield'},
        {title: 'Brake Caliper', url: '/brake-caliper'},
        {title: 'Brake Disc', url: '/brake-disc'},
        {title: 'Brake Drums', url: '/brake-drums'},
        {title: 'Brake Fluid', url: '/brake-fluid'},
        {title: 'Brake Hose', url: '/brake-hose'},
        {title: 'Brake Master Cylinder', url: '/brake-master-cylinder'},
        {title: 'Brake Pad Sensor', url: '/brake-pad-sensor'},
        {title: 'Brake Pads', url: '/brake-pads'},
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
        {title: 'Farnborough', url: '/farnborough'},
        {title: 'Finance', url: '/finance'},
        {title: 'Flywheel', url: '/flywheel'},
        {title: 'Fuel Filter', url: '/fuel-filter'},
        {title: 'Fuel Injector', url: '/fuel-injector'},
        {title: 'Fuel Pump', url: '/fuel-pump'},
        {title: 'Glow Plug', url: '/glow-plug'},
        {title: 'Goring', url: '/goring'},
        {title: 'Handbrake Cable', url: '/handbrake-cable'},
        {title: 'Head Gasket', url: '/head-gasket'},
        {title: 'Henley On Thames', url: '/henley-on-thames'},
        {title: 'Maidenhead', url: '/maidenhead'},
        {title: 'New Tyres', url: '/new-tyres'},
        {title: 'Newbury', url: '/newbury'},
        {title: 'Oil Change', url: '/oil-change'},
        {title: 'Online Service Book', url: '/online-service-book'},
        {title: 'Pangbourne', url: '/pangbourne'},
        {title: 'Radiator', url: '/radiator'},
        {title: 'Sonning', url: '/sonning'},
        {title: 'Spencers Wood', url: '/spencers-wood'},
        {title: 'Starter Motor', url: '/starter-motor'},
        {title: 'Steering Services', url: '/steering-services'},
        {title: 'Suspension Arm', url: '/suspension-arm'},
        {title: 'Suspension Rear Axle', url: '/suspension-rear-axle'},
        {title: 'Suspension Services', url: '/suspension-services'},
        {title: 'Thatcham', url: '/thatcham'},
        {title: 'Thermostat Service', url: '/thermostat-service'},
        {title: 'Timing Belt', url: '/timing-belt'},
        {title: 'Twyford', url: '/twyford'},
        {title: 'Tyre Balancing', url: '/tyre-balancing'},
        {title: 'Unwanted Cars', url: '/unwanted-cars'},
        {title: 'Vacuum Pump', url: '/vacuum-Pump'},
        {title: 'Vehicle Engine Diagnostic Services', url: '/vehicle-engine-diagnostic-services'},
        {title: 'Water pump Replacement', url: '/water-pump-replacement'},
        {title: 'Wheel Alignment and Tracking', url: '/wheel-alignment-and-tracking'},
        {title: 'Wheel Cylinder', url: '/wheel-cylinder'},
        {title: 'Woking', url: '/woking'},
        {title: 'Wokingham', url: '/wokingham'},
        {title: 'Woodley', url: '/woodley'},
      ]},
      {title: 'About Us', url: '/about'},
      {title: 'Contact Us', url: '/contact'},
    ],
    activeChild: null,
  }),

  computed: {
    activeChildName() {
      return this.activeChild
        ? this.menu[this.activeChild].title
        : null;
    },

    activeChildMenu() {
      return this.activeChild
        ? this.menu[this.activeChild].children
        : null;
    }
  },

  watch: {
    isOpen(isOpen) {
      this.open = isOpen;
    },

    open(open) {
      if (!open) this.$emit('close');
    }
  },

  mounted() {
    this.open = this.isOpen;
  },

  methods: {
    handleGetChildren(index) {
      this.activeChild = index;
    }
  },
}
</script>

<style lang="scss" scoped>
.main-menu {
  transition-duration: .3s;
  width: 100%;
  &.hide-main-menu {
    transition-duration: .4s;
    position: relative;
    margin-left: -260px;
  }
}
.child-menu {
  z-index: -1;
  opacity: 0;
  position: absolute;
  width: 100%;
  transform: scale(.9);
  transition-duration: .3s;
  &.show-child-menu {
    display: block;
    opacity: 1;
    transition-duration: .6s;
    transition-delay: .2s;
    z-index: 1;
    transform: scale(1);
  }
}
::v-deep {
  .v-navigation-drawer__content {
    display: flex;
  }
}
</style>