import { useState } from "react";
const Header = () => {
    const [logStatus, setLogStatus] = useState("Login")
    return (
        <header className="logo flex flex-row justify-between p-5 m-1 border-none outline-none shadow-lg shadow-green-100">
            <div >LOGO</div>
            <nav className='flex flex-row list-none w-1/2 justify-evenly'>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
                <li onClick={() => {
                    if (logStatus === "Login") {
                        setLogStatus("Logout");
                    }
                    if (logStatus === "Logout") {
                        setLogStatus("Login");
                    }
                }}
                    className="cursor-pointer border-none outline-none bg-lime-500 p-1 px-2 rounded-lg text-white text-sm"
                >{logStatus}</li>
            </nav>
        </header>
    )
}

export default Header;