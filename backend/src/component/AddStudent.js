import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import schoolService from "../service/school.service1";
import 'bootstrap';
import './AddStudent.css';

const AddStudent = () => {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [contact, setContact] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [cls, setClass] = useState('');
    const [address, setAddress] = useState('');
    const [fees, setFees] = useState('');
    const [division, setDivision] = useState('');
    const history = useHistory();

    const addStudent = (e) => {
        e.preventDefault();

        const student = { fname, lname, dob, gender, contact, userName, password, cls, address, fees, division };
        schoolService.addstudent(student)
            .then(response => {
                console.log("student verified ", response.data);
                history.push("/student-section");
            })
            .catch(error => {
                console.log('something went wrong', error);

            })
    }

    useEffect(() => {
    }, [])
    return (
        <>
            <div class="container">
                <a href="/add-student" class="btn btn-primary active" >Add New Student</a><br></br><br></br>
                <a href="/student-list" class="btn btn-primary">List of Students</a><br></br><br></br>
                <a href="/student-pramote" class="btn btn-primary ">Promote Student</a><br></br><br></br>
                <a href="/admin-dashboard" class="btn btn-primary">Back</a>
            </div>
            <h2 class="header">Student Registration Form</h2>
            <br />
            <div class="sutdentRegForm">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="fname">First Name</label>
                            <input type="text" value={fname}
                                onChange={(e) => setFName(e.target.value)} class="form-control" id="fname" placeholder="First Name" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="lname">Last Name</label>
                            <input type="text" value={lname}
                                onChange={(e) => setLName(e.target.value)} class="form-control" id="lname" placeholder="Last Name" />
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="dob">Date of Birth</label>
                            <input type="text" value={dob}
                                onChange={(e) => setDob(e.target.value)} class="form-control" id="dob" placeholder="YYYY-mm-dd" />
                        </div>
                        <div class="form-group col-md-3">
                            <label for="gender">Gender</label>
                            <select id="gender" value={gender}
                                onChange={(e) => setGender(e.target.value)} class="form-control">
                                <option selected>Choose...</option>
                                <option value="Male" >Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div class="form-group col-md-5">
                            <label for="contact">Contact</label>
                            <input type="text" value={contact}
                                onChange={(e) => setContact(e.target.value)} class="form-control" id="contact" placeholder="Contact" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="username">User Name</label>
                            <input type="text" value={userName}
                                onChange={(e) => setUserName(e.target.value)} class="form-control" id="username" placeholder="User Name" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="password">Password</label>
                            <input type="text" value={password}
                                onChange={(e) => setPassword(e.target.value)} class="form-control" id="password" placeholder="Password" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="class">Class</label>
                            <select id="class" value={cls}
                                onChange={(e) => setClass(e.target.value)} class="form-control">
                                <option selected>Choose...</option>
                                <option value="Std. I" >Std. I</option>
                                <option value="Std. II" >Std. II</option>
                                <option value="Std. III" >Std. III</option>
                                <option value="Std. IV" >Std. IV</option>
                                <option value="Std. V" >Std. V</option>
                                <option value="Std. VI" >Std. VI</option>
                                <option value="Std. VII" >Std. VII</option>
                                <option value="Std. VIII" >Std. VIII</option>
                                <option value="Std. IX" >Std. IX</option>
                                <option value="Std. X" >Std. X</option>
                            </select>
                        </div>
                        <div class="form-group col-md-8">
                            <label for="address">Address</label>
                            <input type="text" value={address}
                                onChange={(e) => setAddress(e.target.value)} class="form-control" id="address" placeholder="Address" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="fees">Fees</label>
                            <input type="text" value={fees}
                                onChange={(e) => setFees(e.target.value)} class="form-control" id="fees" placeholder="Fees" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="devision">Division</label>
                            <select id="division" value={division}
                                onChange={(e) => setDivision(e.target.value)} class="form-control">
                                <option selected>Choose...</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" onClick={(e) => addStudent(e)} class="btn btn-primary">Register</button>
                </form>
            </div>
        </>
    );
}

export default AddStudent;