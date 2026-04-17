import MyHeader from "../common/MyHeader";
import MyButton from "../common/MyButton";
import MyInput from "../common/MyInput";
import type {ICreatePost} from "../types/ICreatePost.ts";
import {useFormik} from "formik";

const CreatePostPage = () => {
    //post - спеціальний запит на сервер який призначений для зміни даних
    //у більшості випадків
    const initValues:ICreatePost = {
        title: "",
        body: "",
        userId: 0
    }
    const submitHandler = (values:ICreatePost) => {
        console.log(values);
    }

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: submitHandler
    });
    const {handleSubmit, handleChange} = formik;

    return (
        <>
            <div className="max-w-2xl mx-auto p-8">
            <MyHeader text={"Створити пост"} />
                <form onSubmit={handleSubmit}>
            <MyInput label={"Назва"}
                     placeholder = {"Вкажіть назву"}
                     id={"title"}
                     onChange={handleChange} />

            <MyInput label={"Вміст"}
                     placeholder = {"Вкажіть вміст"}
                     id={"body"}
                     onChange={handleChange} />

            <MyInput label={"ID користувача"}
                     placeholder = {"Вкажіть UserID"}
                     id={"userId"}
                     onChange={handleChange} />

            <MyButton text={"Створити"} />
                </form>
            </div>
        </>
    )
}

export default CreatePostPage;