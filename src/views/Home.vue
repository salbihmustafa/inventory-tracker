<template>
  <UploadCsv
    v-if="toggleUpload"
    @closeModal="handleCloseModal"
    @uploadCsv="handleUploadCsv"
  />
  <div>
    <h1>Inventory List</h1>
    <div class="below-searchbar">
      <button @click="toggleUpload = !toggleUpload">Upload CSV</button>
      <label>Number of items: {{ updatedItems.length }}</label>
    </div>
    <SearchBar @searchSubmitted="searchHandler" :list="items" />
    <ListView v-for="item in updatedItems" :key="item.id" :data="item" />
  </div>
</template>

<script>
// @ is an alias to /src
import ListView from "@/components/ListView";
import SearchBar from "@/components/UI/SearchBar";
import UploadCsv from "@/components/UploadCsv";

import { ref } from "vue";
import { Guid } from "js-guid";

export default {
  name: "Home",
  components: { ListView, SearchBar, UploadCsv },
  setup() {
    const items = ref([
      {
        title:
          "Rebecca Vallance Women's Sz 2 Billie Ruffle Ice Blue Off The Shoulder Mini Dress",
        priceListed: 170,
        paid: 41.62,
        fiftyPercent: 104.05,
        sku: "B6",
        weight: "2 lbs",
        dateListed: "10/25/2021",
        dom: 12,
        status: "Draft",
        id: Guid.newGuid().toString(),
      },
      {
        title:
          "Alexis Women's Sz XS Faine Floral Hawaiian V-Neck Ruffle Calipso Red Romper",
        priceListed: 170,
        paid: 41.62,
        fiftyPercent: 104.05,
        sku: "B6",
        weight: "2 lbs",
        dateListed: "10/25/2021",
        dom: 12,
        status: "Active",
        id: Guid.newGuid().toString(),
      },
    ]);

    //const updatedItems = ref(items.value);
    const updatedItems = ref([]);
    const toggleUpload = ref(false); //do not show modal

    const searchHandler = (updatedList) => {
      updatedItems.value = updatedList.value; //update
    };

    const handleCloseModal = () => {
      //toggle upload modal
      toggleUpload.value = !toggleUpload.value;
    };

    const handleUploadCsv = (data) => {
      //handle uploads
      updatedItems.value = data;
      console.log(updatedItems.value);
    };

    return {
      items,
      searchHandler,
      updatedItems,
      handleCloseModal,
      handleUploadCsv,
      toggleUpload,
    };
  },
};
</script>
<style scoped>
  .below-searchbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>