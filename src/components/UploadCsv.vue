<template>
  <div class="backdrop">
    <div class="modal">
      <form @dragover.prevent @drop.prevent @submit.prevent="submitHandler">
        <div @drop="dragFile" class="drop-area">
          <span
            v-if="!inputFile"
            class="drop-area-prompt"
            @click="clkInput"
            >Drop file here or click to upload</span
          >
          <span
            v-if="inputFile"
            class="drop-area-prompt-file"
            @click="clkInput"
            >{{ inputFile.name }}</span
          >
          <input
            type="file"
            ref="file"
            class="drop-area-input"
            accept=".csv"
            @change="uploadFile"
          />
        </div>
        <div class="two-btn">
          <button class="cancel-btn" @click="handleCancel">Cancel</button>
          <button>Upload</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import convertCsvToJson from "@/composables/convertCsvToJson.js";

export default {
  setup(props, context) {
    const inputFile = ref();
    const file = ref(null);

    const clkInput = () => {
      file.value.click(); //click the input type file
    };

    const uploadFile = (event) => {
      //entire file with attributes such as type: "image/jpeg" - "application/vnd.ms-excel" <-CSV, name: "Free2.jpg", etc..
      inputFile.value = event.target.files[0];
    };

    const dragFile = (event) => {
      inputFile.value = event.dataTransfer.files[0];
    };

    const handleCancel = () => {
      context.emit('closeModal'); //goes to parent component Home.vue
    }

    const submitHandler = async () => {
      if(!inputFile.value){
        return;
      }

      const { jsonVal } = await convertCsvToJson(inputFile.value);
      context.emit('uploadCsv', jsonVal.value); //goes to parent component Home.vue
      context.emit('closeModal'); //goes to parent component Home.vue
    }

    return { inputFile, file, clkInput, uploadFile, dragFile, handleCancel, submitHandler };
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);

  display: flex;
  flex-direction: column;
  justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.drop-area {
  max-width: 200px;
  height: 200px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  color: #cccccc;
  border: 4px dashed var(--primary);
  border-radius: 10px;
}
.drop-area:hover {
  border-style: solid;
}
.drop-area:hover .drop-area-prompt {
  color: var(--primary);
}
.drop-area-input {
  display: none;
}
.drop-area-prompt {
  color: #cccccc;
}
.drop-area-prompt-file {
  max-width: 175px;
  word-wrap: break-word; /* wrap the word inside a span*/
  color: var(--primary);
}
</style>