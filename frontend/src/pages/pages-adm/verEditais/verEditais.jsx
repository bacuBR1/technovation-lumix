import api from "../../../services/api.js";
import { useState, useEffect } from "react"; 

function VerEditais() {
    const [edital, setEdital] = useState([]);

    function voltar() {
        window.location.href = "/";
    };

    useEffect(() => {
        async function buscarEditais() {
            try {
                const response = await api.get('/verEditais');
                setEdital(response.data);
            } catch (error) {
                console.error('Erro ao buscar editais:', error);
            }
        }

        buscarEditais();
    }, []);

    return (
        <div>
            <h1>ver editais</h1>

            <button onClick={ voltar }>voltar</button>

            <ul>
                {edital.map((editais) => (
                    <li key={editais.id}>
                        <strong>{editais.nome}</strong> <br />
                        descrição: {editais.descricao} <br />
                        carga horaria mínima: {editais.carga_minima}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VerEditais;