const minhaLista = [
  { id: "1", value: "Frutas" },
  { id: "2", value: "Verduras" },
  { id: "3", value: "Legumes" },
];
export default function MinhaLista() {
  /* Estrutura de lista - para 'listas' os items devem ter a propriedade 'key' com um valor/chave unico para que o React possa identificar cada item e renderiza-lo, caso contrário, ele irá renderizar toda a lista novamente a cada item e isso pode impactar performance e a própria solução */

  //   let minhaLista = [
  //     <h4 key="1">Item 1</h4>,
  //     <h4 key="2">Item 2</h4>,
  //     <h4 key="3">Item 3</h4>,
  //     <h4 key="4">Item 4</h4>,
  //     <h4 key="5">Item 5</h4>,
  //   ];

  /* no React, é mais comum utilizar um map para fazer um loop em array/objetos, criando listas dinamicamente */
  return minhaLista.map((item) => {
    return (
      <div key={item.id}>
        <p>{item.value}</p>
      </div>
    );
  });
}
