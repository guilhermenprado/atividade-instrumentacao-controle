import imagem from '../assets/EstrategiaOverride.jpg'
import imagem2 from '../assets/EstrategiaOverrideGrafico.jpg'

function EstrategiaOverride() {
  return (
    <div>
      <h3>Controle em Override</h3>
        <p>Este diagrama ilustra uma ação de segurança. Dois controladores competitivos ("Vazão Vencedora" e "Pressão Vencedora"), cujos sinais de saída vão para um Seletor (de Alta ou Baixa). O seletor escolhe quem assume o controle com base em limites de segurança, protegendo o sistema.</p>
        <img src={imagem} alt="Diagrama de Blocos" />
        <p>Este gráfico ilustra uma ação de segurança. Duas PVs (Vazão e Pressão) são monitoradas. Em condições normais (primeira metade do gráfico), o controlador de Vazão é o "Vencedor" e manipula a saída para seguir o Setpoint de Vazão. Se a Pressão aumentar e atingir o Limite de Segurança (segunda metade), o seletor troca, e o controlador de Pressão torna-se o "Vencedor", reduzindo a saída para proteger o sistema. </p>
            <img src={imagem2} alt="Gráfico de Controle" />
    </div>
  );
}

export default EstrategiaOverride; // Isso permite que o arquivo seja importado em outro lugar