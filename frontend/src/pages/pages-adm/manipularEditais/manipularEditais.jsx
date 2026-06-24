import api from '../../../services/api';
import { useRef, useState } from 'react';
import './manipular.css';

function CadastrarEditais() {

    const [resposta, setResposta] = useState("");
    const cadastroId = useRef();
    const cadastroNome = useRef();
    const cadastroDescricao = useRef();
    const cadastroCargaMinima = useRef();

    const editarId = useRef();
    const editarNome = useRef();
    const editarDescricao = useRef();
    const editarCargaMinima = useRef();

    const deletarId = useRef();

    function mostrarMensagem(mensagem) {
        setResposta(mensagem);

            setTimeout(() => {
                setResposta("");
            }, 3000); 
    }

    async function cadastrarEdital() {
        try {
            await api.post('/cadastrarEditais', {
                id: cadastroId.current.value,
                nome: cadastroNome.current.value,
                descricao: cadastroDescricao.current.value,
                carga_minima: cadastroCargaMinima.current.value
            });

            cadastroId.current.value = "";
            cadastroNome.current.value = "";
            cadastroDescricao.current.value = "";
            cadastroCargaMinima.current.value = "";

            mostrarMensagem("Edital cadastrado com sucesso");
        } catch (error) {
            console.error('Erro ao cadastrar edital:', error);
            mostrarMensagem("Erro ao cadastrar edital");
        }
    }

    async function atualizarEdital() {
        try {
            await api.put('/atualizarEditais', {
                id: editarId.current.value,
                nome: editarNome.current.value,
                descricao: editarDescricao.current.value,
                carga_minima: editarCargaMinima.current.value
            });

            editarId.current.value = "";
            editarNome.current.value = "";
            editarDescricao.current.value = "";
            editarCargaMinima.current.value = "";

            mostrarMensagem("Edital atualizado com sucesso");
        } catch (error) {
            console.error('Erro ao atualizar edital:', error);
            mostrarMensagem("Erro ao atualizar edital");
        }
    }

    async function deletarEdital() {
        try {
            await api.post('/deletarEditais', {
                id: editarId.current.value
            });

            mostrarMensagem("Edital deletado com sucesso");
        } catch (error) {
            console.error('Erro ao deletar edital:', error);
            mostrarMensagem("Erro ao deletar edital");
        }
    }


    return (
        <div>
            <div>
                <h1>Gerenciar Editais</h1>
                <div className="page-nav">
                    <a href="#cadastrar">Cadastrar</a>
                    <a href="#editar">Editar</a>
                    <a href="#deletar">Deletar</a>
                </div>
            </div>
            <section id="cadastrar">
                <div>
                    <div>
                        <h1>Cadastrar Editais</h1>
                        <p>Conteúdo da página de cadastro de editais.</p>
                        {resposta !== "" && <p>{resposta}</p>}
                    </div>
                    <ul className="form-list">
                        <li><input type="text" placeholder="ID" ref={cadastroId} /></li>
                        <li><input type="text" placeholder="Nome" ref={cadastroNome} /></li>
                        <li><input type="text" placeholder="Descrição" ref={cadastroDescricao} /></li>
                        <li><input type="number" placeholder="Carga Mínima" ref={cadastroCargaMinima} /></li>
                        <li><button onClick={cadastrarEdital}>Cadastrar</button></li>
                    </ul>
                </div>
            </section>

            <section id="editar">
                <div>
                    <div>
                        <h1>Editar Editais</h1>
                        <p>Conteúdo da página de edição de editais.</p>
                    </div>
                    <div>
                        <ul id="editar-lista">
                            <li><input type="text" placeholder="ID" ref={editarId} /></li>
                            <li><input type="text" placeholder="Nome" ref={editarNome} /></li>
                            <li><input type="text" placeholder="Descrição" ref={editarDescricao} /></li>
                            <li><input type="number" placeholder="Carga Mínima" ref={editarCargaMinima} /></li>
                            <li><button onClick={atualizarEdital}>Atualizar</button></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="deletar">
                <div>
                    <div>
                        <h1>Deletar Editais</h1>
                        <p>Conteúdo da página de deleção de editais.</p>
                    </div>
                    <div>
                        <input type="text" placeholder="ID" ref={deletarId} />
                        <button onClick={deletarEdital}>Deletar</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CadastrarEditais;