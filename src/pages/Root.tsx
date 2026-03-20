import { Outlet } from "react-router";
import { NavBar } from "../components/NavBar";

export function Root({ children }: { children?: React.ReactNode }) {
    return (
        <>
            <NavBar/>
            {children || <Outlet/>}
        </>
    );
}
