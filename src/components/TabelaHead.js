import React from "react";
import Classificacao from "./Classificacao";

const TabelaHead = (props) => (
    <thead>
        <tr>
            <th colSpan="5">Tabela de Livros</th>
        </tr>
        <tr>
            <th>ISBN
                <Classificacao
                    Crescente   = {props.ordernarCrescente}
                    Decrescente = {props.ordernarDecrescente} 
                    coluna = "ISBN"
                />
            </th>
            <th>Título
                <Classificacao
                    Crescente   = {props.ordernarCrescente}
                    Decrescente = {props.ordernarDecrescente} 
                    coluna = "titulo"
                />
            </th>
            <th>Autor
                <Classificacao
                    Crescente   = {props.ordernarCrescente}
                    Decrescente = {props.ordernarDecrescente} 
                    coluna = "autor"
                />
            </th>
            <th>Ano Lançamento
                <Classificacao
                    Crescente   = {props.ordernarCrescente}
                    Decrescente = {props.ordernarDecrescente} 
                    coluna = "autor"
                />                
            </th>            
            <th></th>
        </tr>
    </thead>
);

export default TabelaHead;