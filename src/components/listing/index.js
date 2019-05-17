import React, { Component } from 'react'
import './style.css';
import StarRatingComponent from 'react-star-rating-component';
export default class Listing extends Component {
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
      <div className="listing-wrapper">
        <div className="layout-header  color-white">{this.props.product_listing.title}</div>

        <div className="three-column-listing color-white">
          {this.props.product_listing.three_column_listing.column_one.title}
          <div className="three-column-listing-content">
            <img src={this.props.product_listing.three_column_listing.column_one.image} className="images" />
            <div>{this.props.product_listing.three_column_listing.column_one.product_name}</div>
            <div>{this.props.product_listing.three_column_listing.column_one.discription}</div>
            <div>{this.props.product_listing.three_column_listing.column_one.prize}</div>
            <div>
              <StarRatingComponent className="color-white"
                name="rate1"
                starCount={5}
                value={this.state.rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
          </div>

          <div>
            {/* <img src={require('../../images/download (2).jpeg')} className="images" /> */}
            <img src={this.props.product_listing.three_column_listing.column_two.image} className="images" />
            <div>{this.props.product_listing.three_column_listing.column_two.product_name}</div>
            <div>{this.props.product_listing.three_column_listing.column_two.discription}</div>
            <div>{this.props.product_listing.three_column_listing.column_two.prize}</div>
            <div>
              <StarRatingComponent className="color-white"
                name="rate1"
                starCount={5}
                value={this.state.rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
          </div>

          <div>
            <img src={this.props.product_listing.three_column_listing.column_three.image} className="images" />
            <div>{this.props.product_listing.three_column_listing.column_three.product_name}</div>
            <div>{this.props.product_listing.three_column_listing.column_three.discription}</div>
            <div>{this.props.product_listing.three_column_listing.column_three.prize}</div>
            <div>
              <StarRatingComponent className="color-white"
                name="rate1"
                starCount={5}
                value={this.state.rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
          </div>
        </div>

        <div className="2-column-listing">

        </div>

        <div className="single-colmn-listing">

        </div>

      </div>
    )
  }
}
