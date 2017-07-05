import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li className="list-group-item">{book.title}</li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4"
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //pass props to BookList component
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList);
