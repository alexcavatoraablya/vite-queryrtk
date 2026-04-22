import MyHeader from "../common/MyHeader";
import MyButton from "../common/MyButton";
import MyInput from "../common/MyInput";
import type {ICreatePost} from "../types/ICreatePost.ts";
import {Formik, useFormik} from "formik";
import {useCreatePostMutation} from "../services/apiPosts.ts";

const CreatePostPage = () => {

    const [ createPost ] = useCreatePostMutation();
    //post - спеціальний запит на сервер який призначений для зміни даних
    //у більшості випадків
    const initValues: ICreatePost = {
        title: "",
        body: "",
        userId: 0
    }
    const submitHandler = async (values:ICreatePost) => {
        try {
            const result = await createPost(values).unwrap();
            console.log("відправка запиту на сервер", result);
        } catch(error) {
            console.log("сталася проблема", error)
        }

        //console.log(values);
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