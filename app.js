const https = require('https');

https.get('https://restcountries.com/v3.1/name/turkey',(Response) => {

    let data = '';
    Response.on('data', chunk => { 
       // console.log(chunk);
        
        data = data + chunk;
    });


    Response.on('end', () => {
        const jsonData = JSON.parse(data)
        console.log(jsonData[0].timezones[0]);
        else
    })

}).on('error', err => {
    console.log("HATA" + err.message);
});