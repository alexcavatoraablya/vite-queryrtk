import MyHeader from "../common/MyHeader";
import MyButton from "../common/MyButton";
import MyInput from "../common/MyInput";
import type {ICreatePost} from "../types/ICreatePost.ts";
import {Formik, useFormik} from "formik";
import {useCreatePostMutation} from "../services/apiPosts.ts";

const RegisterPage = () => {

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
            <MyHeader text={"Реєстрація"} />
                <form onSubmit={handleSubmit}>
            <MyInput label={"Ім'я"}
                     placeholder = {"Вкажіть ім'я"}
                     id={"FirstName"}
                     onChange={handleChange} />

            <MyInput label={"Прізвище"}
                     placeholder = {"Вкажіть прізвище"}
                     id={"LastName"}
                     onChange={handleChange} />

            <MyInput label={"Email користувача"}
                     placeholder = {"Вкажіть Email"}
                     id={"Email"}
                     onChange={handleChange} />

            <MyInput label={"Пароль користувача"}
                      placeholder = {"Вкажіть пароль"}
                      id={"Password"}
                      onChange={handleChange} />

            <MyInput label={"Фото користувача"}
                      placeholder = {"Вкажіть фото"}
                      id={"ImageFile"}
                      onChange={handleChange} />

            <MyButton text={"Зареєструватися"} />
                </form>
            </div>
        </>
    )
}

export default RegisterPage;