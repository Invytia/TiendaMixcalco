const productos = [
    { id: 1, nombre: "Pantalon 1", precio: 205, mayoreo: 195 },
    { id: 2, nombre: "Pantalon 2", precio: 250 },
    { id: 3, nombre: "Pantalon 3 (T. Extras)", precio: 235 },
    { id: 4, nombre: "Pantalon Capri", precio: 190 },
    { id: 5, nombre: "Pantalon Capri (T. Extras)", precio: 200 },
    { id: 6, nombre: "Blusa 1", precio: 130 },
    { id: 7, nombre: "Blusa 2", precio: 220, mayoreo: 200 },
    { id: 8, nombre: "Blusa 3", precio: 280, mayoreo: 270 },
    { id: 9, nombre: "Abrigo Corto", precio: 1050 },
    { id: 10, nombre: "Abrigo Largo", precio: 1150 },
    { id: 11, nombre: "Falda", precio: 200 },
    { id: 12, nombre: "Vestido 1 (c/ saco)", precio: 550 },
    { id: 13, nombre: "Vestido 2", precio: 600 }
];

let carrito = [];

function init() {
    const menu = document.getElementById('product-menu');
    productos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h4>${p.nombre}</h4>
            <span class="price-tag">$${p.precio}</span>
            ${p.mayoreo ? `<button onclick="addToCart(${p.id}, true)">Mayoreo ($${p.mayoreo})</button>` : ''}
            <button onclick="addToCart(${p.id}, false)" style="margin-top:5px">Menudeo</button>
        `;
        menu.appendChild(card);
    });
}

function addToCart(id, esMayoreo) {
    const p = productos.find(item => item.id === id);
    const precioFinal = esMayoreo ? p.mayoreo : p.precio;
    
    carrito.push({ nombre: p.nombre + (esMayoreo ? " (M)" : ""), precio: precioFinal });
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const totalDisp = document.getElementById('total-amount');
    container.innerHTML = '';
    
    let total = 0;
    carrito.forEach((item, index) => {
        total += item.precio;
        container.innerHTML += `
            <div class="cart-item">
                <span>${item.nombre}</span>
                <span>$${item.precio}</span>
            </div>
        `;
    });
    
    totalDisp.innerText = `$${total.toFixed(2)}`;
}

function checkout() {
    if(carrito.length === 0) return;
    alert("Venta registrada con éxito");
    carrito = [];
    renderCart();
}

init();
