import React from 'react';

const RouteList = ({routeList=[]}) => {
  return (
    <>
    { routeList.map((data,index) => {
        if (data) {
          var route = "routes/" + data.code;
          var style = 'route-list';
          if (index === 0) {
            style = style + " top-route-list";
          } else if (index === routeList.length-1) {
            style = style + " bottom-route-list";
          }
          return (
            <div className={style} key={data.name}>
              <a className='search-result' href={route}>{data.name}</a>
	          </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default RouteList