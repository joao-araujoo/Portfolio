import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home />
  },
  {
    path: "/about",
    // element: <About />
  },
  {
    path: "/projects",
    // element: <Projects />
  },
  {
    path: "/contact",
    // element: <Contact />
  },
  {
    path: "/*",
    // element: <ErrorPage />
  }
])

export default router;