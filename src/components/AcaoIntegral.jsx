import imagem from '../assets/AcaoControle.jpg'

function AcaoIntegral() {
  return (
    <div>
      <h3>Controle Proporcional + Integral</h3>
        <p> A parte Proporcional reage ao erro atual, e a Integral vai acumulando o erro ao longo do tempo. <br></br>
        A ação integral força o sistema a eliminar o Offset, garantindo que a variável chegue exatamente ao setpoint. O preço disso é que o sistema pode oscilar um pouco antes de estabilizar (overshoot).</p>
        <img src={imagem} alt="Controle PID" />
    </div>
  );
}

export default AcaoIntegral; // Isso permite que o arquivo seja importado em outro lugar