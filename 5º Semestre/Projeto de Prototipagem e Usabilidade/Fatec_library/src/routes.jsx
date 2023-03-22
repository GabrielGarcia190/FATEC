import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Notifications, Search } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { DotOutline, SignOut, UserGear } from "@phosphor-icons/react";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Home",
        path: "/home",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "dashboard",
        path: "/profile",
        element: <Home />,
      },

      {
        icon: <MagnifyingGlassIcon {...icon} />,
        name: "Pesquisar",
        path: "/search",
        element: <Search />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "notifactions",
        path: "/notifactions",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "Autenticação",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Fazer Login",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "Cadastre-se",
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        icon: <SignOut {...icon} />,
        name: "Sair",
        path: "/sign-out",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
