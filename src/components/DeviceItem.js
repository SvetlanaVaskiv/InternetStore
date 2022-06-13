import { Card, Col, Image } from "react-bootstrap"
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/consts"

const DeviceItem = ({device})=> {
const navigate = useNavigate()
function handleClick() {
  (navigate(DEVICE_ROUTE+'/'+device.id))
  } 
  
    return (
        <Col  className="mt-3 d-flex justify-content-center" onClick={handleClick} >
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
                <div className="text-black-50 d-flex justify-content-between align-items-center">
                    <div>Some name</div>
                    <div className="mt-2 d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={15} height={15} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>

                </Card>
        </Col>
    )
}

export default DeviceItem