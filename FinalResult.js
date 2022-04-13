const fs = require("fs");


function finalresult(){
let mobile = fs.readFileSync('./Mobiles.json')
const mobileList=JSON.parse(mobile).filter(function(mobile){
    return mobile.mobileprice !== '';
})

const sortedMobileList=mobileList.sort(function (a, b) {
    return Number(a.mobileprice) - Number(b.mobileprice);
  }
  );
fs.writeFileSync("./sortedMobileList.json",JSON.stringify(sortedMobileList))
}
module.exports ={
  finalresult
}