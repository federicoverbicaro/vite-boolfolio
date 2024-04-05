<script>
import axios from 'axios';

export default {
  name: 'ProjectCard',
  data() {
    return {
      arrayWallet: [],
      currentPage: '',
      lastPage: '',
    }
  },
  methods: {
    getWallet(walletApiPage) {
      axios.get('http://127.0.0.1:8000/api/portfolio',
        {
          params: {
            page: walletApiPage
          }
        }

      ).then(res => {
        console.log(res.data.wallets.data)

        res.data.wallets.data.forEach(element => {
        element.new_image = 'http://127.0.0.1:8000/storage/' + element.new_image;
      });


        this.arrayWallet = res.data.wallets.data
        this.currentPage = res.data.wallets.current_page
        this.lastPage = res.data.wallets.last_page
        
      })
    }

  },
  mounted() {
    this.getWallet(1)
  },
}

</script>

<template>
  <h1>Benvenuti</h1>

  <div class="card d-flex mt-3" v-for="(element, index) in arrayWallet" :key="element.id">
    <img class="card-img-top" :src="element.new_image" alt="Title" />
    <div class="card-body">
      <h4 class="card-title">{{ element.title }}</h4>
      <p class="card-text">Description: {{ element.description }}</p>
      <p class="card-text" v-if="element.category">Category:
        {{ element.category.name }}
      </p>
      <p class="card-text">
        <span>Lenguace: </span>
        <span v-for="(tag, tagIndex) in element.tags" :key="tagIndex">
          {{ tag.name }}
          <span v-if="tagIndex !== element.tags.length - 1">, </span>
        </span>
      </p>
    </div>
  </div>

  <div class="mt-5 d-flex justify-content-start">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
          <button class="page-link" @click="getWallet(currentPage - 1)">Indietro</button>
        </li>
        <li class="page-item" v-for="(element, index) in lastPage" :key="index">
          <button lass="page-link" @click="getWallet(element)">{{ element }}</button>
        </li>
        <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
          <button class="page-link" @click="getWallet(currentPage + 1)">Avanti</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
ul li {
  text-align: left;
}
</style>
