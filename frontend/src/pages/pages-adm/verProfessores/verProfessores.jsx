import { useState, useEffect } from "react";
import api from "../../../services/api.js";

function VerProfessores() {
    const [professores, setProfessores] = useState([]);

    function voltar() {
        window.location.href = "/";
    }

    useEffect(() => {
        async function buscarProfessores() {
            try {
                const response = await api.get('/verProfessores');
                setProfessores(response.data);
            } catch (error) {
                console.error('Erro ao buscar professores:', error);
            }
        }

        buscarProfessores();
    }, []);

    return (
        <div>
            <h1>Ver professores cadastrados</h1>

            <button onClick={voltar}>voltar</button>

            <ul>
                {professores.map((prof) => (
                    <li key={prof.id}>
                        <strong>{prof.nome}</strong> <br />
                        matrícula: {prof.matricula} <br />
                        email: {prof.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VerProfessores;
