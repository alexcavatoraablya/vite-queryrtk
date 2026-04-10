import './App.css'
import UsersPage from './pages/UsersPage.tsx';
//import APP_ENV from "./env";
import {Route, Routes} from "react-router-dom";
import CreatePostPage from "./pages/CreatePostPage.tsx";

function App() {



  return (
    <>
        <Routes>
            <Route path="/">
                <Route index element={<UsersPage/>} />
                <Route path={"users"}>
                    <Route path={"create"} element={<CreatePostPage/>} />
                </Route>
            </Route>
        </Routes>
    </>
  )
}

export default App