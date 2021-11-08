<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <label for="displayName">Display Name</label>
    <input type="text" name="displayName" v-model="displayName" />
    <label for="email">Email</label>
    <input type="email" name="email" v-model="email" />
    <label for="password">Password</label>
    <div class="icon-container">
      <input class="passwordBox" :type="passtype" name="password" v-model="password" />
      <span v-if="!visible" class="material-icons passwordIcon" @click="toggleVisibility">visibility_off</span>
      <span v-if="visible" class="material-icons passwordIcon" @click="toggleVisibility">visibility</span>
    </div>
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending">Sign Up</button>
    <button v-if="isPending" disabled>Loading..</button>
    <div class="line">
      <hr class="solid" />
    </div>
    <div class="option">
      <div>Have an account? <router-link :to="{ name: 'Login' }">Log in</router-link></div>
    </div>
  </form>
</template>

<script>
import useSignup from "@/composables/useSignup.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      visible: false, //toggle to show or hide password
      passtype: "password",
    };
  },
  setup() {
    const { error, signup, isPending } = useSignup();
    const router = useRouter();
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const response = await signup(
        email.value,
        password.value,
        displayName.value
      );
      if (!error.value) {
        //enters here when there are no errors
        console.log("User successfully signed up");
        //Route to home page
        router.push({ name: "Home" });
      }
    };

    return { displayName, email, password, handleSubmit, error, isPending };
  },
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
      if (this.visible) {
        //show password
        this.passtype = "text";
      } else {
        //hide password
        this.passtype = "password";
      }
    },
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}
label {
  position: relative;
  left: 10px;
  top: 5px;
}

button {
  /* match width of inputs */
  box-sizing: border-box;
  width: 100%;
}
div.line{
  display: flex;
  justify-content: center;
}
hr.solid {
  margin: 30px 0;
  border-top: 1px solid #bbb;
  box-sizing: border-box;
  width: 90%;
}
/* option */
div.option{
  display: flex;
  justify-content: center;
}
div.option div{
  color: #bbb;
}
div.option div a{
  font-weight: bold;
  opacity: .6;
  transition: 0.3s;
}
div.option div a:hover{
  font-weight: 900;
  opacity: 1;
}
</style>