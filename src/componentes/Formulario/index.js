import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [timeSelecionado, setTimeSelecionado] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            timeSelecionado
        });
        setNome('')
        setCargo('')
        setImagem('')
        setTimeSelecionado('')
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    required={true}
                    label="Nome"
                    placeholder="Digite o seu Nome..."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} />
                <CampoTexto
                    required={true}
                    label="Cargo"
                    placeholder="Digite o seu Cargo..."
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem..."
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} />
                <ListaSuspensa
                    required={true}
                    label="Time"
                    itens={props.times}
                    valor={timeSelecionado}
                    aoAlterado={valor => setTimeSelecionado(valor)} />
                <Botao> Criar Card</Botao>
            </form>
        </section>
    )
}
export default Formulario