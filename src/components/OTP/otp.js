import React, {useState} from 'react'
import { postRequest } from '../../actions';
import { Form, Button} from 'react-bootstrap'
import {GrPrevious} from 'react-icons/gr'
import './otp.css'
export default function Otp({setData, setDisplayMobile, mobileNumber, setMobileNumber}) {
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("Handling submit ", otp.join(""));
        const data = await postRequest({
            // "mobile": "9812345678",
            // "otp": "1234"
            "mobile" : mobileNumber,
            "otp": otp.join("")
        });
        console.log(data);
        setData(data.message);
        clear();
        setDisplayMobile(true);
    }
    const handleChange = (element, index) => {
        if(isNaN(element.value)) return false;
        setOtp(otp.map((d, idx) => idx === index ? element.value : d));

        //Focus on next element now
        if(element.nextSibling) {
            element.nextSibling.focus();
        }
    }
    const clear = () => {
        setMobileNumber('');
    }
    const goBack = () => {
        setDisplayMobile(true);
    }
    return (
        <div className="otpPage">
            <Button variant="none" className="myPrevBtn" onClick={goBack}><GrPrevious/></Button>
            <>
                <img id="myImg" src="https://miro.medium.com/max/3840/1*4HF_xqCCxBmgXt5PprsGFg.png" alt="" />
                <div id="info">
                    <h3  className="myHeading">OTP Verification</h3>
                    <p className="text-muted">Enter OTP sent to <strong> +91{`${mobileNumber}`} </strong></p>
                </div>
                <Form id="myForm" autoComplete="off">
                    <Form.Group className="mb-3">
                        <div className="d-flex justify-content-center">
                            {otp.map((data, index) => {
                                return <Form.Control key={index} id="myOTPinput" type="text" 
                                    value={data} maxLength="1"
                                    onChange={(e) => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            })}
                        </div>
                    </Form.Group>
                    <div className="d-grid">
                        <Button onClick={handleSubmit} variant="primary" id="myBtn" size="lg">
                            Submit
                        </Button>
                    </div>
                </Form>
            </>
            <footer id="myFooter">
                Didn't receive the OTP? <strong>Resend</strong>
            </footer>
            <div style={{ borderTop: "4px solid black ", width: "120px", marginTop:"35px" , marginBottom:"2px" }}></div>
        </div>
    )
}
