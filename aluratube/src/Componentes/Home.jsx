import Formulario from "./Formulario";
import Usuario from "./Usuario";
import Cabecalho from "./Cabecalho";

const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-50 dark:bg-slate-950'>
      <Cabecalho />
      <Usuario />
      <Formulario />
    </div>
  );
};

export default Home;
