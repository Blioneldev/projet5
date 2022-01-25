fetch("http://localhost:3000/api/products")
  .then(reponse => reponse.json())
  .then(reponse2 => 
    {
      console.log(reponse2)
      const items = document.querySelector("#items")
      reponse2.forEach(element => {
        console.log(element)
        let kanap =  '<a href="./product.html?id='+element._id+'">'
        +'<article>'
          +'<img src="'+element.imageUrl+'" alt="Lorem ipsum dolor sit amet, Kanap name1">'
          +'<h3 class="productName">'+element.name+'</h3>'
          +'<p class="productDescription">'+element.description+'</p>'
        +'</article>'
      +'</a>'
      items.innerHTML = kanap

      });
    let produits = document.querySelectorAll(".items");
      console.log(produits);
      produits.forEach(produit => {
     console.log(produit)
      

      })

      
    
    })
