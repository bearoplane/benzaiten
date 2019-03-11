import React from 'react';

import Book from './Book';
import BookContinuing from './BookContinuing';
import Journal from './Journal';

const Icon = props => {
  switch(props.name) {
    case "Book":
      return <Book {...props} />;
    case "Book_Continuing":
      return <BookContinuing {...props} />;
    case "Jrnl":
      return <Journal {...props} />;
    default:
      return <div />;
  }
}
export default Icon;
