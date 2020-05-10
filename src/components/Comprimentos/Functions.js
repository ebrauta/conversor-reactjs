import data from './../Database/db.json';

export default function convert(entrada, saida, comp) {
    comp = parseFloat(comp)
    if(comp === 0) {
      return 0
    }
    if(comp < 0){
      return "Não existe distância negativa!"
    }
    const escalas = data.lenghts;
    var valores = escalas.map((object, index) => {
      return escalas[index].unit
    })
    /* Terminar a função de transformar */
    return valores
  
  }