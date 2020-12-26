<template>
    <div>
<v-container class="garage-network pt-5">
    <v-row>
        <v-col cols="12" md="6" order-md="2">  
           <v-card class="mx-auto mt-5" max-width="344">
            <v-card-text>
              <h3 class="register-title text-center pt-5 mb-10">
                Register Here
              </h3>
              <v-text-field 
                label="Garage Name" 
                placeholder="Your Garage Name" 
                outlined
              >
              </v-text-field>
              <v-text-field 
                label="Name" 
                placeholder="Your Name" 
                outlined
              >
              </v-text-field>
              <v-text-field
                label="Contact No."
                placeholder="Your Contact no."
                outlined
              >
              </v-text-field>
              <v-text-field
                type='email'
                label="E-Mail Address"
                placeholder="Your Email"
                outlined
              >
              </v-text-field>
                <div class="login text-left">
              <v-btn 
                    color="primary"
                    left
              >
                    Contact Me
                </v-btn>
              </div>
            </v-card-text>
           </v-card>
        </v-col>
        <v-col cols="12" md="6" order-md="1">          
            <div class="values">
                <h2>Why you should join our Network?</h2>
                <h3 style="font-weight: 200; font-size:1.75rem;">Simple, upfront and fair.</h3>
                <p class="heading-para" style="padding-top: 20px;" >Joining our network means - we look after you as well as the customers. Pricing is always clear and upfront so there are no surprises for the customer.</p>
                <v-icon style="color: #00B4D8;">mdi-laptop-windows</v-icon><span class="icon">Easy to use online booking management system.<br></span>
                <v-icon style="color: #00B4D8;">mdi-credit-card-outline</v-icon><span class="icon">Price promise: there will never be a monthly fee.<br></span>
                <v-icon class="logos" style="color: #00B4D8;">mdi-timer-sand</v-icon><span class="icon">   Payment is made 10 working days after job completion.<br></span>
                 <v-icon class="" style="color: #00B4D8;">mdi-laptop-windows</v-icon><span class="icon">Chat with an advisor with ease, no waiting in call queues.<br></span>
            </div> 
        </v-col>
    </v-row>
</v-container>
</div>
</template>

<style lang="scss" scoped>
@media (max-width:768px){
            .garage-network  .values .logos{
    
            padding-bottom: 3px;
            padding-top: 20px;
        }
        }
        .garage-network .register-title{

            font-size: 1.75rem;
            font-weight: 300;
        }
        .garage-network  .values .logos{
            
            font-size: 22px;
            padding-bottom: 3px;
            // padding-top: 20px;
}
        h2{
            font-weight: 200;
            font-size: 2rem;
        }
         .garage-network .list .icon{
            
            margin-left: 12px;
            font-weight: 200;
            font-size: 20px;
        }
        .garage-network  .values .icon{
            
            margin-left: 12px;
            font-weight: 200;
            font-size: larger;
            padding-bottom: 3px;
            padding-top: 2px;
        }
        .garage-network .card.register-form{

            background-color:#d7ddde; 
            margin-bottom: 20px;
            padding-bottom: 15px;
        }
        .garage-network .card.register-form label{

            padding-top: 14px;
            font-weight: 200;
        }
@media (max-width:768px){
    .garage-network .card.register-form{
        margin-top: 35px;
    }
}
</style>