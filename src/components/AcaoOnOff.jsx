import imagem from '../assets/AcaoOnOff.jpeg'

function AcaoOnOff() {
  return (
    <div>
      <h3>Controle On-Off (Liga/Desliga)</h3>
        <p>Se a variável está abaixo do setpoint, liga 100%. Se passou, desliga 0%. Para evitar que o atuador quebre de tanto ligar/desligar, usa-se uma "banda morta" (histerese). <br></br>
        A variável de processo (PV) nunca estabiliza; ela oscila continuamente ao redor do setpoint.</p>
        <img src={imagem} alt="Controle On-Off" />
    </div>
  );
}

export default AcaoOnOff; // Isso permite que o arquivo seja importado em outro lugar