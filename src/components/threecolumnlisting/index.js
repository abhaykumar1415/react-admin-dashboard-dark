import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import './style.css';
export default class ThreeColumnListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      rating: 4

    }
  }

  handelClick = () => {
    console.log("dfghjk");
    this.setState({ isClicked: !this.state.isClicked });
  }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  handelStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  render() {
    return (
      <div >
        <div className="layout-header  color-white">{this.props.product_listing.title}</div>
        <h3 className="color-white title-style">{this.props.three_column_listing.title}</h3>
        <div className="three-listing-column-wrapper color-white">
          <div className="three-listing-column">
            <img src={this.props.three_column_listing.column_one.image} alt="oneimage" className="images" />
            <div className="listing-data">
              <div className="product-name">{this.props.three_column_listing.column_one.product_name}</div>
              <div className="prod-description">{this.props.three_column_listing.column_one.description}</div>
              <div className="product-prize">{this.props.three_column_listing.column_one.prize}</div>
              <div className="rate-button">
                <StarRatingComponent className="color-white star-rating"
                  name="rate1"
                  starCount={5}
                  value={this.state.rating}
                  onStarClick={this.handelStarClick.bind(this)}
                />
                <div className="font-size-12">4.0 / 10 reviews(View all)</div>
              </div>
            </div>
          </div>


          <div className="three-listing-column color-white">
            <img src={this.props.product_listing.three_column_listing.column_two.image} alt="twoimage" className="three-listing-second-image" />
            <div className="listing-data">
              <div className="product-name">{this.props.product_listing.three_column_listing.column_two.product_name}
                <i className="material-icons">
                  favorite_border
                </i>
              </div>
              <div className="prod-description">{this.props.product_listing.three_column_listing.column_two.description}</div>
              <div className="rating-tickets">
                <div className="product-prize">{this.props.product_listing.three_column_listing.column_two.prize}</div>
                <button className="star-button">
                  <StarRatingComponent className="color-white"
                    name="rate1"
                    starCount={1}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                  />
                  4.0
                </button>

              </div>
            </div>
          </div>

          <div className="three-listing-column color-white">
            <img src={this.props.product_listing.three_column_listing.column_three.image} alt="twoimage" className="third-image" />
            <div className="third-product-name bottom-left">{this.props.product_listing.three_column_listing.column_three.product_name}
              <i className="material-icons">
                favorite_border
                </i>
            </div>
            <div className="listing-data">

              <div className="product-prize">{this.props.product_listing.three_column_listing.column_three.prize}</div>
              <div className="rate-button">
                <StarRatingComponent className="color-white star-rating"
                  name="rate1"
                  starCount={5}
                  value={this.state.rating}
                  onStarClick={this.onStarClick.bind(this)}
                />
                <div className="font-size-12">4.0 / 10 reviews(View all)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
