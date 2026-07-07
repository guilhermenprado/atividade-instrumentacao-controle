import imagem from '../assets/EstrategiaCascata.jpg'
import imagem2 from '../assets/EstrategiaCascataGrafico.jpg'

function EstrategiaCascata() {
  return (
    <div>
      <h3>Controle em Cascata</h3>
        <p>Nesta estratégia, temos duas malhas fechadas. A malha interna (Escrava) é muito rápida e corrige perturbações antes que elas afetem a variável principal, cujo setpoint é definido pela malha externa (Mestre).</p>
        <img src={imagem} alt="Diagrama de Blocos" />
        <p>Este gráfico compara a rejeição de uma perturbação rápida na malha interna (utilidade) entre um controle de Malha Simples (curva vermelha) e um controle em Cascata (curva azul). O controle em Cascata corrige a perturbação muito mais rapidamente, com menos oscilação e menor desvio da referência, demonstrando sua superioridade em processos complexos. </p>
            <img src={imagem2} alt="Gráfico de Controle" />
    </div>
  );
}

export default EstrategiaCascata; // Isso permite que o arquivo seja importado em outro lugar