async function fetchProducts() {
    try {
        // Appel au backend
        const response = await fetch("http://localhost:3000/product");
        const result = await response.json();

        // Accéder au tableau imbriqué dans "data"
        const products = result.data[0]; // Prendre le premier tableau dans "data"

        // Trouver une section ou conteneur dans le HTML pour afficher les produits
        const productContainer = document.querySelector(".products");

        if (!productContainer) {
            console.warn("Conteneur .products introuvable !");
            return;
        }

        // Ajouter les produits dans le conteneur
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");

            // Contenu HTML pour chaque produit
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.Description}</p>
                <p>Prix : ${product.price}€</p>
            `;
            productContainer.appendChild(productElement);
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);



    }
}

// Charger les produits une fois la page chargée
fetchProducts()


async function carousel() {
     
    
   
    
}