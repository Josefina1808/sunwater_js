/* 
FUNCIONES A REALIZAR
X Agregar productos a lista de me gusta 
X Agregar productos al carrrito
X Calcular subtotal sin Envío 
X Calculador envío según zona 
X Calcular Total de la compra 
X Calcular IVA de la compra (los precios ya tienen IVA) 
PASOS EN LA COMPPRA
1° Agrega al carrito
2° Finalizar compra
3° Rellenar formulario con datos comprador 
5° Calcular envío (Sumar al total compra)
4° Pago
5° Confirmación*/

/* Función suma que luego utulizo para calcular el subtotal*/
function sumar(lista) {
    let resultado = 0;
    for (let i = 0; i < lista.length; i++) {
        resultado += lista[i];
    }
    return resultado;
}


// LISTAS
let cart = [];
let products = [];


// OBJETO PRODUCTO con métodos 
class product {
    constructor(id, titule, price, stock, category, description, photo) {
        this.id = id
        this.titule = titule
        this.price = price
        this.stock = stock
        this.category = category
        this.description = description
        this.photo = photo
    }
    getSubtotal = function (qty) {
        return this.price * qty
    }
    getBuy = function (qty) {
        return {
            product: this.titule,
            product: this.id,
            quantity: qty,
            amount: this.getSubtotal(qty),
        }
    }

    addToCart = function (qty) {
        cart.push(this.getBuy(qty))
    }

    deleteProduct = (id) => {
        cart.filter(product => this.id !== id) //no se si funcione
    }

    addToProducts = function () {
        return products.push({
            id: this.id,
            titule: this.titule,
            price: this.price,
            stock: this.stock,
            category: this.category,
            description: this.description,
            photo: this.photo
        })
    }

}

const BOTELLA1 = new product(001, 'Botella Flor de la Vida', 1000, 100, 'Botellas', 'Botella para solarizar')
const BOTELLA2 = new product(002, 'Botella Metatrón', 1000, 70, 'Botellas', 'Botella para solarizar')
const POSA_BOTELLA_flor = new product(003, 'Posa Botella', 469, 50, 'Posa Botellas', 'Para solarización')
const POSA_BOTELLA_metatron = new product(004, 'Posa Botella', 469, 50, 'Posa Botellas', 'Para solarización')
const PULSERA_CELESTE = new product(005, 'Pulsera Metratón', 439, 20, 'Pulseras', 'Pulsera con energía positiva')
const PULSERA_AZUL = new product(006, 'Pulsera Flor de la Vida', 439, 20, 'Pulseras', 'Pulsera con energía positiva')
const VASO = new product(007, 'Vaso cristal azul', 969, 48, 'Vasos', 'Capacidad: 600cc')
const COPA = new product(08, 'Copa cristal azul', 1136, 36, 'Copas', 'Capacidad: 600cc')
const AGUA_500 = new product(09, 'Agua mineral Sola´n de Cabras', 533, 12, 'Agua', '500 ml - Botella de vidrio')
const AGUA_750 = new product(10, 'Agua mineral Sola´n de Cabras', 789, 12, 'Agua', '750 ml - Botella de vidrio')
const AGUA_1 = new product(11, 'Agua mineral Sola´n de Cabras', 996, 12, 'Agua', '1000 ml - Botella de vidrio')

BOTELLA1.addToProducts()
BOTELLA2.addToProducts()
POSA_BOTELLA_flor.addToProducts()
POSA_BOTELLA_metatron.addToProducts()
PULSERA_CELESTE.addToProducts()
PULSERA_AZUL.addToProducts()
VASO.addToProducts()
COPA.addToProducts()
AGUA_500.addToProducts()
AGUA_750.addToProducts()
AGUA_1.addToProducts()


/* CÁLCULO DE IMPORTE */
let subtotal = sumar(cart.map(e => e.price));

// RENDERIZADO PRODUCTOS
const renderProducts = array => {
    const productsSection = $('body main section div.row.productos');
    //si el parámetro es false o está vaío
    if (!array || array.length === 0) {
        productsSection.innerHTML = '<p>No hay productos :(</p>';
        return;
    }
    productsSection.innerHTML = '';
    let html = '';
    array.forEach(product => {
        html += `
        <div class="card__product producto-${product.id}"> 
                        <div class="card_product--titule_principal">
                            <div class="card__product--titule">${product.titule}</div>
                            <div class="card__product--desc">${product.description}</div>
                        </div> 
                        <div class="card__product--img">
                            <img src="../img/products/${product.id}.jpg" alt="">
                        </div>
                        <div class="card__product--cta">
                            <div class="price">$${product.price}</div>
                            <button class="btn btn-buy" value="${product.id}">AGREGAR</button>
                        </div>
         </div> 
        `;
        const addButton = document.querySelectorAll("body main section div.row.productos");
        addButton.forEach((product) => product.addEventListener("click", addToCart));
    });

    productsSection.html(html);
}


/* RENDERIZADO DEL CARRITO - funciones add y delete */
const addToCart = evento => {

    const idDelProductoABuscar = evento.target.value;

    const buscarProductoEnDB = products.find(
        (elemento) => elemento.id == idDelProductoABuscar
    );
    console.log(buscarProductoEnDB);
    cart.push(buscarProductoEnDB);
    //Acá termina la lógica para agregar al ARRAY del cart 
    ///////////////////////////////////////////////////////////
    //Aquí va lo lógica para mostrar en el HTML
    renderCart(cart)
}

const renderCart = array => {
    const cartSection = $("body main section div.cart");

    //si el parámetro es false o está vacio

    if (!array || array.length === 0) {

        cartSection.html("<p>Tu carrito está vacío</p>");

        return;

    }
    cartSection.innerHTML = '';
    let html = '';
    subtotal = sumar(cart.map(e => e.price));
    array.forEach(product => {

        html += `
        <div class="card__carrito producto-${product.id}"> 
        <div class="card__carrito--img">
                            <img src="../img/products/${product.id}.jpg" alt="">
                        </div>
                        <div class="card_carrito--titule_principal">
                            <div class="card__carrito--titule">${product.titule}</div>
                            <div class="card__carrito--desc">${product.description}</div>
                        </div> 
                        
                        <div class="card__carrito--cta">
                            <div class="price">$${product.price}</div>
                            <button class="btn btn-delete" onclick="deleteFromCart(${product.id})">X</button>
                        </div>
         </div>
         `;
    });

    cartSection.html(html).append(`
    <div class="cart__monto">    
       <p>Subtotal</p>
       <p><strong>$${subtotal}</strong></p>
    </div> 
    <button class="btn" id="btn-finalizar" onclick="alertCheckout()">FINALIZAR COMPRA</button>
    `);
}

const deleteFromCart = id => {
    const buscarProductoEnCarritoYBorrar = cart.filter(producto => producto.id !== id);
    cart = buscarProductoEnCarritoYBorrar;
    //Aquí termina la lógica de eliminar 
    ////////////
    //Ahora hay que renderizar
    renderCart(cart);
}

// ANIMACIÓN: se activa al hacer click en el ícono de carrito en el navbar 
$('header nav li a#cart-icon').on('click', (e) => {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $('#section__cart').offset().top
    }, 500);

});

//FINALIZAR COMPRA: muestra un cartel que te pregunta si deseeas finalizar la compra
function alertCheckout() {
    Swal.fire({
        title: '¿Quieres finalizar tu compra?',
        html: `Tu monto a pagar es $ ${subtotal}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, finalizar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Compra finalizada!',
                'Gracias por tu compra, nos contactaremos por WhatsApp para coordinar el pago y la entrega',
                'success'
            )
            //si la persona confirma entonces se vacia el carrito
            cart = [];
            renderCart(cart);
        }
    })

}


// BUSCADOR DE PRODUCTOS 
const formBuscador = document.querySelector('#formulario');
formBuscador.addEventListener('submit', buscarProductos);

function buscarProductos(e) {
    e.preventDefault();
    const inputBuscador = document.querySelector('#buscador').value;
    const inputFiltrado = inputBuscador.trim().toLowerCase();

    const resultado = products.filter(product => product.titule.toLowerCase().includes(inputFiltrado));

    renderProducts(resultado);

    formBuscador.reset();
}

/* Luego de cargar la ventana se activan las funciones*/
window.onload = () => {

    renderProducts(products);

    renderCart(cart);

    const btnBuy = $(".btn-buy");

    const btnDelete = $(".btn-delete");

};