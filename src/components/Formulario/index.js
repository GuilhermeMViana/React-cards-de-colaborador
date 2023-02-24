import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import TextForm from '../TextForm/TextForm';
import './Formulario.css'


const Formulario = () => {

    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const saveForm = (event) => {
        event.preventDefault();
        console.log(nome, cargo, imagem, time)
    }
    return ( 
        <section className='form-cadastro'>
            <form onSubmit={saveForm}>
                <h2>Preencha os dados para crios o card do colaborador.</h2>
                <TextForm 
                    isRequired="true" 
                    label="Nome" 
                    placeholder="Digite seu nome">
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)} 
               </TextForm>
                <TextForm 
                    isRequired="true" 
                    label="Cargo" 
                    placeholder="Digite seu cargo">
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}           
                </TextForm>
                <TextForm 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem">
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                </TextForm>
                <DropdownList 
                    label="Time" 
                    itens={teams}>
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                </DropdownList>
                <Button>Gerar card</Button>
            </form>
        </section>
      );
}

export default Formulario
