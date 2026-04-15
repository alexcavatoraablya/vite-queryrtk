import MyHeader from "../common/MyHeader";
import MyButton from "../common/MyButton";
import MyInput from "../common/MyInput";

const CreatePostPage = () => {
    //post - спеціальний запит на сервер який призначений для зміни даних
    //у більшості випадків
    return (
        <>
            <MyHeader text={"Список пост"} />
            <MyInput text={"Ввести"} />
            <MyButton text={"Створити"} />
        </>
    )
}

export default CreatePostPage;