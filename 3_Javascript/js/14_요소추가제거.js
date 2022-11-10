
// 추가 버튼 클릭 시 동작
document.getElementById("add").addEventListener("click", function(){

    // <div class="row">
    //     <input type="number" class="in">
    //     <span class="remove">&times;</span>
    // </div>

    // div 요소 생성
    const div = document.createElement("div");
    // div에 row class 추가
    div.classList.add("row");

    // input 요소 생성
    const input = document.createElement("input");
    input.classList.add("in");

    // *요소에 속성을 추가하거나 변경할 때 사용하는 함수
    // 요소.setAttribute("속성명", "속성값");
    // <-> 요소.removeAttribute("속성명") : 속성 제거

    // input에 type="number" 추가
    input.setAttribute("type", "number");

    // span
    const span = document.createElement("span");
    span.classList.add("remove");
    // span에 &times; 추가(html 요소이기 때문에 innerHTML로 추가)
    span.innerHTML = "&times;";

    // span에 click 이벤트 동작 추가 (동적 요소에 이벤트 추가)
    span.addEventListener("click", function(){
        // alert("동적 요소에 이벤트가 추가됨");

        // 클릭된 X버튼의 부모 요소(div.row)를 삭제
        // 요소.remove() : 해당 요소를 제거
        this.parentElement.remove();
    });


    // div > input, span 조립
    // div.append(input);
    // div.append(span);
    div.append(input, span);

    // .container에 마지막 자식으로 추가
    document.querySelector(".container").append(div);

    input.focus(); // 화면에 추가된 input에 포커스

    

});

// 처음 HTML 문석 해석 시 remove라는 클래스를 가진 요소가 존재하지 않기 떄문에
// 아래 이벤트 동작 추가 구문에 아무 요소에서도 적용되지 않음
// (로딩이 되면 바로 한 번 읽고 안읽는데 remove는 이후에 추가되기 때문에 적용되지 않는 코드)

// * 처음부터 있던 HTML 요소 == 정적요소
// * JS로 추가되는 요소 == 동적요소

// 정적요소 .remove에 이벤트 동작 추가하는 코드
// const remove = document.getElementsByClassName("remove");  이게 밖에있으면 처음에 있는 요소인지 확인함
// for(let item of remove){
//     addEventListener("click", function(){
//         this.alert("삭제");
//     })
// }


document.getElementById("calc").addEventListener("click", function(){
    
    // 함수는 호출된 시점의 HTML 화면을 기반으로 해석 진행
    // 따라서 input이 다 나온 시점으로 계산
    const inputList = document.getElementsByClassName("in");
    console.log(inputList);
    
    let sum =0;
    for(let input of inputList) {
        sum+= Number(input.value);
    }
    alert("합계 : " + sum);
});
