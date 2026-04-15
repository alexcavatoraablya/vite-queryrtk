import {useGetUsersQuery} from "../services/apiUsers.ts";
import MyHeader from "../common/MyHeader";
import MyLink from "../common/MyLink";

const UsersPage = () => {

    const {data: users} = useGetUsersQuery();

    console.log('Hello App', users)

    return (
        <>
            <MyHeader text={"Список користувачів"} />
            <MyLink text={"Перейти до створення"} to={"/posts/create"} />
        </>
    )
}

export default UsersPage;