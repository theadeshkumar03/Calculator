let input = document.getElementById("input");
let button = document.querySelectorAll("button");

button.forEach(element =>{
        element.addEventListener("click" , (e)=>{
            if(e.target.textContent ==="C"){
                input.innerText="";
            }
            else if(e.target.textContent ===">")  {
                input.innerText=input.innerText.slice(0,-1);
            }
            else if(e.target.textContent ==="="){
                input.innerText = eval(input.innerHTML)
            }

            
                
            else 
            input.innerText += e.target.textContent;
            input.scrollLeft=input.scrollWidth;


        })
})