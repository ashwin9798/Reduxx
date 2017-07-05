//state argument is state that reducer is
//responsible for
export default function(state, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
