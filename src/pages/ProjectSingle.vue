<script>
import axios from 'axios';

export default {
    data() {
        return {
            project: [],
            imageUrl: '',
        }
    },
    methods: {
        getProject() {
            axios.get(`http://127.0.0.1:8000/api/portfolio/${this.$route.params.slug}`,
            ).then(res => {
                console.log('projectSingle:', res.data)

                this.project = res.data.wallet
                this.getImageUrl();

            })
        },
        getImageUrl() {
            this.imageUrl = `http://127.0.0.1:8000/storage/${this.project.new_image}`;
            
        }
    },
    mounted() {
        this.getProject();
    },
}
</script>

<template>
    <div class="container mt-4">
        <h1>Dettagli Progetto</h1>
    </div>

    <div class="container mb-5 d-flex justify-content-center gap-3">
        <div class="card d-flex mt-3 col-5 ">
            <img class="card-img-top" :src="imageUrl" alt="Title" height="100%" width="100" />
            <div class="card-body">
                <h4 class="card-title">{{ project.title }}</h4>
                <p class="card-text">Description: {{ project.description }}</p>
                <p class="card-text" v-if="project.category">Category: {{ project.category.name }}</p>
                <p class="card-text">
                    <span>Lenguace: </span>
                    <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex">
                        {{ tag.name }}
                        <span v-if="tagIndex !== project.tags.length - 1">, </span>
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
