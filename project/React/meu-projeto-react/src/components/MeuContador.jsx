import { useState } from "react"; /*Estado*/

export default function MeuContador() {
  console.log("Renderizando meu contador");
  const [contador, setContador] = useState(0); /*Estado*/
  /* 'contador' = variavel; 'setContador' = função de 'iteração' - que começa em zero (useState(0)) - useStates é utilizado para que o componente inteiro seja atualizado, especificamente {contador}, quando o EVENTO onClick={iterar} é acionado*/

  function iterar() {
    setContador(contador + 1);
    /* funciona como 'contador++' */
  }

  return (
    <div>
      <h1>Meu Contador</h1>
      <h3>{contador}</h3>
      <button onClick={iterar}>Iterar</button>
    </div>
  );
}
