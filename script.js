fetch("chocolatier.json")
    .then(rep => rep.json())
    .then(data => {
        console.log(data)
        creerCartes(data.clients);
        document.querySelector(".btnContainer").innerHTML = data.bouton; /*DEVIS GRATUIT*/
        document.querySelector(".sloganContainer").innerHTML = data.slogan;
        creerTruffe(data.truffe[0]); /*un 0 car c'est un object seul dans un tableau*/
        creerNosChocolats(data.produits);


    });

/*AVIS CLIENTS*/
function creerCartes(tableauDeproduit) {
    document.querySelector(".avisContainer").innerHTML = ""
    tableauDeproduit.forEach(commentaire => {
        document.querySelector(".avisContainer").innerHTML +=
            `
            <div class="avis large-4 medium-6 small-12">
                <div class="flex gap align-center">
                    <div class="avatar"></div>
                    <div>
                        <h4>${commentaire.nom}</h4>
                        <p>${commentaire.typePrestation}</p>
                        <div class="stars">★★★★★${commentaire.note}</div>
                    </div>
                </div>
                <p>${commentaire.commentaire}</p>
            </div>
            `;
    });
}

/*TRUFFE*/

function creerTruffe(truffe) {
    document.querySelector(".truffeCardContent").innerHTML = `
        <div class="m-auto mt-32 card large-4 medium-6 small-12">
            <img src="${truffe.image}" alt="">
            <div class="card-content">
                <h5>${truffe.titre}</h5>
                <p>${truffe.presentation}</p>
                <p class="price">${truffe.priceTruffe}</p>
            </div>
        </div>
    `;
}
//Section des choco
function creerNosChocolats(produits) {
    document.querySelector(".nosChocolatsProduits").innerHTML = ""
    produits.forEach(produit => {
        document.querySelector(".nosChocolatsProduits").innerHTML +=
        `
            <div class="carte-chocolat card large-4 medium-6 small-12" style="background-image: url('${produit.image}');">
                <button>Bestseller</button>
                <h4>${produit.titre}</h4>
                 <div class="hover-overlay">
                    <h4>${produit.titre}</h4>
                    <p>${produit.presentation}</p>
                    <a href="">Voir plus</a>
                </div>
            </div>
        `;
    });
}

/*bouton découvrir la nouvelle collection qui dirige vers la section des chocolats*/
document.querySelector(".btnDecouvrir").addEventListener("click", () => {
    document.querySelector(".nosChocolats").scrollIntoView()
})

/* pop up d'alerte pour le devis gratuit*/
document.querySelector(".btnContainer").addEventListener("click", () => {
    alert("Nous vous recontacterons rapidement !")
})

//POUR MA SECTION HOVER DE MES CARTES
/*document.querySelector(".nosChocolatsProduits").addEventListener("click", () => {
    // afficher les détails
})*/