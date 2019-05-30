const products = [
    {
        name: "Tomato",
        price: 19,
        quantity: 2
    },
    {
        name: "Potato",
        price: 16,
        quantity: 4
    },
    {
        name: "Milk",
        price: 32,
        quantity: 2
    },
    {
        name: "Cereales",
        price: 32,
        quantity: 6
    },
    {
        name: "Bread",
        price: 12,
        quantity: 10
    }
];
const TAXES = 0.24;

//  const createCellWithText = (text) => {
//     var cell = document.createElement("td");
//     var cellText = document.createTextNode(text);
//     cell.appendChild(cellText);
//     return cell;
//  } 
// const drawTable = () => {
//     // Gets products-list tbody element reference and store it on a variable.
//     const tableBody = document.querySelector('#products-list tbody');

//     products.forEach(product => {
//         var row = document.createElement("tr");
//         const nameCell = createCellWithText(product.name);
//         row.appendChild(nameCell);
//         const priceCell = createCellWithText(product.price);
//         row.appendChild(priceCell);
//         const quantityCell = createCellWithText(product.quantity);
//         row.appendChild(quantityCell);
//         const subtotalCell = createCellWithText(calculateSubTotal(product.price, product.quantity));
//         row.appendChild(subtotalCell);
//         const descuentoCell = createCellWithText(calculateDiscount(product.price, product.quantity));
//         row.appendChild(descuentoCell);
//         tableBody.appendChild(row);
//     });
// }  

const calculateSubTotal = (precio, cantidad) => precio * cantidad;

const calculateDiscount = function (precio, cantidad) {

    var valor = 0;
    console.log("Cantidad antes de entrar al Switch " + cantidad);

    switch (cantidad) {
        case (cantidad < 1000):
            console.log("cantidad>=10 mayor que " + cantidad);
            break;
        default:
            console.log("default");
            break;
    }

    return 0;
}
const drawTotals = () => {
    const subTotal = calculateSubTotal();
    const discount = calculateDiscount(subTotal);
    const taxes = 0;
    document.querySelector('.totals .subtotal').textContent = subTotal;
    document.querySelector('.totals .discount').textContent = discount;
    document.querySelector('.totals .taxes').textContent = taxes;
    // and finally draw total.
}
// const start = () => {
//     drawTable();
//     drawTotals();
// }
// start();       
 