import api from '../../services/api';
import { useRef } from 'react';

function CadastrarEditais() {

    const [resposta, setResposta] = useState("");
    const inputId = useRef();
    const inputNome = useRef();
    const inputDescricao = useRef();
    const inputCargaMinima = useRef();

    async function cadastrarEdital() {
        try {
            await api.post('/cadastroEditais', {
                id: inputId.current.value,
                nome: inputNome.current.value,
                descricao: inputDescricao.current.value,
                carga_minima: inputCargaMinima.current.value
            });

            setResposta("Edital cadastrado com sucesso");
        } catch (error) {
            console.error('Erro ao cadastrar edital:', error);
            setResposta("Erro ao cadastrar edital");
        }
    }

    async function atualizarEdital() {
        try {
            await api.put('/atualizarEditais', {
                id: inputId.current.value,
                nome: inputNome.current.value,
                descricao: inputDescricao.current.value,
                carga_minima: inputCargaMinima.current.value
            });

            setResposta("Edital atualizado com sucesso");
        } catch (error) {
            console.error('Erro ao atualizar edital:', error);
            setResposta("Erro ao atualizar edital");
        }
    }

    return (
        <div>
            <section>
                <div>
                    <div>
                        <h1>Cadastrar Editais</h1>
                        <p>Conteúdo da página de cadastro de editais.</p>
                        {resposta !== "" && <p>{resposta}</p>}
                    </div>
                    <div>
                        <input type="text" placeholder="ID" ref={inputId} />
                        <input type="text" placeholder="Nome" ref={inputNome} />
                        <input type="text" placeholder="Descrição" ref={inputDescricao} />
                        <input type="number" placeholder="Carga Mínima" ref={inputCargaMinima} />
                        <button onClick={cadastrarEdital}>Cadastrar</button>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <div>
                        <h1>Editar Editais</h1>
                        <p>Conteúdo da página de edição de editais.</p>
                    </div>
                    <div>
                        <input type="text" placeholder="ID" ref={inputId} />
                        <input type="text" placeholder="Nome" ref={inputNome} />
                        <input type="text" placeholder="Descrição" ref={inputDescricao} />
                        <input type="number" placeholder="Carga Mínima" ref={inputCargaMinima} />
                        <button onClick={atualizarEdital}>Atualizar</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CadastrarEditais;