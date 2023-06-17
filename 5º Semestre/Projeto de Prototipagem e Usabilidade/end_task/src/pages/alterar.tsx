import { Inter } from "next/font/google";
import { CaretLeft } from "phosphor-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { collection, addDoc, query, where, getDocs, DocumentData, doc, updateDoc } from "firebase/firestore";

import { database } from "../../firebase/config/configDatabase";

const inter = Inter({ subsets: ["latin"] });

export default function Alterar() {
  const [date, setDate] = useState<String>();
  const [doctor, setDoctor] = useState<String>();
  const [area, setArea] = useState<String>();
  const [desc, setDesc] = useState<String>();
  const [docId, setDocId] = useState<String>();
  const ordem: DocumentData[] = [];


  async function buscarDados(){
    const valor = sessionStorage.getItem('chave');
    const q = query(collection(database, "Consulta"), where("id", "==", valor));

    const querySnapshot = await getDocs(q).then((querySnapshot) => {
      const ordemId: Array<string> = [];
      querySnapshot.forEach((doc) => {
        ordem.push(doc.data());
        ordemId.push(doc.id);
      });
      setDocId(ordemId[0]);
      setDate(ordem.map((item) => item.date)[0])
      setDoctor(ordem.map((item) => item.doctor)[0])
      setArea(ordem.map((item) => item.area)[0])
      setDesc(ordem.map((item) => item.desc)[0])
    });
  }

  function teste(){
    console.log(docId);
  }

  useEffect(() => {
    buscarDados();
  }, []);


  async function editarDados() {
    const dbRef = doc(database, "Consulta", String(docId));
    try {
      await updateDoc(dbRef, {
        doctor: doctor,
        date: date,
        desc: desc,
        area: area,
      });
      buscarDados();
      alert("Dados editados com sucesso!");
      router.push("/");
    } catch (error) {
      alert("Erro ao editar dados:" + error);
    }
  }

 
  const router = useRouter();
  return (
    <div className="bg-[#F8F4F4] w-screen h-screen flex items-center justify-center">
      <div className="bg-[#FDFFFF] h-[90%] w-[90%] shadow-lg rounded-xl">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row p-8 items-center">
            <button onClick={() => router.push("/")}>
              <CaretLeft size={35} color="#000" />
            </button>
            <p className="font-[Montserrat] text-black md:text-3xl ml-4 sm:text-2xl">
              Editar Dados da Consulta
            </p>
          </div>
          <div className=" w-[50%] flex items-end justify-end">
            <button
              onClick={editarDados}
              className="bg-[#2ebd3e] rounded-lg uppercase p-4 mr-16 font-bold"
            >
              agendar
            </button>
          </div>
        </div>
        <div className="w-100% flex flex-col h-fit m-4">
          <p className="text-black font-[Montserrat] text-lg">
            Nome do Médico:
          </p>
          <input
            className="bg-[#D9D9D9] w-2/6 h-10 rounded-md p-2 text-black"
            placeholder="Insira o nome do Médico"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
          <p className="text-black font-[Montserrat] text-lg mt-4">
            Insiria a àrea de atuação:
          </p>
          <select
            className="bg-[#D9D9D9] w-2/6 h-10 rounded-md p-2 text-black"
            onChange={(e) => setArea(e.target.value)}
            value={area}
          >
            <option value="">Selecione uma área médica</option>
            <option value="cardiologia">Cardiologia</option>
            <option value="dermatologia">Dermatologia</option>
            <option value="endocrinologia">Endocrinologia</option>
            <option value="gastroenterologia">Gastroenterologia</option>
            <option value="geriatria">Geriatria</option>
            <option value="ginecologia">Ginecologia</option>
            <option value="neurologia">Neurologia</option>
            <option value="oftalmologia">Oftalmologia</option>
            <option value="ortopedia">Ortopedia</option>
            <option value="otorrinolaringologia">Otorrinolaringologia</option>
            <option value="pediatria">Pediatria</option>
            <option value="psiquiatria">Psiquiatria</option>
            <option value="urologia">Urologia</option>
          </select>
          <p className="text-black font-[Montserrat] text-lg mt-4">
            Data da Consulta:
          </p>
          <input
            type="date"
            className="bg-[#D9D9D9] w-2/6 h-10 rounded-md p-2 text-black"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
          <p className="text-black font-[Montserrat] text-lg mt-4">
            Descreva o que está sentido:
          </p>
          <textarea
          value={desc}
            className="bg-[#D9D9D9] w-2/6 h-56 rounded-md p-2 text-black"
            placeholder="Descreva o que está sentido"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
