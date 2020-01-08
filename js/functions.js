function renderPizzaList (data) {
    let HTML = '';

    for (let i = 0; i<data.length; i++) {
        let obj = data[i];

        HTML += `<div class="pizza-list"">
        <img class="pizza-photo" src="./img/Picos/${obj.pic}" alt="${obj.name}">
        <h4>${obj.name}</h4>
        <img class="pizza-type" src="./img/Picos/${obj.type}" alt="">
        <p>${obj.text}</p>
        <div class="pizza-price">${obj.price}</div>
        <div class="order-button">Pasirinkti</div>
        </div>`;
    }
    return document.getElementById('pizzas').innerHTML = HTML;
}


function renderSnacks (data) {
    let HTML = '';

    for (let i = 0; i<data.length; i++) {
        let obj = data[i];

        HTML += `<div class="snacks-list" id="snacks-list">
        <img class="snack-photo" src="./img/Snacks/${obj.pic}" alt="">
        <h4>${obj.name}</h4>
        <p>${obj.text}</p>
        <div class="snack-price">${obj.price}</div>
        <div class="order-button">Į krepšelį</div>
    </div>`
    }
    return document.getElementById('snacks').innerHTML = HTML;
}


function renderDesserts (data) {
    let HTML = '';

    for (let i = 0; i<data.length; i++) {
        let obj = data[i];

        HTML += ` <div class="deserts-list" id="deserts-list">
        <img class="desert-photo" src="./img/Deserts/${obj.pic}" alt="">
        <h4>${obj.name}</h4>
        <img class="pizza-type" src="./img/Picos/${obj.type}" alt="">
        <p>${obj.text}</p>
        <div class="desert-price">${obj.price}</div>
        <div class="order-button">Į krepšelį</div>
    </div>`
    }
    return document.getElementById('deserts').innerHTML = HTML;
}

function renderDrinks (data) {
    let HTML = '';

    for (let i = 0; i<data.length; i++) {
        let obj = data[i];

        HTML += `<div class="drinks-list" id="drinks-list">
        <img class="drinks-photo" src="./img/Drinks/${obj.pic}" alt="">
        <h4>${obj.name}</h4>
        <div class="drinks-price">${obj.price}</div>
        <div class="order-button">Į krepšelį</div>
    </div>`
    }
    return document.getElementById('drinks').innerHTML = HTML;
}
var myIndex = 0;


function carousel() {
 let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); 
}

// menu.onclick = function myFunction() {
//     let x = document.getElementById("links");

//     if (x.className === "links"){
//         x.className += " responsive"
//     } else {
//         x.className = "links"
//     }
// }