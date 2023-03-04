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



export function SignIn() {

  function Entrar(event) {
    event.preventDefault();
    window.location.href ="http://localhost:5173/dashboard/profile";
  }

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1589159856415-286795c9eb3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <form onSubmit={Entrar}>
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
            <Input type="email" label="Email" size="lg" required/>
            <Input type="password" label="Senha" size="lg" required/>
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
    </>
  );
}

export default SignIn;
