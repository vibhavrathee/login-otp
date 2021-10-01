import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './mobile.css'
export default function Mobile({setDisplayMobile, mobileNumber, setMobileNumber}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Handling mobile info ", mobileNumber);
        setDisplayMobile(false);
    }
    return (
        <div className="mobilePage">
                <img id="myImg" src="https://miro.medium.com/max/3840/1*4HF_xqCCxBmgXt5PprsGFg.png" alt="" />
                <div id="info">
                    <h2 className="myHeading">Get Started</h2>
                    <p className="text-muted">We will send you a One Time Password on this mobile number</p>
                </div>
                <Form id="myForm" autoComplete="off">
                    <div className="textOnInput mb-4">
                        <label htmlFor="inputText">Mobile Number</label>
                        <input className="form-control" id="inputText" type="tel" value={mobileNumber} 
                            onChange={(e) => setMobileNumber(e.target.value)} />
                    </div>
                    <div className="d-grid">
                        <Button onClick={handleSubmit} variant="primary" id="myBtn">
                            Get OTP
                        </Button>
                    </div>
                </Form>
            <div style={{ borderTop: "3px solid black ", width: "120px", marginBottom:"2px" }}></div>
        </div>
    )
}
