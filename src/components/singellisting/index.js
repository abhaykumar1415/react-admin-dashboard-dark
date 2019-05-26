import React, { Component } from 'react'
import './style.css';
import StarRatingComponent from 'react-star-rating-component';
export default class SingelListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      rating: 0

    }
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    return (
      <div>
        <h3 className="color-white  title-style">{this.props.single_column_listing.title}</h3>
        <div className="listing-column  display color-white">
          <img src={this.props.single_column_listing.column_one.image} alt="twoimage" className="fourth-content-images" />
          <div className="single-product-listing">
            <div className="name-and-icon">
              <div >
                {this.props.single_column_listing.column_one.product_name}-{this.props.single_column_listing.column_one.description}
                <div className="font-size-12">Monaco,Europe</div>
              </div>
              <div >
                <i className="material-icons">
                  favorite_border
                </i>
              </div>
            </div>
            <div className="home-description">
              <div className="furnished">Furnished</div>
              <div>1200 sqft</div>
            </div>
            <div className="contact">
              <div>
                {this.props.single_column_listing.column_one.prize}
                <div className="font-size-12">
                  Posted 2 days ago
                </div>
              </div>
              <button className="contact-button color-white">Contact</button>
            </div>
          </div>
        </div>

        <div className="listing-column  color-white display">
          <img src={this.props.single_column_listing.column_two.image} alt="twoimage" className="fourth-column-images" />
          <div className="single-product-listing">
            <div className="name-and-icon">
              <div>
                {this.props.single_column_listing.column_one.product_name}
                <div className="font-size-12">{this.props.single_column_listing.column_one.description}</div>
              </div>
              <div>
                <i className="material-icons">
                  favorite_border
                </i>
              </div>
            </div>
            <div className="product-prize">
              <div className="strike"><strike>Rs.1200</strike></div>
              {this.props.single_column_listing.column_two.prize}</div>
            <div className="rating">
              <div className="display">
                <StarRatingComponent className="color-white star-rating"
                  name="rate1"
                  starCount={5}
                  value={this.state.rating}
                  onStarClick={this.onStarClick.bind(this)}
                />
                <div>4.0 / 10 reviews(View all)</div>
              </div>
              <div className="product-add">
                <button className="add-button color-white" >Add</button>
                <button className="plus-button color-white ">+</button>
              </div>
            </div>
          </div>
        </div>


      </div >
    )
  }
}
