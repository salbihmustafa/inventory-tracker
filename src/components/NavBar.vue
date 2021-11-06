<template>
  <div class="navbar">
    <nav>
      <h1><router-link :to="{ name: 'Home' }">Inventory List</router-link></h1>
      <div class="links">
        <div v-if="user">
          <button @click.prevent="handleLogout">Logout</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import useLogout from "@/composables/useLogout.js";
import getUser from "@/composables/getUser.js";

export default {
  setup() {
    const router = useRouter();
    const { error, logout } = useLogout();
    const { user } = getUser();
    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        //No error trying to logout
        console.log("user logged out");
        router.push({ name: "Login" });
      } else {
        //Error trying to logout
        console.log("ERROR ", error.value);
      }
    };
    return { handleLogout, user };
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #fff;
}
a{
  margin: 10px;
}
button{
  margin: 10px;
}
</style>