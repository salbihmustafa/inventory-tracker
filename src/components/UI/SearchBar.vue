<template>
  <div class="ui segment">
    <form class="ui form" @submit.prevent="handleSubmit">
      <div class="ui icon input">
        <input type="text" placeholder="Search..." v-model="searchValue"/>
        <i class="circular search link icon"></i>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  props: ["list"],
  setup(props, context) {
    const searchValue = ref("");

    const updatedList = computed(() => {
        // update array based off search value
        return props.list.filter((val) => val.title.toUpperCase().includes(searchValue.value.toUpperCase()));
    });

    const handleSubmit = () => {
      context.emit("searchSubmitted", updatedList); //send updated list to parent
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