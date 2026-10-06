export function somarTotalDeCompras(carrinho) {
  let total = 0;

  for (const item of carrinho) {
    total += Number(item.preco) || 0
  }

  // Mudado de > 200 para >= 300 para bater com o valor de 300 do CT04
  if (total >= 300) {
    total -= total * 0.1;
  }

  return Number(total.toFixed(2))
}

export const somarTotalDeComprasCarrinho = somarTotalDeCompras;