import { useEffect, useState } from 'react';
import style from './Header.module.css';

const Header = () => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('')

  const calculaImc = () => {
    const imcValue = peso / (altura * altura);
    setImc(imcValue.toFixed(1))
  };

  useEffect(() => {
    if (imc < 18.5) {
      setClassificacao('Magreza')
    } else if (imc >= 18.5 && imc <= 24.9) {
      setClassificacao('Normal')
    } else if (imc >= 25.0 && imc <= 29.9) {
      setClassificacao('Sobrepeso')
    } else if (imc >= 30.0 && imc <= 39.9) {
      setClassificacao('Obesidade')
    } else {
      setClassificacao('Obesidade Grave')
    }
  }, [imc])

  const handleSubmit = (e) => {
    e.preventDefault();
    calculaImc();
  };

  return (
    <header>
      <h1>Cálculo do IMC</h1>
      <p>
        MC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
      </p>
      Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. <b>Importante: use pontos como separadores.</b>


      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="altura">Altura (m):</label>
          <input
            onChange={(e) => setAltura(e.target.value)}
            id="altura"
            type="text"
            placeholder='1.70'
          />
        </div>
        <div>
          <label htmlFor="peso">Peso (kg):</label>
          <input
            onChange={(e) => setPeso(e.target.value)}
            id="peso"
            type="text"
            placeholder='70'
          />
        </div>
        <button type="submit">Calcular</button>
        {imc !== null && <span>IMC: {imc} - {classificacao}</span>}
      </form>
    </header>
  );
};

export default Header;
