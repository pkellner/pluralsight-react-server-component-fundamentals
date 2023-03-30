import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CookieList(): JSX.Element {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const cookies: string[] = [
        "Chocolate Chip Cookies",
        "Oatmeal Raisin Cookies",
        "Sugar Cookies",
        "Peanut Butter Cookies",
        "Snickerdoodle Cookies",
    ];

    const filteredCookies: string[] = cookies.filter((cookie: string) =>
        cookie.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container py-4">
            <h1>Cookie Types</h1>
            <div className="row">
                <div className="col-md-8">
                    <form>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for cookies..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ul className="list-group">
                {filteredCookies.map((cookie: string) => (
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
