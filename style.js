
    //shop.index right side
    let total=0;
    function ClickCard(data)
    {
        const NewElement=document.getElementById('container');

       

            
        console.log(data.parentNode.childNodes[3].innerText);

        const ProductsName=data.parentNode.childNodes[3].innerText

        const li =document.createElement('li');

        li.innerText=ProductsName;
        NewElement.appendChild(li);

         console.log(data.parentNode.childNodes[5].innerText.split(" ")[0]);

        const prices=data.parentNode.childNodes[5].innerText.split(" ")[1]

        console.log(data.parentNode.childNodes[5].innerText.split(" ")[1]);



         total=parseFloat(total) + parseFloat(prices);

         document.getElementById('Total-Prices').innerText=total;

        
    
    }
    
  

    





    
  
  


