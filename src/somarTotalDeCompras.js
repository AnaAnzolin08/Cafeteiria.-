export function somarTotalDeCompras(carrinho) {
  let total = 0;

  for (const item of carrinho) {
    total += Number(item.preco) || 0
  }


  if (total >= 300) {
    total -= total * 0.1;
  }

  return Number(total.toFixed(2))
}

export const somarTotalDeComprasCarrinho = somarTotalDeCompras;