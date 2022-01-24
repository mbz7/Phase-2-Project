import React from "react";
import Search from "./Search";

function Header() {
    return (
        <div>
            <input type="text" placeholder="Search a Resort...">
                <Search />
            </input>
        </div>
    )
}

export default Header;