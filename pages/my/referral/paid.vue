<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <h1>
                  Paid Referrals
                </h1>
            <v-data-table
              :headers="headers"
              :items="amounts"
              :items-per-page="5"
              class="elevation-1
              mt-10 mb-10"
            ></v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Transaction Date',
            align: 'start',
            sortable: false,
            value: 'date',
          },
          { text: 'Paid Amount',
            value: 'amount',
            },
        ],
        amounts: [
          {
            date: '2/4/2021',
            amount: '£95',
          },
          {
            date: '2/4/2021',
            amount: '£95',
          },
          {
            date: '2/4/2021',
            amount: '£95',
          },
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
h1{
    font-weight: 500;
}
</style>