import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Livros comprados",
    value: "120",
    footer: {
      color: "text-green-500",
      value: "R$ 600,00",
      label: "gastos no total",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Total de livros lidos",
    value: "32",
    footer: {
      color: "text-green-500",
      value: "3",
      label: "livros lidos no ultimos 30 dias",
    },
  },
  {
    color: "green",
    icon: UserPlusIcon,
    title: "Na lista de desejos",
    value: "17",
    footer: {
      color: "text-red-500",
      value: "16",
      label: "estão dipoíveis na biblioteca da fatec",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Livros para devolver",
    value: "7",
    footer: {
      color: "text-green-500",
      value: "5",
      label: "já estão com você a 30 dias",
    },
  },
];

export default statisticsCardsData;
