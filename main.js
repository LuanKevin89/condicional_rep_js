
var campoCompra = document.getElementById("compra");

function calcularDesconto() {
    var compra = Number(campoCompra.value);
    var desconto = 0;

    if (compra > 500) {
        desconto = compra * 0.1;
    }
    else if (compra > 100) {
        desconto = compra * 0.05;
    }
    else {
        desconto = 0;
    }

    var total = compra - desconto;

    console.log("Valor da compra: R$ " + compra.toFixed(2));
    console.log("Valor do desconto: R$ " + desconto.toFixed(2));
    console.log("Valor da compra com desconto: R$ " + total.toFixed(2));

    document.getElementById("valorCompra").innerHTML =
        "R$ " + compra.toFixed(2);

    document.getElementById("valorDesconto").innerHTML =
        "R$ " + desconto.toFixed(2);

    document.getElementById("valorFinal").innerHTML =
        "R$ " + total.toFixed(2);
}
