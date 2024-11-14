import { useState } from "react";

const Login = () => {

    // two way binding
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e) => {
        e.preventDefault()
        console.log("email is ", email);
        console.log("password is ", password);

        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className="flex flex-col items-center justify-center">
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className="text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400" type="email" placeholder='Enter your email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className="mt-3 text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400" type="password" placeholder='Enter your password' />
                    <button
                        className="text-white outline-none  border-none border-2 bg-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white mt-3" >
                        Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login