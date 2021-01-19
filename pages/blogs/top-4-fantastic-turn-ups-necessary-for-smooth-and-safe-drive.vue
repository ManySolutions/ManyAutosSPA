<template>
  <page-layout
    title='Top 4 Fantastic Turn-Ups Necessary For Smooth And Safe Drive'
    headingBgStatic='https://static.manyautosltd.com/uploads/top-4-fantastic-turn-ups-necessary-for-smooth-and-safe-drive.jpg'
  >
    <div class="container" style="padding-top: 70px;">
      <p>We all know that the vehicle requires regular oil and filter change for it to run smoothly. But that is not the
        only thing it requires. Every part of your vehicle should be inspected and check for any damages.
      </p>
      <p>A regular car turn-up means a maintenance check-up. A whole inspection is carried out and the needed repairs
        are done. Regular car servicing can help you in a lot of ways and provide you with a safe drive.
      </p>
      <h2>Regular turn-ups can benefit you in the following ways</h2>
      <h3>Saves you from bigger and expensive repairs</h3>
      <p class="margin-bottom-10 text-justify text-teal">Like all the other things, your car parts have expiry dates as
        well. If they are not maintained, they wear down a lot sooner than they are supposed to. Regular turn-ups and
        small repairs can spare you from big and costly repairs later on. A part repaired at the right time will
        increase the life span of the component and you will not have to replace it.
      </p>
      <p>Every part is connected. If one of them doesn’t work properly, then the rest will be affected as well. Like
        the <NuxtLink to='/car-service'>fuel injector replacement</NuxtLink> should be done very carefully because if the fuel leaks, it will damage the things
        in its surroundings.</p>
      <h3>Keeps you safe on the road</h3>
      <p class="margin-bottom-10 text-justify text-teal">A well-maintained car will help you throughout your journey. I
        think so that when you spend money on the maintenance of the car, you are spending money on your safety and a
        smooth, risk-free drive. A damaged part of your car can cause life-threatening accidents. It is good to take
        preventative measures so don’t you have to face the consequences of a faulty vehicle.
      </p>
      <h3>Increases the life of your vehicle</h3>
      <p class="margin-bottom-10 text-justify text-teal">Everything starts from little and gets to a bigger version. The
        failures in your vehicle parts don’t occur suddenly, the part first gets damaged and over time leads to complete
        failure. Every maintenance trip increases the life of your vehicle. if the small issues are not treated on time,
        they become serious non-treatable problems. Regular turn-ups can guide you about what parts of your vehicle need
        assistance and that you should get them repaired.
      </p>
      <h3>Prevents your car from breaking down</h3>
      <p class="margin-bottom-10 text-justify text-teal">Without proper care, your vehicle won’t last long. The faulty
        or damaged part will cause it to break down. Your vehicle will break down and leave you stranded in the middle
        of nowhere. It is important to make sure from time to time that your car is safe to drive and will stay by you
        till the end of time. You can visit us and we will run a full diagnostic test on your vehicle to check if
        the <NuxtLink to='/vehicle-engine-diagnostic-services'>wheel cylinder function</NuxtLink> is rightly performed, if the brakes are running properly or not etc.
      </p>
      <p class="margin-bottom-10 text-justify text-teal">A complete inspection of your car is also important before an
        MOT. The passing of the test depends on the condition of your car. If you want to book a <NuxtLink to='/mot'>mot in Reading</NuxtLink>, UK, you
        can visit our website and book an MOT for your car. We have our MOT centers with DVSA approved professionals.
      </p>
       <p class="margin-bottom-10 text-justify text-teal">Our garages are the best for <NuxtLink to='/'>car repair in Reading</NuxtLink>, UK. We
         provide honest and authentic car maintenance services.
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

  head: {
    title: 'Top 4 Fantastic Turn-Ups Necessary For Smooth And Safe Drive',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'Regular turn ups are important for a risk-free drive. They can benefit you in multiple ways. Read to more about the benefits of regular maintenance and repairs.'
      },
      {
        name: 'keywords', 
        content: 'car repair in reading, mot reading, fuel injector replacement, wheel cylinder function, driving safety tips, car maintenance'
      },
      {
        property: "og:title", 
        content: "Top 4 Fantastic Turn-Ups Necessary For Smooth And Safe Drive"
      },
      {
        property: "og:type", 
        content: "website"
      },
      {
        property: "og:url", 
        content: URL
      },
      {
        property: "og:image", 
        content: "logo-default.png"
      },
      {
        property: "og:site_name", 
        content: "ManyAutos LTD"
      },
      {
        hid: 'og:description', name: 'og:description', property: 'og:description', 
        content: "Regular turn ups are important for a risk-free drive. They can benefit you in multiple ways. Read to more about the benefits of regular maintenance and repairs."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Top 4 Fantastic Turn-Ups Necessary For Smooth And Safe Drive"
      },
      {
        name: "twitter:description", 
        content: "Regular turn ups are important for a risk-free drive. They can benefit you in multiple ways. Read to more about the benefits of regular maintenance and repairs."
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
        property: "og:type", 
        content: "business.business"
      },
    ]
  }
}
</script>

<style lang="scss" scoped>
h2{
    color: #00b4d8;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 5px;
}
h3{

    color: #00b4d8;
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 5px;

}
</style>