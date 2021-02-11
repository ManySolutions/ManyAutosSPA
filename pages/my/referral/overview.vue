<template>
  <v-card>
    <v-card-text>
      <v-row class="total-row text-center">
        <v-col col="12" sm="4" md="3">
          <v-progress-circular
            :rotate="90"
            :size="120"
            :width="20"
            :value="100"
            color="teal"
          >
            {{ records.total }}
          </v-progress-circular>
          <h3>Total Referrals</h3>
        </v-col>
        <v-col cols="12" sm="4" md="3">
          <v-progress-circular
            :rotate="90"
            :size="120"
            :width="20"
            :value="records.active_count / records.total * 100"
            color="primary"
          >
            {{ records.active_count }}
          </v-progress-circular>
          <h3>Active Referrals</h3>
        </v-col>
        <v-col cols="12" sm="4" md="3">
          <v-progress-circular
            :rotate="90"
            :size="120"
            :width="20"
            :value="records.completed_count / records.total * 100"
            color="red"
          >
            {{ records.completed_count }}
          </v-progress-circular>
          <h3>Completed Referrals</h3>
        </v-col>
        <v-col cols="12" md=9 class="amount-row mt-10">
          <span class='v-text'>
            Your payable amount is 
            <strong>
              {{ `${currencySymbol} ${records.claim_amount}` }}
            </strong>
          </span>
          <span>
            <v-btn 
              color="success" 
              to="/"
              class="mb-2"
              large
              :disabled='!records.is_claimable'
            >
              {{ records.is_claimable ? 'Claim Now' : 'Nothing to claim for now!' }}
            </v-btn>
          </span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import { getReferralOverview } from '~/api/user';
import ReferralLinks from "~/pages/__components/referral-links.vue";
export default {
  components: {
    ReferralLinks,
  },
  data() {
    return {
      records: {
        active_count: 0,
        completed_count: 0,
        total: 0,
        claim_amount: 0,
      },
      currencySymbol: process.env.CURRENCY_SYMBOL,
    };
  },
  mounted() {
    this.getOverview();
  },
  methods: {
    getOverview() {
      getReferralOverview(this.http).then(res => {
        this.records = res;
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.v-progress-circular {
  margin: 1rem;
}
.v-text {
  font-size: 25px;
}
h3 {
  font-weight: 600;
}
@media (min-width: 768px) {
  .v-text {
    margin-right: 20px;
  }
}
@media (max-width: 600px) {
  .v-btn:not(.v-btn--round).v-size--default {
    margin-top: 20px;
  }
}
.wrap-text {
  -webkit-line-clamp: unset !important;
  white-space: normal;
}
</style>>
