<template>
  <div class="card">
    <div>Test</div>
    <div>Test</div>
    <div>Test</div>
  </div>
</template>

<script>
export default {
    props: [],
    components: {},
    setup(){
        
    }
};
</script>

<style scoped>
.card {
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 10px 20px 20px 20px rgba(50, 50, 50, 0.3);
  background: #fff;
  border: 1px solid var(--secondary);
  cursor: pointer;

  display: flex;
}
.card div{
    flex: 1;
}
</style>