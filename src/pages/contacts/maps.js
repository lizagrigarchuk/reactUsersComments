import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React ,{Fragment,Component} from "react";

export default class Map_contacts extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
        <YMaps>
  <Map
    defaultState={{
      center: [53.929330, 27.598033],
      zoom: 13,
      controls: ['zoomControl', 'fullscreenControl'],
    }}
    modules={['control.ZoomControl', 'control.FullscreenControl']}
  >
    <Placemark
      modules={['geoObject.addon.balloon']}
      defaultGeometry={[53.929330, 27.598033]}
      properties={{
        balloonContentBody:
          'This is balloon loaded by the Yandex.Maps API module system',
      }}
    />
  </Map>
</YMaps>
    )
  }


}




