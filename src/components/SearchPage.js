import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import RouteList from './RouteList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [routeList, setRouteList] = useState();
  var routeListDefault = [
    {name: "Tsawassen (Vancouver) to Duke Point (Nanaimo)", code: "TSA-DUK", path: "tsawwassen/nanaimo-(duke-pt)"}, 
    {name: "Tsawassen (Vancouver) to Swartz Bay (Victoria)", code: "TSA-SWB", path: "tsawwassen/swartz-bay"},
    {name: "Tsawassen (Vancouver) to Southern Gulf Islands", code: "TSA-SGI", path: "tsawwassen/southern-gulf-islands"},
    {name: "Horseshoe Bay (Vancouver) to Departure Bay (Nanaimo)", code: "HSB-NAN", path: "horseshoe-bay/nanaimo-(dep.bay)"}, 
    {name: "Horseshoe Bay (Vancouver) to Bowen Island (Snug Cove)", code: "HSB-BOW", path: "horseshoe-bay/snug-cove-(bowen-is.)"}, 
    {name: "Horseshoe Bay (Vancouver) to Langdale (Sunshine Coast)", code: "HSB-LNG", path: "horseshoe-bay/langdale"}, 
    {name: "Sunshine Coast (Langdale) to Horseshoe Bay (Vancouver)", code: "LNG-HSB", path: "langdale/horseshoe-bay"}, 
    {name: "Swartz Bay (Victoria) to Tsawassen (Vancouver)", code: "SWB-TSA", path: "swartz-bay/tsawwassen"},
    {name: "Swartz Bay (Victoria) to Salt Spring Island (Fulford Harbour)", code: "SWB-FUL", path: "swartz-bay/fulford-harbour"}, 
    {name: "Victoria (Swartz Bay) to Southern Gulf Islands", code: "SWB-SGI", path: "swartz-bay/southern-gulf-islands"}, 
    {name: "Duke Point (Nanaimo) to Tsawassen (Vancouver)", code: "DUK-TSA", path: "nanaimo-(duke-pt)/tsawwassen"},
    {name: "Departure Bay (Nanaimo) to Horseshoe Bay (Vancouver)", code: "NAN-HSB", path: "nanaimo-(dep.bay)/horseshoe-bay"}];

    const fetchData = async () => {
        setRouteList([]) 
    }

    
    const updateInput = async (input) => {
        const filtered = routeListDefault.filter(route => {
          return route.name.toLowerCase().startsWith(input.toLowerCase())
        })
        setInput(input);
        if (input == "") {
          setRouteList([])
        } else {
          setRouteList(filtered);
        }
    }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <p className='search-label'>Search for your sailing:</p>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <div className='results-container'>
        <RouteList className="route-list" routeList={routeList}/>
      </div>
    </>
   );
}

export default SearchPage