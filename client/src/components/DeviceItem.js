import { Card, Col, Image } from "react-bootstrap"
import star from '../assets/rating.png'
import {useNavigate} from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/consts"

const DeviceItem = ({device})=> {

const navigate = useNavigate()
function handleClick() {
  (navigate(DEVICE_ROUTE+'/'+device.id))
  } 
    return (
        <Col  className="mt-3 d-flex justify-content-center" onClick={handleClick} >
            <Card className="device-cnt">
                <Image className="image" src={process.env.REACT_APP_API_URL + device.img} />
                <div className="txt-device">
                    <div>Some name</div>
                    <div className="rating">
                        <div>{device.rating }</div>
                        <Image className="smStar" src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>

                </Card>
        </Col>
    )
}

export default DeviceItem