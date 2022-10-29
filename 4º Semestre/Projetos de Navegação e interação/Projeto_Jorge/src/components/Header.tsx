import { MapPin, Phone, Envelope } from 'phosphor-react';

export function Header() {
    return (
        <div className="flex flex-col items-center justify-center bg-zinc-600">

            <p className="text-white text-lg mt-[6vh] font-sans"> G | G </p>

            <h1 className="text-white text-5xl mt-[6vh] font-black  font-sans" >GABRIEL GARCIA RODOLFO ALVES</h1>

            <div className=" flex-row inline-block text-white mt-[3vh]">
                <hr className="h-[10vh] w-[50vh] float-left mt-[2vh]  " />
                <p className="float-left ml-2 text-lg">PROGRAMADOR</p>
                <hr className="h-[10vh] w-[50vh] float-right mt-[2vh] ml-2 " />
            </div>
            <div className=" text-white mt-[2vh] grid grid-cols-3 divide-x pb-7">
                <div className='float-left flex flex-col items-center justify-center mr-3 mb-3'>
                    <a href='https://goo.gl/maps/LWQgpGFJHG1it4Cu8' target="_blank"><MapPin size={40} color="#f3f3f3" /></a>
                    <p className='mt-2' >Rua Rio de Janeiro, 1383</p>
                    <p>Nossa Senhora de Fátima</p>
                    <p>Urânia/SP - CEP: 15760-000</p>
                </div>
                <div className='float-left flex flex-col items-center justify-center mr-3 mb-3'>
                    <a href='https://encurtador.com.br/hmpsT' target="_blank"><Phone size={40} color="#f3f3f3" /></a>
                    <p className='mt-2'>(17) 99701-6948</p>
                    <p className='text-zinc-600 bg-zinc-600'> .</p>
                    <p className='text-zinc-600 bg-zinc-600'> .</p>
                </div>
                <div className='float-left flex flex-col items-center justify-center mr-3 mb-3'>
                    <Envelope size={40} color="#f3f3f3" />
                    <p className='mt-2 ml-5'>gabriel.alves58@fatec.sp.gov.br</p>
                    <p className='text-zinc-600 bg-zinc-600'> .</p>
                    <p className='text-zinc-600 bg-zinc-600'> .</p>
                </div>
            </div>
        </div>
    )
}