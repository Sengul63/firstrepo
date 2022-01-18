/*
const promiseBasarili = Promise.resolve("başarılı bir şekilde promise sonuçlandı");
const promiseHata = Promise.reject(new Error('hata oluştu'));

promiseBasarili.then((sonuc) => console.log(sonuc));

promiseHata
.then((sonuc) => console.log(sonuc))
.catch(e => console.log(e));
*/
const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("p1 4 saniye sonra bitti");
    }, 4000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("p2 3 saniye sonra bitti");
    }, 3000);
});

const promiseAll = Promise.all([p1, p2]);

promiseAll.then(sonuc => console.log(sonuc));

