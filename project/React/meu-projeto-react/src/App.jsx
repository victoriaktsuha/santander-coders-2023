/* Componentes e Props:
  .jsx é um arquivo React que permite mistura de JS/TS com HTML
*/
import { useEffect, useState } from "react";
import MeuComponente from "./components/MeuComponente";
import MeuBotao from "./components/MeuBotao";
// import MeuContador from "./components/MeuContador";
import MinhaLista from "./components/MinhaLista";

const minhaNovaLista = [
  { id: "1", value: "Shampoo" },
  { id: "2", value: "Escova" },
  { id: "3", value: "Creme dental" },
];

const tarefas = [
  { id: "1", title: "Task 1" },
  { id: "2", title: "Task 2" },
  { id: "3", title: "Task 3" },
  { id: "4", title: "Task 4" },
];

export default function App() {
  const [produtos, setProdutos] = useState(minhaNovaLista);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    // console.log("Estou no efeito colateral");
    if (pesquisa) {
      const novaLista = minhaNovaLista.filter((item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase());
      });
      setProdutos(novaLista);
    } else {
      setProdutos(minhaNovaLista);
    }
  }, [pesquisa]);

  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const resultadoFinal = await resultado.json();
      return resultadoFinal;
    }
    buscarDados().then((res) => setTarefas(res));
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      <MeuComponente />
      <p></p>
      <MeuBotao conteudo="me clique" />
      <MeuBotao conteudo="depois aqui" />
      <MeuBotao conteudo="e por fim aqui" />
      {/* <MeuContador /> */}
      <h1>Listas no React</h1>
      <MinhaLista />
      <h1>Efeitos Colaterais</h1>
      <input
        type="text"
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder="Pesquise aqui"
      />
      {produtos.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.value}</p>
          </div>
        );
      })}
      <h1>Buscando dados com fetch</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (
            <div key={tarefa.id}>
              <li>
                {tarefa.title} -
                {tarefa.completed ? (
                  <mark>
                    <b>Concluido</b>
                  </mark>
                ) : (
                  <b>
                    <i>Pendente</i>
                  </b>
                )}
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}
// conteudo="me clique" => Props ('conteudo') são configurações/valores/funções/expressões que passamos para os componentes (chave-valor)
// Efeito colateral clássico de qlqr aplicativo é requisição de dados, filtragem, etc
