
const btn=document.querySelector(".toggle")
const mobileItem=document.querySelector(".mobile-item")

btn.addEventListener('click',() =>{
    if(mobileItem.style.display=="block"){
        btn.innerHTML='<i class="fa fa-align-justify" aria-hidden="true"></i>'
        mobileItem.style.display="none"
    }
    else{
        btn.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>'
        mobileItem.style.display="block"
    }
})