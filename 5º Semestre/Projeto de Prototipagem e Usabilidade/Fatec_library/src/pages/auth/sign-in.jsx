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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { app } from "../../../firebase/connection";
import { FacebookLogo, GoogleLogo } from "@phosphor-icons/react";
import { LogarComGoole } from "../../../firebase/signWithGoogle";
import { auth } from "../../../firebase/connection";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { LogarComFacebook } from "../../../firebase/signWithFacebook";







export function SignIn() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const [user, setUser] = useState(null);

  async function logado() {
    await auth.onAuthStateChanged((user) => {
      if (user) {
        alert("Você já está logado")
        window.location.href = "http://localhost:5173/dashboard/home"
        setUser(user);
        return;
      } else {
        console.log("Não está logado");
        setUser(null);
      }
    })
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function LoginComEmaileSenha(e) {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        window.location.href = "http://localhost:5173/dashboard/home"
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log("fodeo");
        const errorMessage = error.message;
      });

  }


  return (
    <div onLoad={logado}>
      <img
        src="https://images.unsplash.com/photo-1589159856415-286795c9eb3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <form onSubmit={LoginComEmaileSenha}>
        <div className="container mx-auto p-4">
          <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
            <CardHeader
              variant="gradient"
              color="red"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Fazer Login
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input type="email" label="Email" size="lg" required onChange={(e) => setEmail(e.target.value)} />
              <Input type="password" label="Senha" size="lg" required onChange={(e) => setPassword(e.target.value)} />
              <Button variant="filled" color="red" fullWidth onClick={LogarComGoole} className="flex flex-row items-center hover:bg-white hover:text-red-900">
                <GoogleLogo size={30} />
                <p className="ml-12">Entrar com Google</p>
              </Button>
              <Button variant="filled" color="red" fullWidth onClick={LogarComFacebook} className="flex flex-row items-center hover:bg-white hover:text-red-900">
                <FacebookLogo size={30} />
                <p className="ml-12">Entrar com Facebook</p>
              </Button>
              <div className="-ml-2.5">
                <Checkbox label="Lembrar de Mim" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="filled" color="red" fullWidth type="submit">
                Fazer Login
              </Button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Não tem cadastro?
                <Link to="/auth/sign-up">
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
        </div>
      </form>
    </div>
  );
}

export default SignIn;
