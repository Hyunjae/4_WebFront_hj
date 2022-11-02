
const num1 = document.getElementById("num1");
// 요소 추적 중 but 값이나 속성 추적 X / 원하는 순간에 값을 얻어옴
const num2 = document.getElementById("num2");

const result = document.getElementById("result");

// .value는 함수 내에서 작성해주어야 한다 
// -> input 전이기 때문에 0 밖에 나오지 않음

function plus(){ // 함수 정의 (코드가 있다는 것은 인식하되 호출 전까지 수행X)

    // 함수가 호출되었을 때 내부코드 수행
    result.innerHTML = Number(num1.value) + Number(num2.value);
    num1.value = "";
    num2.value = "";
}
function minus(){
    result.innerHTML = Number(num1.value) - Number(num2.value);
    num1.value = "";
    num2.value = "";
}
function multi(){
    result.innerHTML = Number(num1.value) * Number(num2.value);
    num1.value = "";
    num2.value = "";
}
function div(){
    result.innerHTML = Number(num1.value) / Number(num2.value);
    num1.value = "";
    num2.value = "";
}
function mod(){
    result.innerHTML = Number(num1.value) % Number(num2.value);
    num1.value = "";
    num2.value = "";
}