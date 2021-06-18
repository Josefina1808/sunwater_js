/* 
FUNCIONES A REALIZAR
X Agregar productos a lista de me gusta 
X Agregar productos al carrrito
Filtrado de producto por: categoría, palabras
Ordenar por: menor precio, mayor precio, 
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
    constructor(id, titule, price, stock, category) {
        this.id = id
        this.titule = titule
        this.price = price
        this.stock = stock
        this.category = category
    }
    getSubtotal = function (qty) {
        return this.price * qty
    }
    getBuy = function (qty) {
        return {
            product: this.titule,
            quantity: qty,
            amount: this.getSubtotal(qty),
        }
    }

    addToCart = function (qty) {
        cart.push(this.getBuy(qty))
    }

    addToLike = function () {
        like.push({
            product: this.titule,
            price: this.price,
        })
    }

    adToProducts = function () {
        return products.push({
            id: this.id,
            titule: this.titule,
            price: this.price,
            stock: this.stock,
            category: this.category,
        })
    }

    filtar = function (key) {
        
    }

}

const BOTELLA1 = new product(001, 'Botella Flor de la Vida', 1000, 100, 'Botellas')
const BOTELLA2 = new product(002, 'Botella Metatrón', 1000, 70, 'Botellas')
const POSA_BOTELLA = new product(003, 'Posa Botella', 469, 50, 'Posa Botellas')
const PULSERA_CELESTE = new product(004, 'Pulsera Metratón', 439, 20, 'Pulseras')
const PULSERA_AZUL = new product(005, 'Pulsera Flor de la Vida', 439, 20, 'Pulseras')

BOTELLA1.adToProducts()
BOTELLA2.adToProducts()
POSA_BOTELLA.adToProducts()
PULSERA_CELESTE.adToProducts()
PULSERA_AZUL.adToProducts()
console.log(products)

let subtotal = sumar(cart.map(e => e.amount));


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