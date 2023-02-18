import TextForm from '../TextForm/TextForm';
import './Formulario.css'


const Formulario = () => {
    return ( 
        <section className='form-cadastro'>
            <form>
                <h2>Preencha os dados para crios o card do colaborador.</h2>
                <TextForm label="Nome" placeholder="Digite seu nome"></TextForm>
                <TextForm label="Cargo" placeholder="Digite seu cargo"></TextForm>
                <TextForm label="Imagem" placeholder="Digite o endereço da imagem"></TextForm>
            </form>
        </section>
      );
}

export default Formulario
