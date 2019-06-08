const products = [
    {
        name: "Tomato",
        price: 20,
        quantity: 2
    },
    {
        name: "Potato",
        price: 16,
        quantity: 4
    },
    {
        name: "Milk",
        price: 54,
        quantity: 2
    },
    {
        name: "Cereales",
        price: 32,
        quantity: 6
    },
    {
        name: "Bread",
        price: 100,
        quantity: 10
    }
];
const TAXES = 0.24;


const createCellWithText = (text) => {
    var cell = document.createElement("td");
    var cellText = document.createTextNode(text);
    cell.appendChild(cellText);
    return cell;
}
const drawTable = () => {
    // Gets products-list tbody element reference and store it on a variable.
    const tableBody = document.querySelector('#products-list tbody');
    products.forEach(product => {
        var row = document.createElement("tr");
        const nameCell = createCellWithText(product.name);
        row.appendChild(nameCell);
        const priceCell = createCellWithText(product.price);
        row.appendChild(priceCell);
        const quantityCell = createCellWithText(product.quantity);
        row.appendChild(quantityCell);
        const subtotalCell = createCellWithText(calculateSubTotal(product.price, product.quantity));
        row.appendChild(subtotalCell);
        const descuentoCell = createCellWithText(calculateDiscount(subtotalCell.innerHTML, product.quantity));
        row.appendChild(descuentoCell);
        const totalCell = createCellWithText(calcularTotal(subtotalCell.innerHTML, descuentoCell.innerHTML));
        row.appendChild(totalCell);
        tableBody.appendChild(row);
    });
}

const calculateSubTotal = (precio, cantidad) => precio * cantidad;

const calculateDiscount = (subTotal, cantidad) => {
    //     If buying more than 5 products, discount is 15% of subtotal.
    //     If subTotal is equal or greater than 100, Discount is 10% of subtotal.
    //     Any other case, discount is 5% of subtotal.
    //     Always use maximum discount possible.
    var valor = 0;

    if (cantidad != null) {
        if (cantidad > 4 && subTotal < 100) {
            valor = calcularAhorro(subTotal, 15);
        } else if (cantidad > 4 & subTotal > 99) {
            valor = (subTotal * 10) / 100;
        } else if (subTotal > 99) {
            valor = (subTotal * 10) / 100;
        } else {
            valor = calcularAhorro(subTotal, 5);
        }
    };
    return valor;
}

const calcularAhorro = (subTotal, descuento) => ((subTotal * descuento) / 100);

const calcularTotal = (subtotal, descuento) => {
    return (subtotal - descuento);
}



const drawTotals = () => {
    const subTotal = calculateSubTotal();
    const discount = calculateDiscount(subTotal);
    const taxes = 0;
    document.querySelector('.totals .subtotal').textContent = subTotal;
    document.querySelector('.totals .discount').textContent = discount;
    document.querySelector('.totals .taxes').textContent = TAXES;
    // and finally draw total.
}



const start = () => {
    drawTable();
    drawTotals();
}
start();

