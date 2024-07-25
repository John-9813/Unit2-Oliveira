// Funzione per ottenere i libri dall'API e creare le card
const fetchBooks = (books) => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Qualcosa è andato storto nella chiamata di rete");
        }
    } )
    .then((books) => {
      books.forEach((book) => {
        createBookCard(book);
        console.log(books);
      });
    })
    .catch((error) => {
      console.error("Errore nel recupero dei libri:", error);
    });
};

// Funzione per creare e aggiungere una card per ogni libro
const createBookCard = (book) => {
  const booksContainer = document.getElementById("books-container");

  // Creazione del div colonna
  const colDiv = document.createElement("div");

  // Creazione della card
  const cardDiv = document.createElement("div");
  cardDiv.className = "card h-100 position-relative";

  // Creazione dell'immagine
  const img = document.createElement("img");
  img.className = "card-img-top";
  img.src = book.img;
  img.alt = book.title;

  // Creazione del corpo della card
  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.className = "card-body";

  // Creazione del titolo
  const titleH4 = document.createElement("h4");
  titleH4.className = "card-title";
  titleH4.textContent = book.title;

  // Creazione del prezzo
  const priceP = document.createElement("p");
  priceP.className = "card-text";
  priceP.textContent = `Prezzo: €${book.price}`;

  // Creazione del pulsante Scarta
  const discardButton = document.createElement("button");
  discardButton.className = "btn btn-danger position-absolute bottom-0 end-0";

  // Creazione dell'icona del cestino
  const trashIcon = document.createElement("i");
  trashIcon.className = "bi bi-trash3";

    // Aggiunta dell'icona al pulsante
    discardButton.appendChild(trashIcon);

    // Aggiunta cancellazione scheda al pulsante
  discardButton.addEventListener("click", () => {
    colDiv.remove();
  });

  // Aggiunta di tutti gli elementi al corpo della card
  cardBodyDiv.appendChild(titleH4);
  cardBodyDiv.appendChild(priceP);
  cardBodyDiv.appendChild(discardButton);

  // Aggiunta dell'immagine e del corpo della card alla card
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);

  // Aggiunta della card alla colonna
  colDiv.appendChild(cardDiv);
  colDiv.className = "col";

  // Aggiunta della colonna al contenitore delle card
  booksContainer.appendChild(colDiv);
};

// Chiamata alla funzione per ottenere i libri e creare le card al caricamento della pagina
document.addEventListener("DOMContentLoaded", fetchBooks);
