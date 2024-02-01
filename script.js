const calculatetemperature=()=>{
const numbers=document.getElementById("temp").value;
const options1=document.getElementById("temp_diff1");
const value1=temp_diff1.options[options1.selectedIndex].value;
const options2=document.getElementById("temp_diff2");
const value2=temp_diff2.options[options2.selectedIndex].value;
const fahtocel=(fah)=>{
    let celsius=((fah - 32) * 5/9).toFixed(3);
    return celsius;
};
const celtofah=(cel)=>{
    let fahrenheit=((cel*9/5) +32).toFixed(3);
    return fahrenheit;
};
const fahtofah=(fah)=>{
    undefined
};
const fahtokel=(fah)=>{
    let kelvin=((fah - 32) * 5/9 + 273.15).toFixed(3);
    return kelvin;
};
const keltofah=(kel)=>{
    let fahrenheit=((kel - 273.15) * 9/5 + 32).toFixed(3);
    return fahrenheit;
};
const celtocel=(fah)=>{
    undefined
};
const celtokel=(cel)=>{
    let kelvin=(parseInt(cel) + 273.15).toFixed(3);
    return kelvin;
};
const keltocel=(kel)=>{
    let celsius=(kel - 273.15).toFixed(3);
    return celsius;
};
const keltokel=(fah)=>{
    undefined
};

let result;
if(value1=="fah"&&value2=="cel"){
    result=fahtocel(numbers);
    document.getElementById("resultContainer").innerHTML=`= ${result}°C<br>Formula:- (Fah - 32) * 5/9`;
}
else if(value1=="cel"&&value2=="fah"){
    result=celtofah(numbers);
    document.getElementById("resultContainer").innerHTML=`= ${result}°F<br>Formula:- (Cel * 9/5) + 32`;
}
else if(value1=="fah"&&value2=="kel"){
    result=fahtokel(numbers);                                                     
    document.getElementById("resultContainer").innerHTML=`= ${result}°K<br>Formula:- (Fah - 32) * 5/9 + 273.15`;
}
else if(value1=="kel"&&value2=="fah"){
    result=keltofah(numbers);                                                         
    document.getElementById("resultContainer").innerHTML=`= ${result}°F<br>Formula:- (Kel - 273.15) * 9/5 + 32`;
}
else if(value1=="cel"&&value2=="kel"){
    result=celtokel(numbers);
    document.getElementById("resultContainer").innerHTML=`= ${result}°K<br>Formula:- Cel + 273.15`;
}
else if(value1=="kel"&&value2=="cel"){
    result=keltocel(numbers);
    document.getElementById("resultContainer").innerHTML=`= ${result}°C<br>Formula:- Kel - 273.15`;
}
else if(value1=="fah"&&value2=="fah"){
    result=fahtofah(numbers);
    document.getElementById("resultContainer").innerHTML=`${result}`;
}
else if(value1=="cel"&&value2=="cel"){
    result=celtocel(numbers);
    document.getElementById("resultContainer").innerHTML=`${result}`;
}
else if(value1=="kel"&&value2=="kel"){
    result=keltokel(numbers);
    document.getElementById("resultContainer").innerHTML=`${result}`;
}
};
