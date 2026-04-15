interface MyInputProps {
    text: string;
}

const MyInput: React.FC<MyInputProps> = () => {
    return (
        <>
            <input className={"bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"} />
        </>
    );
}

export default MyInput;
