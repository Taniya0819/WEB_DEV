let fetch_=fetch('https://www.boredapi.com/api/activity/')
console.log(fetch_);

fetch_.then(response=>{
    return response.json();
}).then(data=>{
    console.log(data);
}).catch(message=>{
    console.log(`not possible to fetch #{message}`);
})
