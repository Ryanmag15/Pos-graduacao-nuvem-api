// pages/index.js
import axios from 'axios';

const Home = ({ data }) => {
  return (
    <div>
      <h1>Dados do Servidor Node.js:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:3001/');
    const data = response.data;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Erro ao fazer a solicitação:', error);

    return {
      props: {
        data: null, // ou algum valor padrão, dependendo do seu caso
      },
    };
  }
}

export default Home;
