// # TODO COMPONENTE NO REACT É UMA FUNÇÃO QUE RETORNA UM HTML
// 
import { useState } from "react";
import { Contador } from "./contador"
import "./App.css";

function App() {
  //cria uma variavel que toda vez que muda o valor é "re-renderizada"
  const [contar, setContar] = useState<number>(0);

  function controlaIncremento(){
    setContar(contar + 1);
  }

  function controlaDecremento(){
    setContar(contar - 1);
  }

  function controlaZerar(){
    setContar(0);
  }

  return (
  <div className="container">
    <h1 className ="title">Contador</h1>
    <div className="number">
    <Contador text={contar} />
    </div>

    <button className="button"
    onClick={controlaIncremento}>
    Incrementar
    </button>

    <button className="button"
    onClick={controlaDecremento}>
    Decrementar
    </button>

    <button className="button"
    onClick={controlaZerar}>
    Zerar
    </button>
  </div>
  );
}

// Explicações:
// onClick define uma função a ser executada quando o botão é clicado.
// A função controlacontar é chamada quando o botão é clicado.
// Essa função atualiza o estado contar adicionando um novo elemento ao array, que é o valor do tamanho atual do array (contar.length)

export default App
