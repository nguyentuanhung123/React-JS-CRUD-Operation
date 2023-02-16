import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const EmpDetail = () => {

    const { empid } = useParams();
    const [empData, setEmpData] = useState({});

    useEffect(() => {
        fetch("http://localhost:3006/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            setEmpData(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div>
            {
                empData &&
                <div>
                    <h2>The Employee name is : {empData.name} ({empData.id})</h2>
                    <h3>Contact Details</h3>
                    <h5>Email is : {empData.email}</h5>
                    <h5>Phone is : {empData.phone}</h5>
                    <Link className="btn btn-danger" to="/">Back to Listing</Link>
                </div>
            }
        </div>
    )
}

export default EmpDetail;