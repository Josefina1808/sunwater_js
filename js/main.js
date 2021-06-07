/* 
FUNCIONES A REALIZAR
Agregar productos a lista de me gusta
Agregar productos al carrrito
Filtrado de producto por: categoría, palabras
Ordenar por: menor precio, mayor precio, 
Calcular subtotal sin Envío X
Calculador envío según zona 
Calcular Total de la compra x
Calcular IVA de la compra (los precios ya tienen IVA) X
PASOS EN LA COMPPRA
1° Agrega al carrito
2° Finalizar compra
3° Rellenar formulario con datos comprador 
5° Calcular envío (Sumar al total compra)
4° Pago
5° Confirmación*/

let productosCarrito = [];
let productoLikeado = [];
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

let subtotal = sumar(productosCarrito);

let envio = function envio() {
    if (condition) {
        //dependiendo de lo indicado en el formulario, según provincia se calcula el envío
    }
}

let total = subtotal + envio;

let iva = (total) => total*0.21;


