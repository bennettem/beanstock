import React from "react";
// import { capitalizeFirstLetter } from "../utils/helpers";


function Nav (props) {

    const pages = ["Home", "About", "Portfolio", "Contact", "Resume"]
    return (
<nav>
    <ul>
        {pages.map(pages => (
            <li key={pages}>
                <a href={"#" + pages.toLowerCase()}
                onClick={() => props.handlePage(pages)}
                className={
                    props.currentPage === pages ? "nav-link active" : "nav-link"
                } > {pages}
                </a>
            </li>
        ))}
    </ul>
</nav>
    );
}

export default Nav;



