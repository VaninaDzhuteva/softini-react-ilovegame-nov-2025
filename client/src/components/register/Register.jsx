import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm.js";

export default function Register({
    user, onRegister
}) {
    const navigate = useNavigate();

    const registerHandler = (values) => {
        const { email,password,confirmPassword } = values;

        console.log(email, password, confirmPassword);
        

        // Validation
        if (!email || !password) {
            return alert('Email and password are required')
        }

        if (password !== confirmPassword) {
            return alert('Password missmatch!');
        }

        try {
            onRegister(email, password);

            navigate('/')
        } catch (error) {
            alert(error.message)
        }
    }

    const {
        register,
        formAction,
    } = useForm(registerHandler, {
        email: '',
        password: '',
        'confirmPassword': ''
    })

    return (
        <section id="register-page" className="content auth">
            <form id="register" action={registerHandler}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        {...register('email')}
                        placeholder="Your Email" />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        
                        id="register-password"
                        placeholder="Password"
                        {...register('password')}
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        {...register('confirmPassword')}
                        placeholder="Repeat Password"
                    />
                    <input className="btn submit" type="submit" defaultValue="Register" />
                </div>
            </form>
        </section>
    )
}