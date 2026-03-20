import { NavLink } from "react-router";

export function Error() {
    return (
        <>
            <div className="text-5xl h-screen w-screen flex flex-col items-center justify-center">
                <div className="font-semibold animate-pulse">ERROR 404</div>
                <hr className="border-1 m-5 w-5 text-slate-200"/>
                <div>That content could not be found.</div>
                <div>Return to the main <NavLink to="/">website.</NavLink></div>
            </div>
        </>
    );
}
