
let kmDistancia, precoGasolina, kmXLitro;
function cotacaoViagem(kmDistancia, precoGasolina, kmXLitro) {
  let valorViagem = ((kmDistancia / kmXLitro) * precoGasolina).toFixed(2);
  return valorViagem;
}

console.log(cotacaoViagem(100, 5.79, 10));

