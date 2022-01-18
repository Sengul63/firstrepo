const myPromise = new Promise((resolve, reject) => {
    console.log("3 saniyelik işlem başladı");

    setTimeout(() => {
        console.log("işlem bitti");
       // resolve("işlem sonucu burada");
       reject("hata çıktı")
    }, 3000);

});

myPromise.then( (sonuc) => {
    console.log(sonuc);
}).catch((err) => {
    console.log("hataaaaaaaaa:" + err);
});
