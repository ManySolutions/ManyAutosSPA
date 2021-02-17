<template>
  <v-card>
    <v-progress-linear
      v-if='isLoading'
      color="primary"
      indeterminate
    ></v-progress-linear>
    <v-card-title>
      Your Referrals Earning
    </v-card-title>
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
          <h3>
            Total Referrals
            <br>
            <small>All Unpaid referrals</small>
          </h3>
        </v-col>
        <v-col cols="12" sm="4" md="3">
          <v-progress-circular
            :rotate="90"
            :size="120"
            :width="20"
            :value="records.inprogress_count / records.total * 100"
            color="primary"
          >
            {{ records.inprogress_count }}
          </v-progress-circular>
          <h3>
            Active Referrals
            <br>
            <small>Job is in progress</small>
          </h3>
        </v-col>
        <v-col cols="12" sm="4" md="3">
          <v-progress-circular
            :rotate="90"
            :size="120"
            :width="20"
            :value="records.claimable_count / records.total * 100"
            color="red"
          >
            {{ records.claimable_count }}
          </v-progress-circular>
          <h3>
            Completed Referrals
            <br>
            <small>Ready to claim for payment</small>
          </h3>
        </v-col>
        <v-col cols="12" md=9 class="amount-row mt-10">
          <v-alert
            v-if='lblAlertClaim'
            type='info'
          >
            {{ lblAlertClaim }}
          </v-alert>
          <span class='v-text'>
            Your payable amount is 
            <strong>
              {{ `${currencySymbol} ${records.claim_amount}` }}
            </strong>
          </span>
          <span>
            <v-btn 
              color="success" 
              class="mb-2"
              large
              :disabled='!records.is_claimable'
              @click="handleClaim"
              :loading='isClaimLoading'
            >
              {{ lblBtnClaimable }}
            </v-btn>
          </span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import toastr from 'toastr';
import { claimReferral, getReferralOverview } from '~/api/user';
import ReferralLinks from "~/pages/__components/referral-links.vue";
export default {
  components: {
    ReferralLinks,
  },
  data() {
    return {
      records: {
        inprogress_count: 0,
        claimable_count: 0,
        total: 0,
        claim_amount: 0,
        is_claimable: false,
        claim: null,
      },
      currencySymbol: process.env.CURRENCY_SYMBOL,
      isLoading: true,
      isClaimLoading: false,
    };
  },
  computed: {
    lblBtnClaimable() {
      const {is_claimable, claim} = this.records;

      if (is_claimable) return 'Claim Now'
      else if (is_claimable && claim) return 'Already another claim is pending';
      else return 'Nothing to claim for now!';
    },
    lblAlertClaim() {
      const {claim} = this.records;

      if (claim)
        return `Your claim(#${claim.id}) has been received(${claim.date}) and is in-progress, 
          once resolved, you\'ll be notified`
      else 
        return null;
    }
  },
  mounted() {
    this.getOverview();
  },
  methods: {
    getOverview() {
      getReferralOverview(this.http).then(res => {
        this.records = {...this.records, ...res};
        this.isLoading = false;
      })
    },
    handleClaim() {
      this.isClaimLoading = true;
      claimReferral(this.http).then(res => {
        const { status, message} = res;
        
        if (!status) {
          toastr.error(message);
        } else {
          toastr.success(message);
          this.records.is_claimable = false;
          this.records.claimable_count = 0;
          this.records.total = 0;
          this.records.claim_amount = 0;
        }
      }).finally(() => this.isClaimLoading = false);
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
