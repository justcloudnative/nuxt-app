<script lang="ts" setup>

// from typicode get posts

interface Post {
  id: number;
  title: string;
  body: string;
}

const { data, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts')

</script>

<template>
  <div>
    <h1>This is a for learning nuxt </h1>
    <ul>
      <li v-for="post in data" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
