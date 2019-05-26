import React, { Component } from 'react'
import './style.css';
import StarRatingComponent from 'react-star-rating-component';
export default class TwoColumnListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    }
  }


  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    return (
      <div >
        <h3 className="color-white title-style">{this.props.two_column_listing.title}</h3>
        <div className="two-column-listing-wrapper">
          <div className="two-listing-column-one display color-white">
            <img src={this.props.two_column_listing.column_one.image} alt="twoimage" className="two-listing-column-image" />
            <div className="product-listing">
              <div className="product-name">{this.props.two_column_listing.column_one.product_name}</div>
              <div className="product-description">{this.props.two_column_listing.column_one.description}</div>
              <div className="product-prize">
                <div className="strike"><strike>Rs.1200</strike></div>
                {this.props.two_column_listing.column_one.prize}</div>

              <div className="product-add">
                <button className="add-button color-white" >Add</button>
                <button className="plus-button color-white ">+</button>
              </div>
            </div>
          </div>

          <div className="two-listing-column display color-white">
            <img src={this.props.two_column_listing.column_two.image} alt="twoimage" className="two-listing-column-images" />
            <div className="product-listing">
              <div className="product-name">{this.props.two_column_listing.column_two.product_name} - {this.props.two_column_listing.column_two.description}</div>
              <div className="prod-description">{this.props.two_column_listing.column_two.place}</div>
              <div className="day-time">
                <div>
                  <div>
                    <i className="material-icons material-size ">
                      calendar_today
                      </i>
                    {this.props.two_column_listing.column_two.day}
                  </div>
                  <div>
                    <i className="material-icons material-size">
                      watch
                    </i>
                    {this.props.two_column_listing.column_two.time}</div>
                </div>
                <div className="ticket-arrow">
                  <button className="background-color color-white">Ticket</button>
                  <i class="material-icons">
                    arrow_right
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="two-column-listing-wrapper">
          <div className="product-details-wrapper">
            <div className="two-listing-column-content-three display color-white">
              <img src={this.props.two_column_listing.column_three.image} alt="twoimage" className="second-column-images" />
              <div className="product-listing">
                <div className="product-name">
                  <div> {this.props.two_column_listing.column_three.product_name}</div>
                  <div>{this.props.two_column_listing.column_three.desc}</div>
                </div>
                <div className="prod-description">
                  <div>{this.props.two_column_listing.column_three.description}</div>
                  <div>{this.props.two_column_listing.column_three.day}</div>
                </div>
                <div className="product-prize rating-tickets">
                  {this.props.two_column_listing.column_three.prize}
                  <div className="product-add">
                    <button className="view-details">View Details</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-details">
              {
                this.props.details_row.map((item, index) => {
                  return (
                    <div key={index} className="color-white detail-list">
                      <div className="">{item.title}</div>
                      <div>{item.desc}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div className="two-listing-column-content-four display color-white">
            <img src={this.props.two_column_listing.column_four.image} alt="twoimage" className="three-column-images" />
            <div className="fourth-product-listing">
              <div className="product-name">{this.props.two_column_listing.column_two.product_name}-{this.props.two_column_listing.column_two.description}</div>
              <div className="prod-description">
                <div>Shanghai,China</div>
                <div>2K Interested </div>
              </div>
              <div className="product-prize">{this.props.two_column_listing.column_two.prize}</div>
              <div className="rating-tickets">
                <div className="twolisting-day-time">
                  <div >
                    <i className="material-icons material-size ">
                      calendar_today
                      </i>
                    {this.props.two_column_listing.column_two.day}
                  </div>
                  <div>
                    <i className="material-icons material-size">
                      watch
                    </i>
                    {this.props.two_column_listing.column_two.time}</div>
                </div>
                <div className="ticket-arrow">
                  <button className="background-color color-white">Ticket</button>
                  <i class="material-icons">
                    arrow_right
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
