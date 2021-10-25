<template>
  <form>
      <h3>Sign up</h3>
      <input type="text" placeholder="Display Name" v-model="displayName">
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup(){
    const displayName = ref('');
    const email = ref('');
    const password = ref('');

    return { displayName, email, password }
  }
}
</script>

<style scoped>
h3{
  text-align: center;
}

</style>