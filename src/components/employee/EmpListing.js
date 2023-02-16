import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {

    const [empData, setEmpData] = useState([]);
    const navigate = useNavigate();

    const loadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }

    const loadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }

    const RemoveFunction = (id) => {
        if (window.confirm("Do you want to remove ?")) {
            fetch("http://localhost:3006/employee/" + id, {
                method: "DELETE",
            })
                .then((response) => {
                    alert("Removed successfully. ");
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
    }

    useEffect(() => {
        fetch("http://localhost:3006/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            setEmpData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                empData &&
                                empData.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <a onClick={() => { loadEdit(item.id) }} className="btn btn-success">Edit</a>
                                                <a onClick={() => { RemoveFunction(item.id) }} className="btn btn-danger">Remove</a>
                                                <a onClick={() => { loadDetail(item.id) }} className="btn btn-primary">Details</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmpListing;