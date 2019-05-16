import React, { Component } from 'react'
import './style.css';
import TableContent from '../tabelcontent';
export default class Table extends Component {
  render() {
    return (
      <div className="layout-container-wrapper">
        <div className="layout-container ">
          <div className="header color-white">
            Data Table
          </div>
          <div className="font-size-small color-white">
            Home > Table > Data Table
          </div>
        </div>
        <div className="color-white button-style font-size-small font-weight margin-bottom">
          Data Table With Pagination
        </div>
        <div className="input_search_wrapper">
          <div>
            <input text="number" size="10" value="10" />
            <div>
              <i className="material-icons color-white ">
                arrow_drop_up
            </i>
              <i className="material-icons color-white">
                arrow_drop_down
            </i>
            </div>
          </div>
          <div className="search_bar">
            <i className="material-icons font-size-20">
              search
             </i>
            <input className="type_search"
              type="search"
              placeholder="Search..."
              size="30"
            />
          </div>
        </div>
        <TableContent />
      </div>
    )
  }
}
