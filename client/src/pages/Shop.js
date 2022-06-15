import React, { useContext, useEffect } from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import BrandBar from "../components/BrandBar"
import DeviceList from "../components/DeviceList"
import TypeBar from "../components/TypeBar"
import { Context } from "../index"
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI"
import { observer } from "mobx-react-lite"
import Pages from "../components/Pages"

const Shop = observer(() => {
    const {device} = useContext(Context)
    

    useEffect(() => {

        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices(null, null, 1, 12).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 12).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)

        })
    }, [device.page, device.selectedType, device.selectedBrand,device])
    return (
        <Container className="layout">
            <Row >
                <Col md={4}>
                    <TypeBar/>
                    <BrandBar/>

                </Col>
                <Col md={8}>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;