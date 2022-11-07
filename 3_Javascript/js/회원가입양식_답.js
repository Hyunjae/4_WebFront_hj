// 아이디 유효성 검사
document.getElementById("inputId").addEventListener("change", function(){
    const regEx = /^[a-z][a-zA-Z\d\-\_]{6,14}$/;

    if(regEx.test(this.value)){
        this.style.backgroundColor = "springgreen";
    } else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
    }

});

// 비밀번호 유효성 검사
const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");
const pwMessage = document.getElementById("pwMessage");
inputPwConfirm.addEventListener("keyup", function(){
    if(inputPw.value.trim().length==0){
        alert("비밀번호를 입력해주세요.");
        inputPw.focus();
        inputPwConfirm.value = "";
    }

    if(inputPw.value==inputPwConfirm.value){
        pwMessage.innerText = "비밀번호 일치";
        pwMessage.style.color = "green";
    } else {
        pwMessage.innerText = "비밀번호 불일치";
        pwMessage.style.color = "red";
    }
});

// 이름 유효성 검사
const nameMessage = document.getElementById("nameMessage");
document.getElementById("inputName").addEventListener("change", function(){
    const regEx = /^[가-힣]{2,5}$/;

    if(regEx.test(this.value)){
        nameMessage.innerText = "정상입력";
        nameMessage.style.color = "green";
    } else {
        nameMessage.innerText = "한글만 입력하세요";
        nameMessage.style.color = "red";
    }
});

// const submit = document.querySelectorAll("button")[2];

// submit.addEventListener("onclick", function(event){
//     const gender = document.querySelectorAll("[name='gender']");

//     if(!gender[0].checked && !gender[1].checked){
//         alert("성별을 선택해주세요");
//         event.preventDefault();
//         return;
//     }

//     const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
//     const inputTel = document.getElementById("inputTel");

//     if(!regEx.test(inputTel.value)){
//         alert("전화번호 형식이 올바르지 않습니다");
//         event.preventDefault();
//         return;
//     }
// });

function validation(){
    const gender = document.querySelectorAll("[name='gender']");

    if(!gender[0].checked && !gender[1].checked){
        alert("성별을 선택해주세요");
        
        return false;
    }
    const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
    const inputTel = document.getElementById("inputTel");

    if(!regEx.test(inputTel.value)){
        alert("전화번호 형식이 올바르지 않습니다");
        
        return false;
    }
    return true;
}

