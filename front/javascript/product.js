let params = new URL(document.location).searchParams;
let id = params.get("id");

const produitImg = document.querySelector(".item__img");
const produitNom = document.querySelector("#title");
const produitDescription = document.querySelector("#description");
const produitPrix = document.querySelector("#price");
const produitCouleur = document.querySelector("#colors");



fetch(`http://localhost:3000/api/products/${id}`)
.then(reponse => reponse.json())
.then(reponse2 => 
    {
      console.log(reponse2)
      article = reponse2;
      produitNom.innerHTML = article.name;
      produitImg.innerHTML = '<img src="'+article.imageUrl+'" alt="Photographie d\'un canapé">';
      produitDescription.innerHTML = article.description;
      produitPrix.innerHTML = article.price
     
      let produitCouleur = document.getElementById("colors");
      for (let i = 0; i < article.colors.length; i++) {
        console.log(i)
        let option = document.createElement("option");
        option.innerHTML = article.colors[i];
        produitCouleur.appendChild(option);
        console.log(option)

      }
    
    })
