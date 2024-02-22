const btn = document.getElementById("btn")
const value = document.getElementById("input")
const valid = document.getElementById("valid")

btn.addEventListener("click", function(){
    if(value.value.includes("@")){
        window.location.href = "done.html"
    }
    else{
        value.classList.add("invalid")
        valid.classList.add("display-yes")
        valid.classList.remove("display-no")
        
    }
    
}
    
)
    
