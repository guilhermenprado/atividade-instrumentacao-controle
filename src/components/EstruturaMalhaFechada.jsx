import imagem from '../assets/MalhaFechada.jpeg'

function EstruturaMalhaFechada() {
  return (
    <div>
      <h3>Malha Fechada (Closed-Loop)</h3>
        <p>O sensor mede a saída e envia de volta para o comparador. O erro é calculado, e o controlador atua para zerar esse erro.</p>
        <img src={imagem} alt="Malha Fechada" />
    </div>
  );
}

export default EstruturaMalhaFechada; // Isso permite que o arquivo seja importado em outro lugar