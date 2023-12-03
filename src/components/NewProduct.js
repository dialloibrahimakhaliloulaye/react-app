import React, { useState } from "react";
import { saveProduct } from "./app/app";

export default function NewProduct (){
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [checked, setChecked] = useState(false)
    const handleSaveProduct = (event)=>{
        event.preventDefault();
        let product = {name, price, checked};
        saveProduct(product).then((resp)=>{
            alert(JSON.stringify(resp.data));
        })
    }
    return (
        <div className="row">
            <div className="col-md-8 m-auto">
                <div className="card">
                    <div className="crad-body p-3">
                        <form onSubmit={handleSaveProduct}>
                            <div className="mb-3">
                                <label className="form-label">Name: </label>
                                <input onChange={(e)=>setName(e.target.value)}
                                    value={name} 
                                    className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price: </label>
                                <input onChange={(e)=>setPrice(e.target.value)} 
                                    value={price}
                                    className="form-control"></input>
                            </div>
                            <div className="mb-3 form-check">
                                <input onChange={(e)=>setChecked(e.target.value)}
                                checked={checked}
                                    className="form-check-input" type="checkbox"></input>
                                <label className="form-check-label">checked </label>
                            </div>
                            <button className="btn btn-success">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}