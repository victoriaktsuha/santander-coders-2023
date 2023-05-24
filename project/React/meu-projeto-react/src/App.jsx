/* Componentes e Props:
  .jsx é um arquivo React que permite mistura de JS/TS com HTML
*/

import MeuComponente from "./components/MeuComponente";
import MeuBotao from "./components/MeuBotao";
import MeuContador from "./components/MeuContador";

export default function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <MeuComponente />
      <MeuBotao conteudo="me clique" />
      <MeuBotao conteudo="depois aqui" />
      <MeuBotao conteudo="e por fim aqui" />
      <MeuContador />
    </div>
  );
}
// conteudo="me clique" => Props ('conteudo') são configurações/valores/funções/expressões que passamos para os componentes (chave-valor)
