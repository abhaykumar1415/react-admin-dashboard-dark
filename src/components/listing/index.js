import React, { Component } from 'react'
import './style.css';
// import StarRatingComponent from 'react-star-rating-component';
import ThreeColumnListing from '../threecolumnlisting';
// import TwoColumnForm from '../twocolumnform';
import TwoColumnListing from '../twocolumnlisting';
import SingelListing from '../singellisting';
export default class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 4,
      product_listing: {
        title: 'Listing',
        three_column_listing: {
          title: '3 column listing',
          column_one: {
            image: require('../../images/download(10).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          },
          column_two: {
            image: require('../../images/download (2).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          },
          column_three: {
            image: require('../../images/download (3).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          }
        },
        two_column_listing: {
          title: "2 Column Listing",
          column_one: {
            image: require('../../images/download(4).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit amet',
            prize: 'Rs. 600'
          },
          column_two: {
            image: require('../../images/download(6).jpeg'),
            product_name: 'Event Name',
            description: 'Lorem ipsum',
            place: 'Shanghai, China',
            day: 'Mon,6 May 2018',
            time: '7:00 PM'
          },
          column_three: {
            image: require('../../images/home.jpg'),
            product_name: 'Product Name',
            desc: 'Posted On',
            description: 'Monaco,Europe',
            day: '06 May 2018',
            prize: 'Rs.4.85 Crors'
          },
          column_four: {
            image: require('../../images/Events.jpg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          },
        },
        single_column_listing: {
          title: "Single  listing",
          column_one: {
            image: require('../../images/home.jpg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs.4.85 Crors'
          },
          column_two: {
            image: require('../../images/download(10).jpeg'),
            product_name: 'Product Name',
            description: 'Lorem ipsum dolor sit',
            prize: 'Rs. 600'
          }
        }
      },
      details_row: [
        {
          title: 'Floor',
          desc: '7,812'
        },
        {
          title: 'Furnishing',
          desc: 'Semi-furnished'
        },
        {
          title: 'Bedroom',
          desc: '4'
        },
        {
          title: 'Baths',
          desc: '3'
        },
      ]
    }
  }



  render() {
    return (
      <div className="layout-container-wrapper">

        <ThreeColumnListing
          product_listing={this.state.product_listing}
          three_column_listing={this.state.product_listing.three_column_listing}
        />

        <TwoColumnListing
          two_column_listing={this.state.product_listing.two_column_listing}
          details_row={this.state.details_row}
        />

        <SingelListing
          single_column_listing={this.state.product_listing.single_column_listing}
        />

      </div>
    )
  }
}
