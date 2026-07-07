import imagem from '../assets/MalhaAberta.jpeg'

function EstruturaMalhaAberta() {
  return (
    <div>
      <h3>Malha Aberta (Open-Loop)</h3>
        <p>O controlador envia um sinal para o atuador, que age no processo. Não há sensor para verificar se o objetivo foi atingido.</p>
        <img src={imagem} alt="Malha Aberta" />
    </div>
  );
}

export default EstruturaMalhaAberta; // Isso permite que o arquivo seja importado em outro lugar