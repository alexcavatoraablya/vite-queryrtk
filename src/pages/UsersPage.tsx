import {useGetUsersQuery} from "../services/apiUsers.ts";

const UsersPage = () => {

    const {data: users} = useGetUsersQuery();

    console.log('Hello App', users)

    return (
        <>
            <h1 className={"text-center"}>Список користувачів</h1>
        </>
    )
}

export default UsersPage;