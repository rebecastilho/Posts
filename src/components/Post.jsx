import React from 'react';
import '../App.css';


class Post extends React.Component{
  render(){
    return(
      <div>
        <img className="imagem" src = {this.props.url_imagem}></img>
        <div> Titulo:{ this.props.titulo} </div>
        <button onClick={()=>this.props._excluirPost(this.props.id)} > Excluir</button>
      </div>
    )
  }
}

export default Post;