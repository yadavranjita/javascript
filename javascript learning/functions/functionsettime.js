function fetchData(callback) {
    setTimeout(function() {
        let data = "Some data";
        callback(data);
    }, 2000);
}
fetchData(function(data) {
    console.log(data);
});
function fetchDataFromServer(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 1000);
    });
    return promise;
}
fetchDataFromServer().then((data) => {
    console.log("Fetched data:", data);
})
.catch((error) => {
    console.log("Error fetching data:", error);
});
function divide(a, b) {
    try{
        if(b === 0){
            throw new Error("Cannot divide by zero.");
        }
        return a/b;
    }
    catch(error){
        console.log(error);
    }
}
const result = divide(10, 0);
console.log(result);

function fetchDataFromServer(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 1000);
    });
    return promise;
}
async function fetchData() {
    try{
        const data = await fetchDataFromServer();
        console.log("Fetched data:", data);
    }
    catch(error){
        console.error("Error fetching data:", error);
    }
}
fetchData();