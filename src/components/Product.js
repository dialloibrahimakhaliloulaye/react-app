import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";

export default function Product() {
    const [product, setProduct] = useState([
        {id: 1, name: "Computer", price: 4200, checked: true},
        {id: 2, name: "Printer", price: 1500, checked: false},
        {id: 3, name: "Smart phone", price: 3400, checked: true},
        {id: 4, name: "Apple", price: 4000, checked: true},
    ])
    return (
        <div className="p-1 m-1">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th><th>Name</th><th>Price</th><th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    product.map(p=>(
                                        <tr>
                                            <td>{p.id}</td>
                                            <td>{p.name}</td>
                                            <td>{p.price}</td>
                                            <td>
                                                <button className="btn btn-outline-success">
                                                <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}