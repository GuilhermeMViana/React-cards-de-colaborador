import Button from '../Button';
import DropdownList from '../DropdownList/main';
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

    const saveForm = (event) => {
        event.preventDefault();
        console.log("Tropa do gordão")
    }
    return ( 
        <section className='form-cadastro'>
            <form onSubmit={saveForm}>
                <h2>Preencha os dados para crios o card do colaborador.</h2>
                <TextForm isRequired="true" label="Nome" placeholder="Digite seu nome"></TextForm>
                <TextForm isRequired="true" label="Cargo" placeholder="Digite seu cargo"></TextForm>
                <TextForm label="Imagem" placeholder="Digite o endereço da imagem"></TextForm>
                <DropdownList isRequired="true" label="Time" itens={teams}></DropdownList>
                <Button>Gerar card</Button>
            </form>
        </section>
      );
}

export default Formulario
