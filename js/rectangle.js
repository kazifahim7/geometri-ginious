function rectangleArea(){
     const widthInput = document.getElementById('rectangle-width');
     const text = widthInput.value;
     const width = parseFloat(text);
     


     const lengthInput = document.getElementById('rectangle-length');
     const text1 = lengthInput.value ;
     const length = parseFloat(text1);
     
     
      const area = width *length ;
      console.log(area);

      const display2 = document .getElementById('output2');
      display2.innerText= area ;

     


}