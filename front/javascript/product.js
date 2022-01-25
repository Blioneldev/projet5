let params = new URL(document.location).searchParams;
let id = params.get("id");

const produitImg = document.querySelector("#img");
const produitName = document.querySelector("#title");
const produitDescription = document.querySelector("#description");
const produitPrix = document.querySelector("#price");

const produitCouleur = document.querySelector("#colors");



fetch(`http://localhost:3000/api/products/${id}`)
.then(reponse => reponse.json())
.then(reponse2 => 
    {
      console.log(reponse2)
      article = reponse2;
      produitName.innerHTML = article.name;
      produitImg.src = article.imageUrl;
      produitDescription.innerText = article.description;
      produitPrix.innerText = article.price
      produitCouleur.innerText = article.colors
    
    

    
    
    })
