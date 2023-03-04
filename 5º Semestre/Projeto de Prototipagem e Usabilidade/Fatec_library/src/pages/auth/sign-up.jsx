import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";

export function SignUp() {

  const [CEP, useCEP] = useState("");
  const [CPF, useCPF] = useState("");
  const [CelNumer, UseCelNumer] = useState("")
  const [resCEP, setresCEP] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: "",
  })

  function validaCEP(event) {
    const formattedCEP = event.target.value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");

    useCEP(formattedCEP);
  }

  function validadaNumero(event) {
    const formatedNumber = event.target.value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d)(\d{4})$/, "$1-$2");

    UseCelNumer(formatedNumber);
  }


  async function consultaCEP() {
    try {
      if (CEP.length === 9) {
        await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
          .then((res) => res.json())
          .then((data) => {
            if (data.erro) {
              validado = false;
              console.log(data.erro);
              setresCEP(
                {
                  localidade: "Digite um CEP Valido",
                  uf: "00"
                }

              )
            } else {
              setresCEP(data);
              validado = true;
            }
            return;
          });
      } else {

        return false;
      }
    } catch (error) {

      console.log(error);
    }
  }

  function validaCPF(event) {
    const formatedCPF = event.target.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    useCPF(formatedCPF);

  }

  function Cadastrar(e) {
    e.preventDefault();
    window.location.href ="http://localhost:5173/auth/sign-in";

  }

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1589159856415-286795c9eb3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <form onSubmit={Cadastrar}>
          <Card className="absolute top-2/4 left-2/4 ml-10 w-full max-w-[35rem] -translate-y-2/4 -translate-x-2/4">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-2 grid h-28 place-items-center mt-10"
            >
              <Typography variant="h3" color="white">
                Cadastre-se
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <div className=" flex flex-row gap-2">
                <Input label="Name" size="lg" required />
                <Input type="email" label="Email" size="lg" required />
              </div>
              <div className=" flex flex-row gap-2">
                <Input label="CPF" type="text" size="lg" required onChange={validaCPF} value={CPF} maxLength={14} />
                <Input type="text" label="Telefone" size="lg" required onChange={validadaNumero} value={CelNumer} maxLength={15} />
              </div>
              <div className=" flex flex-row gap-2">
                <Input label="Logradouro" type="text" size="lg" required />
                <Input type="text" label="Bairro" size="lg" required />
              </div>
              <div className=" flex flex-row gap-3">
                <Input label="CEP" type="text" size="lg" required onChange={validaCEP} value={CEP} />
                <Input label="Cidade" type="text" size="lg" required onFocus={consultaCEP} value={resCEP.localidade} />
                <Input type="text" label="UF" size="lg" className="w-[6vw]" required value={resCEP.uf} maxLength={2} />
              </div>



              <Input type="password" label="Senha" size="lg" required />
              <div className="-ml-2.5">
                <Checkbox label="I agree the Terms and Conditions" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth type="submit">
                Cadastre-se
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Ainda não tem uma conta?
                <Link to="/auth/sign-in">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Cadastre-se
                  </Typography>
                </Link>
              </Typography>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}

export default SignUp;
