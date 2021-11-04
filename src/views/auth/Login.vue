<template>
  <form @submit.prevent="handleSubmit">
    <h3>Log in</h3>
    <label for="email">Email</label>
    <input type="email" name="email" v-model="email" />
    <label for="password">Password</label>
    <input :type="passtype" name="password" v-model="password" />
    <div v-if="!visible">
      <span class="material-icons" @click="toggleVisibility">visibility_off</span>
    </div>
    <div v-if="visible">
      <span class="material-icons" @click="toggleVisibility">visibility</span>
    </div>
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Loading..</button>
  </form>
</template>

<script>
import useLogin from '@/composables/useLogin.js';
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  data(){
    return {
      visible: false, //toggle to show or hide password
      passtype: 'password',
    }
  },
  setup() {
    const { error, login, isPending } = useLogin();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const response = await login(email.value, password.value);
      if (!error.value) {
        //enters here when there are no errors
        console.log("User successfully logged in");
        //Route to home page
        router.push({ name: "Home" });
      }
    };

    return { email, password, handleSubmit, error, isPending };
  },
  methods: {
    toggleVisibility () {
      this.visible = !this.visible;
      if(this.visible){
        //show password
        this.passtype = 'text';
      }else{
        //hide password
        this.passtype = 'password';
      }
    }
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
}
label{
  position: relative;
  left: 10px;
  top: 5px;
}
span {
  position: relative;
  top: -40px;
  left: 365px;
  cursor: pointer;
}
</style>