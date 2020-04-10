import React, { Component } from 'react';
import { render } from 'react-dom';

class Home extends Component {
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
      <main role="main" className="container">
    <div className="row">
      <div className="col-md-8">
        <div> 
        <h2>Dsa</h2>
        </div>
      <br/>
        <div className="media content-section">
          <div className="media-body">
            <div className="article-metadata" style={articlestyle}>
              <img style={imgstyle} className="thumbnail account-img" src="https://stackblitz.com/files/react-scepxt/github/GDThumar2409/react-BigO/master/download.png" />
              <a className="article-title" href="#">Lab 1</a>
              <hr />
            
            </div>
          </div>
        </div>
        <div className="media content-section">
          <div className="media-body">
            <div className="article-metadata" style={articlestyle}>
              <img style={imgstyle} className="thumbnail account-img" src="https://stackblitz.com/files/react-scepxt/github/GDThumar2409/react-BigO/master/download.png" />
              <a className="article-title" href="#">Lab 2</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <br/><br/><br/>
        <div className="content-section">
          <div>
            <h2 style={{textAlign: "center"}}> My subjects </h2>
            <hr />
          </div>
          <div>
            <ul id="fadeshow" className="nav-piils default-pills">
              <li className="nav-item"><a href="#">Dsa</a></li>
              <li className="nav-item"><a href="#">Java-Tech.</a></li>
              <li className="nav-item"><a href="#">Software-project</a></li>
              
            </ul>
          </div>

        </div>
      </div>
      </div>
    </main>
    );
  }
}

export default Home;
