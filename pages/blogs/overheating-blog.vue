<template>
  <page-layout
    title='Basic Causes of Overheating and How They Should be Handled'
    heading-bg='customer-v2/static-pages/allpics/about1.jpg'
  >
    <div class="container" style="padding-top: 70px;">
      <p>to experience. Overheating can be caused by many things. If you take care of your car properly, then you can
        prevent it from overheating.</p>
      <p>We can guide you on how to maintain your car. You should be aware of all the methods that can increase the life
        of your vehicle.</p>
      <h4>Here are some things that can cause your car to overheat:</h4>
      <h5>Leaks:</h5>
      <p class="margin-bottom-10 text-justify text-teal">Leaks are the main reason why a vehicle overheats. There can be
        a leakage in hoses, water pump, heater core, thermostat housing, and some other things as well. They can lead to
        issues with the car's cooling system. The most crucial part is the thermostat housing and you will need to
        replace it if it causes trouble. If you think there is a leak, then you should take your car to the garage
        immediately. We offer cheaper rates as compared to the <NuxtLink to='/'>thermostat housing repair cost in
        the UK </NuxtLink>.We will inspect your car and fix any leakages or damages for you. a small leak can lead to
        bigger and serious problems.
      </p>
      <h5>Bad radiator:</h5>
      <p class="margin-bottom-10 text-justify text-teal">Leakage and clogging can cause the radiator to fail. If any
        disruption occurs in the working of the radiator, then your car will overheat as the radiator won’t be able to
        pull heat away from the cooling system. Keeping your radiator in check is important. We advise you to get it
        checked at the garage once in a while. We will perform the mandatory services, like repairing or replacing the
        radiator.
      </p>
      <h5>Water pump issues:</h5>
      <p class="margin-bottom-10 text-justify text-teal">The water pump is the main part of your cooling system. When an
        air pump doesn’t work properly, the vehicle lacks pressure to propel coolant throughout the cooling system. Any
        problems with your water pump can cause the vehicle to overheat. It is good to keep an eye open for such
        possibilities so you can solve them before they cause any more trouble.
      </p>
      <h5>Fuel pump:</h5>
      <p class="margin-bottom-10 text-justify text-teal">It is the most common reason why a vehicle overheats. The pump
        suppliers fuel from the fuel tank to the carburetor. If a problem occurs with the pump, the other parts of the
        engine stop working as well. Which leads to overheating of the vehicle. If any issue occurs, you can visit our
        garage for your <NuxtLink to='/car-service'> car’s fuel pump repair </NuxtLink>. We have highly qualified technicians which will fix your car in no time.
      </p>
      <p class="margin-bottom-10 text-justify text-teal">If you want to increase the efficiency of your car, you can get
        a custom car exhaust system. It will boost the horsepower, the torque and also increase the engine’s exhaust
        flow. You can search online for <NuxtLink to='/exhaust-repair'>custom exhaust near me </NuxtLink>, and buy one for your car.
      </p>
       <p class="margin-bottom-10 text-justify text-teal">If your car is overheating, contact us today we would be at
         your service to examine the car and provide you with the best service and repairs.
      </p>
       <p class="margin-bottom-10 text-justify text-teal">Along with overheating cars, we can help with any other issues
         as well. It can be a great risk if any part of your vehicle is not working properly. The most common parts to
         cause trouble is the air suspenders, driving with <NuxtLink to='/air-suspension'>broken air suspenders  </NuxtLink> would be like walking on a broken leg.
         It would be unstable and unbalanced. So you should not take any part of your car lightly and work on their
         maintenance.
      </p>
      </div>
  </page-layout>
</template>

<script>
import PageLayout from '@/layouts/page-layout';

const URL = process.env.APP_URL;

export default {
  components: {
    PageLayout
  },
   props: {
    hasQuoteButton: {
      default: false,
      type: Boolean,
    },
    title: String,
    cls: String,
  },

}
</script>

<style lang="scss" scoped>
h4{
    color: #00b4d8;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 5px;
}
h5{

    color: #00b4d8;
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 5px;

}
</style>