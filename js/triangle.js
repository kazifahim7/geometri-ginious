function triangleCalculate(){

     // get triangle base value ;
     const triangleBase = document.getElementById('triangle-base');
     const input1 = triangleBase.value;
     const base = parseFloat(input1);
     triangleBase.value = '';
     

     // get triagle height value
     const triangleheight = document.getElementById('triangle-hight');
     const input2 = triangleheight.value;
     const height = parseFloat(input2);
     triangleheight.value = '';
     


     const area = 0.5 * base * height ;
     
     const display = document.getElementById('output');
     display.innerText = area ;


}