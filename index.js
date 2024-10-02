
// console.log("Hi, I am riya")
// let id=setInterval(()=>{
//     console.log("Hello i am Pooja")
// },5000);
// console.log("I am from Bangaluru");
// function location(){
//     console.log("I am from Hiriyur")
// }
// setTimeout(location,10000);
// clearInterval(id);


function counter(){
    let count =0;
    console.log(count)
    setInterval(()=>{
        count++;
        console.log(count);
    },5000)
} counter();

function syncFunction() {
    console.log("Start");
    const result = fetchDataFromAPI(); // This will block the program until it completes
    console.log(result);
    console.log("End");
  }
  
  function asyncFunction() {
    console.log("Start");
    fetchDataFromAPI().then((result) => {
      console.log(result);
    });
    console.log("End");
  }
  
  function fetchData(callback) {
    setTimeout(() => {
      callback("Data loaded");
    }, 1000); // Simulates a network request
  }
  
  fetchData((result) => {
    console.log(result); // "Data loaded"
  });
  
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data loaded"), 1000);
    });
  };
  
  fetchData().then((result) => {
    console.log(result);
  });
  
  async function fetchData() {
    const result = await new Promise((resolve) => {
      setTimeout(() => resolve("Data loaded"), 1000);
    });
    console.log(result);
  }
  
  fetchData();
  