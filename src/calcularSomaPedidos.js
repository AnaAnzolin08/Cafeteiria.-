export function calcularSomaPedidosCafe(listaDePedidos){
    let valorAcumulado = 0;

    listaDePedidos.forEach(pedido => {
        if(pedido.nome === 'café'){
            valorAcumulado = valorAcumulado + pedido.valor
        }
    });

    return valorAcumulado
}