import React from 'react'
import axios from 'axios'
import {Container, Row, Col, Table} from 'react-bootstrap'

const Data = ({ dataId }) => {
    var urls = {"TSA-DUK": "tsawwassen/nanaimo-(duke-pt)", 
			"TSA-SWB": "tsawwassen/swartz-bay",
			"TSA-SGI": "tsawwassen/southern-gulf-islands",
			"HSB-NAN": "horseshoe-bay/nanaimo-(dep.bay)", 
			"HSB-BOW": "horseshoe-bay/snug-cove-(bowen-is.)", 
			"HSB-LNG": "horseshoe-bay/langdale", 
			"LNG-HSB": "langdale/horseshoe-bay", 
			"SWB-TSA": "swartz-bay/tsawwassen",
			"SWB-FUL": "swartz-bay/fulford-harbour", 
			"SWB-SGI": "swartz-bay/southern-gulf-islands", 
			"DUK-TSA": "nanaimo-(duke-pt)/tsawwassen",
			"NAN-HSB": "nanaimo-(dep.bay)/horseshoe-bay"};
    var names = {"TSA-DUK": "Tsawassen (Vancouver) to Duke Point (Nanaimo)", 
			"TSA-SWB": "Tsawassen (Vancouver) to Swartz Bay (Victoria)",
			"TSA-SGI": "Tsawassen (Vancouver) to Southern Gulf Islands",
			"HSB-NAN": "Horseshoe Bay (Vancouver) to Departure Bay (Nanaimo)", 
			"HSB-BOW": "Horseshoe Bay (Vancouver) to Bowen Island (Snug Cove)", 
			"HSB-LNG": "Horseshoe Bay (Vancouver) to Langdale (Sunshine Coast)", 
			"LNG-HSB": "Sunshine Coast (Langdale) to Horseshoe Bay (Vancouver)", 
			"SWB-TSA": "Swartz Bay (Victoria) to Tsawassen (Vancouver)",
			"SWB-FUL": "Swartz Bay (Victoria) to Salt Spring Island (Fulford Harbour)", 
			"SWB-SGI": "Victoria (Swartz Bay) to Southern Gulf Islands", 
			"DUK-TSA": "Duke Point (Nanaimo) to Tsawassen (Vancouver)",
			"NAN-HSB": "Departure Bay (Nanaimo) to Horseshoe Bay (Vancouver)"};

    var name = names[dataId];
	var apiUrl = "https://www.ferrytimes.ca/api/" + urls[dataId];

	let [ferryInfo, setInfo] = React.useState('')
	let [time, setTime] = React.useState('')

    React.useEffect(() => {
		axios({
            "method": "GET",
            "url": apiUrl,
			"headers": {
				"Accept": 'application/json',
				"Content-Type": 'application/json',
			}})
			.then((response) => {
				setInfo(response.data)
				setTime(response.data[0].time)
			})
			.catch(error => console.log(error.message))
		}, [apiUrl])

    return (
        <>
            <Container>
	     	<Row className="justify-content-md-center">
	     		<h1> {name} </h1>
	     	</Row>
	     	<Row className="justify-content-md-center">
	     		<p className="next-sailing"> Next Sailing: {time}</p>
	     	</Row>
	     	<Row className="justify-content-md-center">
	     		<h1> 7:00am </h1>
	     	</Row>
	     	<Row className="justify-content-md-center">
	     		<p className="font-italic text-center"> All times are estimates based on previous sailings</p>
	     	</Row>
	     	<Row>
	     		<Col md={{ span: 8, offset: 2 }} >
					 <fieldset>
						<legend className="future-sailings"> Future Sailings: </legend>
						<Table striped>
						<thead className='thead-dark'>
							<tr>
							<th>Sailing Time</th>
							<th>Full Time (Estimate)</th>
							<th>Deck Space Full</th>
							</tr>
						</thead>
						<tbody>
							{
								Object.keys(ferryInfo).map(function (element) {
									return <tr><td>{ferryInfo[element].time}</td><td>{element}</td><td>{ferryInfo[element].capacity}%</td></tr>;
								})
							}
						</tbody>
						</Table>
					</fieldset>
				</Col>
	     	</Row>
	    </Container>
        </>
    )
}

export default Data