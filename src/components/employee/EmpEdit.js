import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
const EmpEdit = () => {

    const { empid } = useParams();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [validation, setValidation] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const employee = {
            id, name, email, phone, isActive
        }

        fetch("http://localhost:3006/employee/" + empid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(employee)
        })
            .then((response) => {
                alert("Saved successfully. ");
                navigate("/");
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        fetch("http://localhost:3006/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            //setEmpData(resp);
            setId(resp.id);
            setName(resp.name)
            setEmail(resp.email)
            setPhone(resp.phone)
            setIsActive(resp.isActive)
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Employee Edit</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={(e) => setValidation(true)} onChange={(e) => setName(e.target.value)} className="form-control"></input>
                                            {
                                                name.length == 0 && validation && <span className="text-danger">Enter the name</span>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={isActive} onChange={(e) => setIsActive(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label className="form-check-label">Is Active</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link className="btn btn-danger" to="/">Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmpEdit;