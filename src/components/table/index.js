import React, { Component } from 'react'
import './style.css';
import TableContent from '../tabelcontent';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default class Table extends Component {
  constructor() {
    super();
    this.state = {
      data_table_without_pagination: {
        title: 'Data Table With Pagination',
        header: [
          {
            title: 'Name'
          },
          {
            title: 'Position'
          },
          {
            title: 'Location'
          },
          {
            title: 'Age'
          },
          {
            title: 'Gender'
          }
        ],
        content: [
          {
            name: 'William Borough',
            position: 'Accountant',
            location: 'London',
            age: '34',
            gender: 'Male'
          },
          {
            name: 'Terry Moore',
            position: 'Chief Executive Officer(CEO)',
            location: 'Tokyo',
            age: '42',
            gender: 'Female'
          },
          {
            name: 'Mary Cox',
            position: 'Software Engineer',
            location: 'New Delhi',
            age: '28',
            gender: 'Female'
          },
          {
            name: 'Liam Hensen',
            position: 'Regional Director',
            location: 'Tokyo',
            age: '30',
            gender: 'Male'
          },
          {
            name: 'Kelly Clarks',
            position: 'Developer',
            location: 'New Delhi',
            age: '26',
            gender: 'Female'
          },
          {
            name: 'Joshua Mirra',
            position: 'Java Script Developer',
            location: 'New York',
            age: '22',
            gender: 'Male'
          }
        ],
        open: false,
        reversList: false,

      }
    }
  }

  componentDidMount = () => {
    if (this.state.data_table_without_pagination.header.length > 5)
      this.setState({ open: true });
  }

  handleClose = () => {
    if (this.state.data_table_without_pagination.header.length > 5)
      this.setState({ open: true });
  };

  sortByName = () => {
    this.setState({ reversList: !this.state.reversList });
  }

  render() {

    return (
      <div className="main-content-wrapper content">
        <div className="layout-container ">
          <div className="header color-white">
            Data Table
          </div>
        </div>
        {
          this.state.open
            ?
            null
            :
            <TableContent
              data={this.state.data_table_without_pagination}
            />
        }
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
          message={<span id="message-id">Pagination tabel sizes should be less than five</span>}
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
      </div>
    )
  }
}
