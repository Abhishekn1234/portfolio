const week=new Array(7);
week[1]=`Sunday`;
week[2]=`Monday`;
week[3]=`Tuesday`;
week[4]=`Wednesday`;
week[5]=`Thrusday`;
week[6]=`Friday`;
week[7]=`Saturday`;



function returnDay(x) {
           return (x < 1) || (x > 7) ? null : week[x];
}
console.log(returnDay(4));
    
      