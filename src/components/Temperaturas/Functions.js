export default function convert(entrada, saida, temp) {
    temp = parseFloat(temp)
    let celsius = [temp, temp + 273.15, temp * 1.8 + 32, (temp + 273.15) * 1.8];
    let kelvin = [temp - 273.15, temp, temp * 1.8 - 459.889, temp * 1.8];
    let fahreinheit = [
      (temp - 32) / 1.8,
      (temp + 459.67) / 1.8,
      temp,
      temp + 459.67,
    ];
    let rankine = [temp / 1.8 - 273.15, temp / 1.8, temp - 459.67, temp];
  
    let formulas = [celsius, kelvin, fahreinheit, rankine];
  
    let temp_aux = parseFloat(formulas[entrada][saida]);
  
    if (Number.isNaN(temp_aux)) {
      return null;
    } else {
      const rounded = Math.round(temp_aux * 100) / 100;
      return rounded.toString();
    }
  }