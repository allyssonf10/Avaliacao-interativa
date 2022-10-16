let submitBut = document.querySelector("button");
let firstSlide = document.querySelector(".container-1");
let secondSlide = document.querySelector(".container-2");
function showOtherTab(){
    firstSlide.style.display = "none";
    secondSlide.style.display = "flex";
}
// deixar a taxa ativa divertida
let rateArr = document.querySelectorAll(".rate");
let rateValue = "";
rateArr.forEach((ele) => {
    ele.addEventListener("click",activeRate);
})
function activeRate(e){
    rateArr.forEach((ele) =>{
            ele.classList.remove("ativo");
    })
    rateValue = e.currentTarget.innerHTML;
    e.currentTarget.classList = "ativo rate";
    console.log(rateValue);
}
//on submit
let rateSpan = document.querySelector("span");
function onSubmit(){
    if(rateValue !== ""){
        rateSpan.innerText = `${rateValue}`;
        showOtherTab();
    }
    

}
submitBut.addEventListener("click",onSubmit);