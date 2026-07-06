import { useState } from 'react'
import MalhaAberta from './components/EstruturaMalhaAberta.jsx' // Importa o componente Perfil do arquivo controle1.jsx;
import MalhaFechada from './components/EstruturaMalhaFechada.jsx' // Importa o componente Configuracoes do arquivo controle2.jsx;
import AcaoOnOff from './components/AcaoOnOff.jsx' // Importa o componente Ajuda do arquivo controle3.jsx;
import AcaoProporcional from './components/AcaoProporcional.jsx' // Importa o componente Ajuda do arquivo controle4.jsx;
import AcaoIntegral from './components/AcaoIntegral.jsx' // Importa o componente Ajuda do arquivo controle5.jsx;
import AcaoDerivativo from './components/AcaoDerivativo.jsx' // Importa o componente Ajuda do arquivo controle6.jsx;
import EstrategiaFeedFoward from './components/EstrategiaFeedFoward.jsx' // Importa o componente Ajuda do arquivo controle7.jsx;
import EstrategiaCascata from './components/EstrategiaCascata.jsx' // Importa o componente Ajuda do arquivo controle8.jsx;
import EstrategiaRatio from './components/EstrategiaRatio.jsx' // Importa o componente Ajuda do arquivo controle9.jsx;
import EstrategiaOverride from './components/EstrategiaOverride.jsx' // Importa o componente Ajuda do arquivo controle10.jsx;
import EstrategiaSplitRange from './components/EstrategiaSplitRange.jsx' // Importa o componente Ajuda do arquivo
import './App.css'

function App() {

  const listaOpcoes = {
    Estrutura: ['Malha Aberta', 'Malha Fechada'],
    Acao: ['On-Off', 'Proporcional', 'Integral', 'Derivativo'],
    Estrategia: ['FeedFoward','Cascata','Ratio','Override','Split Range']
  };

  const [opcaoSelecionada, setOpcaoSelecionada] = useState('Estrutura'); // Estado para armazenar a opção selecionada
  const [opcaoSelecionada2, setOpcaoSelecionada2] = useState(listaOpcoes.Estrutura[0]); // Estado para armazenar a opção selecionada

  const handleCategoriaChange = (event) => { const novaCategoria = event.target.value; setOpcaoSelecionada(novaCategoria); setOpcaoSelecionada2(listaOpcoes[novaCategoria][0]);
  };

  const handleOpcaoChange = (event) => { setOpcaoSelecionada2(event.target.value); };

  
  const renderizarConteudo = () => {
    switch (opcaoSelecionada2) {
      case 'Malha Aberta':
        return <MalhaAberta />;
      case 'Malha Fechada':
        return <MalhaFechada />;
      case 'On-Off':
        return <AcaoOnOff />;
      case 'Proporcional':
        return <AcaoProporcional />;
      case 'Integral':
        return <AcaoIntegral />;
      case 'Derivativo':
        return <AcaoDerivativo />;
      case 'FeedFoward':
        return <EstrategiaFeedFoward />;
      case 'Cascata':
        return <EstrategiaCascata />;
      case 'Ratio':
        return <EstrategiaRatio />;
      case 'Override':
        return <EstrategiaOverride />;
      case 'Split Range':
        return <EstrategiaSplitRange />;
        
      default:
        return null;
    };
  }

  return (
  
        <div className="template">
<h1>Matéria xxx - Instrumentação e Controle - FATEC</h1>
<div className="cabecalho">
  <p>A disciplina de Instrumentação e Controle aborda os princípios e técnicas de medição, 
    controle e automação de processos industriais. Nesta disciplina, os alunos aprendem a utilizar 
    instrumentos de medição e sistemas de controle para otimizar processos industriais.</p> <br></br>
    <p> Para conseguir otimizar os processos industriais, é necessário entender os conceitos fundamentais desta disciplina 
      e saber como aplicá-los em situações práticas de modo a alcançar melhores resultados.</p><br></br>
      <p>Nesta atividade, iremos conhecer as principais metodologias de controle utilizados em sistemas industriais e utilizamos em uma situação prática
         para avaliar o impacto das diversas metodologias de controle em uma situação prática.</p>

        </div>

<div className="tipos_controle">
<h2>Selecione uma opção:</h2>

{/* Renderiza o select com as opções disponíveis */}
<label style={{ display: 'block', marginBottom: '5px' }}>1. Escolha uma Categoria:</label>
<select value={opcaoSelecionada} onChange={handleCategoriaChange} style={{ padding: '8px', fontSize: '16px' }}>
        <option value="Estrutura">Estrutura de Controle</option>
        <option value="Acao">Ação de Controle</option>
        <option value="Estrategia">Estratégia de Controle</option>
      </select>

<label style={{ display: 'block', marginBottom: '5px' }}>2. Escolha o Item:</label>
      <select value={opcaoSelecionada2} onChange={handleOpcaoChange} style={{ padding: '8px', fontSize: '16px' }}>
        {listaOpcoes[opcaoSelecionada].map((item, index) => (
              <option key={index} value={item}>  {item}    </option>
            ))}
      </select>

      {renderizarConteudo()}

        </div>

<div className="conteudo_grafico">
        </div>

<div className="grafico">
        </div>


        </div>
     
  )
}

export default App
