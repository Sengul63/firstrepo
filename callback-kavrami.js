console.log("program başladı");

getUser(12345, (userObject)=>{
        getCourse(userObject.ad, (kursDizisi) => {
        getComments(kursDizisi[0]);
    });
   
});

console.log("program bitti");

function getUser(id, callback) {

    setTimeout(()=>{
        console.log(id + "idli user getiriliyor");
        callback({id: id, ad: "emre"});
    },1500)

}

function getCourse (userName, callback) {
    setTimeout(() => {
        console.log(userName + "kişisinin kursları getirilecek");
        callback(['java', 'fultter', 'kotlin']);
        },2000);


}

function getComments(kursAdi) {

    console.log(kursAdi+ "isimli kursun yorumları getiriliyor");
    setTimeout(() => { 
        console.log("harika bir kurs");
    }, 2000);


}