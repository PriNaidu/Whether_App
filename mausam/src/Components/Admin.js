import {link} from "react-router-dom";

const Admin = () => {
    return(
        <section>
            <h1>Admin Pages</h1>
            <br/>
            <p>You must have been assigned an Admin role.</p>
            <div className="flexGrow">
                <link to="/">Home</link>
            </div>
        </section>
    )
}