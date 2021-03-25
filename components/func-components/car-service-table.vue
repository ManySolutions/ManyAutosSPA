<template>
  <v-card 
    class='table-pricing-car p-0'
    elevation="2"
  >
    <v-sheet color="#f6faff" class='tbp-heading px-3 px-md-7'>
      <v-row class='' align-content="center">
        <v-col cols=6 class='text-primary py-6'>
          <h3 class='heading__title m-0 line-height-none'>
            <span class='font-weight-300'>What's Included in</span> 
            <span class='d-md-block'>Car Servicing?</span>
          </h3>
        </v-col>
        <v-col cols=3 class='text-center tbp-imp py-6'>
          Full <span class='d-none d-md-inline-block'>Service</span>
          <br>
          <v-chip color='primary darken-2 px-1 px-md-3 font-weight-600' small>
            <v-icon small class='mr-md-2' color='yellow'>mdi-star</v-icon>
            <span class='d-none d-md-inline-block'>Popular Service</span>
          </v-chip>
        </v-col>
        <v-col cols=3 class='text-center py-6'>
          Interim <span class='d-none d-md-inline-block'>Service</span>
        </v-col>
      </v-row>
    </v-sheet>
    <template
      v-for='(item, itemI) in items'
    >
      <v-sheet 
        class='tbp-row px-3 px-md-7'
        :key='itemI'
        :color='itemI % 2 == 0 ? `#fbfcfd` : `white`'
      >
        <v-row>
          <v-col cols=6 class=' py-6'>
            {{item.text}}
          </v-col>
          <v-col cols=3 class='text-center py-6 tbp-imp-row'>
            <v-img src='/logo-icon.png' max-height=30 contain v-if='item.full'></v-img>
          </v-col>
          <v-col cols=3 class='text-center py-6'>
            <v-img src='/logo-icon.png' max-height=30 contain v-if='item.interim'></v-img>
          </v-col>
        </v-row>
      </v-sheet>
    </template>
    <v-sheet 
      class='tbp-footer px-3 px-md-7'
      color='#f7fbff'
    >
      <v-row>
        <v-col cols=6 class=' py-6'></v-col>
        <v-col cols=3 class='text-center py-6 tbp-imp-foot-row'>
          <span class='d-block tbp-price'>
            {{ currencySymbol }}900
          </span>
          <v-btn
            color='secondary'
          >
            Book <span class='d-none d-md-block'>&nbsp;Full Service</span>
          </v-btn>
          <br>
          <a href='#' class='d-block mt-3'>
            Full Details
          </a>
        </v-col>
        <v-col cols=3 class='text-center py-6'>
          <span class='d-block tbp-price'>
            {{ currencySymbol }}500
          </span>
          <v-btn
            color='secondary'
          >
            Book <span class='d-none d-md-block'>&nbsp;Interim Service</span>
          </v-btn>
          <br>
          <a href='#' class='d-block mt-3'>
            Full Details
          </a>
        </v-col>
      </v-row>
    </v-sheet>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items : [
      {text: 'Maintenance Check', interim: true, full: true},
      {text: 'Engine oil and oil filter', interim: true, full: true},
      {text: 'Brake fluid and power steering fluids (top up)', interim: true, full: true},
      {text: 'Air filter', interim: false, full: true},
      {text: 'Gearbox fluid (top up)', interim: false, full: true},
      {text: 'Brake fluid (replacement) and bleed system', interim: false, full: true},
      {text: 'Pollen filter (if fitted)', interim: false, full: true},
      {text: 'Fuel filter (diesel only)', interim: false, full: true},
    ]
  }),
}
</script>

<style lang="scss" scoped>
.tbp-imp {
    background: #00b4d8;
    border-radius: 10px 10px 0px 0px;
    color: white;
    font-weight: bold;
    margin-top: -10px;
}
.tbp-imp-row {
    border-left: 3px solid #00b4d8;
    border-right: 3px solid #00b4d8;
}
.tbp-heading {
  font-weight: 600;
}
.tbp-imp-foot-row {
    border-left: 3px solid #00b4d8;
    border-right: 3px solid #00b4d8;
    border-bottom: 3px solid #00b4d8;
    border-radius: 0px 0px 10px 10px;
    margin-bottom: -4px;
}
</style>