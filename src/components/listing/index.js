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
        <h3 className="color-white">{this.props.product_listing.three_column_listing.title}</h3>

        <div className="three-column-listing color-white">
          <div className="listing-column">
            <img src={this.props.product_listing.three_column_listing.column_one.image} className="images" />
            <div className="listing-data">
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
          </div>

          <div className="listing-column color-white">
            {/* <img src={require('../../images/download (2).jpeg')} className="images" /> */}
            <img src={this.props.product_listing.three_column_listing.column_two.image} className="images" />
            <div className="listing-data">
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
          </div>

          <div className="listing-column color-white">
            <img src={this.props.product_listing.three_column_listing.column_three.image} className="images" />
            <div className="listing-data">
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

        </div>

        <div className="two-column-listing display color-white">
          <div className="listing-column display">
            <img src={this.props.product_listing.two_column_listing.column_one.image} className="images" />
            <div>
              <div>{this.props.product_listing.two_column_listing.column_one.product_name}</div>
              <div>{this.props.product_listing.two_column_listing.column_one.discription}</div>
              <div>{this.props.product_listing.two_column_listing.column_one.prize}</div>
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

          <div className="listing-column display color-white">
            <img src={this.props.product_listing.two_column_listing.column_two.image} className="images" />
            <div>
              <div>{this.props.product_listing.two_column_listing.column_two.product_name}</div>
              <div>{this.props.product_listing.two_column_listing.column_two.discription}</div>
              <div>{this.props.product_listing.two_column_listing.column_two.prize}</div>
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

        </div>

        <div className="single-column-listing listing-column color-white">
          <div className="listing-column display">
            <img src={this.props.product_listing.single_column_listing.column_one.image} className="images" />
            <div>
              <div>{this.props.product_listing.single_column_listing.column_one.product_name}</div>
              <div>{this.props.product_listing.single_column_listing.column_one.discription}</div>
              <div>{this.props.product_listing.single_column_listing.column_one.prize}</div>
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

          <div className="listing-column color-white display">
            <img src={this.props.product_listing.single_column_listing.column_one.image} className="images" />
            <div>
              <div>{this.props.product_listing.single_column_listing.column_one.product_name}</div>
              <div>{this.props.product_listing.single_column_listing.column_one.discription}</div>
              <div>{this.props.product_listing.single_column_listing.column_one.prize}</div>
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

        </div>

      </div>
    )
  }
}
