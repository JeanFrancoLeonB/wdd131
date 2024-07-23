const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

document.querySelector("#lastupdated").textContent = `Last Modification: ${document.lastModified}`;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


document.addEventListener('DOMContentLoaded', () => {
    const pnameselect = document.getElementById('pname');
    const products = [
        { id: 'fc-1888', name: "T- Shirt", avgRating: 4.5 },
        { id: 'fc-2050', name: "Jacket", avgRating: 4.7 },
        { id: 'fs-1987', name: "Sweatsuit", avgRating: 3.5 },
        { id: 'ac-2000', name: "Cleats", avgRating: 3.9 },
        { id: 'jj-1969', name: "Sneackers", avgRating: 5.0 }
    ];

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        pnameselect.appendChild(option);
    });

    // Review count logic for review.html
    if (window.location.pathname.endsWith('review.html')) {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);}});

        const temples = [
           
               {
                templeName: "Juventus, Alternative T-Shirt",
                location: " FL0462",
                dedicated: "Juventus",
                area: 40,
                imageUrl: 
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dbdc66d579f44971beccc7549721badc_9366/Camiseta_Prepartido_Juventus_Azul_IW0462_HM1.jpg"
            },
            
            {
                templeName: "Peru, Casual T-Shirt",
                location: "FL0463",
                dedicated: "Peru",
                area: 35,
                imageUrl:
                    "https://assets.adidas.com/images/w_600,f_auto,q_auto/d09da71865df4f1db92075f1a9319d9b_9366/Polo_adicolor_Seleccion_Peruana_Blanco_IU2741_HM1.jpg"
            },
            
            {
                templeName: "Real Madrid, T-shirt",
                location: "FL0464",
                dedicated: "Real Madrid",
                area: 70,
                imageUrl:
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/78b62417f1e042aeb25e3353d278de3b_9366/Camiseta_local_Real_Madrid_24-25_Authentic_Blanco_IX8095_HM1.jpg"
            },
            {
                templeName: "Juventus, T-Shirt",
                location: "FL0465",
                dedicated: "Juventus",
                area: 70,
                imageUrl:
                    "https://assets.adidas.com/images/w_600,f_auto,q_auto/390216c9ba9840be89c1c3e361fca83e_9366/Camiseta_Uniforme_Local_Juventus_23-24_Multicolor_HR8256_HM1.jpg"
            },
            
            {
                templeName: "Manchester United, Sweatsuit",
                location: "FL0466",
                dedicated: "Manchester United",
                area: 100,
                imageUrl:
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/51118f3b7936432396947422f55b1ca0_9366/Casaca_Deportiva_Manchester_United_Tejida_Multicolor_IP9190_21_model.jpg"
            },
            
            {
                templeName: "Predator Adiddas Cleats ",
                location: "FL0467",
                dedicated: "Adiddas",
                area: 80,
                imageUrl: 
                "https://assets.adidas.com/images/w_600,f_auto,q_auto/5f052afb59fc4bc39a7553287991f171_9366/Chimpunes_Copa_Pure_2_Elite_KT_Terreno_Firme_Beige_IF5443_HM1.jpg"
                    
            },
            
            {
                templeName: "Manchester United, T-shirt",
                location: "FL0468",
                dedicated: "Manchester United",
                area: 70,
                imageUrl:
                    "https://assets.adidas.com/images/w_600,f_auto,q_auto/a195f24a93c3441cb6c9f3780af09c83_9366/Camiseta_Local_Manchester_United_23-24_Rojo_IP1726_HM30.jpg"
            },
            {
                templeName: "Juventus, Sweatsuit",
                location: "FL0469",
                dedicated: "Juventus",
                area: 100,
                imageUrl:
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5447c5c1f5ff45d3905ef3b9cffde443_9366/Casaca_Deportiva_Juventus_Tejida_Plomo_IM9865_21_model.jpg"
            },
            
            {
                templeName: "Peru, Casual Jacket",
                location: "FL0460",
                dedicated: "Peru",
                area: 80,
                imageUrl: 
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6865f53327ff4ec4b80efdb1406e2ec8_9366/Casaca_adicolor_Seleccion_Peruana_Blanco_IU2739_HM1.jpg"
            },
       
        ];
       
        
        createTempleCard(temples);
     
        
        
        
        function createTempleCard(filteredTemples) {
            document.querySelector(".container").innerHTML = "";
            filteredTemples.forEach(temple => {
                let card = document.createElement("section");
                let name = document.createElement("h3");
                let location = document.createElement("p");
                let dedication = document.createElement("p");
                let area = document.createElement("p");
                let img = document.createElement("img");
        
                name.textContent = temple.templeName;
                location.innerHTML = `<span class="label">Code:</span> ${temple.location}`;
                dedication.innerHTML = `<span class="label">Soccer Team:</span> ${temple.dedicated}`;
                area.innerHTML = `<span class="label">Price:</span> $  ${temple.area} ` ;
                img.setAttribute("src", temple.imageUrl);
                img.setAttribute("alt", "${temple.templeName} Temple");
                img.setAttribute("loading", "lazy");
                card.appendChild(name);
                card.appendChild(location);
                card.appendChild(dedication);
                card.appendChild(area);
                card.appendChild(img);
                document.querySelector(".container").appendChild(card);
            });
        }
      