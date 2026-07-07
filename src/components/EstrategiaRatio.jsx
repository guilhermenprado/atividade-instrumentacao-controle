import imagem from '../assets/EstrategiaRatio.jpg'
import imagem2 from '../assets/EstrategiaRatioGrafico.jpeg'

function EstrategiaRatio() {
  return (
    <div>
      <h3>Controle em Ratio</h3>
        <p>Este diagrama mostra o fluxo da Vazão Selvagem (Livre), que é medida, e o Setpoint da Vazão Controlada, que é calculado multiplicando-se a Vazão Selvagem pelo "Fator de Razão" desejado. O controlador de Razão ajusta a Válvula da Vazão Controlada para manter a proporção constante.</p>
        <img src={imagem} alt="Diagrama de Blocos" />
        <p>Este gráfico mostra como o Setpoint da Vazão Controlada (Vazão B) é definido diretamente pela medição da Vazão Selvagem (Vazão A). As linhas diagonais representam diferentes fatores de razão. O sistema deve seguir a linha do fator Ratio Setpoint (Rsp) escolhido, mantendo a proporção B/A constante.</p>
            <img src={imagem2} alt="Gráfico de Controle" />
    </div>
  );
}

export default EstrategiaRatio; // Isso permite que o arquivo seja importado em outro lugar