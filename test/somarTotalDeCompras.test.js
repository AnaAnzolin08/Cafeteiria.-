import { somarTotalDeCompras } from '../src/somarTotalDeCompras.js';
import assert from 'node:assert';

const list = (carrinho, esperado) =>
  assert.strictEqual(somarTotalDeCompras(carrinho), esperado)

describe('Calcular valor Total das compras', () => {
  it('CT00 - Deve retornar valor total igual a 32.50', () => {
    list([{ nome: 'Arroz', preco: 22 }, { nome: 'Feijao', preco: 3.5 }, { nome: 'Macarrao', preco: 7 }], 32.5)
  })

  it('CT01 - Deve retornar valor total igual a 0', () => {
    list([], 0)
  })

  it('CT02 - Deve retornar valor total igual a 100', () => {
    list([{ nome: 'Arroz', preco: 50 }, { nome: 'Feijao', preco: 50 }], 100)
  })

  it('CT03 - Deve retornar valor total igual a 180', () => {
    list([{ nome: 'Arroz', preco: 80 }, { nome: 'Feijao', preco: 100 }], 180)
  })

  it('CT04 - Deve retornar valor total igual a 270 com desconto de 10%', () => {
    list([{ nome: 'Arroz', preco: 150 }, { nome: 'Feijao', preco: 150 }], 270)
  })
})