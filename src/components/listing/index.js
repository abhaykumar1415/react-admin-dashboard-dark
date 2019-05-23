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
      <div className="layout-container-wrapper">
        <div className="layout-header  color-white">{this.props.product_listing.title}</div>
        <h3 className="color-white title-style">{this.props.product_listing.three_column_listing.title}</h3>

        <div className="column-listing color-white">
          <div className="three-listing-column">
            <img src={this.props.product_listing.three_column_listing.column_one.image} alt="oneimage" className="images" />
            <div className="listing-data">
              <div className="product-name">{this.props.product_listing.three_column_listing.column_one.product_name}</div>
              <div className="prod-description">{this.props.product_listing.three_column_listing.column_one.description}</div>
              <div className="product-prize">{this.props.product_listing.three_column_listing.column_one.prize}</div>
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

          <div className="three-listing-column color-white">
            {/* <img src={require('../../images/download (2).jpeg')} className="images" /> */}
            <img src={this.props.product_listing.three_column_listing.column_two.image} alt="twoimage" className="images" />
            <div className="listing-data">
              <div className="product-name">{this.props.product_listing.three_column_listing.column_two.product_name}</div>
              <div className="prod-description">{this.props.product_listing.three_column_listing.column_two.description}</div>
              <div className="product-prize">{this.props.product_listing.three_column_listing.column_two.prize}</div>
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

          <div className="three-listing-column color-white">
            <img src={this.props.product_listing.three_column_listing.column_three.image} alt="twoimage" className="images" />
            <div className="listing-data">
              <div className="product-name">{this.props.product_listing.three_column_listing.column_three.product_name}</div>
              <div className="prod-description">{this.props.product_listing.three_column_listing.column_three.description}</div>
              <div className="product-prize">{this.props.product_listing.three_column_listing.column_three.prize}</div>
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

        <h3 className="color-white title-style">{this.props.product_listing.two_column_listing.title}</h3>
        <div className="two-column-listing color-white">
          <div className="column-listing-parts">
            <div className="two-listing-column-one display">
              <img src={this.props.product_listing.two_column_listing.column_one.image} alt="twoimage" className="two-listing-column" />
              <div className="product-listing">
                <div className="product-name">{this.props.product_listing.two_column_listing.column_one.product_name}</div>
                <div className="prod-description">{this.props.product_listing.two_column_listing.column_one.description}</div>
                <div className="product-prize">{this.props.product_listing.two_column_listing.column_one.prize}</div>
                <div>
                  <StarRatingComponent className="color-white"
                    name="rate1"
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                  />
                </div>
                <div className="product-add">
                  <button className="add-button color-white" >Add</button>
                  <button className="plus-button color-white ">+</button>
                </div>
              </div>
            </div>

            <div className="two-listing-column display color-white">
              <img src={this.props.product_listing.two_column_listing.column_two.image} alt="twoimage" className="two-listing-column-images" />
              <div className="product-listing">
                <div className="product-name">{this.props.product_listing.two_column_listing.column_two.product_name}</div>
                <div className="prod-description">{this.props.product_listing.two_column_listing.column_two.description}</div>
                <div className="product-prize">{this.props.product_listing.two_column_listing.column_two.prize}</div>
                <div>
                  <StarRatingComponent className="color-white"
                    name="rate1"
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                  />
                </div>
                <div className="product-add">
                  <button>Tickets</button>
                </div>
              </div>
            </div>
          </div>
          <div className="column-listing-parts">
            <div className="two-listing-column-content-three display color-white">
              <img src={this.props.product_listing.two_column_listing.column_three.image} alt="twoimage" className="second-column-images" />
              <div className="product-listing">
                <div className="product-name">{this.props.product_listing.two_column_listing.column_two.product_name}</div>
                <div className="prod-description">{this.props.product_listing.two_column_listing.column_two.description}</div>
                <div className="product-prize">{this.props.product_listing.two_column_listing.column_two.prize}</div>
                <div>
                  <StarRatingComponent className="color-white"
                    name="rate1"
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                  />
                </div>
                <div className="product-add">
                  <button>Tickets</button>
                </div>
              </div>
            </div>

            <div className="two-listing-column-content-four display color-white">
              <img src={this.props.product_listing.two_column_listing.column_four.image} alt="twoimage" className="three-column-images" />
              <div className="fourth-product-listing">
                <div className="product-name">{this.props.product_listing.two_column_listing.column_two.product_name}-{this.props.product_listing.two_column_listing.column_two.description}</div>
                <div className="prod-description">
                  <div>Shanghai,China</div>
                  <div>2K Interested </div>
                </div>
                <div className="product-prize">{this.props.product_listing.two_column_listing.column_two.prize}</div>
                <div className="rating-tickets">
                  <StarRatingComponent className="color-white"
                    name="rate1"
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                  />
                  <div className="product-add">
                    <button>Tickets</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="single-column-listing color-white">
          <h3 className="color-white">{this.props.product_listing.single_column_listing.title}</h3>
          <div className="listing-column  display">
            <img src={this.props.product_listing.single_column_listing.column_one.image} alt="twoimage" className="fourth-content-images" />
            <div className="single-product-listing">
              <div className="name-and-icon">
                <div >
                  {this.props.product_listing.single_column_listing.column_one.product_name}-{this.props.product_listing.single_column_listing.column_one.description}
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
                  {this.props.product_listing.single_column_listing.column_one.prize}
                  <div className="font-size-12">
                    Posted 2 days ago
                </div>
                </div>
                <button className="contact-button color-white">Contact</button>
              </div>
            </div>
          </div>

          <div className="listing-column  color-white display">
            <img src={this.props.product_listing.single_column_listing.column_one.image} alt="twoimage" className="fourth-content-images" />
            <div className="single-product-listing">
              <div className="name-and-icon">
                <div>
                  {this.props.product_listing.single_column_listing.column_one.product_name}
                  <div className="font-size-12">{this.props.product_listing.single_column_listing.column_one.description}</div>
                </div>
                <div>
                  <i className="material-icons">
                    favorite_border
                </i>
                </div>
              </div>
              <div>{this.props.product_listing.single_column_listing.column_one.prize}</div>
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

        </div>

      </div>
    )
  }
}
