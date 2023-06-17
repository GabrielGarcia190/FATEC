import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Calendar,
  Check,
  FirstAid,
  NotePencil,
  Scroll,
  Syringe,
  Trash,
  X,
  XCircle,
} from "phosphor-react";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  DocumentData,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { database } from "../../firebase/config/configDatabase";
import Modal from "react-modal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [dados, setDados] = useState<DocumentData[]>([]);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [closeModal, setCloseModal] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [delId, setDocId] = useState<string>("");

  const consultarDadosFirestore = async () => {
    setLoading(true);
    const q = query(collection(database, "Consulta"));

    try {
      const listaDados: any = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        doc.data();
        listaDados.push(`${doc.id}`, doc.data());
      });
      setDados(listaDados);
      console.log(listaDados);
      setLoading(false);
    } catch (error) {
      alert("Erro ao consultar dados");
      setLoading(false);
      console.error("Erro ao consultar dados:", error);
    }
  };

  function fecharModal() {
    setIsOpen(false);
  }
  function AbrirModal(id: string) {
    setId(id);
    console.log("ID Selecionado: " + id);
    setIsOpen(true);
  }

  async function deletarDados(docId: string) {
    const q = await query(collection(database, "Consulta"), where("id", "==", docId));


      const querySnapshot = await getDocs(q);
      const ordemId: Array<string> = [];
      await querySnapshot.forEach((doc) => {
        ordemId.push(doc.id);
      });
      setDocId(ordemId[0]);
 

    const dbRef = doc(database, "Consulta", delId);
    try {
      await deleteDoc(dbRef);
      alert("Dados deletados com sucesso!");
      consultarDadosFirestore();
      setIsOpen(false);
    } catch (error) {
      alert("Erro ao deletar dados:" + error);
    }
  }

  useEffect(() => {
    consultarDadosFirestore();
  }, []);

  return (
    <div className="bg-[#F8F4F4] w-screen h-screen flex items-center justify-center">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=" w-full flex justify-end">
          <button onClick={fecharModal}>
            <XCircle size={32} color="#e80202" weight="fill" />
          </button>
        </div>
        <div className="mt-4">
          <p>Tem certeza que deseja cancelar a consulta ?</p>
        </div>
        <div className="flex flex-row justify-between mt-4">
          <button
            onClick={() => deletarDados(id)}
            className=" h-8 w-16 bg-[#2ebd3e] flex items-center justify-center rounded-md"
          >
            <Check size={25} color="#fff" />
          </button>
          <button
            onClick={fecharModal}
            className=" h-8 w-16 bg-[#e80202] flex items-center justify-center rounded-md"
          >
            <X size={25} color="#fff" weight="fill" />
          </button>
        </div>
      </Modal>
      <div className="bg-[#FDFFFF] h-[90%] w-[90%] shadow-lg rounded-xl">
        <div className="flex flex-row p-8 items-center">
          <p className="font-[Montserrat] text-black md:text-3xl ml-4 sm:text-2xl">
            Consultas Agendadas
          </p>
        </div>
        <div className="w-[90%] h-[60%] bg-white overflow-x-hidden">
          {dados.map(
            (dados, index) =>
              dados["doctor"] && (
                <div key={index} className="ml-4">
                  <>
                    <div className="bg-[#D9D9D9] text-black font-[Montserrat] shadow-md mb-5 rounded-xl w-5/6 h-fit flex flex-col p-4 ">
                      <div className="flex flex-row items-center mb-2">
                        <FirstAid size={25} color="#000" weight="fill" />
                        <p className="text-lg mr-2 ml-2 font-bold"> Medico: </p>
                        <p className=" text-lg"> {dados["doctor"]}</p>
                      </div>
                      <div className="flex flex-row items-center mb-2">
                        <Syringe size={25} color="#000" weight="fill" />
                        <p className="text-lg mr-2 ml-2 font-bold">
                          {" "}
                          Aréa do atendimento:{" "}
                        </p>
                        <p className=" text-lg"> {dados["area"]}</p>
                      </div>
                      <div className="flex flex-row items-center mb-2">
                        <Calendar size={25} color="#000" weight="fill" />
                        <p className="text-lg mr-2 ml-2 font-bold">
                          {" "}
                          Data do Atendimento:{" "}
                        </p>
                        <p className=" text-lg"> {dados["date"]}</p>
                      </div>
                      <div className="flex flex-row items-center mb-2">
                        <Scroll size={25} color="#000" weight="fill" />
                        <p className="text-lg mr-2 ml-2 font-bold">
                          {" "}
                          Descrição dos sintomas:{" "}
                        </p>
                        <p className=" text-lg"> {dados["desc"]}</p>
                      </div>
                      <div className="text-white font-bold flex flex-row">
                        <button
                          onClick={() => AbrirModal(dados["id"])}
                          className="bg-red-500 p-2 flex flex-row  items-center rounded-md w-72"
                        >
                          <Trash
                            size={25}
                            color="#ffffff"
                            weight="fill"
                            className="mr-3"
                          />
                          Cancelar agendamento
                        </button>
                        <button className="bg-[#ffc107] ml-10 p-2 w-56 rounded-md flex flex-row items-center text-black">
                          <NotePencil size={20} color="#000" className="mr-3" />
                          Alterar Dados
                        </button>
                      </div>
                    </div>
                  </>
                </div>
              )
          )}
        </div>
        <div className="w-full flex justify-end">
        <button className="bg-[#2ebd3e] p-2 rounded-md mr-8" onClick={() => router.push("agendar")}>
          Agendar Consulta
        </button>
        </div>
      </div>
    </div>
  );
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    background: "#F8F4F4",
    color: "#000",
    borderRadius: "10px",
    transform: "translate(-50%, -50%)",
  },
};
