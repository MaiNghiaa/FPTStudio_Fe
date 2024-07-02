import { lazy, memo, useEffect, Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  PATH_HOME,
  PATH_NEWS,
  PATH_PRODUCT,
  PATH_PRODUCT_DETAIL,
  PATH_FCARE,
  PATH_EVENTS,
  PATH_KHUYENMAI,
  PATH_CART,
} from "./path";
import LandingPage from "../Pages/User/LandingPage/LandingPage";
import ListProduct from "../Pages/User/ListProduct/ListItem";
import ProductDetail from "../Pages/User/ListProduct/ProductDetail";
import Events from "../Pages/User/Events/Events";
import Fcare from "../Pages/User/Fcare/Fcare";
import Tintuc from "../Pages/User/Tintuc/Tintuc";
import Orders from "../Pages/User/Thanhtoan/Orders";
import KhuyenMai from "../Pages/User/Khuyenmai/KhuyenMai";
import Cart from "../Pages/User/Thanhtoan/Cart";
export const normalRoutes = [PATH_HOME];
export const authRoutes = [];

const PageLayout = lazy(() => import("../Layouts/PageLayout"));

function Router() {
  const location = useLocation();

  const routes = [
    {
      element: (
        <Suspense fallback={<p className="suspense_loading">Loading...</p>}>
          <TransitionGroup>
            <CSSTransition
              key={location.key || ""}
              timeout={{ enter: 300, exit: 300 }}
              classNames="fade"
            >
              <PageLayout>
                <LandingPage />
              </PageLayout>
            </CSSTransition>
          </TransitionGroup>
        </Suspense>
      ),
      children: [
        { path: PATH_HOME, element: <LandingPage /> },
        { path: PATH_CART, element: <Cart /> },
        { path: "/dondadat", element: <Orders /> },
        { path: `${PATH_PRODUCT}`, element: <ListProduct /> },
        {
          path: PATH_PRODUCT_DETAIL,
          element: <ProductDetail />,
        },
        { path: PATH_NEWS, element: <Tintuc /> },
        { path: PATH_EVENTS, element: <Events /> },
        { path: PATH_FCARE, element: <Fcare /> },
        { path: PATH_KHUYENMAI, element: <KhuyenMai /> },
      ],
    },
  ];

  useEffect(() => {}, []);

  return useRoutes(routes);
}

export default memo(Router);
