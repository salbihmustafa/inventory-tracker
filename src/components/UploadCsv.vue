<template>
  <div class="backdrop">
    <div class="modal">
      <form @dragover.prevent @drop.prevent>
        <div @drop="dragFile" class="drop-area">
          <span
            v-if="inputFile.length === 0"
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
            @change="uploadFile"
          />
        </div>
        <div class="two-btn">
          <button class="cancel-btn">Cancel</button>
          <button>Upload</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props, context) {
    const inputFile = ref([]);
    const file = ref(null);

    const clkInput = () => {
      file.value.click();
    };

    const uploadFile = (event) => {
      //entire file with attributes such as type: "image/jpeg" - "application/vnd.ms-excel" <-CSV, name: "Free2.jpg", etc..
      inputFile.value = event.target.files[0];
      console.log(inputFile.value);
    };

    const dragFile = (event) => {
      inputFile.value = event.dataTransfer.files[0];
    };

    return { inputFile, file, clkInput, uploadFile, dragFile };
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