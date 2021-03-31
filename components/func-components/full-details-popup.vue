<template>
  <v-row justify="center">
    <v-btn color="primary" 
    dark 
    text
    class="mt-3"
    @click.stop="dialog = true"
    >
      Full Details
    </v-btn>

    <v-dialog 
    v-model="dialog" 
    max-width="450"
    >
      <v-card 
      class="mx-450" 
      max-width="auto" 
      tile
      >
      <v-card-title class="text-left headline">
          Car Service Price £152.43
        </v-card-title>
        <v-list 
        disabled
        >
          <v-list-item-group 
          >
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon" color="primary"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div class="text-center pb-5">
        <v-btn
        color="primary"
        x-large
        >
        Add Service
        </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        
      items: [
        { text: 'Maintenance Check', icon: 'mdi-check-bold' },
        { text: 'Engine oil and oil filter', icon: 'mdi-check-bold' },
        { text: 'Brake fluid and power steering fluids (top up)', icon: 'mdi-check-bold' },
        { text: 'Air filter', icon: 'mdi-check-bold' },
        { text: 'Visually inspect condition of HT leads', icon: 'mdi-check-bold' },
        { text: 'Check coolant systems', icon: 'mdi-check-bold' },
        { text: 'Check engine cooling fan', icon: 'mdi-check-bold' },
        { text: 'Visually inspect radiator and coolant pipes', icon: 'mdi-check-bold' },
        { text: 'Collect vehicle from specified address', icon: 'mdi-check-bold' },
        { text: 'Check vehicle history', icon: 'mdi-check-bold' },
        { text: 'Note customer comments and recommendations', icon: 'mdi-check-bold' },
        { text: 'Check for damage to body work', icon: 'mdi-check-bold' },
        { text: 'Check trims', icon: 'mdi-check-bold' },
        { text: 'Check lamps', icon: 'mdi-check-bold' },
        { text: 'Check number plates', icon: 'mdi-check-bold' },
        { text: 'Check mirrors', icon: 'mdi-check-bold' },
        { text: 'Check timing belt interval', icon: 'mdi-check-bold' },
        { text: 'Log vehicle condition', icon: 'mdi-check-bold' },
        { text: 'Check ABS', icon: 'mdi-check-bold' },
        { text: 'Check all interior warning lights', icon: 'mdi-check-bold' },
        { text: 'Check horn', icon: 'mdi-check-bold' },
        { text: 'Check condition and operation of seat belts', icon: 'mdi-check-bold' },
        { text: 'Check operation of interior lights and switches', icon: 'mdi-check-bold' },
        { text: 'Check operation of exterior lights and switches', icon: 'mdi-check-bold' },
        { text: 'Check front and rear windscreen wipers and washers', icon: 'mdi-check-bold' },
        { text: 'Check condition and security of windscreen', icon: 'mdi-check-bold' },
        { text: 'Check condition and security of rear view mirror', icon: 'mdi-check-bold' },
        { text: 'Check fuel cap', icon: 'mdi-check-bold' },
        { text: 'Check air conditioning', icon: 'mdi-check-bold' },
        { text: 'Check and top up power steering reservoir', icon: 'mdi-check-bold' },
        { text: 'Check PAS', icon: 'mdi-check-bold' },
        { text: 'Check auxiliary belt', icon: 'mdi-check-bold' },
        { text: 'Check fan belts', icon: 'mdi-check-bold' },
        { text: 'Check fuel cap', icon: 'mdi-check-bold' },
        { text: 'Check pollen/cabin filter', icon: 'mdi-check-bold' },
        { text: 'Check battery condition and security', icon: 'mdi-check-bold' },
        { text: 'Check clutch operation', icon: 'mdi-check-bold' },
        { text: 'Check handbrake operation and travel', icon: 'mdi-check-bold' },
        { text: 'Check and top up gearbox oil', icon: 'mdi-check-bold' },
        { text: 'Check and top up axle oil', icon: 'mdi-check-bold' },
        { text: 'Check and top up transfer box oil (if applicable)', icon: 'mdi-check-bold' },
        { text: 'Check and top up all under bonnet fluid levels', icon: 'mdi-check-bold' },
        { text: 'Check and top up brake fluid', icon: 'mdi-check-bold' },
        { text: 'Check and top up antifreeze', icon: 'mdi-check-bold' },
        { text: 'CLubricate door hinges', icon: 'mdi-check-bold' },
        { text: 'Lubricate catches and locks (where required)', icon: 'mdi-check-bold' },
        { text: 'Check coolant systems for leaks', icon: 'mdi-check-bold' },
        { text: 'Check engine cooling fan', icon: 'mdi-check-bold' },
        { text: 'Check operation of throttle and lubricate as required', icon: 'mdi-check-bold' },
        { text: 'Replace air filter', icon: 'mdi-check-bold' },
        { text: 'Replace spark plugs if applicable (at extra cost)', icon: 'mdi-check-bold' },
        { text: 'Visually inspect condition of HT leads', icon: 'mdi-check-bold' },
        { text: 'Inspection details', icon: 'mdi-check-bold' },
        { text: 'Carry out under-body inspection (check for any corrosion)', icon: 'mdi-check-bold' },
        { text: 'Replace engine oil specialist if required', icon: 'mdi-check-bold' },
        { text: 'Replace oil filter', icon: 'mdi-check-bold' },
        { text: 'Check condition and security of steering', icon: 'mdi-check-bold' },
        { text: 'Check condition and security of suspension', icon: 'mdi-check-bold' },
        { text: 'Check condition and security of mountings', icon: 'mdi-check-bold' },
        { text: 'Check condition and security of gaiters', icon: 'mdi-check-bold' },
        { text: 'Check exhaust system for security and leaks', icon: 'mdi-check-bold' },
        { text: 'Check fuel lines for security and leaks', icon: 'mdi-check-bold' },
        { text: 'Check brake pipes', icon: 'mdi-check-bold' },
        { text: 'Check exhaust system for security and leaks', icon: 'mdi-check-bold' },
        { text: 'Check fuel lines for security and leaks', icon: 'mdi-check-bold' },
        { text: 'Check hoses', icon: 'mdi-check-bold' },
        { text: 'Check handbrake cables', icon: 'mdi-check-bold' },
        { text: 'Check cylinders/calipers for leakage (if applicable)', icon: 'mdi-check-bold' },
        { text: 'Check condition of distributor cap', icon: 'mdi-check-bold' },
        { text: 'Check engine and gearbox mounts for wear', icon: 'mdi-check-bold' },
        { text: 'Test starter motor cranking operation and security', icon: 'mdi-check-bold' },
        { text: 'Visually inspect radiator and coolant pipes/hoses for security and leaks', icon: 'mdi-check-bold' },
        { text: 'Check tyre condition and adjust pressure (if required)', icon: 'mdi-check-bold' },
        { text: 'Check and record brake pads/shoes for condition and operation', icon: 'mdi-check-bold' },
        { text: 'Check and record drums and discs for condition and operation', icon: 'mdi-check-bold' },
        { text: 'Check condition and operation of front brakes (wheels removed)', icon: 'mdi-check-bold' },
        { text: 'Check condition and operation of rear brakes (wheels removed)', icon: 'mdi-check-bold' },
        { text: 'Refit wheels (if applicable) - set wheel torque', icon: 'mdi-check-bold' },
        { text: 'Additional checks as per manufacturer schedule', icon: 'mdi-check-bold' },
        { text: 'Conduct road test', icon: 'mdi-check-bold' },
        { text: 'Check exhaust emissions and idle speed', icon: 'mdi-check-bold' },
        { text: 'Reset service light (where applicable)', icon: 'mdi-check-bold' },
        { text: 'Stamp service book', icon: 'mdi-check-bold' },
        { text: 'Reset service light (where applicable)', icon: 'mdi-check-bold' },
        { text: 'Stamp service book', icon: 'mdi-check-bold' },
        { text: 'Deliver vehicle to specified address', icon: 'mdi-check-bold' },
        { text: 'Vehicle delivery condition', icon: 'mdi-check-bold' },
      ],
      }
    },
  }
</script>
