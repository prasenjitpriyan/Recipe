import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="w-full bg-grey-lightest" style={{ paddingTop: "4rem" }}>
            <div className="container mx-auto py-8">
                <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                    <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">Already Registered? Sign In..</div>
                    <div className="py-4 px-8">
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email address" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">Password</label>
                            <input className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password" />
                            <p className="text-grey text-xs mt-1">Match with existing</p>
                        </div>
                        <div className="flex items-center justify-between mt-8">
                            <button className="btn" type="submit">
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
                <p className="text-center my-4">
                    <Link to="/Register" className="text-grey-dark text-sm no-underline hover:text-grey-darker">New user? Register Yourself...</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
