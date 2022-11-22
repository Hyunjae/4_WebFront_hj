const createForm = document.getElementById("createForm");

createForm.addEventListener("submit", function(event){
    
    const bondName = document.getElementById("bondName");
    if(bondName.value.trim().length==0){
        alert("밴드 이름을 입력해주세요.");
        bondName.focus();
        event.preventDefault();
        return;
    };
    
    const categoryList = document.getElementsByName("category-list");
    let countC = 0;
    for(let i=0; i<categoryList.length; i++){
        if(categoryList[i].checked){
            countC += 1;
            console.log(categoryList[i]);
        }
    }
    if(countC==0){
        alert("밴드 카테고리를 선택해주세요.");
        event.preventDefault();
        return;
    }

    const openType = document.getElementsByName("openType-check");
    
    let countO = 0;
    for(let item of openType){
        if(item.checked){
            countO +=1;
        }
    }

    if(countO==0){
        alert("밴드 공개여부를 선택해주세요.");
        event.preventDefault();
        return;
    }
    
});


