import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/homepage/Homepage";
import About from "./pages/about/About";
import Service from "./pages/Service";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import FAQPage from "./pages/FAQPage";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/contacts",
          element: <Contact />,
        },
        {
          path: "/faq",
          element: <FAQPage />,
        },
        {
          path: "/terms",
          element: <Terms />,
        },
        {
          path: "/privacy",
          element: <Privacy />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
