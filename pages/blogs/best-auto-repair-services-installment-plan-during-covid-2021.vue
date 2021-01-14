<template>
  <page-layout
    title='Best Auto Repair Services Installment Plan During COVID 2021'
    headingBgStatic='https://static.manyautosltd.com/uploads/best-auto-repair-services-installment-plan-during-covid-2021.jpg'
  >
    <div class="container" style="padding-top: 70px;">
      <p>It is a very rare sight to see the whole world experiencing something together. Covid-19 has affected all 7.8
        billion lives equally. The only way to survive is if we get through this together. We can help each other to
        overcome this obstacle making things easier for each other.
      </p>
      <p>Everyone should contribute in any way they can. We as a car repair and maintenance center are trying to make
        car maintenance easy for people in the UK. We are open in this pandemic and are on the mission of making
        people's cars drivable even after they have been sitting in their garages for a long time.
      </p>
      <p>In our garages, we follow all the necessary rules for the safety of the customer and our employees. We know
          that this pandemic might have caused financial instability for many people. So we are offering auto repair
          payment plans, so people can still afford to get their car serviced.</p>
      <h2>We Offer a No-Contact Service And An Affordable Payment Plan</h2>
      <p class="margin-bottom-10 text-justify text-teal">We have introduced the new no-contact car repair and servicing
        to stay safe from covid-19. In this technique, no direct contact happens between the customer and the employee
        or the technician and the vehicle. The precautionary measure taken by us are as following:
      </p>
      <h3>Hand gloves are worn</h3>
      <p class="margin-bottom-10 text-justify text-teal">All the employees and technicians wear gloves during the
        servicing of the vehicle. They wear fresh gloves for every vehicle.
      </p>
      <h3>Importance of the masks</h3>
      <p class="margin-bottom-10 text-justify text-teal">Marks are necessary for everyone. Either they are working in
        our garage or are simply visiting, they should wear a mask at all times.
      </p>
      <h3>Tools and equipment</h3>
      <p class="margin-bottom-10 text-justify text-teal">All the tools and equipment used by our technicians are cleaned
        and disinfected before every use.
      </p>
      <h3>Key exchange without contact</h3>
      <p class="margin-bottom-10 text-justify text-teal">The keys can be left at a specified spot to avoid any contact
        between the employees and the owner.
      </p>
      <h3>Money transfer through phone or online</h3>
       <p class="margin-bottom-10 text-justify text-teal">To avoid any contact, the payment can be made through the phone or online.
      </p>
      <h3>Social distancing</h3>
       <p class="margin-bottom-10 text-justify text-teal">Our technicians follow the rules and stay 6 feet away from each other during the whole appointment.</p>
       <h2>Payment plans that we are offering</h2>
       <p>We have devised a suitable payment plan after considering the financial condition of many of our customers.
         You can benefit from our <NuxtLink to='/car-repair-during-covid-19'>car repair payment plan</NuxtLink> during covid-19. The plan is that you can pay your dues in
         installments.
       </p>
       <p>The <NuxtLink to='/car-repair-during-covid-19'>vehicle servicing installments plan</NuxtLink> is efficient for everyone. You just have to deposit 25% initial
         payment and the rest of the amount can be paid in installments for 4 or 6 months.</p>
       <p>This car repair pay later service is interest-free. No extra interest money would be charged from you except
         for the cost of the services that you booked.</p>
      <h3>Collection and delivery service</h3>
      <p>If you are hesitating in getting out of your house during the pandemic, then we offer you the collection and
        delivery service. We will pick your car from your home and deliver it back to you after it has been serviced and
        looks brand new. We will sanitize your car thoroughly before returning it to you.</p>
        <p>We provide the best services and we focus on the sanitization of the vehicles. You will not get a better plan
          than our <NuxtLink to='/car-repair-during-covid-19'>car repair services installment during covid-19</NuxtLink>.</p>

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
    title: 'Best Auto Repair Services Installment Plan During COVID 2021',

    meta: [
      {
        name: 'description', 
        content: 'We prioritize the maintenance of cars but we also understand your concerns about safety and finance. We offer a safe environment and the best payment plans for your cars.'
      },
      {
        name: 'keywords', 
        content: 'car repair services installment during covid19, auto servicing installments plan, car repair payment plan, car repair payment plans, vehicle repair pay later service, vehicle repair services,'
      },
      {
        property: "og:title", 
        content: "Best Auto Repair Services Installment Plan During COVID 2021"
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
        property: "og:description", 
        content: "We prioritize the maintenance of cars but we also understand your concerns about safety and finance. We offer a safe environment and the best payment plans for your cars."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Best Auto Repair Services Installment Plan During COVID 2021"
      },
      {
        name: "twitter:description", 
        content: "We prioritize the maintenance of cars but we also understand your concerns about safety and finance. We offer a safe environment and the best payment plans for your cars."
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