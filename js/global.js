const templates= document.querySelector('#numbers');
const main=document.querySelector('main');

for(let i=1;i<=100; i++){

  const clone = templates.content.cloneNode(true);
  clone.firstElementChild.style.fontSize ="20px";

  if(i%3===0 && i%5===0)  {
    clone.firstElementChild.innerHTML=`FizzBuzz `;
    clone.firstElementChild.style.color="blue";
    main.appendChild(clone);

  }
  else if(i%3===0)
  {
    clone.firstElementChild.innerHTML=`Fizz `;
    clone.firstElementChild.style.color="green";
    main.appendChild(clone);
  }
  else if(i%5===0){
    clone.firstElementChild.innerHTML=` Buzz `;
    clone.firstElementChild.style.color="orange";
    main.appendChild(clone);
  }
  else{
    clone.firstElementChild.innerHTML=`${i} `;
    main.appendChild(clone);
  }

  
  
}