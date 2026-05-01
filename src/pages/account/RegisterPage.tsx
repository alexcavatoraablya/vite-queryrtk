import MyHeader from "../../common/MyHeader";
import MyButton from "../../common/MyButton";
import MyInput from "../../common/MyInput";
import {useFormik} from "formik";
import MyInputPassword from "../../common/MyInputPassword";
import MyInputImage from "../../common/MyInputImage";
import type {IRegister} from "../../types/account/IRegister.ts";
import {useRegisterMutation} from "../../services/apiAccount.ts";

const RegisterPage = () => {

    const [registerUser] =  useRegisterMutation();
    //post запит - це спеціальний запит на сервер, який призначений для
    //зміни даних - у більшості випадків для створення інформації
    const initValues: IRegister = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        imageFile: null
    }
    const submitHandler = async (values: IRegister) => {
        try {
            console.log("Submit value: ", values);
            const result = await registerUser(values).unwrap();
            console.log("Відправка запиту на сервер", result);
        }catch(error) {
            console.log("Стался халепа, щось пішло не так", error)
        }
        // console.log(values);
    }

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: submitHandler
    });
    //setFieldValue відповідає за значення у формі самого formika
    //handleChange
    const {handleSubmit, handleChange, setFieldValue} = formik;

    const onHandleImageSelect = (file: File | null, name: string) => {
        console.log("Select image handle", file, name);
        setFieldValue(name, file); //зберігаємо фото у середину форміка
    }

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
                                     id={"imageFile"}
                                  objectFit = {"cover"}
                                  previewHeight = {"h-96"}
                                     onChange={onHandleImageSelect}
                    />


                    <MyButton text={"Створити"}/>
                </form>
            </div>
        </>
    )
}

export default RegisterPage;