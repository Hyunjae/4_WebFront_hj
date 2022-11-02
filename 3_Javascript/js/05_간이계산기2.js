
const num1 = document.getElementById("num1");
// 요소 추적 중 but 값이나 속성 추적 X / 원하는 순간에 값을 얻어옴
const num2 = document.getElementById("num2");

const result = document.getElementById("result");

function calc(op){
    // op에는 + - * / % 중 하나가 전달되어짐

    // 현재 input 요소에 작성된 값을 얻어와 변수에 저장
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    switch(op){
        case '+' : result.innerText = n1 + n2; break;
        case '-' : result.innerText = n1 - n2; break;
        case '*' : result.innerText = n1 * n2; break;
        case '/' : result.innerText = n1 / n2; break;
        case '%' : result.innerText = n1 % n2; break;
    }
}