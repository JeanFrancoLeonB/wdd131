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
        { id: 'fc-1888', name: "flux capacitor", avgRating: 4.5 },
        { id: 'fc-2050', name: "power laces", avgRating: 4.7 },
        { id: 'fs-1987', name: "time circuits", avgRating: 3.5 },
        { id: 'ac-2000', name: "low voltage reactor", avgRating: 3.9 },
        { id: 'jj-1969', name: "warp equalizer", avgRating: 5.0 }
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
                templeName: "Madrid Spain",
                location: "Madrid, Spain",
                dedicated: "1999, March, 19",
                area: 57340,
                imageUrl: 
                "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dbdc66d579f44971beccc7549721badc_9366/Camiseta_Prepartido_Juventus_Azul_IW0462_HM1.jpg"
            },
            
            {
                templeName: "Aba Nigeria",
                location: "Aba, Nigeria",
                dedicated: "2005, August, 7",
                area: 11500,
                imageUrl:
                    "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/aeec15ccd99c41d5a1edaf3a00cadb65_9366/polo-adicolor-classics-3-tiras.jpg"
            },
            
            {
                templeName: "Payson Utah",
                location: "Payson, Utah, United States",
                dedicated: "2015, June, 7",
                area: 96630,
                imageUrl:
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/78b62417f1e042aeb25e3353d278de3b_9366/Camiseta_local_Real_Madrid_24-25_Authentic_Blanco_IX8095_HM1.jpg"
            },
            {
                templeName: "Washington D.C.",
                location: "Maryland, United States",
                dedicated: "1974, November, 19",
                area: 156558,
                imageUrl:
                    "https://assets.adidas.com/images/w_600,f_auto,q_auto/390216c9ba9840be89c1c3e361fca83e_9366/Camiseta_Uniforme_Local_Juventus_23-24_Multicolor_HR8256_HM1.jpg"
            },
            
            {
                templeName: "Lima Perú",
                location: "Lima, Perú",
                dedicated: "1986, January, 10",
                area: 9600,
                imageUrl:
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/51118f3b7936432396947422f55b1ca0_9366/Casaca_Deportiva_Manchester_United_Tejida_Multicolor_IP9190_21_model.jpg"
            },
            
            {
                templeName: "Sao Paulo Brazil",
                location: "Sao Paulo, Brazil",
                dedicated: "1978, Octubre, 30",
                area: 165167,
                imageUrl: 
                "https://assets.adidas.com/images/w_600,f_auto,q_auto/5f052afb59fc4bc39a7553287991f171_9366/Chimpunes_Copa_Pure_2_Elite_KT_Terreno_Firme_Beige_IF5443_HM1.jpg"
                    
            },
            
            {
                templeName: "Mexico City Mexico",
                location: "Mexico City, Mexico",
                dedicated: "1983, December, 2",
                area: 116642,
                imageUrl:
                    "https://assets.adidas.com/images/w_600,f_auto,q_auto/a195f24a93c3441cb6c9f3780af09c83_9366/Camiseta_Local_Manchester_United_23-24_Rojo_IP1726_HM30.jpg"
            },
            {
                templeName: "Yigo Guam",
                location: "Yigo, Guam",
                dedicated: "2020, May, 2",
                area: 6861,
                imageUrl:
                    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5447c5c1f5ff45d3905ef3b9cffde443_9366/Casaca_Deportiva_Juventus_Tejida_Plomo_IM9865_21_model.jpg"
            },
            
            {
                templeName: "Salt Lake City",
                location: "Salt Lake City, Utah, United States",
                dedicated: "1893, April, 6",
                area: 253015,
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
                location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
                dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
                area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
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
      