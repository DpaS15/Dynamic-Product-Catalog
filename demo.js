let demo = async () => {
    try {
        let response = await fetch('https://fakestoreapi.com/products/');
        let datas = await response.json();
        let displayDiv = document.getElementById("display");
        displayDiv.innerHTML = ""; 
        
        datas.forEach((item) => {
            let productCard = document.createElement("div");
            productCard.className = "card";
            productCard.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="product-img">
                <h2>${item.title}</h2>
                <p>${item.description.substring(0, 100)}...</p>
                <p><strong>Price: $${item.price}</strong></p>
            `;
            displayDiv.appendChild(productCard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
