<script>
import axios from 'axios';

export default {
  name: 'ProjectCard',
  data() {
    return {
      arrayWallet: []
    }
  },
  methods: {
    getWallet() {
      axios.get('http://127.0.0.1:8000/api/portfolio').then(res => {
        console.log(res.data.wallets)

        this.arrayWallet = res.data.wallets
      })
    }

  },
  mounted() {
    this.getWallet()
  },
}

</script>

<template>
  <h1>Benvenuti</h1>

  <ul>
    <li v-for="(element, index) in arrayWallet" :key="element.id">
     <a href="#"> {{ element.title }}</a>
    </li>
  </ul>
</template>

<style scoped>
ul li{
  text-align: left;
}
</style>
