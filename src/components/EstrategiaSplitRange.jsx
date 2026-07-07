import imagem from '../assets/EstrategiaSplitRange.jpg'
import imagem2 from '../assets/EstrategiaSplitRangeGrafico.jpeg'

function EstrategiaSplitRange() {
  return (
    <div>
      <h3>Controle em Split Range</h3>
        <p>Este diagrama mostra um único Controlador Automático cuja saída de sinal é dividida em duas faixas para comandar dois Atuadores separados (neste caso, Resfriamento e Aquecimento), garantindo que operem de forma sequencial e não simultânea.</p>
        <img src={imagem} alt="Diagrama de Blocos" />
        <p>Este gráfico mostra como a saída de um único controlador (de 0% a 100%) é dividida para comandar dois atuadores diferentes.
<br></br>Zona 1 (0-50%): Apenas a Válvula de Resfriamento (curva azul) atua, fechando à medida que a saída do controlador aumenta.
<br></br>Zona 2 (50-100%): Apenas a Válvula de Aquecimento (curva vermelha) atua, abrindo à medida que a saída aumenta.
Isso garante que aquecimento e resfriamento nunca funcionem ao mesmo tempo, economizando energia.</p>
            <img src={imagem2} alt="Gráfico de Controle" />
    </div>
  );
}

export default EstrategiaSplitRange; // Isso permite que o arquivo seja importado em outro lugar