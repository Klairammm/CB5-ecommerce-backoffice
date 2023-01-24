import {
  GrCart,
  GrHomeRounded,
  GrAggregate,
  GrBook,
  GrUser,
} from "react-icons/gr";

export const navbarLinks = [
  {
    id: 1,
    label: "Home",
    route: "home",
    icon: <GrHomeRounded />,
  },
  {
    id: 2,
    label: "Categories",
    route: "categories",
    icon: <GrAggregate />,
  },
  {
    id: 3,
    label: "Products",
    route: "products",
    icon: <GrBook />,
  },
  {
    id: 4,
    label: "Users",
    route: "users",
    icon: <GrUser />,
  },
  {
    id: 5,
    label: "Orders",
    route: "orders",
    icon: <GrCart />,
  },
];
