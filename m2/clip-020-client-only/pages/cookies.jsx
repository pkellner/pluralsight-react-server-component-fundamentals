import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CookieList() {
    const [searchTerm, setSearchTerm] = useState("");

    const cookies = [
        "Chocolate Chip Cookies",
        "Oatmeal Raisin Cookies",
        "Sugar Cookies",
        "Peanut Butter Cookies",
    ];

    const filteredCookies = cookies.filter((cookie) =>
        cookie.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container py-4">
            <h1>Cookie Types</h1>
            <div className="row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <ul className="list-group">
                {filteredCookies.map((cookie) => (
                    <li key={cookie} className="list-group-item border-0 ps-0">
                        <div className="card border-0 bg-warning">
                            <div className="card-body">{cookie}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CookieList;
