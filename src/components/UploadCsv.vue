<template>
  <div class="backdrop">
    <div class="modal">
      <form>
        <label for="myfile" class="btn">Select a file</label>
        <input type="file" id="myfile" name="myfile" class="btn" @change="previewFile"/>
        <label for="myfile" class="btn filename">{{file}}</label>
        <button>Upload</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup(){
        const file = ref('');

        const previewFile = (event) => {
            debugger;
            file.value = event.target.files[0].name;
        }

        return { file, previewFile }
    }
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
form{
    display: flex;
    flex-direction: column;
}
.btn{
    margin: 10px 0;
    text-align: center;
}
.btn.filename{
    border: none;
}
button{
    margin-top: 10px;
}
input[type="file"] {
    /* opacity: 0; */
    display: none;
}
</style>