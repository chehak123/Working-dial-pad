var count = 0;
var str='';

let fillone = () => {
    if(count<11){
    let ele = document.getElementById('empty');
    ele.innerHTML += '1';
    str=str+'1';
    count++;
    }
}

let filltwo = () => {
    if(count<11){
        let ele = document.getElementById('empty');
        ele.innerHTML += '2';
        str=str+'2';
        count++;
        }
}

let fillthree = () => {
    if(count<11){
        let ele = document.getElementById('empty');
        ele.innerHTML += '3';
        count++;
        str=str+'3';
        }
}

let fillfour = () => {
    if(count<11){
        let ele = document.getElementById('empty');
        ele.innerHTML += '4';
        count++;
        str=str+'4';
        }
}

let fillfive = () => {
    if(count<11){
        let ele = document.getElementById('empty');
        ele.innerHTML += '5';
        count++;
        str=str+'5';
        }
}

let fillsix = () => {
    if(count<11){
        let ele = document.getElementById('empty');
        ele.innerHTML += '6';
        count++;
        str=str+'6';
        }
}

let fillseven = () => {
    if(count<11){
        let ele = document.getElementById('empty');
        ele.innerHTML += '7';
        count++;
        str=str+'7';
        }
}

let filleight = () => {
    if(count<11){
        let ele = document.getElementById('empty');
        ele.innerHTML += '8';
        count++;
        str=str+'8';
        }
}

let fillnine = () => {
    if(count<11){
        let ele = document.getElementById('empty');
        ele.innerHTML += '9';
        count++;
        str=str+'9';
        }
}

let fillstar = () => {
    if(count<11){
        let ele = document.getElementById('empty');
        ele.innerHTML += '*';
        count++;
        str=str+'*';
        }
}

let fillzero = () => {
    if(count<11){
        let ele = document.getElementById('empty');
        ele.innerHTML += '0';
        count++;
        str=str+'0';
        }
}

let fillhash = () => {
    if(count<11){
        let ele = document.getElementById('empty');
        ele.innerHTML += '#';
        count++;
        str=str+'#';
        }
}

let rem = () => {
        let ele = document.getElementById('empty')
        var str2 = str.substr(0, str.length-1);
        str=str2;
        ele.innerHTML=str;
        count--;
}

