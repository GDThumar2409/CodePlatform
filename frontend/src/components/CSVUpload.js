import React, { Component } from 'react';
import { render } from 'react-dom';
import './CSVUpload.css';

class CSVUpload extends Component {
  constructor() {
    super();
  }
  

  render() {
    var imgstyle={
    width: 50 ,
    height:50
  };
  var articlestyle={
    border: 1 ,
    borderColor: "#5f788a"
  };
    return (
      <div className="media content-section">
        <div className="media-body">
          <div className="article-metadata" style={articlestyle}>
            <img style={imgstyle} className="thumbnail account-img" src="https://stackblitz.com/files/react-scepxt/github/GDThumar2409/react-BigO/master/download.png" />
            <a className="article-title" href="#">Problem 1</a>
            <form method="post" action="#" id="#">




            <div className="form-group files color">

              <input type="file" className="form-control" multiple="" />
            </div>


        </form>

          </div>
        </div>
      </div>
    );
  }
}

export default CSVUpload;
