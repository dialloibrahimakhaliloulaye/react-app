import { faCheckCircle, faCircle } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import { checkProduct, deleteProduct, getProducts } from "./app/app";

export default function Product() {
    const [product, setProduct] = useState([])
    useEffect(()=>{
        handleGetProducts();
    },[])
    const handleGetProducts=()=>{
        getProducts().then(resp=>{
            setProduct(resp.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    function handleDeleteProduct(prod){
        deleteProduct(prod).then(()=>{
            const newProduct = product.filter((p)=>p.id!=prod.id);
            setProduct(newProduct);  
        })
    }
    function handleCheckProduct(prod){
        checkProduct(prod).then(()=>{
            const newProduct = product.map((p)=>{
                if(p.id==prod.id) p.checked = !p.checked
                return p;
            });
            setProduct(newProduct);
        })
    }
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
                                        <tr key={p.id}>
                                            <td>{p.id}</td>
                                            <td>{p.name}</td>
                                            <td>{p.price}</td>
                                            <td>
                                                <button onClick={()=>handleCheckProduct(p)}
                                                    className="btn btn-outline-success">
                                                <FontAwesomeIcon icon={p.checked?faCheckCircle:faCircle}></FontAwesomeIcon>
                                                </button>
                                            </td>
                                            <td>
                                                <button onClick={()=>handleDeleteProduct(p)}
                                                className="btn btn-outline-danger">
                                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
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