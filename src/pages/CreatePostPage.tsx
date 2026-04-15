import MyHeader from "../common/MyHeader";
import MyButton from "../common/MyButton";

const CreatePostPage = () => {
    //post - спеціальний запит на сервер який призначений для зміни даних
    //у більшості випадків
    return (
        <>
            <MyHeader text={"Список пост"} />

            <MyButton text={"Створити"} />
        </>
    )
}

export default CreatePostPage;