import { useForm } from 'react-hook-form';

export default function ReactHookForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <>
            <h2>React Hook Form</h2>
            <p>Use React Hook Form for efficient form handling.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('username')} />
                <input type="email" {...register('email')} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}