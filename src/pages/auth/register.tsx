import Link from "next/link";

const RegisterPage = () => {

    return (
        <div>
            <h1>Register Page</h1>
            <h4>Register</h4>
            <p>Sudah punya akun? 
                <Link href={"/auth/login"}>Login</Link>
            </p>
        </div>
    )
}
export default RegisterPage;