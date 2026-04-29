import MyHeader from "../../common/MyHeader";
import MyButton from "../../common/MyButton";
import MyInput from "../../common/MyInput";
import type {ICreatePost} from "../../types/ICreatePost.ts";
import {useFormik} from "formik";
import {useCreatePostMutation} from "../../services/apiPosts.ts";
import MyInputPassword from "../../common/MyInputPassword";
import MyInputImage from "../../common/MyInputImage";

const RegisterPage = () => {

    const [createPost] =  useCreatePostMutation();
    //post запит - це спеціальний запит на сервер, який призначений для
    //зміни даних - у більшості випадків для створення інформації
    const initValues: ICreatePost = {
        title: "",
        body: "",
        userId: 0
    }
    const submitHandler = async (values: ICreatePost) => {
        try {
            console.log("Submit value: ", values);
            // const result = await createPost(values).unwrap();
            // console.log("Відправка запиту на сервер", result);
        }catch(error) {
            console.log("Стался халепа, щось пішло не так", error)
        }
        // console.log(values);
    }

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: submitHandler
    });
    //handleChange
    const {handleSubmit, handleChange} = formik;

    return (
        <>
            <div className="max-w-2xl mx-auto p-8">
                <MyHeader text={"Реєстрація"}/>
                <form onSubmit={handleSubmit}>
                    <MyInput label={"Прізвище"}
                             placeholder={"Вкажіть прізвище"}
                             id={"lastName"}
                             onChange={handleChange}
                    />

                    <MyInput label={"Ім'я"}
                             placeholder={"Вкажіть ім'я"}
                             id={"firstName"}
                             onChange={handleChange}
                    />

                    <MyInput label={"Email"}
                             placeholder={"Вкажіть пошту"}
                             id={"email"}
                             onChange={handleChange}
                    />

                    <MyInputPassword label={"Пароль"}
                             placeholder={"Вкажіть пароль"}
                             id={"password"}
                             onChange={handleChange}
                    />

                    <MyInputImage label={"Фото користувача"}
                                     placeholder={"Вкажіть фото"}
                                     id={"ImageFile"}
                                  objectFit = {"contain"}
                                  previewHeight = {"center"}
                                     onChange={handleChange}
                    />


                    <MyButton text={"Створити"}/>
                </form>
            </div>
        </>
    )
}

export default RegisterPage;