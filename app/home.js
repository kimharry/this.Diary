// 날짜 구현
const today = new Date();
document.querySelector("#year").innerHTML = today.getFullYear();
document.querySelector("#month").innerHTML = clockNotationConverter(today.getMonth() + 1);
document.querySelector("#day").innerHTML = clockNotationConverter(today.getDate());

const spaceToWrite = document.querySelector('#spaceToWrite');
const colorBtn = document.querySelector('colorBtn');
const fontBtn = document.querySelector('fontBtn');



function clockNotationConverter(num) {
    let stringNum = String(num)
    if (stringNum.length <= 1) {
        stringNum = '0'+ stringNum
    }
    return stringNum
}