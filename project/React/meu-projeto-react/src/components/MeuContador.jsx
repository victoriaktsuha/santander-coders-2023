import { useState } from "react";
import styles from "./button.module.css";

export default function MeuContador() {
  console.log("Renderizando meu contador");
  const [contador, setContador] = useState(0); /*Estado*/
  /* 'contador' = variavel de estado; 'setContador' = função de 'iteração' - que começa em zero (useState(0)) - useStates é utilizado para que o componente inteiro seja atualizado, especificamente {contador}, quando o EVENTO onClick={iterar} é acionado*/

  function iterar() {
    setContador(contador + 1);
    /* funciona como 'contador++' */
  }
  function remover() {
    setContador(contador - 1);
    /* funciona como 'contador++' */
  }
  if (contador > 5) {
    return (
      <div>
        <h1>Valor muito alto!</h1>
        <button onClick={remover}>Diminuir</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Meu Contador: {contador}</h1>
      {/* {contador > 9 ? <h1>Valor muito grande</h1> : null} */}
      <button className={styles.myButton} onClick={iterar}>
        Iterar
      </button>
      <button className={styles.myButton} onClick={remover}>
        Diminuir
      </button>
    </div>
  );
}
// {contador > 9 ? <h1>Valor muito grande</h1> : null} => renderização condicional (operador ternário)
