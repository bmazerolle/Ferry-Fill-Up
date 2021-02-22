import React from 'react'
import { Router, Link } from "@reach/router"
import {Row} from 'react-bootstrap'

const Default = (props) => {
    return (
        <>
            <h2>Select a Route</h2>
            <Row className="justify-content-md-center">
                <fieldset className='route-fieldset'>
                    <legend className="future-sailings"> Tsawassen: </legend>
                    <Link className='inline-link' to={`/routes/TSA-DUK`}>Duke Point (Nanaimo)</Link>
                    <Link className='inline-link' to={`/routes/TSA-SWB`}>Swartz Bay (Victoria)</Link>
                    <Link className='inline-link' to={`/routes/TSA-SGI`}>Southern Gulf Islands (Nanaimo)</Link>
                </fieldset>
                <fieldset className='route-fieldset'>
                    <legend className="future-sailings"> Horseshoe Bay: </legend>
                    <Link className='inline-link' to={`/routes/HSB-NAN`}>Departure Bay (Nanaimo)</Link>
                    <Link className='inline-link' to={`/routes/HSB-BOW`}>Bowen Island (Snug Cove)</Link>
                    <Link className='inline-link' to={`/routes/HSB-LNG`}>Langdale (Sunshine Coast)</Link>
                </fieldset>
                <fieldset className='route-fieldset'>
                    <legend className="future-sailings"> Swartz Bay: </legend>
                    <Link className='inline-link' to={`/routes/SWB-TSA`}>Tsawassen (Vancouver)</Link>
                    <Link className='inline-link' to={`/routes/SWB-FUL`}>Salt Spring Island (Fulford Harbour)</Link>
                    <Link className='inline-link' to={`/routes/SWB-SGI`}>Southern Gulf Islands</Link>
                </fieldset>
            </Row>
            <Row className="justify-content-md-center">
                <fieldset className='route-fieldset'>
                    <legend className="future-sailings"> Sunshine Coast: </legend>
                    <Link className='inline-link' to={`/routes/LNG-HSB`}>Horseshoe Bay (Vancouver)</Link>
                </fieldset>
                <fieldset className='route-fieldset'>
                    <legend className="future-sailings"> Duke Point: </legend>
                    <Link className='inline-link' to={`/routes/DUK-TSA`}>Tsawassen (Vancouver)</Link>
                </fieldset>
                <fieldset className='route-fieldset'>
                    <legend className="future-sailings"> Departure Bay: </legend>
                    <Link className='inline-link' to={`/routes/NAN-HSB`}>Horseshoe Bay (Vancouver)</Link>
                </fieldset>
            </Row>
        </>
    )
}
export default Default