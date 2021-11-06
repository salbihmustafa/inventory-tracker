<template>
  <div class="content">
    <NavBar />
    <div class="sub-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style>
.content {
  margin: 0 auto; /*center page*/
  max-width: 100%;
}
.sub-content {
  margin: 40px 20px;
}
</style>
