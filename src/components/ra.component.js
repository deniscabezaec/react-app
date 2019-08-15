import React, { Component } from 'react';
import axios from 'axios';
import TableClases from './TableClases';

export default class RA extends Component {

  constructor(props) {
      super(props);
      this.state = {business: []};
    }
    componentDidMount(){
      axios.get('https://api.alexkbza.com/class')
        .then(response => {
          this.setState({ business: response.data});
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabClases(){
      return this.state.business.map(function(object, i){
          return <TableClases obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div style={{margin : 0, overflow: hidden}}>
          <a-scene embedded arjs='sourceType: webcam;'>
            <a-marker type='pattern' url='path/to/lab2.patt'>
              <a-plane color="#fff" height="1" width="2" rotation="-90 0 0"></a-plane>
            </a-marker>
              <a-text value="Funciona">

              </a-text>
            <a-entity camera></a-entity>
          </a-scene>
        </div>
      );
    }
  }