import { useForm } from 'react-hook-form';

const UseFormLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data) => {
        console.log(data);
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};

export default UseFormLogin;
