import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

function RegisterPage() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()

    async function registerUser(e) {
        e.preventDefault()
        try {
            await axios.post('/register', {
                name,
                username,
                email,
                password,
            })
            navigate('/')
        } catch (error) {
            console.error("Registration error:", error)
            alert('Registration failed, please try again')
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className='mt-20 grow flex items-center justify-around'>
            <div className='mb-32'>
                <h1 className='text-4xl text-center mb-4'>Register</h1>
                <form className='max-w-md mx-auto ' onSubmit={registerUser}>
                    <input
                        type="text"
                        placeholder='John Doe'
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <input
                        type="text"
                        placeholder='@john'
                        value={username}
                        onChange={e => setUsername(e.target.value)} />
                    <input
                        type="email"
                        placeholder='your@email.com'
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder='Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                        />
                        <span
                            onClick={togglePasswordVisibility}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        >
                            {showPassword ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>

                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                            )}
                        </span>
                    </div>
                    <button className='primary'>Register</button>
                    <div className='text-center py-2 text-gray-700'>Already have an account?  <Link className='underline text-black' to={'/login'}>  Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage