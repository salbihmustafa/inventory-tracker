<template>
  <div class="ui segment">
    <form class="ui form" @submit.prevent="handleSubmit">
      <div class="ui icon input">
        <input type="text" placeholder="Search..." v-model="searchValue" />
        <i class="circular search link icon"></i>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const searchValue = ref("");

    const handleSubmit = () => {
      console.log(searchValue.value);
      searchValue.value = ""; //reset search bar
    };

    return { searchValue, handleSubmit };
  },
};
</script>

<style scoped>
.ui.form {
  box-shadow: 5px 5px 10px 10px rgba(50, 50, 50, 0.3);
  display: flex;
}
.ui.icon.input {
  /* border: 1px solid red; */
  flex: 1;
}
</style>