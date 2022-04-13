let btn1 = document.querySelector(".imp1");
let btn2 = document.querySelector(".imp2")
let submit = document.querySelector(".submit")


submit.addEventListener("click",async ()=>{
   let link1 =  btn1.value;
   let link2 =  btn2.value;
   await axios.post("/scrap",{link1,link2})
})
