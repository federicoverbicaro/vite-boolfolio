<script>


export default {
  name: 'AppProject',

  props: {
    img: String,
    title: String,
    description: String,
    category: String,
    slug: String,
    tags: Array,
  },

  data() {
    return {};
  },

  methods: {
  },

  mounted() {
  }
};
</script>

<template>
 <router-link :to="{ name: 'project-single', params: { slug: slug } }">
    <div class="card d-flex mt-3 ">
      <img class="card-img-top" :src="img" alt="Title" height="100%" width="100" />
      <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">Description: {{ description }}</p>
        <p class="card-text" v-if="category">Category: {{ category }}</p>
        <p class="card-text">
          <span>Language: </span>
          <span v-for="(tag, tagIndex) in tags" :key="tagIndex">
            {{ tag.name }}
            <span v-if="tagIndex !== tags.length - 1">, </span>
          </span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<style scoped></style>
