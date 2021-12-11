// // // // var a=99
// // // // var b=99
// // // // var c=a+b
// // // // console.log(c)
// // // // String,number,Boolean,
// // // var ad="iman"
// // // console.log(ad)
// // // console.log(typeof ad);


// // // var t=false
// // // console.log(typeof t)
// // // var t=false






// // // // Array,Array prototype
// // // var arr=[1,3,5,7]
// // // console.log(arr)
// // // var personal=["seymur","meherrrem","huseyin"]
// // // console.log(personal)
// // // var numbers=[1,3,5,7,9]
// // // console.log(numbers)







// // // ----------------------------

// // // Object

// // // var hospital={
// // //    name:"BAKI Şeher Abşeron rayon Merkezi xestexanası",
// // //    addres:{
// // //        country:"Azerbaijan",
// // //        city:"Baku",
// // //        regıon:"Abseron"

// // //    },
// // //    about:{
// // //        about:"Founded in 2013, the clinic is located in Badamdar. Responding to all world standards, the clinic provides medical services to all, both Azerbaijani citizens and its guests.",
// // //        doctor:["T.ü.E.D. Aytən Sultanova","Dr. Aida Aliyeva","Dr. Almaz Ismayilova"],



// // //    },
// // //    contactus:{
// // //           location:"Baku Badamdar",
// // //           telephone:"(012) 502-50-18" ,
// // //           mail:"info@cih.az",
// // //    }

// // // }
// // // console.log(hospital)






// // // var date1=new Date();
// // // date1.setFullYear(2000);
// // // console.log(date1.getFullYear());


// // // var date1=new Date();
// // // date1.setFullYear(2000);
// // // dat



// // // == yalnız deyerini ödeyir ,
// // // === tipini ve deyerni ödeyir
// // // != deyerinin beraber olmadığını yoxlayır
// // // !** hem tipini hem deyerini beraber olmadğını yoxl




// // //

// // // var h1=document.querySelector(".h1");
// // // h1.onclick=function(x,y){

// // // }

// // // "use strict"   araşdırrr

// // // var let const
// // // var a=10;
// // // // var a=30; yendiden teyin edir
// // //     // a=10; deyişeni yeniden teyn edir

// // //     let a=20;
// // //     let a=25;
// // //     a=22;
// // //     const a=5;
// // //     const a=6;
// // //     a=6
// // //     console.log(a);



// // // ----------------------------------

// // // function / global/ block SCOPE
// // // function test(){
// // //     var a=25;
// // //     let b=30;
// // //     const c=45;

// // // }
// // // test()
// // // console.log(a,b,c);

// // // var a=25;
// // // let b=20;
// // // const c=40;


// // // if (true){
// // //     var a=30;
// // //     let a=40;
// // //     const a=50;

// // // }
// // //  b=55;
// // //  console.log(b);

// // // var btn =document.querySelectorAll("#accardion buttton")
// // // // var p= document.querySelectorAll("#accardion p")
// // // // for(let i =0; i < btn.length; i++){
// // // //     btn[i].onclick = function(){
// // // //         for (let j = 0; j < p.length; j++){
// // // //             p[j].classList.remove("active")
// // // //         }
// // // //         this.nextElementSibling.classList.add("avtive")
// // // //     }
// // // // }


// // // var tabbtn = document.querySelectorAll(".tab button")
// // // var tabp = document.querySelectorAll(".tab p")
// // // for(let i =0; i< tabbtn.length; i++){
// // //     tabbtn[i].onclick = function(){
// // //         for (let j =0; j < tabp.length; j++){
// // //             tabp[j].classList.remove("active")
// // //         }
// // //         var btni = this.getAttribute("data-btn")
// // //         tabp[btni].classList.add("active")
// // //     }
// // // }






// // // var mySlider=[
// // //     " photo/blog-6_370x.jpg",
// // //     " photo/blog-7_370x.jpg",
// // //     " photo/blog-8_370x.jpg",
// // // ]
// // //   var img = document.querySelector("#slider img")
// // //   img.src =mySlider[0]
// // //   var next = document.querySelector(".next")
// // //   var prev = document.querySelector(".prev")
// // //   var currentSlide=0;
// // //   next.onclick = function(){
// // //       currentSlide++;
// // //       if
// // //           (currentSlide >= mySlider.length){
// // //               currentSlide = 0;
// // //           }
// // //       img.src = mySlider[currentSlide]
// // //   }
// // // prev.onclick = function( ) {
// // //     currentSlide--;

// // //     if (currentSlide == -1){
// // //         currentSlide = mySlider.length-1;

// // //     }

// // //     img.src = mySlider[currentSlide]
// // // }



// // // next.onclick =nextSlider;
// // // function nextSlider() {
// // //     currentSlide = (currentSlide + 1 + mySlider.length)% mySlider.length;
// // //     img.src=mySlider[currentSlide]
// // // }


// // // .prev.onclick =prevSlider;
// // // function prevSlider() {
// // //     currentSlide= (currentSlide -1 + mySlider.length) % mySlider.length;
// // //     img.src= mySlider[currentSlide]
// // // }





// // // var sliderWidth=document.querySelector(".slider").clientWidth
// // // var sliderLength=document.querySelectorAll(".slider li").length
// // // var mySlideWidth=sliderWidth*sliderLength;
// // // var sliderUl=document.querySelector(".slider ul" )
// // // sliderUl.style.width=mySlideWidth+"px";
// // // var c=0
// // // function mySlide(){
// // //     c++;
// // //     if(c==sliderLength){
// // //         c=0
// // //     }
// // //     sliderUl.style.left= -(c*sliderWidth)+"px"
// // // }
// // // setInterval(function(){
// // //     mySlide()
// // // }, 1000);
// // // c




// // // chat yığılması --------------------------



// // // let x =16+ "volvo"
// // // console.log(x)
// // // let x="16"+ "volvo";
// // // console.log(x)




// // // var dragItem=document.querySelectorAll("drag-item")
// // // var dropArea= document.querySelector("dropArea")
// // // for(let i=0; i< dragItem.length; i++){
// // //     dragItem[i].addEventListener("dragstart",function(e) {
// // //         this.style.background="orange"
// // //     })
// // // }
// // // dropArea.addEventListener("dragover", function(e){
// // //     e.preventDefault()
// // //     this.style.background="yellow"
// // // })
// // // dropArea.addEventListener("dragleave",function(e){
// // //     this.style.background="transparent"
// // // })
// // // dropArea.addEventListener("drop",function(a){
// // //     a.preventDefault()
// // //     var dragId = a.dataTransfer.getData("dragId")

// // //     console.log(a);
// // //     var dragItem=document.getElementById(dragId)
// // //     dropArea.prepend(dragItem)
// // // })



















// // // var adı  = "meherrem";
// // // console.log(adı);
// // // adı="elçin";
// // // console.log(adı);

// // // var surname= "azizov";
// // // console.log(surname);


// // // var a ="meherrem ";
// // // var A = "Meherrem ";
// // // console.log(a);
// // // console.log(A);


// // // var _deişken="30";
// // // var $deişken =12;
// // // console.log(_deişken);
// // // // console.log($deişken);


// // // let name ="meherrem";
// // // console.log(name);








// // // javascript  tipleri

// // // string
// // const surname="meherrem";

// // // number
// // const yas =21;


// // // Boolean
// // const düz= true;


// // // nul
// // const null_=null;

// // const underfined_= underfined_;


// // console.log(typeof underfined_); 

























// var dragItem = document.querySelectorAll(".drag-item")
// var dropArea= document.querySelector("#dropArea")
//  for(let i=0; i < dragItem.length; i++){
//      dragItem[i].addEventListener("dragstart", function(e){
//          e.dataTransfer.setData("dataId",this.id)
//          this.style.background="red"

//      })
//  }
//  dropArea.addEventListener("dragover",function(e){
//       e.preventDefault()
//       this.style.background="yellow"
//  })
//  dropArea.addEventListener("dragleave",function (a){
//      this.style.background="transparent"

//  })
//  dropArea.addEventListener("drop",function(j){
//      j.preventDefault()
//      var dragId = j.dataTransfer.getData("dataId")
//      var dragItem = document.getElementById(dragId)
//      dropArea.prepend(dragItem)
//  })






// var dropDiv= document.querySelector("#dropArea .dropContent")
// dropDiv.addEventListener("dragover", function(e){
//     e.preventDefault()
//     dropDiv.classList.add("active")
// })
// dropDiv.addEventListener("dropleave",function(){
//     dropDiv.classList.remove("active")
// })
// dropDiv.addEventListener("drop",function(e){
//     e.preventDefault()
//     dropDiv.classList.remove("active")
//     var img=e.dataTransfer.files
//     for (let i = 0; i < img.length; i++) {
//             if(img[i].type.match("image*")) {
//                 var tr=document.createElement("tr")

//                 var reader=new FileReader
//                 reader.onload=function(e){
//                     var td=document.createElement("td")
//                     var myImg=document.createElement("img")
//                     myImg.src=e.target.result

//                     myImg.width=250
//                     myImg.height=250

//                     td.appendChild(myImg)
//                     tr.appendChild(td)
//                     document.querySelector(".mainTable tbody").appendChild(tr)

//                 }
//                 reader.readAsDataURL(img[i])




//             }
//             else{
//                 alert("xaiş edirk şekil atınız..!")
//                 return;
//             }
//     }
// })







































