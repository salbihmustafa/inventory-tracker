import { ref } from "vue";

const convertCsvToJson = async (csvFile) => {
  const jsonVal = ref(null); //initiate jsonVal

  const readFileAsync = (csvFile) => {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();

      reader.onload = (res) => {
        resolve(res.target.result); //return the value to the await
      };
      reader.onerror = (err) => console.log(err);
      reader.readAsText(csvFile);
    });
  };

  try {
    let content = await readFileAsync(csvFile); //retrieve text value from readFileAsync
    let lines = content.split("\n"); //split by crlf

    let result = [];
    let headers = lines[0].split(","); //split the first array into headers

    //loop through the data minus the headers
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(","); //split the lines of the data
      //loop through the header
      for (var j = 0; j < headers.length; j++) {
        //for each header place the current line value that matches the header
        obj[headers[j]] = currentline[j]; 
      }

      result.push(obj); //insert into array
    }

    jsonVal.value = JSON.stringify(result); //convert array into JSON format
  } catch (err) {
    debugger;
    console.log(err);
  }
  
  return { jsonVal };
};

export default convertCsvToJson;
