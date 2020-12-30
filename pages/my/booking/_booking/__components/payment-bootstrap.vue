<template>
  <div class="mt-5 pt-5">
    <form
      class="payzone-form"
      id="payzone-payment-form"
      name="payzone-payment-form"
      target="_self"
      method="POST"
      style="display: none"
      :action="'api.actionUrl'"
      @submit.prevent="handleSubmit"
    >
      <div class="payzone-form-section">
        <a href="https://www.payzone.co.uk/" target="_blank">
          <img
            class="payzone-logo"
            :src="assets('/vendor/payzone/images/payzone_logo.png')"
          />
        </a>
      </div>
      <!-- if - payzone type is direct -->
      <div class='payzone-form-section payzone-hidden'>
        <input type="hidden" name="direct_submit" value="true" />
      </div>

      <div class='payzone-form-section'>
        <p class='payzone-form-header'>Customer Details (Enter Card Address)</p>
      </div>
      <div class='payzone-form-section'>
        <label for='Address2'>Total Amount</label>
        <input type="text" name="TotalAmount" :value="api.total_price" disabled /> 
        <label for='CustomerName'>CustomerName</label>
        <input type="text" name="CustomerName" :value="'Geoff Wayne' || api.user_name" />
        <label for='Address1'>Address1</label>
        <input type="text" name="Address1" :value="api.formatted_address" />
        <label for='Address2'>Address2</label>
        <input type="text" name="Address2" value="" />
        <label for='City'>City</label>
        <input type="text" name="City" :value="api.town_or_city" />
        <label for='State'>County</label>
        <input type="text" name="State" :value="api.town_or_city" />
        <input type="hidden" name="EmailAddress" :value="api.email" />
        <label for='PostCode'>PostCode</label>
        <input type="text" name="PostCode" :value="api.postcode" />
      </div>
      
      <hr>
      <div class='payzone-form-section'>
        <p class='payzone-form-header'>Card Details</p>
      </div>
      <div class='payzone-form-section'>
        <label for='CrossReferenceTransaction'>Use cross reference transaction</label>
        <select id="CrossReferenceTransaction" name="CrossReferenceTransaction" class='select-70'>
          <option value='false'>New card</option>
          <option value='true'>Cross Ref Transaction</option>
        </select>
        <span id='CardSectionCRef' style="display:none;">
        <label for='CrossReference'>Cross Reference</label>
        <input type="text" name="CrossReference" value="" />
      </span>
        <span id='CardSectionTop'>
        <label for='CardName'>Card Name</label>
        <input type="text" name="CardName" :value="'Geoff Wayne' || api.customer_name" />
        <label for='CardNumber'>Card Number</label>
        <input type="tel" name="CardNumber" id="CardNumber" value="4976350000006891" placeholder="XXXX XXXX XXXX XXXX" pattern="\d{4} \d{4} \d{4} \d{4}" class="masked"/>
      </span>
        <span class='cvv-wrap'>
          <label for='CV2'>CV2</label>
          <input type="text" name="CV2" value="341" maxlength="4" onkeypress='return event.charCode >= 48 && event.charCode <= 57' />
        </span>
        <span id="CardSectionBottom">
        <label for='StartDateMonth'>Start Date</label>
        <select name="StartDateMonth" class='select-30' v-html="api.months_list">
        </select>
        <select name="StartDateYear" class='select-70' v-html="api.start_year_list">
        </select>
        <label for='ExpiryDateMonth'>Expiry Date</label>
        <select name="ExpiryDateMonth" class='select-30' v-html="api.months_list">
        </select>
        <select name="ExpiryDateYear" class='select-70' v-html="api.expiry_year_list">
        </select>
      </span>
      </div>
      <hr>

      <span v-html="api.buildForm"></span>
      <span id="form_errors"></span>
      <div class="payzone-form-section">
        <input
          id="payzone-direct"
          type="hidden"
          name="payzone-direct"
          value="submitted"
        />
        <input
          id="payzone-cart-submit"
          type="submit"
          name="Submit"
          value="Submit"
        />
      </div>
      <div class="payzone-form-section">
        <a href="https://www.payzone.co.uk/" target="_blank">
          <img
            class="payzone-footer-image"
            :src="assets('/vendor/payzone/images/payzone_cards_accepted.png')"
          />
        </a>
      </div>
    </form>

    <div id="payzone-payment-modal-background"></div>
    <div id="payzone-payment-modal">
      <a id="payzone-modal-close" href="#">&times;</a>
    </div>

    <div id="payzone-loading-modal-background"></div>
    <div id="payzone-loading-modal">
      <div class="payzone-loading-wrap" id="payzone-loading-wrap">
        <img :src='assets("vendor/payzone/images/loading.gif")' />
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { 
  openLoadingModal, openPayzoneModal, sizePayzoneModal, 
  closeLoadingModal, sendToResults, receiveMessageCart,
  closePayzoneModal
} from "~/assets/vendor/payzone/payzone_modal.js";
import { validateForm } from "~/assets/vendor/payzone/payzone_validate.js";
// import {  } from "~/assets/vendor/payzone/inputmasking.js";
import { getPaymentOptions } from "~/api/payment";

export default {
  data: () => ({
    id: null,
    page: "",
    api: {},
    PayzonePaymentForm: null,
    pzgLoading: null,
    siteRoot: null,
    siteBase: null,
    cartPage: null,
    homePage: null,
    pzgModal: null,
    pzgLoadingBG: null,
    pzgModalBG: null,
  }),

  mounted() {
    this.id = this.$route.params.booking;

    this.getApi().then(() => {
      
      $(document).ready(() => {
        this.payzonePaymentPageLoad();
      });

      this.bootstrap()
      
    });
  },

  methods: {
    getApi() {
      return new Promise((resolve, reject) => {
        getPaymentOptions(this.id, this.http).then(data => {
          this.api = data;
          resolve(data);
        });
      });
    },

    bootstrap() {
      const {api} = this;
      this.siteRoot = api.site_root;
      this.siteBase = api.site_base;
      this.cartPage = api.cart_page;
      this.homePage = api.home_page;
      this.pzgModal = document.getElementById("payzone-payment-modal");
      this.pzgLoading = document.getElementById("payzone-loading-modal");
      this.pzgModalBG = document.getElementById(
        "payzone-payment-modal-background"
      );
      this.pzgLoadingBG = document.getElementById(
        "payzone-loading-modal-background"
      );

      document
        .getElementById("payzone-payment-modal-background")
        .addEventListener("click", () => closePayzoneModal(this.pzgModal));
      document
        .getElementById("payzone-modal-close")
        .addEventListener("click", () => closePayzoneModal(this.pzgModal));
      /* end of payzone model */

      this.PayzonePaymentForm = document.getElementById("payzone-payment-form");

      var iframepage = "payment";
      document
        .getElementById("payzone-payment-modal-background")
        .addEventListener("click", () => closePayzoneModal(this.pzgModal));
      document
        .getElementById("payzone-modal-close")
        .addEventListener("click", () => closePayzoneModal(this.pzgModal));
      document
        .getElementById("payzone-cart-submit")
        .addEventListener("click", this.payzoneCartFormSubmission);
      document
        .getElementById("CrossReferenceTransaction")
        .addEventListener("change", this.CrossReferenceTransaction);

      document
        .getElementById("payzone-payment-modal-background")
        .addEventListener("click", () => closePayzoneModal(this.pzgModal));
      document
        .getElementById("payzone-modal-close")
        .addEventListener("click", () => closePayzoneModal(this.pzgModal));
    },

    payzonePaymentPageLoad() {
      const {api} = this;
      
      if (api.integration_type_direct) {
        this.PayzonePaymentForm.style.display = "block";
        window.parent.postMessage(
          { option: "modalsize", value: "5" },
          api.site_root
        );
        window.parent.postMessage(
          { option: "iframesrc", value: "payment" },
          api.site_base
        );
      }
    },

    CrossReferenceTransaction(evt) {
      var CrossRefTrans =
        document.getElementById("CrossReferenceTransaction").value == "false"
          ? "false"
          : "true";
      if (CrossRefTrans == "true") {
        document.getElementById("CardSectionTop").style.display = "none";
        document.getElementById("CardSectionBottom").style.display = "none";
        document.getElementById("CardSectionCRef").style.display = "block";
      } else {
        document.getElementById("CardSectionTop").style.display = "block";
        document.getElementById("CardSectionBottom").style.display = "block";
        document.getElementById("CardSectionCRef").style.display = "none";
      }
    },

    payzoneCartFormSubmission(evt) {
      const self = this;
      evt.preventDefault();
      window.addEventListener("message", e => receiveMessageCart(e, this.siteRoot, this.pzgModal), false);
      var cartForm = document.getElementById("payzone-payment-form");
      var pzgModal = document.getElementById("payzone-payment-modal");
      openLoadingModal("loading", this.pzgLoading, this.pzgLoadingBG);
      var validated = validateForm(cartForm, "direct", "true");
      if (validated) {
        var cartData = new FormData(cartForm);
        var XHR = new XMLHttpRequest();
        XHR.open(
          "POST",
          `${this.apiUrl}bookings/payment/process/${this.id}?pzgact=process`,
          true
        );
        XHR.setRequestHeader('Authorization', `Bearer ${this.accessToken}`)
        XHR.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            var responseObj = JSON.parse(this.responseText);
            if (responseObj["StatusCode"] == 3) {
              openPayzoneModal(1, pzgModal);
              var ifrm = document.createElement("iframe");
              ifrm.setAttribute("id", "payzone-iframe");
              ifrm.setAttribute("name", "payzone-iframe");
              ifrm.setAttribute(
                "src",
                "/assets/loading.html"
              );
              ifrm.setAttribute("scrolling", "none");
              ifrm.setAttribute("frameborder", "none");
              var threeForm = document.createElement("form");
              threeForm.setAttribute("id", "payzone_acs");
              threeForm.setAttribute("name", "payzone_acs");
              threeForm.setAttribute("action", responseObj["ACSURL"]);
              threeForm.setAttribute("method", "POST");
              threeForm.setAttribute("target", "payzone-iframe");
              var MD = self.createInput("MD", responseObj["CrossReference"]);
              var PaREQ = self.createInput("PaReq", responseObj["PaREQ"]);
              var TermUrl = self.createInput("TermUrl", responseObj["TermUrl"]);
              pzgModal.appendChild(ifrm);
              pzgModal.appendChild(threeForm);
              threeForm.appendChild(MD);
              threeForm.appendChild(PaREQ);
              threeForm.appendChild(TermUrl);
              openPayzoneModal(5, pzgModal);
              sizePayzoneModal("threed", pzgModal);
              document.getElementById("payzone_acs").submit();
              closeLoadingModal(self.pzgLoading, self.pzgLoadingBG);
            } else {
              closeLoadingModal(self.pzgLoading, self.pzgLoadingBG);
              sendToResults(responseObj, pzgModal);
            }
          }
        };
        XHR.send(cartData);
      } else {
        closeLoadingModal(self.pzgLoading, self.pzgLoadingBG);
      }
    },

    createInput(name, value) {
      input = document.createElement("input");
      input.setAttribute("name", name);
      input.setAttribute("type", "hidden");
      input.setAttribute("value", value);
      return input;
    },

    handleSubmit() {
      alert('you got it');
    }
  },

  head: {
    script: [],
  },
};
</script>

<style lang="scss" scoped>
@import url("~assets/vendor/payzone/payzone_gateway.css");
</style>