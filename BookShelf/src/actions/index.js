import { connect } from 'react-redux';

export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
