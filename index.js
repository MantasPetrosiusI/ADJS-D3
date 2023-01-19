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
    <div class="col col-sm-6 col-md-4 col-lg-3 m-4 border border-1">
        <div class="card border-0">
            <img src="${book.img}" class="card-img-top mt-2" alt="...">
            <div class="card-body">
                <h3 class="card-title">${book.title}</h3>
                <h4 class="card-category">${book.category}</h4>
                <h6 class="card-price">${book.price}</h6>

                <button type="button" class="btn btn-primary" onClick="addToCart(this)">Add to Cart</button>
                <button type="button" class="btn btn-danger" onClick="skip(this)">Skip</button>
            </div>
        </div>
    </div>
    `;
  });
};

const addToCart = (button) => {
  let booksInCart = document.querySelector(".list-group");
  let selectedBook = button.closest(".col ").innerHTML;
  button.closest(".col ").classList.add("border-success");
  booksInCart.innerHTML += `<li class="list-group-item">
${selectedBook}</li>`;
};

const skip = (button) => {
  button.closest(".col ").style.display = "none";
};

input = document.getElementById("search");

const filterBooks = () => {};

window.onload = getBooks();
/*///////////////////////////////////////////////////////////////////////
An input field to filter the books
 

Tasks you need to perform to achieve those requirements:

Add a search bar. When the user types more than 3 characters, filter the content of the API response to only display the books with a matching (or partially matching) title (hint: use .filter())
EXTRAS:
Allow users to delete books from their cart
Count the cart items using a .reduce() method and display the result somewhere in the cart
Add an empty cart button, to delete the whole list
*/
