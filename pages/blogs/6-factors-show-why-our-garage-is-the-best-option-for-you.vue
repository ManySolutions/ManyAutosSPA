<template>
  <page-layout
    title='6 Factors Show Why Our Garage Is The Best Option For You'
    headingBgStatic='https://static.manyautosltd.com/uploads/6-Factors-Show-Why-Our-Garage-Is-The-Best-Option-For-You.png'
    has-share-button
  >
    <div class="container" style="padding-top: 70px;">
      <p>It is a difficult thing to trust anyone with our valuables. It is even more when it comes to our most valuable
        possession, that is our cars. A lot of trusts is required to send your car to a garage for servicing. We assure
        you that we take extra care of our client’s vehicles and you can trust us without hesitation. You won’t regret
        putting your trust in us.</p>
      <h2>Why You Should Choose Our Garage for Your Car’s Maintenance</h2>
      <h3>Experience</h3>
      <p class="margin-bottom-10 text-justify text-teal">An important thing to consider when looking for a garage is
        experience. We have been serving the community since 2001. We have always provided the customer with
        satisfactory services and our workers are humble and respectful towards our clients. All or mechanics have
        experience and they are professionals, they know what your car needs and they will never disappoint you with
        their services.
      </p>
      <h3>Good recommendations</h3>
      <p class="margin-bottom-10 text-justify text-teal">Do your research, ask your relatives and friends about their
        experiences with different <NuxtLink to='/brake-pads'>auto repair shops</NuxtLink> and with our garage. You would receive good reviews of our car
        services. We try our best to make every customer happy and once they become our client, they never think of
        switching again. You should consider a garage which has both: good customer service and excellent work history.
      </p>
      <h3>Online service</h3>
      <p class="margin-bottom-10 text-justify text-teal">We have made it more convenient for the user to choose and
        book <NuxtLink to='/brake-pad-sensor'>car services in the UK</NuxtLink> by adding an online booking option. You don’t
        have to go to the garage and look for
        services before you take your car to get cleaned, just visit our company’s website and choose the services you
        want from the list that is given on the website. 
      </p>
      <h3>Pick and drop service</h3>
      <p class="margin-bottom-10 text-justify text-teal">Most of the cars are not serviced on time because the owner is
        too busy to take the car to the car garage. If you are in the same situation, then you should benefit from
        our <NuxtLink to='/brake-disc'>repair service in the UK</NuxtLink> that also provides the clients with the collection and delivery service. We pick
        your car from your house, office, or any place that suits you and then return it to your doorstep after the
        servicing is done.
      </p>
      <h3>Good online reviews</h3>
      <p class="margin-bottom-10 text-justify text-teal">There might be a chance that your family and friends haven’t
        visited our car garage, so you can’t have their opinion. That is when the internet comes in handy. You can
        easily go online and look at our customer reviews. Customer reviews are always reliable and honest. 
      </p>
      <h3>Well organized and clean</h3>
       <p class="margin-bottom-10 text-justify text-teal">Most garages are not tidy and well maintained as they have to
         deal with a lot of dirty cars and grease. We assure you that our garage keeps cleanliness and organization on
         its priority list. You will be relieved that a tidy and organized garage like ours will not use the wrong parts
         or lose any parts of your car. You can also sit back and relax at home with that thought in mind, while we
         transform your dirty car into a brand new car.
      </p>
       <p class="margin-bottom-10 text-justify text-teal">We also provide you with authentic car parts which would
         increase the performance of your car. You can get any part of your car replaced just choose from our website
         online like you can choose a muffler of your reference from our <NuxtLink to='/'>online car muffler</NuxtLink>.
       </p>
      </div>
  </page-layout>
</template>

<script>
import PageLayout from '@/layouts/page-layout';

const URL = process.env.APP_URL;

export default {
  components: {
    PageLayout,
  },
     props: {
    hasQuoteButton: {
      default: false,
      type: Boolean,
    },
    title: String,
    cls: String,
  },
   data(){
    return {
      user:{
        title:'https://manyautosltd.com/blogs/6-factors-show-why-our-garage-is-the-best-option-for-you'
      }
    }
  },

  head: {
    title: '6 Factors Show Why Our Garage Is The Best Option For You',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: 'You should consider certain factors before choosing a garage. Those factors affect you & the service of your car. Read to know why our garage is the best option for you.'
      },
      {
        name: 'keywords', 
        content: 'car services in UK, online car muffler, repair service in the UK, auto repair shop, auto car garages, car garage in london, reading car garage'
      },
      {
        property: "og:title", 
        content: "6 Factors Show Why Our Garage Is The Best Option For You"
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
        content: "You should consider certain factors before choosing a garage. Those factors affect you & the service of your car. Read to know why our garage is the best option for you."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "6 Factors Show Why Our Garage Is The Best Option For You"
      },
      {
        name: "twitter:description", 
        content: "You should consider certain factors before choosing a garage. Those factors affect you & the service of your car. Read to know why our garage is the best option for you."
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