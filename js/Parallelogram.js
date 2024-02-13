function parallelogramArea(){
     const base = getValueById('Parallelogram-base');
    const height = getValueById('Parallelogram-height');

     const area = base * height ;
     setValue('output3',area);


}

function getValueById(elementId){
     const inputField = document.getElementById(elementId);
     const inputValue =inputField.value;
     const text = parseFloat(inputValue);
     return text;

}

function setValue(elementId , area){
     const display = document.getElementById(elementId);
     display.innerText = area;


}