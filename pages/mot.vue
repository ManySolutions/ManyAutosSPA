<template>
  <page-layout-v2
    title="Book Your Car MOT | MOT Testing Service"
    sub-heading="Keep your car on the road, Book your MOT online now"
    heading-bg="customer-v2/static-pages/mot.jpg"
    heading-img='https://static.manyautosltd.com/uploads/car-service-page-part-image.png'
    box-title='Book your car MOT Test now'
    :faqs='faqs'
    faq-topic='How car MOT test works with ManyAutos'
    blog-topic='Things about MOT test that you should know'
    redirect-to='/booking/create/mot-and-servicing'
  >
    <template #overview>
      <p>
        MOT testing is required by law on all vehicles in the UK that are more than 3 years old. The yearly inspection is done by following strict criteria set out by the DVSA that decides if your car is in a roadworthy condition or not. The MOT checks include a broad range of vehicle safety checks including lights, tyres, seatbelts, and emissions and can only be carried out by an MOT garage with DVSA-approved examiners.
        <br><br>
        During the MOT, a person chosen by the DVSA to assess your vehicle, will conduct a comprehensive inspection to make sure that the vehicle is in a roadworthy condition. However, it is different from having your vehicle serviced and the MOT test does not check the general mechanical condition of the automobile. Also, the evaluation is based on the condition of the vehicle on that particular day.
        <br><br>
        If the vehicle passes, the nominated examiner will separately list and tell you of any 'advisory' or 'minor' items that will require attention soon, so you can look out for them. If the vehicle fails you will be required to get the necessary repairs and replacements done, you may be entitled to a free re-test.
      </p>
    </template>
    <template #blog>
      <h2 class="font-weight-400">
        Classification of problems:
      </h2>
      <p>
        At first, the vehicles could only pass, fail or receive an advisory regarding their condition, on the MOT test. Many changes were made to the test on 20th May 2018. Now the faults and problems are classified as minor, major and dangerous. All class 3,4,5 and 7 vehicles are tested against the new criteria; this includes all cars, motorhomes, buses, and goods vehicles up to 3,500kg. 
      </p>
      <h3>
        The three categories for the classification of problems are:
      </h3>
      <h2 class="font-weight-600">
        <span class='black--text'>1.</span>
        Minor MOT faults
      </h2>
      <p>
        A ‘minor’ fault would be viewed as one where the problem does not cause an immediate safety hazard but should be fixed soon. This is related to the existing system, but an advisory is given to items that the driver should know of and may cause a future MOT failure if not taken care of. An MOT certificate of passing the test will be issued if a vehicle only has some minor problems.
      </p>
      <h2 class="font-weight-600">
        <span class='black--text'>2.</span>
        Major MOT faults
      </h2>
      <p>
        A ‘major’ fault is more serious and poses a potential safety risk to the drivers and others. It is a defect that may have a damaging impact on the environment. These problems will lead to a MOT failure and the owner of the car will not be issued with an MOT certificate until the issues have been fixed. It is better to get the vehicle repaired as soon as possible.
      </p>
      <h2 class="font-weight-600">
        <span class='black--text'>3.</span>
        Dangerous MOT faults 
      </h2>
      <p>
        Meanwhile, a fault classed as ‘dangerous’ is one that has an immediate risk to the safety of the driver and other road users, the vehicle should not be driven until the issue has been taken care of. This will lead to an immediate MOT failure. It includes having loose steering or non-functioning brake lights. 
      </p>
      <h2 class="font-weight-600">
        Will the MOT still include advisories?
      </h2>
      <p>
        Yes, the advisories would still be given with the result. Minor faults will still be recorded in the same way and will appear as advisory items on the test certificate. However, the MOT testing service has said that, when the new MOT is rolled out, the certificate will likely include safety warnings for vehicles with dangerous faults and will highlight penalties for driving a dangerous vehicle.
      </p>
      <h2 class="font-weight-600">
        Is my car MOT exempt?
      </h2>
      <p>
        Cars, vans, and motorbikes become MOT exempt when they hit 40 (years of age). An extra 300,000 owners of classic old cars became exempt after the Department for Transport announced cars more than 40 years old will no longer have to undergo their annual roadworthiness check considering they haven’t had any significant modification. This rule doesn’t apply to lorries, trucks or any other huge goods vehicle, they still have to undergo the test annually.
      </p>
      <h2 class="font-weight-600">
        How long does an MOT take?
      </h2>
      <p>
        Normally an average MOT takes up to 45 or 60 minutes. However, more time can be consumed if your vehicle fails the test and requires repair. 
      </p>
      <h2 class="font-weight-600">
        What causes a vehicle to fail MOT?
      </h2>
      <p>
        Your vehicle may fail the test due to multiple reasons but the biggest cause of a failed MOT is blown bulbs. They are the main reason why your vehicle might not pass the test, they are also the simplest and easiest to fix. You should get help from a friend and check all the parts of the vehicle especially the bulbs and lights; the front, rear, brake lights and the indicators. 
      </p>
      <h2 class="font-weight-600">
        How long can you legally drive without MOT?
      </h2>
      <p>
        You are not allowed to drive your vehicle without an MOT. If the car is 3 or more years old, then you cannot take it out on the road without a passed test unless you are driving to the garage for a pre-booked MOT test. 
      </p>
      <h2 class="font-weight-600">
        Can I drive my car home if it doesn’t pass the MOT?
      </h2>
      <p>
        If the problems are listed as ‘major’, then you can drive your car back to your home if your previous certificate is still valid (If you took the test before the expiry date). In case of ‘dangerous’ problems listed in the report, your vehicle is bound to stay in the garage until it is repaired even if your previous MOT certificate is live. 
      </p>
      <h2 class="font-weight-600">
        MOT collection and delivery service
      </h2>
      <p>
        There must be times when you are too busy to take your car for the test. We don’t want our clients to suffer by missing their appointment. So, we are offering a free MOT collection and delivery service. A team from our garage will collect your vehicle at the due date from a place of your choice. They will take your car to the <strong>garage near you for MOT</strong>. The car will be delivered back to you after the test is completed. 
        <br>
        Many Autos operate a fleet of pool cars with a dedicated driver, so wherever we are collecting from, we need to be able to leave one of our pool vehicles either in your work car park/parking space or if in a residential area, we would need to be able to leave our car either at your house or on the road with a permit if required. We would be grateful if you could bear this in mind when booking to use our free Collection and delivery service. 
      </p>
    </template>

    <!-- <div style='padding-top: 50px;'>
      <car-service-table></car-service-table>
    </div> -->
  </page-layout-v2>
</template>

<script>
import PageLayoutV2 from '@/layouts/page-layout-v2';

const URL = process.env.APP_URL;

export default {
  components: {
    PageLayoutV2
  },

  data: () => ({
    faqs: [
      {
        title: 'When is my MOT due?',
        content: 'It is possible to forget the due date of your MOT. Now you can easily check if a car has an MOT certificate or when its MOT is due. You will require the car’s registration number to check the history of tests. Just enter the number and benefit from our free service.',
      },
      {
        title: 'How can you book an MOT?',
        content: 'It is super easy and convenient to book an MOT test for your car. You just have to register your car into our system and benefit from the <strong>online MOT booking</strong> service. You might think that ‘<strong>which MOT centre near me</strong> is the best for my car?’ well, it is not your concern anymore. We will get the absolute best and reliable garage for you.',
      },
      {
        title: 'Do you get a grace period for MOT?',
        content: 'No, there is no grace period after your MOT expires. It is illegal to drive your vehicle once the certificate expires. By doing that you will risk prosecution. You need to take your car for a test as soon as possible. It is also not possible to tax an automobile without a current MOT certificate.',
      },
    ]
  }),

  head: {
    title: 'Car MOT | MOT Testing Service',

    meta: [
      {
        hid: 'description', name: 'description', 
        content: ' Book your Car MOT test and Service together at Many Autos and save time and money. MOT deals with free collection and delivery.'
      },
      {
        name: 'keywords', 
        content: 'MOT check, MOT testing service, MOT on a car, garages near me for MOT, MOT centre near me, MOT online, MOT checks near me.'
      },
      {
        hid: 'og:title',
        property: "og:title", 
        content: "Car MOT | MOT Testing Service"
      },
      {
        hid: 'og:type',
        property: "og:type", 
        content: "website"
      },
      {
        hid: 'og:url',
        property: "og:url", 
        content: process.env.APP_URL + '/mot'
      },
      {
        hid: 'og:image',
        property: "og:image", 
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/mot.jpg"
      },
      {
        hid: 'og:site_name',
        property: "og:site_name", 
        content: "ManyAutos LTD"
      },
      {
        hid: 'og:description',  property: 'og:description', 
        content: " Book your Car MOT test and Service together at Many Autos and save time and money. MOT deals with free collection and delivery."
      },
      {
        name: "twitter:card", 
        content: "summary"
      },
      {
        name: "twitter:title", 
        content: "Car MOT | MOT Testing Service"
      },
      {
        name: "twitter:description", 
        content: " Book your Car MOT test and Service together at Many Autos and save time and money. MOT deals with free collection and delivery."
      },
      {
        name: "twitter:image", 
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/mot.jpg"
      },
      {
        itemprop: "image", 
        content: "https://app.manyautosltd.com/assets/customer-v2/static-pages/mot.jpg"
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
.card-header{
    background: whitesmoke;
    border: 1px solid #ececec;
    color: #1ea5c7;
    padding: 18px;
    font-weight: 400;
    font-size: 16px;
    line-height: normal;
}
.card-header-body{
    background-color: #fff;
    padding-top: 16px;
}
</style>