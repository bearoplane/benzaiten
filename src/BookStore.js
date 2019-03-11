/*
This is the store for the books. Get it? BookStore?

Anyway, this is such a simple app so I didn't feel it necessary to bother with
some fancy pattern like Flux or what not.

It's just an object with some getter/setter methods. Nothing fancy.

Any custom selectors are just written in directly as functions because, as I
mentioned, this is a very simple app.

For the id I use item_barcode because I assume it's unique.
*/

const BookStore = {
  data: {},

  /**
   * books
   */
  addBooks (books) {
    if (!Array.isArray(books)) {
      books = [books];
    }

    // This reducer just overwrites books with duplicate ids. I don't this this
    //  will really be an issue.
    this.data = books.reduce((data, book) => {
      // We use item_barcode for the id. The book is given an id once it is
      //  added into the store.
      book.id = book.item_barcode;
      data[book.id] = book;

      return data;
    }, this.data);
  },

  toggleSelectBook (id) {
    this.data[id].selected = !this.data[id].selected;
  },

  selectAllBooks () {
    let books = this.data;

    Object.keys(books).forEach(id => books[id].selected = true);

    this.data = books;
  },

  deselectAllBooks () {
    let books = this.data;

    Object.keys(books).forEach(id => books[id].selected = false);

    this.data = books;
  },

  getBooks () {
    return Object.values(this.data);
  },

  getSelectedBooks () {
    return Object.values(this.data).filter(book => book.selected === true)
  }
};

export default BookStore;
