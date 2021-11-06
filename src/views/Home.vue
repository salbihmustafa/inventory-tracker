<template>
  <div>
    <h1>Inventory List</h1>
    <ListView v-for="item in items" :key="item.id" :data="item" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListView from "@/components/ListView";
import { ref } from "vue";
import { Guid } from "js-guid";

export default {
  name: "Home",
  components: { ListView },
  setup() {
    const items = ref([]);
    let item1 = {
      title:
        "Rebecca Vallance Women's Sz 2 Billie Ruffle Ice Blue Off The Shoulder Mini Dress",
      priceListed: 170,
      paid: 41.62,
      fiftyPercent: 104.05,
      sku: "B6",
      weight: "2 lbs",
      dateListed: "10/25/2021",
      dom: 12,
      id: Guid.newGuid().toString(),
    };
    let item2 = {
      title:
        "Alexis Women's Sz XS Faine Floral Hawaiian V-Neck Ruffle Calipso Red Romper",
      priceListed: 170,
      paid: 41.62,
      fiftyPercent: 104.05,
      sku: "B6",
      weight: "2 lbs",
      dateListed: "10/25/2021",
      dom: 12,
      id: Guid.newGuid().toString(),
    };
    items.value.push(item1);
    items.value.push(item2);

    return { items };
  },
};
</script>