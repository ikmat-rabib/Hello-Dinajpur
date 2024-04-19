import Link from "next/link";


const RegisterPage = () => {
    return (
        <>
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/RyvTwHX/ramsagar-dinajpur.jpg)' }}>
                <div className="hero-content ">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl glass">
                        <form className="card-body">

                            <div className="form-control">
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <input type="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot Password?</a>
                                </label>
                            </div>

                            <div className="form-control ">
                                <button className="btn bg-teal-500 hover:bg-green-600 border-0 text-green-50">Register</button>
                            </div>
                        </form>
                        <Link href="/login" className="text-green-950 text-center py-4 border-dashed border-t">Login with an existing account</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;