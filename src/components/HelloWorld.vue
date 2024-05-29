<script setup>
import { ref } from 'vue'

<<<<<<< HEAD
defineProps({
=======
const { props } = defineProps({
>>>>>>> dee538b95422687554e6f80e2f6bdfbb979c429e
  msg: String,
})

const count = ref(0)
</script>

<template>
<<<<<<< HEAD
  <h1>{{ msg }}</h1>
=======
  <h1>{{ props.msg }}</h1>
>>>>>>> dee538b95422687554e6f80e2f6bdfbb979c429e

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
