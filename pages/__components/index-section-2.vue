<template>
  <v-row
    :style='`background-image: url(${assets("customer-v2/alex-suprun.jpg")})`'
    class='has-bg-overlay home-sec-2 home-sec-gaps'
  >
    <v-col cols=12>
      <div class='sec-2 text-center'>
        <h1 class='text-white heading__title mb-5 font-weight-100'>
          Vehicles <strong>Serviced</strong>
        </h1>
        <p class='font-weight-300'>
          We provide maintenance service in all categories of vehicles. <br>
          Our mechanics are certified to Service, Repair & MOT for the following makes:
        </p>
        <table class='w-100 m-auto pt-8' style='max-width: 700px;'>
          <tbody>
            <tr>
              <td 
                v-for='(list, i) in carsList'
                :key="i"
              >
                <span
                  v-for='(car, j) in list'
                  :key="j"
                  class='d-block text-left car-text'
                >
                  <v-icon color='primary' class='mr-sm-2' small>mdi-check</v-icon>
                  {{ car.name }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- <div class='pt-10 text-center'>
          <v-btn
            large outlined
            color='primary'
          >
            <strong>
              View all vehicles
            </strong>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div> -->
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { carsList,  } from '~/utils/vars';

export default {
  data: () => ({
    carsList: [
      [
        { 
          code: 'renault-service', 
          name: 'Renault'
        },
        {
          code: 'audi-service', 
          name: 'Audi' 
        },
        { 
          code: 'bmw-service', 
          name: 'BMW' 
        },
        { 
          code: 'citroen-service', 
          name: 'Citroen' 
        },
        { 
          code: 'land-rover-service', 
          name: 'Land Rover' 
        },
      ],
      [
        { 
          code: 'daewoo-service', 
          name: 'Daewoo' 
        },
        { 
          code: 'fiat-service', 
          name: 'Fiat' 
        },
        { 
          code: 'ford-service', 
          name: 'Ford'
        },
        { 
          code: 'honda-service', 
          name: 'Honda' 
        },
        { 
          code: 'kia-service', 
          name: 'Kia' 
        },
      ],
      [
        {
          code: 'lexus-service', 
          name: 'Lexus' 
        },
        { 
          code: 'mazda-service', 
          name: 'Mazda' 
        },
        { 
          code: 'mercedes-service', 
          name: 'Mercedes' 
        },
        { 
          code: 'mini-service', 
          name: 'Mini' 
        },
        { 
          code: 'mitsubishi-service', 
          name: 'Mitsubishi' 
        },
      ]
    ],
  }),

  computed: {
  },

  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
.has-bg-overlay {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(13 168 199 / 77%);
  }
  &:after {
    background: rgb(51 51 51 / 67%);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.sec-2 {
  position: relative;
  z-index: 1;
  color: white;
}
.home-sec-2 {
  background-size: cover;
  background-position: center;
}
.car-text {
  font-weight: 100;
  font-size: 17px;
  text-transform: capitalize;
  letter-spacing: 1px;
  padding-bottom: 10px;
}
</style>