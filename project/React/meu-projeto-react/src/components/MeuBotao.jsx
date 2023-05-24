export default function MeuBotao(props) {
  return <button>{props.conteudo}</button>;
}

// conteudo="me clique" => Props ('conteudo') são configurações/valores/funções/expressões que passamos como parametros na declaracao dos componentes; Você pode criar o componente uma unica vez, e reestilizar só trocando as props, como card de produto em ecomm, por exemplo
