var kullanicilar = [
    {email:"tahtalime@gmail.com",sifre:"1234"},
    {email:"meta.bsn@gmail.com",sifre:"1234"},
]

var tweetler = [
    {email:"tahtalime@gmail.com",tweet:"selamlar"},
    {email:"meta.bsn@gmail.com",tweet:"aleyküm selam"},
    {email:"tahtalime@gmail.com",tweet:"nasılsınız"},
    {email:"meta.bsn@gmail.com",tweet:"iyi sen nasılsın"}
]

var email = prompt ("mail?")
var sifre = prompt("sifre?")

function giris(){
    if ((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre)|| (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre) ){
        console.log(tweetler)
    }else{
        console.log("mail veya sifre hatalı")
    }
}