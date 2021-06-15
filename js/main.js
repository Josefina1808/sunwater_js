/* 
FUNCIONES A REALIZAR
Agregar productos a lista de me gusta
Agregar productos al carrrito
Filtrado de producto por: categoría, palabras
Ordenar por: menor precio, mayor precio, 
Calcular subtotal sin Envío X
Calculador envío según zona X
Calcular Total de la compra x
Calcular IVA de la compra (los precios ya tienen IVA) X
PASOS EN LA COMPPRA
1° Agrega al carrito
2° Finalizar compra
3° Rellenar formulario con datos comprador 
5° Calcular envío (Sumar al total compra)
4° Pago
5° Confirmación*/

let cart = [];
let like = [];
// Necesito un condicional para agregar los productos a las lista, es decir, si like === true => lo agrega

//FILTRADO: dependiendo de lo seleccionado, es lo que se muestra

//Ordenar por...: debo comparar precio => ordernar de mayor a menor || de menor a mayor

function sumar() {
    let resultado = 0;
    for (let i = 0; i < lista.length; i++) {
        resultado += lista[i];
    }
    return resultado;
}

let subtotal = sumar(cart.product.price);

let envio = function envio() {
    switch (key) { //según lo que seleccione el usuario en el form es el tipo de caso
        case 'Interior':
            envio = 1000;
            break;
        case 'CABA':
            envio = 250;
            break;
        case 'Buenos Aires':
            envio = 600;
            break;
        case 'PickUp':
            envio = 0;
            break;
        default:
            alert('No seleccionó forma de envío')
            break;
    }
}

let total = subtotal + envio;

let iva = (total) => total * 0.21;

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
    addToCart = function () {
        cart.push(this.getBuy())
    }
}

const BOTELLA = new product(001, 'Botella Azul Para Solarizar', 1000, 100, 'Botellas')
const POSA_BOTELLA = new product(002, 'Posa Botella', 469, 50, 'Posa Botellas')
const PULSERA_CELESTE = new product(003, 'Pulsera Metratón', 439, 20, 'Pulseras')
const PULSERA_AZUL = new product(004, 'Pulsera Flor de la Vida', 439, 20, 'Pulseras')

