let val="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML==" = "){
            val=eval(val);
          document.querySelector('input').value= val ;
        }
        else if(e.target.innerHTML=="AC"){
            val="";
            document.querySelector('input').value=val;
        }
        else if(e.target.innerHTML=="C"){
            val=val.substring(0 ,val.length-1);
            document.querySelector('input').value= val ;
        }

        
        else{console.log(e.target.innerHTML);
        val= val + e.target.innerHTML;
        document.querySelector('input').value= val ;
        }

        
    })
})
