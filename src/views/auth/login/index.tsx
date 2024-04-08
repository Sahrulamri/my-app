import Link from "next/link"
import styles from './Login.module.scss';
import { useRouter } from "next/router";

const LoginViews = () => {
    // Redirect menggunakan Next Router (Cara lain)
    const { push } = useRouter();
    const handleLogin = () => {
        push("/product");
    }
    return (
        <div className={styles.login}>
        <h1 className="text-3xl font-bold uppercase text-white" style={{textAlign: "center", marginBottom: 20}}>Login Page</h1>
            <button onClick={handleLogin}>
                <h4 className="font-bold">LOGIN</h4>
            </button>
        <p style={{marginTop: 20, textAlign: "center", color: "red", borderRadius: "10px", border: "1px solid red", padding: "10px 20px"}}>Belum punya akun? 
            <Link href={"/auth/register"}> <span style={{color: "blue"}}>Register</span></Link>
        </p>
    </div>
    )
}

export default LoginViews;