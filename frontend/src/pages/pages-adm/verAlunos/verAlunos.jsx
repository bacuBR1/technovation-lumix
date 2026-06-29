import { useState, useEffect } from "react";
import api from "../../../services/api.js";

function VerAlunos() {
    const [alunos, setAlunos] = useState([]);

    function voltar() {
        window.location.href = "/";
    };

    useEffect(() => {
        async function buscarAlunos() {
            try {
                const response = await api.get('/verAlunos');
                setAlunos(response.data);
            } catch (error) {
                console.error('Erro ao buscar alunos:', error);
            }
        }

        buscarAlunos();
    }, []);

    return (
        <div>
            <h1>Ver alunos cadastrados</h1>

            <button onClick={ voltar }>voltar</button>

            <ul>
                {alunos.map((aluno) => (
                    <li key={aluno.id}>
                        <strong>{aluno.nome}</strong> <br />
                        matrícula: {aluno.matricula} <br />
                        email: {aluno.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VerAlunos;
