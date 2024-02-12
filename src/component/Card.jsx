import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap'; 

function Cartao() {
  const [resultado, setResultado] = useState('');

  function calcularDiasAteFinalVerao() {
    const diasRestantes = diasAteFinalVerao();
    setResultado(`Faltam ${diasRestantes} dias para o fim do verão no Hemisfério Sul.`);
  }

  function diasAteFinalVerao() {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const dataFinalVerao = new Date(anoAtual, 2, 21);

    if (dataAtual > dataFinalVerao) {
      dataFinalVerao.setFullYear(anoAtual + 1);
    }

    const diferencaMilissegundos = dataFinalVerao - dataAtual;
    const diferencaDias = Math.ceil(diferencaMilissegundos / (1000 * 60 * 60 * 24));

    return diferencaDias;
  }
  const data = new Date()
  const dia = String(data.getDate()).padStart(2, '0')
  const mes = String(data.getMonth() + 1).padStart(2, '0')
  const ano = String(data.getFullYear())
  const dataAtual = `${dia}/${mes}/${ano}`

  return (
    <div>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src="src/img/sol.jpg" alt='Imagem.jpg' />
        <Card.Body>
        <div>
      <h1>Contador de verão</h1>
    </div>
          <Card.Title>Hoje é dia {dataAtual} </Card.Title>
          <Card.Text>
            Quantos dias vai demorar para o verão acabar?
          </Card.Text>
          <Button onClick={calcularDiasAteFinalVerao} variant="primary">CONTAR</Button>
          <h2>{resultado}</h2>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cartao;
