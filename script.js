
var total = 0;

function adicionarItem() {

    var produto = document.getElementById("produto").value;
    var quantidade = Number(document.getElementById("quantidade").value);
    var valor = Number(document.getElementById("valor").value);

    if (produto == "" || quantidade <= 0 || valor <= 0) {
        alert("Preencha os campos corretamente!");
    }
    else {

        var subtotal = quantidade * valor;

        document.getElementById("listaItens").innerHTML +=
            "<tr>" +
            "<td>" + produto + "</td>" +
            "<td>" + quantidade + "</td>" +
            "<td>R$ " + valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "</td>" +
            "<td>R$ " + subtotal.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "</td>" +
            "</tr>";

        total = total + subtotal;

        calcularTotal();

        document.getElementById("produto").value = "";
        document.getElementById("quantidade").value = 1;
        document.getElementById("valor").value = "";
    }
}

function calcularTotal() {

    var desconto = Number(document.getElementById("desconto").value);

    if (desconto < 0) {
        desconto = 0;
    }

    if (desconto > 100) {
        desconto = 100;
    }

    var valorDesconto = total * desconto / 100;
    var totalFinal = total - valorDesconto;

    document.getElementById("subtotal").innerHTML =
        total.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById("valorDesconto").innerHTML =
        valorDesconto.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById("total").innerHTML =
        totalFinal.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
