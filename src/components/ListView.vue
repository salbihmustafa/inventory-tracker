<template>
  <div class="list-container">
    <div class="list-info-container">
      <div class="title">
        <p>{{ data.title }}</p>
      </div>
      <div class="second-line">
        <hr />
        <p>Price Listed: ${{ data.priceListed }}</p>
        <p>Paid: ${{ data.paid }}</p>
        <p>50% Offer: ${{ data.fiftyPercent }}</p>
        <hr />
      </div>
    </div>
    <div class="actions-container">
      <div class="sku">SKU# {{ data.sku }}</div>
      <div class="action-items">
        <span class="material-icons">edit</span>
        <span class="material-icons">delete_outline</span>
      </div>
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
span{
  color: var(--primary);
}
.list-container {
  /* border: 1px solid yellow; */
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 10px 20px 20px 20px rgba(50, 50, 50, 0.3);
  background: #fff;
  /* border: 1px solid var(--secondary); */

  display: flex;
  flex-direction: column;
}

.list-info-container {
  padding: 10px 10px;
  /* border: 1px solid red; */
  flex: 1;
  /* min-width: 0; */
  display: flex;
  flex-direction: column;
}

hr{
  margin: 10px 0;
}
.second-line > *{
  margin: 10px 0;
}

.actions-container {
  /* border: 1px solid green; */
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  /* min-width: 0; */
}
.actions-container .sku{
  flex: 1;
}
.actions-container .action-items {
  display: flex;
}
.actions-container .action-items span{
  margin-left: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.actions-container .action-items span:hover {
  font-size: 2em;
}

/* .title {
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
} */

@media screen and (max-width: 500px) {
  .title p {
    width: 95%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>