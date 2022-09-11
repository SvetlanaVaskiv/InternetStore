import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import BasketPage from "./pages/BasketPage";
import DevicePage from "./pages/DevicePage";
import  HomePage  from "./pages/HomePage";
import Shop from "./pages/Shop";
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ROOT_ROUTE, SHOP_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE+'/:id',
        Component: BasketPage
    }
]

export const publicRoutes = [
  {
    path: ROOT_ROUTE,
    Component: HomePage,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    Component: DevicePage,
  },
];
