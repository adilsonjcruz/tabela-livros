import React from "react";

const TabelaFoot = (props) => (
    <tfoot>
        <tr>
            <td colSpan="5"> Quantidade de livros da tabela: <b>{props.qdeLivros}</b></td>
        </tr>
    </tfoot>
);

export default TabelaFoot;