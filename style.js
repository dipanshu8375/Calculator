let count = " ";
let input = document.getElementsByClassName("input");
let btn = document.querySelectorAll(".button"); // Here, we have call all classes with button

// First we have create an array of all the button then we have used forEach in which the function passes to each button.
Array.from(btn).forEach((buttons)=>{
    buttons.addEventListener('click',(opera)=>{
        
        if(opera.target.innerHTML == "="){
            count = eval(count);
            document.querySelector("input").value = count;
        }
        else if(opera.target.innerHTML == "C"){
            count = "";
            document.querySelector("input").value = count;
        }
        else if(opera.target.innerHTML == "Del"){
            count = count.slice(0,-1);
            document.querySelector("input").value = count;
        }
        else{
        count = count + opera.target.innerHTML;
        document.querySelector("input").value = count;
    }
    })
})


