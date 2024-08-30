const fs=require('fs');

// to check cpu information
// const os=require('os');
// console.log(os.cpus().length);

// sync call for creating a file named test.txt which contains some data hey there
// ./ for current directory
// fs.writeFileSync('./test.txt',"Hey There"); 

// async call (non-blocking)
// fs.writeFile('./test.txt',"Hey There",(err)=>{});

// const result=fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);
// utf-8 is used for encoding 

// sync and async is also known as blocking and non-blocking respectively

// diff b/w readFileSync and readfile is that in case of sync it can return directly 
// but in case of asyn we need to call callback function 

// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("error",err);
//     }
//     else{
//         console.log(result);
//     }
// });

// append file so that we can add data 
// newDate().getDate().toLocaleString() -> to get data in the form of string
// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
// fs.appendFileSync("./test.txt",`Hey There\n`)

// to copy
// fs.cpSync("./test.txt","./copy.txt");

// to delete known as unlink here (we have deleted the copy file now)
// fs.unlinkSync("./copy.txt");

// to see the stats of the file
// console.log(fs.statSync("./test.txt"));

// to check whether that is a file or not
// console.log(fs.statSync("./test.txt").isFile());

// to create a file or directory
// fs.mkdirSync("my-docs");


// blocking and non-blocking 

// blocking
// console.log("1");
// const result=fs.readFileSync("contacts.txt","utf-8",);
// console.log(result);
// console.log("2");

// non-blocking
// console.log("1");
// fs.readFile("contacts.txt","utf-8",(err,result)=>{
//     console.log(result);
// });
// console.log("2");

// default thread pool size = 4
