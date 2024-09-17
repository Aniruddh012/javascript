
                                                      ////////////////////////////////
                                                     // starting of the javascript //
                                                    ////////////////////////////////





  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
 // *this is used for the prompt and the alert (note)

  // prompt("enter the nuner ");
  // alert("hii");

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // *  for the event addEventListener(note)

  // let box= document.querySelector(".box");
  // box.addEventListener("click",()=>{
  //     box.innerText="hii";
  // })

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //* this how the object created in the java script(note)

  // let student={
  //     age: 16,
  //     fullname: "aniruddh",
  //     car: "honda",
  // }
  //  student["age"]=student["age"]+1 // age have added by +1
  //  let sss=student["age"]// age=17
  //  console.log(sss);
  //  student["fullname"]="ved";
  //  let name=student["fullname"]
  //  console.log(name);
  

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //* arthematic oprator(note)

  // let a=5;
  // let b=6;
  // let c=a**b; // here the actual process is 5*5*5*5*5*5 happen
  // console.log(c);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // assignment oprator(note)

  // let a=5;
  // a+=1;
  // console.log(a);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // let age=16;
  // if(age>18){
  //   console.log("the age is upper 18");
  // }else if(age<18){
  //   console.log("the age is uner 18");
  // }
  // else if(age===18){
  //   console.log("the age is 18");
  // }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                  // ternary opratoer
  // let age=prompt("enter the age");
  // alert("your age is "+" "+age);
  // let dis= age>18? "adilt":"not adult";
  // console.log(dis);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                  // for loop
  // for(let i=0;i<=15;i++){
  //   console.log("apna collge");
  // }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                  // while loop
  //while loop is used for the condition and the 

  // let innerBox=document.querySelector(".innerBox");
  // let number= prompt("enter the number");
  // while(number>=50){
  //   number=prompt("the number is greter then 50 enter the vakid number");
  // }
  // innerBox.innerText=number;

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                  // for of loop
  // for of loop is used to traverse on the string and arry                         
  // let name="aniruddh prajapati";
  // for(let val of name){
  //   console.log(val);
  // }

  // another code of the for of loop
  //  let name="aniruddh prjapati";
  //  let count=0;
  //  for(let val of name){
  //   console.log(val);
  //   count++;
  //  }
  //  console.log(count);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                  // for in loop
  // this is used for the object 

  // let details={
  //   age:19,
  //   name:"aniruddh",
  //   cgpa:9,
  //   ispass:true,
  // };

  // for(let i in details){
  //   console.log([i],details[i]);
  // }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                //number guessing game
  //  let compChoise=15;
  //  let userChoise=prompt("enter the number");
  // while(compChoise!=userChoise){
  //   prompt("you have enter the invalid number");
  // }
  // alert("congretualatio you have enter the rigth number");

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                              // backtics ``
  // let val=51;
  // console.log(`the val is ${val}`);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                                  //strings in java


                                                                              // string in js
  // let str="aniruddhprajapati";
  // let strval=str.length;
  // console.log(strval);  // for measure the length of the str
  // let no1= str[1];
  // console.log(no1);  // for getting the index


                                                                            //string interpolution
  // new code                                                               
  // let sum= `the sum of this ${1+2+3+4} `;
  // console.log(sum);


                                    // string methods in js
  //                               ..........................                             

                                    //.toUpperCase(); and the .toLowerCase(); 

                                  
                                                                          // .toUpperCase(); function 
                                                                         // this working same for the .toLowerCase(); 
  // let str="aniruddh prajapati"; 
  // // let str2=` sureshbhai`;
  // // let newStr=str.toUpperCase();
  // // console.log(str);
  // // console.log(newStr); 
  // let drim= str.slice(2,15);                                             // .slice(); give the cutted value where the ending
  // console.log(drim);                                                     // where the ending inx does not contain

  // let concat=str.concat(str2);                                           //str1.concate(str2); is used for the join 
  // console.log(concat);                                                   //  the two string      

  // let replace= str.replaceAll("d","j");                                  // .replace("search val","new val"); is used for 
  // console.log(replace);                                                  // the replace the value t the new one whre the all
                                                                        // is used for the all search val have to be replace to that one 

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
                                   // Array
//                                  .......

// let heros=["ironman","batman","jocker","thor"];                     // this is how the arry is created and the how
// let marks=[65,6,65,65,1,5,51,844,4,4,951,84,54,4,4];                // the value of the aary can be change
// marks[2]=98;
// heros[0]="thanos";
// console.log( marks[2]);
// console.log( heros[0]);
 

                                   // arry method
//                                .................


// 1.  push();                  add to end
// 2.  pop();                   delete from and & return
// 3.  toString();              convert arry to string 
// 4.  concat();                to join the two arry
// 5.  unshift();               add to start
// 6.  shift();                 delete from start & return
// 7.  Slice(starinx,endidx);   retun the pieace of the arry
// 8.  Splice();                change orignal arry

// 1. push

// let food=["burger","tomato","apple","litchi",];                        //.push(); operation
// food.push("pizza");
// console.log(food);

// 2. pop

// let food=["burger","tomato","apple","litchi"];                        //.pop(); operation
// food.pop();
// console.log(food);

// 3. toString

// this is used to convert into the string 
// let food=["burger","tomato","apple","litchi"];                       //.toString();
// food.toString();
// console.log(food);

// 4. concat();

// let arr1=[1,2,3,4,5,6,7,8,9];                                        //.concat();
// let arr2=[9,8,7,6,5,4,3,2,1];
// let arr3=arr1.concat(arr2);
// console.log(arr3);

// 5. unshift();

// let arr1=[1,2,3,4,5,6,7,8,9];                                        //.unshift();
// arr1.unshift(5);
// console.log(arr1);

// 6. shift();

// let arr1=[1,2,3,4,5,6,7,8,9];                                         //.shift();  
// arr1.shift();
// console.log(arr1);

// 7. slice();

// let arr1=[1,2,3,4,5,6,7,8,9];                                        //.slice();
// let no=arr1.slice(2,5);
// console.log(no);
// console.log(arr1.slice(2,5));

// 8. splice();                                    

// let arr1=[1,2,3,4,5,6,7,8,9];    //.splice(strting inx,how any element u want to delete,replaced element,replaced element) 
// arr1.splice(2,2,121,102);
// console.log(arr1);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                   //function and method 
                               /*.........................*/

                               
// this is the basic how the function is initiate 

// function aniruddh(){
//   console.log("hello world");
// }
// aniruddh();

//.................................................................

// ex 2

// function aniruddh(msg){
//   console.log(msg);                                        
// }
// aniruddh("my name is aniruddh");
//.....................................................................
// let val=prompt("enter the number");
// function aniruddh1(no1,no2){
//   console.log( no1+no2);
// }
// aniruddh1(val,5);
// //.....................................................................

// function sum(x,y){
//   s=x+y;
//   console.log("before return");
//   return s;
// }
// let val=sum(3,4);
// console.log(val);
//.........................................................................

                                  //arrow function
                                /*................*/
// const aniruddh=(a,b)=>{               
//   console.log(a+b);
// }
// aniruddh(5,5);

//................................................................................
                                  // practic quetion
                                 /*.................*/
                              
// this is count that how many vowel are in the input
                      
// function input(str){
//   count=0;
//   for(let val of str){
//     if(val==="a" ||
//        val==="e" ||
//        val==="i" ||
//        val==="o" ||
//        val==="u"
//     )
//     {
//       count++;
//     }
    
//   }
//   console.log(count);
// }

// input("aniruddh");

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                    //for each loop
                                  /*...............*/

// let arr=[1,2,3,4,5,6,7,8,9];                                                    // for each loop is trevers on the each eleent of the arry
// arr.forEach((val)=>{
//   console.log(val);
// });

// we can use the three parameter in the for each loop

// let arr=["delhi","mumbai","pune","surat"];
// arr.forEach((val,idx,arr)=>{
//   console.log(val,idx,arr);
// });

//...................................................................................................................................................
                                  // map // in the for each loop
                                 //......

// create the new arry with the result of operation the value its callback return are used to for new arry


// const arr=[5,8,10,6];
// let num= arr.map((val)=>{
//   return val*2;
// });
// console.log(num);

//....................................................................................................................................................
                                 // filter // in the for each loop
                                 //........
   
// create the new array of the eleent that give true for a condition / filter
// this used for the take output according the condition                                

// const arr=[5,9,48,54,64,84,84,44];
// let newarr=arr.filter((val)=>{
//    return val>20;
// });
// console.log(newarr);

//......................................................................................................................................................
                                            //////////////////////
                                           // practice quetion //
                                          //////////////////////

// let n= prompt("enter the number");
// let arr=[];
// for(let i=1; i<=n;i++){
//   arr[i-1]=i;
// }
// console.log(arr);
// let sum= arr.reduce((res,curr)=>{
//   return res + curr;
// });
// console.log(sum);

// let factorial= arr.reduce((res,curr)=>{
//   return res*curr;
// });
// console.log(factorial);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        
                                                 ///////////
                                                /// dom ///
                                               ///////////

 // this is used to show the all  body content of the html
// console.log(document.body);    

// this is used to show all the head content of the html
// console.log(document.head);
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


                                             //dom manipulation
                                          /*....................*/
// selecting with id
// let id=document.getElementById("box");
// console.log(id);
                                      
// // selecting with class
// let claes=document.getElementsByClassName("btn");
// console.log(claes);

// selecting with the tag
// let tags=document.getElementsByTagName("div");
// console.log(tags);


                                           // query selector
                                         /*..................*/

// let id=document.querySelector("#box");   
//console.log(id);         
                                                                           // document.querySelector("#myid/my class/tag");
// let classes=document.querySelector(".btn");
// console.log(classes);

// let lol=document.querySelector("div");
// console.log(lol);

//............................................................................................................................................................

                                        // dom manipulation
                                      /*...................*/
                                  
 //attribute
 // 1.  .getAttribute(attr)                  // to get the attribute value
 // 2.  .getAttribute(attr,value)           // to set the attribute val
 
 //style
 // 1.  node.style


                                     // .getAttribute(attr)
       
       
//  let div= document.querySelector("div");                 // this is show the id of that id class
//  let id=div.getAttribute("id");
//  console.log(id);

                                    // .setAttributes(attr,value)

         
//  let para=document.querySelector("p");                    // this is change the class name "para" to "get"
// let paras=para.setAttribute("para","get");                               
// console.log(paras);

                                    // node style


// let val=document.querySelector(".btn");                      // this used to get the that tag perticuler style  
// console.log(val.style);

// let val=document.querySelector("#box");                      // we can change the color by using the javascript
// val.style.backgroundColor="green";


                                       // some data is missing 






















///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        
                                        // events in javascript
                                      /*.......................*/
// 1. method

// let innerbox=document.querySelector(".innerBox");
// let btn=document.querySelector(".btn");                                     
//   btn.onclick=()=>{
//   console.log("hii this is an aniruddh");
//   innerbox.innerText="btn was clicked";
// }

//.....................................................................................................................................

                                       //event listener
                                    /*..................*/


// let innerbox=document.querySelector(".innerBox");
// let btn=document.querySelector(".btn");
// btn.addEventListener("dblclick",()=>{
//   innerbox.innerText="btn was clicked";
// });

  
                               // example of the change the mode of the backgroung color by clicking the btn

// let btn=document.querySelector(".btn");
// let body=document.querySelector("body");
// let bodya="black";
// btn.addEventListener("click",()=>{
//   if(bodya==="black"){
//     body.classList.add("white");
//     body.classList.remove("black");
//     bodya="white";
//   }
//   else{
//     body.classList.add("black");
//     body.classList.remove("white");
//     bodya="black";
//   }
//  console.log(bodya);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                           

                                            ////////////////////////
                          //<<<<<<<<<<<<<<<// classes and object //>>>>>>>>>>>>>>>>
                                          ////////////////////////


                                        
                                    
// const student={                                      // this.marks is used to call the in same object object property 
// fullname:"aniruddh",
// age: 17,
// marks:99,
// printmarks: function (){
//                         console.log("the marks is " ,this.marks); 
//                        }
// };
// console.log(student.printmarks());

//...............................................................................................................................................


                                //object1.__proto__object2;
                               /*>>>>>>>>>>>>>>>>>>>>>>>>>>>*/


//   const employee={
//           calctext(){
//           console.log("text rate 10%");
//           },
//           calctext2:function(){
//           console.log("text rate is 1212%");
//           }
//   };
// const karanarjun={
// salary:500000,
// };
// karanarjun.__proto__=employee;
// console.log(karanarjun.calctext());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                           


                                            ////////////////////
                          //<<<<<<<<<<<<<<<// classes  in js //>>>>>>>>>>>>>>>>
                                          ////////////////////


// class toyotacar {
//       start(){
//       console.log("start");
//       }
//       stop(){
//       console.log("stop");
//       }
// }

// let fortuner=new toyotacar();
// let luxus=new toyotacar();
// console.log(luxus.stop());

//.............................................................................

// class toyota{
//     start(work){
//     console.log("this is the start btn"+work);
//     }
//     stop(){
//     console.log("this is the stop btn");
//     }
//     setbrand(brand){
//       this.brandname=brand;
//     }
// }
// let fortuner=new toyota();
// fortuner.setbrand("fortuner");
// let luxus=new toyota();
// luxus.setbrand("hanuman");
// console.log(luxus);
// fortuner.start("no this type");

//...........................................................................................................................................

                                     // constructor in js  
                                    //....................


// class toyota {
//       constructor(brand,milage){            // constuctor is used to make the constuctore
//         this.brandA=brand;                  
//         this.milage=milage;
//       }
//   start(){
//       console.log("ca is started");
//   }
//   stop(){
//       console.log("car is stop");
//   }
// }
// let fortuner=new toyota("fortuner",15);
// console.log(fortuner);
///////////////////////////////////////////////////////////////////////////////////////////////

                                  //inheritance in javascripts
                                //.............................

// class person{
//     eat(){                                                   // the extend is used to inherited the property 
//       console.log("i am eating");
//     }
//     sleep(){
//       console.log("i am sleeping");
//     }
// }

// class eng extends person{
//   work(){
//     console.log("i am working");
//   }
// }
// let aniurddh=new eng();
// console.log(aniurddh.eat());

//..............................................................................................................................................

                                      // super keyword
                                    //....................

                              //super keyword is used to inherite the perent constructor
                             // if we remove the super keyword the perent consructor of the perent class will not work


//   class person{
//   constructor(){
//     this.speceis="homosephience";
//   }
//   eat(){
//       console.log("i am eating");
//   }
//   sleep(){
//       console.log("i a sleeping");
//   }
// }
// class eng extends person{
//   constructor(branch){
//     super(); // to invoke the perents class constructor
//       this.branch=branch;
//   }
//       work(){
//         console.log("i a doing the work");
//       }
// }
// let aniruddh=new eng("chemical");
// console.log(aniruddh);


                                       //  new example of the super constructor


// class person{
//    constructor(name){
//       this.species="homosephience";
//       this.name=name;
//    }
//     eat(){
//       console.log("i am eating");
//     }

// }
// class eng extends person{
//   constructor(name){
//     super(name);
//   }
//   work(){
//     super.eat();
//     console.log("doing somethig");
//   }
// }
// let person1= new eng("aniruddh");
// console.log(person1);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                           

                                         //error handling
                                      /*..................*/


// error hadling is sommthing which try the code and if there is any problem then it catch
// it does not stop the process


// let a= 50;
// let b= 60;

// console.log(a+b);
// try{console.log(a+c);                         // it does not stop the process even if have a problem
// }catch(err){
//   console.log(err);
// }
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a-b);
// console.log(a+b);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                           
                                          ////////////////////////////////////
                             //<<<<<<<<<<// callback,promies & async await //>>>>>>>>>>>>>>>>>
                                        ////////////////////////////////////


                                         // setTimeout();
                                        /*...............*/        
                                        
// function call(){                                 // this is used to set a time how much delay the output will come
//   console.log("hello");
// }
// setTimeout(call,5000);


// setTimeout(()=>{
//   console.log("hello world");
// },5000);
//.........................................................................................................................................

                                    //  call back hell
                                  /*...................*/


// function getdata(data,getnextdata){
//   setTimeout(()=>{                                     // this is the getting every data after the 2 second delay
//     console.log("getting data",data);
//     if(getnextdata){
//       getnextdata();
//     }
  
//   },2000);
// }
// getdata(1,()=>{
//   getdata(2,()=>{
//     getdata(3,()=>{
//       getdata(4,()=>{
//         getdata(5);
//       });
//     });
//   });
// });

//........................................................................................................................................

                                              //promise

  // let promise=new Promise((resolve, reject) => {
  //   console.log("hiimy name is aniruddh");
  //   resolve("success");
  // // })

  // let promise=new Promise((resolve, reject) => {
  //   console.log("hiimy name is aniruddh");
  //   reject("soe error occure");
  // })


//   function getdata(data,getnextdata){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data",data);
//       resolve("succcess");
//       if(getnextdata){
//           getnextdata();
//       }
//     },5000);
//    }); 
//   }
// let promise=getdata(123);


// const getpromise=()=>{
//   return new Promise((resolve,reject)=>{
//     console.log("hii aniruddh");
//     resolve("success");
//   });
// }

// let promies=getpromise();                           // if the promise is fullfilled then the further output will return
// promies.then(()=>{
//   console.log("the proise return succssfully");
// });

//.............................................................................................................................


// const getpromise=()=>{
//   return new Promise((resolve,reject)=>{
//     console.log("hii aniruddh");
//     reject("error");
//   });
// }

// let promies=getpromise();                           // if the promise is reject then the further output will return
// promies.catch(()=>{
//   console.log("this is rejected");
// });

