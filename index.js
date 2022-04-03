const titleBox =document.querySelectorAll('.span2');
const span1 = document.querySelectorAll('.span1');

let count = 1;

const desc = document.querySelector('#desc');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');

const back = document.querySelector('#back'),
submitDesc = document.querySelector('#submit-desc'),
toBack = document.querySelector('#to-back'),
goYes = document.querySelector('#go-yes');

titleBox.forEach((item, idx) =>{
    item.addEventListener('click', (e)=>{
        if(item.textContent == "Choose title"){
            chose3();
        }else if(item.textContent == "Choose description"){
            count++;
            e.target.parentElement.classList.add('opacity');
            e.target.parentElement.firstElementChild.classList.toggle('active-span');
            chose1();
        }else if(item.textContent == "Confirm data" && count === 2){
            e.target.parentElement.classList.add('opacity');
            e.target.parentElement.firstElementChild.classList.toggle('active-span');
            chose2();
            count = 1;
        }
    })
})

function chose1(){
    titleBox[2].parentElement.classList.remove('opacity');
    span1[2].classList.remove('active-span');
    titleBox[1].parentElement.classList.add('opacity');
    span1[1].classList.add('active-span');
    desc.innerText = "Choose description content";
    box1.classList.remove("active-visible");
    box2.classList.add("active-visible");
    box3.classList.remove("active-visible");
}
function chose2(){
    titleBox[2].parentElement.classList.add('opacity');
    span1[2].classList.add('active-span'); 
    desc.innerText = "Are you happy now?";
    box3.classList.add("active-visible");
    box2.classList.remove("active-visible");
    box1.classList.remove("active-visible");
}
function chose3(){
    titleBox[1].parentElement.classList.remove('opacity');
    span1[1].classList.remove('active-span');
    desc.innerText = "Choose title content";
    box1.classList.add("active-visible");
    box2.classList.remove("active-visible");
    box3.classList.remove("active-visible");
}
function happy(){
        desc.innerText = "Ok we're done. Thanks for sending us your data!";
        box3.classList.remove("active-visible");
}