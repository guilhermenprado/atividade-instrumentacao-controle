import imagem from '../assets/AcaoControle.jpg'

function AcaoDerivativo() {
  return (
    <div>
      <h3>Controle Proporcional + Integral + Derivativo</h3>
        <p> Junta o P (erro atual), o I (erro acumulado no passado) e adiciona o D (Derivativo). O derivativo olha para a velocidade com que o erro está mudando. Ele funciona como um "freio" antecipatório. <br></br>
        É o controle ideal. Ele chega ao setpoint de forma extremamente rápida, com o mínimo de oscilação e estabilidade perfeita.</p>
        <img src={imagem} alt="Controle PID" />
    </div>
  );
}

export default AcaoDerivativo; // Isso permite que o arquivo seja importado em outro lugar