import './App.css';
import Mobile from './components/Mobile/mobile';
import Otp from './components/OTP/otp';
import { Alert } from 'react-bootstrap';
import {useState} from 'react'
function App() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [displayMobile, setDisplayMobile] = useState(true);
    const [Data, setData] = useState('');
    if(Data) {
      return <div className="d-flex align-items-center justify-content-center">
        <Alert className="myAlert" variant="success">
        {Data}
      </Alert>
      </div>
    }
    return (
      <div className="main-box">
        {displayMobile ? <Mobile setDisplayMobile={setDisplayMobile} mobileNumber={mobileNumber} setMobileNumber={setMobileNumber}/>
        : <Otp setData={setData} setDisplayMobile={setDisplayMobile} mobileNumber={mobileNumber} setMobileNumber={setMobileNumber}/>}
      </div>
    );
}

export default App;
