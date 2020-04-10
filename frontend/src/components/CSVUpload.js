import React, { Component } from 'react';
import { render } from 'react-dom';
import './CSVUpload.css';

class CSVUpload extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  handleFilesChosen(event){
        this.setState({
            files: event.target.files
        });

    }

  handleUploadClick(event){
        let formData = new FormData();
        for (let file of this.state.files) {
            formData.append('files', file);
        }
        console.log(formData)
        fetch('/siteadmin/uploadview/', {
            method: 'POST',
            body: formData,
        })
        .then(result => <Toast />)
        .catch(error => console.log(error));
    };


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





            <div className="form-group files color">

              <input type="file" name="cvs_file" accept=".csv" className="form-control" multiple={false} onChange={e => this.handleFilesChosen(e)}/>
            </div>
                <input type="submit" onClick={e => this.handleUploadClick(e)} />



          </div>
        </div>
      </div>
    );
  }
}

class Toast extends Component {
  constructor(props) {
    super(props);
  }

  render(){
      return (
          <div aria-live="polite" aria-atomic="true" style={{position: relative ,minHeight: 200}}>
  <div className="toast" style={{position: absolute, top: 0, right: 0}}>
    <div className="toast-header">
      <strong className="mr-auto">Bootstrap</strong>
      <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="toast-body">
      Uploaded!!
    </div>
  </div>
</div>
          )
  }
}

export default CSVUpload;
