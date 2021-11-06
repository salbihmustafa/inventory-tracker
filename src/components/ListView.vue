<template>
  <div class="list-wrapper">
    <div class="information">
      <div class="title">
        {{ data.title }}
      </div>
      <div class="second-line">
        <h4><span>Price Listed:</span> ${{ data.priceListed }}</h4>
        <hr />
        <p>Paid: ${{ data.paid }}</p>
        <p>50% Offer: ${{ data.fiftyPercent }}</p>
        <!-- <p>SKU# {{ data.sku }}</p> -->
      </div>
    </div>
    <div class="actions">
      Edit
    </div>

    <!-- <div>{{data.title}}</div>
    <div>{{data.priceListed}}</div>
    <div>{{data.fiftyPercent}}</div>
    <div>{{data.sku}}</div>
    <div>{{data.dom}}</div> -->
  </div>
</template>

<script>
export default {
  props: ["data"],
  components: {},
  setup() {},
};
</script>

<style scoped>
.list-wrapper {
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 10px 20px 20px 20px rgba(50, 50, 50, 0.3);
  background: #fff;
  border: 1px solid var(--secondary);
  cursor: pointer;

  display: flex;
  flex-direction: column;
}

.information

.title {
  display: flex;
  justify-content: start;
}

.second-line {
  display: flex;
  flex-wrap: wrap;
}
span {
  color: var(--primary);
  font-weight: 4px;
}
hr {
  margin: 0 10px;
}

@media screen and (max-width: 500px) {
  .title p {
    width: 95%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>