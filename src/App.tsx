import './App.css'
//import APP_ENV from "./env";
import {useGetUsersQuery} from "./services/apiUsers.ts";

function App() {

    const {data: users} = useGetUsersQuery();

    console.log('Hello App', users)

  return (
    <>
      <h1>Привіт друзі</h1>
    </>
  )
}

export default App