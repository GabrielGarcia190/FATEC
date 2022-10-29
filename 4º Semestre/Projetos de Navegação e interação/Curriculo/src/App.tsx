import { Header } from './components/Header';
import './styles/main.css';
import RectIcon from './assets/react-icon.png';
import HTLMIcon from './assets/html-5.png';
import JSIcon from './assets/js.png';
import CSSIcon from './assets/css-3.png'
import TailIcon from './assets/tailwind.jpg'
import { LinkedinLogo, GithubLogo, WhatsappLogo } from 'phosphor-react'

function App() {


  return (
    <div>

      <div className="flex flex-col justify-center items-center bg-zinc-600">
        <Header />
      </div>
      <div className='flex flex-row'>
        <div className="flex flex-col ml-0 text-zinc-600  bg-slate-300  w-[60vh] items-center">
          <img src="https://thispersondoesnotexist.com/image"
            className=" m-2 w-[30vh] mt-4 rounded-full mb-[3vh]" />
          <hr className="w-[50vh] h-1 bg-gray-100 rounded border-0  dark:bg-gray-700" />
          <p className='font-bold text-xl m-[3vh]'>DETALHES PESSOAIS</p>
          <hr className="w-[50vh] h-1 bg-gray-100 rounded border-0  dark:bg-gray-700" />
          <p className='text-lg m-[3vh]'><span className='font-bold'>Data de Nascimento:</span> 27/03/2003</p>
          <hr className=" w-[50vh] h-1 bg-gray-100 rounded border-0 dark:bg-gray-700" />
          <p className='font-bold text-xl m-[3vh]'>LÍNGUAS</p>
          <hr className=" w-[50vh] h-1 bg-gray-100 rounded border-0 dark:bg-gray-700" />
          <div className='m-[3vh]'>
            <div className="mb-1 text-lg ">Lingua Portuguêsa</div>
            <div className="w-[50vh] mt-2 bg-gray-400 rounded-full h-1.5 mb-4 dark:bg-gray-400">
              <div className="bg-blue-700 h-1.5 rounded-full dark:bg-blue-700 w-[40vh]"></div>
            </div>
            <div className="mb-1 text-lg ">Inglês</div>
            <div className="w-[50vh] mt-2 bg-gray-400 rounded-full h-1.5 mb-4 dark:bg-gray-400">
              <div className="bg-red-700 h-1.5 rounded-full dark:bg-red-700 w-[15vh]"></div>
            </div>
          </div>
          <hr className=" mt-[1vh] w-[50vh] h-1 bg-gray-100 rounded border-0 dark:bg-gray-700" />
          <p className='font-bold text-xl m-[3vh]'>COMPETÊNCIAS</p>
          <hr className="w-[50vh] h-1 bg-gray-100 rounded border-0 dark:bg-gray-700 " />
          <div className='m-[4vh]' >
            <img className='float-left w-10' src={JSIcon} />
            <img className='float-left w-10 ml-2' src={HTLMIcon} />
            <img className='float-left w-10 ml-2' src={RectIcon} />
            <img className='float-left w-10 ml-2' src={TailIcon} />
            <img className='float-left w-10 ml-2' src={CSSIcon} />
          </div>
          <hr className="w-[50vh] h-1 bg-gray-100 rounded border-0 dark:bg-gray-700 " />
          <p className='font-bold text-xl mt-[3vh]'>REDES SOCAIS:</p>
          <div className='mt-[2vh]' >
            <a className='float-left w-10 ml-2' href='https://www.linkedin.com/in/gabriel-garcia-141543225/' target="_blank" ><LinkedinLogo size={50} color="#000" /></a>
            <a className='float-left w-10 ml-2' href='https://github.com/GabrielGarcia190' target="_blank" ><GithubLogo size={50} color="#000" /></a>
            <a className='float-left w-10 ml-2' href='https://encurtador.com.br/hmpsT' target="_blank" ><WhatsappLogo size={50} color="#000" /></a>
          </div>
        </div>


        <div className='bg-slate-200 w-full items-center  text-zinc-700 flex flex-col'>
          <p className=' m-8 text-justify text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sed hic deleniti vitae
            consequuntur provident ut commodi veritatis, nostrum, vero sapiente aut omnis officia! Animi
            earum aperiam et rem officia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sed hic deleniti vitae
            consequuntur provident ut commodi veritatis, nostrum, vero sapiente aut omnis officia! Animi
            earum aperiam et rem officia.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sed hic deleniti vitae
            consequuntur provident ut commodi veritatis, nostrum, vero sapiente aut omnis officia! Animi
            earum aperiam et rem officia.</p>
          <hr className="w-[150vh] h-1 bg-gray-100 rounded border-0 dark:bg-gray-700 " />
          <p className='font-bold text-2xl m-[3vh]'>EXPERIÊNCIA PROFISSIONAL</p>
          <hr className="w-[150vh] h-1 bg-gray-100 rounded border-0 dark:bg-gray-700 " />

          <div className='flex flex-row m-8 justify-center items-center text-lg'>
            <div className='flex flex-col m-4'>
              <p className='font-bold '>Nome da Empresa: </p>
              <p>Escritório Garcia</p>
            </div>
            <div className='items-center justify-center text-center'>
              <p className='font-bold'>2020</p>
              <hr className=" mt-[1vh] w-1 h-[10vh] ml-10 bg-gray-100 rounded border-0 dark:bg-gray-700" />
              <p className='font-bold'>Atualmente</p>
            </div>
            <div>
              <div className='flex flex-col m-4'>
                <p className='font-bold '>AUXILIAR DE ESCRITÓRIO </p>
                <p className='w-[70vh]'>Todavia, a constante divulgação das informações
                  promove a alavancagem
                  das posturas dos órgãos dirigentes com relação às suas atribuições.</p>
              </div>
            </div>
          </div>
          <hr className="w-[150vh] h-1 bg-gray-100 rounded border-0 dark:bg-gray-700 " />
          <p className='font-bold text-2xl m-[3vh]'>EDUCAÇÃO</p>
          <hr className="w-[150vh] h-1 bg-gray-100 rounded border-0 dark:bg-gray-700 " />
          <div className='flex flex-row m-8 justify-center items-center text-lg'>
            <div className='flex flex-col m-4'>
              <p className='font-bold '>Instituiçao de Ensino: </p>
              <p>ETC DR. José Vianna Coutinho</p>
            </div>
            <div className='items-center justify-center text-center'>
              <p className='font-bold'>2019</p>
              <hr className=" mt-[1vh] w-1 h-[10vh] ml-5 bg-gray-100 rounded border-0 dark:bg-gray-700" />
              <p className='font-bold'>2020</p>
            </div>
            <div>
              <div className='flex flex-col m-4'>
                <p className='font-bold '>TECNICO EM MANUTENÇÃO E SUPORTE EM INFOMÁTICA </p>
                <p className='w-[70vh]'>Não obstante, o desenvolvimento contínuo de distintas formas de
                  atuação desafia a capacidade de equalização das diversas correntes de pensamento.</p>
              </div>
            </div>
          </div>
          <div className='flex flex-row m-8 justify-center items-center text-lg'>
            <div className='flex flex-col m-4'>
              <p className='font-bold '>Instituiçao de Ensino: </p>
              <p>FATEC Prof. José Camargo </p>
            </div>
            <div className='items-center justify-center text-center'>
              <p className='font-bold'>2020</p>
              <hr className=" mt-[1vh] w-1 h-[10vh] ml-10 bg-gray-100 rounded border-0 dark:bg-gray-700" />
              <p className='font-bold'>Cursando....</p>
            </div>
            <div>
              <div className='flex flex-col m-4'>
                <p className='font-bold '>SISTEMAS PARA INTERNET </p>
                <p className='w-[70vh]'>O cuidado em identificar pontos críticos na competitividade
                  nas transações comerciais promove a alavancagem das condições inegavelmente apropriadas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>

  )
}

export default App
