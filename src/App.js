import React, {Component} from "react";
import TabelaHead from "../src/components/TabelaHead";
import TabelaFoot from "../src/components/TabelaFoot";
import TabelaBody from "../src/components/TabelaBody";

class App extends Component {
  state = 
  {
    livros:[]
  };

  componentDidMount(){
    fetch("/api/livros.json")
      .then(response => response.json())
      .then(livros => this.setState({ livros }))
      .catch(function(error){
        console.log("Erro na requisição");
      })
      .finally(function(){
        console.log("Sempre retorna");
      });
  };

  handleRemoverLinha = (id) => {
    
    const livros = this.state.livros.filter(l =>  l.id !== id);
    this.setState({livros});
      
  }

  handleOrdenarCrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) => 
      a.titulo < b.titulo ? -1 : 0
    );

    this.setState({ livros })

  }

  handleOrdenarDecrescente = (titulo) => {
    const livros = this.state.livros.sort((a, b) => 
      a.titulo < b.titulo ? -1 : 0
    );

    livros.reverse();
    this.setState({ livros })

  }  

  render() {  
    return (<table className="tabela">
      
      <TabelaHead 
          ordernarCrescente={ this.handleOrdenarCrescente }
          ordernarDecrescente={ this.handleOrdenarDecrescente }
      />
      
      <TabelaFoot 
          qdeLivros = { this.state.livros.length }/>

      <TabelaBody 
          livros={ this.state.livros }
          removerLinha={ this.handleRemoverLinha }
      />

    </table>
    );
}
}

export default App;
