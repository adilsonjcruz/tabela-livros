import React from 'react';

const Classificacao = (props) => (
    <div class="container-setinhas">
        <div onClick={ 
            () => props.Crescente(props.coluna)
        }>&#129093;</div>
        <div onClick={
            () => props.Decrescente(props.coluna)
        }>&#129095;</div>
    </div>
);

export default Classificacao;