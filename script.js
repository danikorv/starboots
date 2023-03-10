
fetch("items.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let item of items){
      out += `
         <tr>
         <td> <img src='${item.BOOTS}'> </td>
            <td>${item.ERA}</td>
            <td>${item.NUMBER}</td>
            <td>${item.COLOR}</td>
            <td>${item.RATING}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});