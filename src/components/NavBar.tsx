import { NavLink } from "react-router";

export function NavBar() {
    return (
        <>
            <div className="flex">
                <NavLink to="/" className="">NJ</NavLink>
                <NavLink to="/projects" className="">Projects</NavLink>
                <NavLink to="/work" className="">Work</NavLink>
            </div>
        </>
    );
}
