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
function sumar(lista) {
    let resultado = 0;
    for (let i = 0; i < lista.length; i++) {
        resultado += lista[i];
    }
    return resultado;
}

let cart = [];
let like = [];
let products = [];

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

    addToLike = function () {
        like.push({
            product: this.titule,
            price: this.price,
        })
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

BOTELLA1.addToProducts()
BOTELLA2.addToProducts()
POSA_BOTELLA_flor.addToProducts()
POSA_BOTELLA_metatron.addToProducts()
PULSERA_CELESTE.addToProducts()
PULSERA_AZUL.addToProducts()


/* CÁLCULO DE IMPORTES */
let subtotal = sumar(cart.map(e => e.price));

let envio = function calculadorEnvio(key) {
    switch (key) { //según lo que seleccione el usuario en el form es el tipo de caso
        case 'Interior':
            return 400;

        case 'CABA':
            return 150;

        case 'Buenos Aires':
            return 300;

        case 'PickUp':
            return 0;

        default:
            return alert('No seleccionó forma de envío')
    }
}

let total = subtotal + envio;

let iva = (total) => total * 0.21;

/* RENDERIZANDO PRODUCTOS Y CARRITO */
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
                            <div class="card__product--desc">${product.description}r</div>
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
    });

    productsSection.html(html);
}

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
    const cartSection = $('body main section div.cart')
    //si el parámetro es false o está vacio
    if (!array || array.length === 0) {
        cartSection.innerHTML = '<p>Tu carrito está vacío</p>';
        return;
    }
    cartSection.innerHTML = '';
    let html = '';

    array.forEach(product => {

        html += `
        <div class="card__carrito producto-${product.id}"> 
        <div class="card__carrito--img">
                            <img src="../img/products/${product.id}.jpg" alt="">
                        </div>
                        <div class="card_carrito--titule_principal">
                            <div class="card__carrito--titule">${product.titule}</div>
                            <div class="card__carrito--desc">${product.description}r</div>
                        </div> 
                        
                        <div class="card__carrito--cta">
                            <div class="price">$${product.price}</div>
                            <button class="btn btn-delete" onclick="deleteFromCart(${product.id})">X</button>
                        </div>
         </div> 
         `;
    });

    cartSection.html(html);
}

const deleteFromCart = id => {
    const buscarProductoEnCarritoYBorrar = cart.filter(producto => producto.id !== id);
    cart = buscarProductoEnCarritoYBorrar;
    //Aquí termina la lógica de eliminar 
    ////////////
    //Ahora hay que renderizar
    renderCart(cart);
}

/* BUSCADOR DE PRODUCTOS */
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

window.onload = () => {

    renderProducts(products);

    renderCart(cart);

    const btnBuy = $(".btn-buy");

    const btnDelete = $(".btn-delete");

    btnBuy.each(function () {

        $(this).on("click", function (e) {
            addToCart(e);
        });

    });

};

/* Nuevos erroes
-Cuando queda un elemento en el carrito, al clicker no se borra el html. Pero si se elimina del array
-Al filtrar los productos, no me deja agregarlos al carrito cuando el buscador fue usado
 */