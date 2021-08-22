import React from 'react';
import CardNota from './components/CardNota';
import FormularioCadastro from './components/FormularioCadastro';

function App() {
  return (
    <section>
      <FormularioCadastro/>
      <ul>
      <CardNota/>
      <CardNota/>
      <CardNota/>
      </ul>
    </section>
  );
}

export default App;