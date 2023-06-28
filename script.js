let inputBox = document.getElementById("pass-input")
let ulli = document.querySelectorAll("li")
let resetBtn =document.getElementById("btn")
inputBox.addEventListener('input' , () =>{
    
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const length = new RegExp('(?=.{8,})');
        const special = new RegExp('(?=.*[!@#\$%\^&\*~()<>])');
    
         if(lower.test(inputBox.value)==true){
           ulli[2].style.color="green"          
         }else{
            ulli[2].style.color="red"          
         }
    
         if(upper.test(inputBox.value)==true){
           ulli[4].style.color="green"          
         }else{
            ulli[4].style.color="red"          
         }
    
         if(number.test(inputBox.value)==true){
           ulli[1].style.color="green"          
         }else{
            ulli[1].style.color="red"          
         }
         
         if(length.test(inputBox.value)==true){
           ulli[0].style.color="green"          
         }else{
            ulli[0].style.color="red"          
         }
         
         if(special.test(inputBox.value)==true){
            ulli[3].style.color="green"          
        }else{
            ulli[3].style.color="red"          
         }
         
       if(inputBox.value!=null){
        resetBtn.style.display="block"
       }
       else{
        resetBtn.style.display="none"
       }  
    
       resetBtn.addEventListener('click' , () =>{
           inputBox.value=""
           resetBtn.style.display="none" 
           ulli[0].style.color="red"          
           ulli[1].style.color="red"          
           ulli[2].style.color="red"          
           ulli[3].style.color="red"          
           ulli[4].style.color="red"          
         
        })
})


