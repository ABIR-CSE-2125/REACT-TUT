# REACT-TUT

TEST

HOOKS Are used to reflect change of variable in ui so that we don't have to bohter about the js complexities

Props are like parametres of functions

to handle routing use react-router-dom and the following methods

1. <RouterProvider router={router} /> # router is a prop
2. const router = createBrowserRouter(
   createRoutesFromElements(
   <Route path="/" element={<Layout />}> --> base url
   |
   | # routes
   <Route path="" element={<Home />} />
   <Route path="about" element={<About />} />
   <Route path="contact" element={<Contact />} />
   </Route>
   )
   );
