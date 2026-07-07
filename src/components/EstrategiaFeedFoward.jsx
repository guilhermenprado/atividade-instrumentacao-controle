import imagem from '../assets/EstrategiaFeedFoward.jpeg'
import imagem2 from '../assets/EstrategiaFeedFowardGrafico.jpeg'

function EstrategiaFeedForward() {
  return (
    <div>
      <h3>Controle Feedforward</h3>
        <p>Esta é uma estratégia avançada onde o controle Feedforward antecipa a perturbação e age antes que ela afete a saída, enquanto a malha Feedback clássica corrige qualquer erro residual.</p>
        <img src={imagem} alt="Diagrama de Blocos" />
        <p>Este gráfico ilustra a eficiência da ação antecipatória. Quando uma perturbação de carga ocorre (t=10), a malha Feedback Puro (curva vermelha) só reage após a PV se desviar, resultando em um grande erro. A combinação Feedforward+Feedback (curva azul) antecipa a perturbação e aplica uma correção imediata, minimizando drasticamente o desvio da PV. </p>
            <img src={imagem2} alt="Gráfico de Controle" />
    </div>
  );
}

export default EstrategiaFeedForward; // Isso permite que o arquivo seja importado em outro lugar