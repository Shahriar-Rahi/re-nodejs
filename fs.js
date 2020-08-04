const fs = require('fs');

// fs.writeFile('message.txt', 'mim pocha', (err)=>{
//     if(err) throw err;

//     console.log('file has been writtern');
// });


//console.log('hello');

fs.readFile('./message.txt', 'utf8', (err, data)=>{
    if(err) throw err;
    console.log(data);
});


