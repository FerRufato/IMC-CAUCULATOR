import React, { useState } from 'react';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);

  
  const calcularIMC = (e) => {
    e.preventDefault();
    const alturaMetros = parseFloat(altura) / 100; 
    const imc = parseFloat(peso) / (alturaMetros * alturaMetros); 
    let classificacao = '';



    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }

    setResultado({ imc: imc.toFixed(2), classificacao });
  };
  

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <div>
          <label>Altura (cm):</label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Peso (kg):</label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>

      {resultado && (
        <div>
          <h2>Resultado</h2>
          <p>Seu IMC é: {resultado.imc}</p>
          <p>Classificação: {resultado.classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
