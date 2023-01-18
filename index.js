const getBooks = async () => {
  try {
    let response = await fetch("https://striveschool-api.herokuapp.com/books", {
      method: "GET",
    });
    const books = await response.json();
    renderBooks(books);
  } catch (err) {
    console.log(err);
  }
};
let row = document.querySelector("#bookRow");
renderBooks = (books) => {
  console.log(row.innerHTML);
  books.forEach((book) => {
    row.innerHTML += `
    <div class="col-12 col-sm-6 col-4 col-lg-2 m-4 border border-1>
        <div class="card>
            <img src="${book.img}" class="card-img-top mt-2" alt="...">
            <div class="card-body">
                <h3 class="card-title">${book.title}</h3>
                <h4 class="card-category">${book.category}</h4>
                <h6 class="card-price">${book.price}</h6>

                <button type="button" class="btn btn-primary" onClick="addToCart">Add to Cart</button>
                <button type="button" class="btn btn-danger" onClick="addToCart">Skip</button>
            </div>
        </div>
    </div>
    `;
  });
};

const addToCart = (btn) => {
  const cart = document.querySelector(".ul");
  btn.closest(".card").classList.add("border-sucess");
};
window.onload = getBooks();
/*///////////////////////////////////////////////////////////////////////
An input field to filter the books
 

Tasks you need to perform to achieve those requirements:

Display all the books using template literals and .forEach() or .map()


Add an add to cart button into each item
When this button is pressed: 1) add the item to another list (the cart), and 2) change the card styling to show that the element is in the cart (eg. red border, a badge, an icon… you choose)
Add a skip button inside each card
When pressed, this button should remove that book element from the page
Add a search bar. When the user types more than 3 characters, filter the content of the API response to only display the books with a matching (or partially matching) title (hint: use .filter())
EXTRAS:
Allow users to delete books from their cart
Count the cart items using a .reduce() method and display the result somewhere in the cart
Add an empty cart button, to delete the whole list
*/
