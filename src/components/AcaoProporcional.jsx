import imagem from '../assets/AcaoControle.jpg'

function AcaoProporcional() {
  return (
    <div>
      <h3>Controle Proporcional</h3>
        <p>A saída do controlador é proporcional ao tamanho do erro atual. <br></br>
        Quanto mais perto do setpoint, menor a força do controlador. Por isso, ele estabiliza rápido, mas sofre de um erro residual permanente (Offset). Ele não consegue zerar o erro sozinho se houver carga no sistema.</p>
        <img src={imagem} alt="Controle PID" />
    </div>
  );
}

export default AcaoProporcional; // Isso permite que o arquivo seja importado em outro lugar