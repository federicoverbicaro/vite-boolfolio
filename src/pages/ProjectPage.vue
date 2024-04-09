<script>
import axios from 'axios';

import AppProject from '../components/AppProject.vue';

export default {
    name: 'ProjectPage',
    components: {
        AppProject
    },

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
    <div class="container mt-4">
        <h1>Progetti</h1>
    </div>


    <div class="container d-flex justify-content-center gap-3">

        <div>
            <AppProject v-for="(element, index) in arrayWallet" :key="element.id" 
            :img="element.new_image"
            :title="element.title" 
            :description="element.description" 
            :category="element.category ? element.category.name : ''"
            :slug="element.slug" 
            :tags="element.tags" />
        </div>

    </div>



    <div class="mt-2 d-flex justify-content-center mt-5">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                    <button class="page-link" @click="getWallet(currentPage - 1)">Indietro</button>
                </li>
                <li class="page-item" v-for="(element, index) in lastPage" :key="index">
                    <button class="page-link" @click="getWallet(element)">{{ element }}</button>
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
