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