import React, { Component } from 'react'
import './style.css';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default class TableContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      open: false,
      title: '',
      searchText: '',
      NameList: this.props.data.content,
      
    }
  }

  handelTabel = async (e) => {
    let a = e.target.value;
    if (a > this.props.data.content.length) {
      this.setState({ open: true });
      this.setState({ number: 0 });
    }
    await this.setState({ number: a }, () => {
      console.log("", this.state.number)
    });
  }

  handleClose = () => {
    if (this.props.data.content.length > this.state.number)
      this.setState({ open: false });
  };
  handelInput = async (e) => {
    let name = e.target.value;
    await
      this.setState({ title: name })
    console.log("title", this.state.title);
  }

 

  render() {
  
    return (
      <div>
        <div className="color-white button-style font-size-small font-weight margin-bottom">
          Data Table Without Pagination
        </div>
        <div className="input_search_wrapper">
          <div>
            <input type="number" name="quantity" style={{ width: '7em' }} value={this.state.number} onChange={this.handelTabel}></input>
          </div>
          <div className="search_bar">

            <i className="material-icons font-size-20">
              search
             </i>
            <input className="type_search"
              type="search"
              placeholder="Search..."
              size="30"
              onChange={this.handelInput}
            />
          </div>
        </div>
        <div className="tabel_content_wrapper color-white">
          {
            this.props.data.header.map((item, index) => {
              return (
                <div className="tabel_content_header" key={index}>
                  {item.title}
                  <div className="sort">
                    <i className="material-icons font-size-20" onClick={this.sortByName} >
                      arrow_drop_up
                        </i>
                    <i className="material-icons font-size-20" onClick={this.sortByName}>
                      arrow_drop_down
                        </i>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="tabel_content color-white">
          {
            this.props.data.content.map((item, index) => {
              if (this.state.number >= index) {
                return (
                  <div className="content_list" key={index}>
                    <div className="items">{item.name}</div>
                    <div className="items">{item.position}</div>
                    <div className="items">{item.location}</div>
                    <div className="items">{item.age}</div>
                    <div className="items">{item.gender}</div>
                  </div>
                )
              }
            })
          }

        </div>

        <div className="color-white entries">
          Showing 1-10 of 50 entries
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Pagination content size is {this.props.data.content.length} </span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              // className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />

       
      </div >
    )
  }
}
