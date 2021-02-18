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

    <v-dialog
      v-model='dialog'
      max-width="400px"
    >
      <v-card>
        <v-card-title class="headline">
          Your Bank details
        </v-card-title>

        <v-card-text>
          The money will be transfered to your provided bank details.
          <br><br>

          <v-text-field outlined v-model="form.account_no" label="Account No"
            :error='!!errors.account_no'
            :persistent-hint='!!errors.account_no'
            :hint="errors.account_no ? errors.account_no[0] : null"
            class='mb-3'
          ></v-text-field>
          <v-text-field outlined v-model="form.sort_code" label="Sort Code"
            :error='!!errors.sort_code'
            :persistent-hint='!!errors.sort_code'
            :hint="errors.sort_code ? errors.sort_code[0] : null"
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="handleClaim"
            :loading='isClaimLoading'
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      form : {
        account_no: '',
        sort_code: '',
      },
      dialog: false,
      errors: {},
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
      this.isLoading = true;
      getReferralOverview(this.http).then(res => {
        this.records = {...this.records, ...res};
        this.isLoading = false;
      })
    },
    handleClaim() {
      this.isClaimLoading = true;
      claimReferral(this.http, this.form).then(res => {
        const { status, message, errors, is_bank_invalid} = res;
        
        if (!status) {
          toastr.error(message);

          if (is_bank_invalid) {
            this.errors = errors;
            this.dialog = true;
          }
          return;
        }
        
        toastr.success(message);
          
        this.records.is_claimable = false;
        this.dialog = false;

        this.getOverview();
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
