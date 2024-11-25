
// Importing necessary modules

import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard"
import Error from "./pages/error"
import Home from "./pages/Home"
import AboutPage from "./pages/about"
import ProjectsPage from "./pages/Projects"
import EducationPage from "./pages/education"
import AchievementPage from "./pages/achievements"
import ContactMePage from "./pages/contactMePage"
import FavoritePage from "./pages/favouriteRepos"

// Defining the App component
function App() {
  const router = createBrowserRouter([
  
    {
      path: "/",
      element: <Dashboard />,
      errorElement:<Error/>,
      children:[
        {
          path: "",
          element:<Home />,

        },
        {
          path: "About-Me",
          element:<AboutPage />,
          children:[
            {
              path: "Contact-Me",
              element:<ContactMePage/>,
            },
          ]
        },
        {
          path: "My-Projects",
          element:<ProjectsPage />,

        },
        {
          path: "Education-Background",
          element:<EducationPage />,

        },
        {
          path: "Achievements",
          element:<AchievementPage />,

        },
        {
          path: "Contact-Me",
          element:<ContactMePage/>,

        },
        {
          path: "Favourite-Repositories",
          element:<FavoritePage/>,

        },



      ],
    },


  ])
  // Returning the RouterProvider component
  return (

    <RouterProvider router={router}/>
      
  )
  
}

export default App
