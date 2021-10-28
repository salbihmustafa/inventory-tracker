<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="Display Name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input :type="passtype" placeholder="Password" v-model="password" />
    <div v-if="!visible">
      <span class="material-icons" @click="toggleVisibility">visibility_off</span>
    </div>
    <div v-if="visible">
      <span class="material-icons" @click="toggleVisibility">visibility</span>
    </div>
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending">Sign Up</button>
    <button v-if="isPending" disabled>Loading..</button>
  </form>
</template>

<script>
import useSignup from "@/composables/useSignup.js";
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
span {
  position: relative;
  top: -50px;
  left: 375px;
  cursor: pointer;
}
</style>