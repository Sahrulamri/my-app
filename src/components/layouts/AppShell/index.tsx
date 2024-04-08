import { useRouter } from "next/router";
import Navbar from "../Navbar"

type AppShellProps = {
    children: React.ReactNode;
}
// Disable navbar
const disableNavbar = ["/auth/login", "/auth/register"];


const AppShell = (props : AppShellProps) => {
    const {children} = props;
    const {pathname} = useRouter();
    return (
        <main>
            {/* disable navbar */}
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    )
}
export default AppShell;