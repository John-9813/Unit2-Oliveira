// La chiave API per autenticarsi con il servizio Pexels
const apiKey = '0iSbaHaZRI5864Qzu7CKCQfPWKc2WsdTPNb2AaNjtmuZLOK2xFSjlD1k';

// Funzione per caricare le immagini basate su una query di ricerca
const loadImages = (query) => {
  // Effettua una chiamata API alla ricerca di immagini con la query fornita
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: apiKey, // Include l'API key nell'intestazione della richiesta
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json(); // Converte la risposta in formato JSON
      } else {
        throw new Error('Errore nel recupero delle immagini'); // Lancia un errore se la risposta non è OK
      }
    })
    .then((data) => {
      displayImages(data.photos); // Chiama la funzione per visualizzare le immagini
      console.log(data); // Stampa i dati nella console
    })
    .catch((err) => {
      console.error(err); // Stampa l'errore in console
    });
};

// Funzione per visualizzare le immagini nella pagina
const displayImages = (photos) => {
  const imagesRow = document.getElementById('imagesRow');
  imagesRow.innerHTML = ''; // Pulisce il contenitore delle immagini
  
  photos.forEach((photo) => {
    // Crea una colonna per ogni immagine
    const col = document.createElement('div');
    col.classList.add('col-md-4');
    
    // Aggiunge il contenuto della card con i dettagli dell'immagine
    col.innerHTML = `
      <div class="card mb-4 shadow-sm">
        <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${photo.photographer}</h5>
          <p class="card-text">${photo.alt}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary view-btn" data-id="${photo.id}" data-bs-toggle="modal" data-bs-target="#imageModal">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary hide-btn">Hide</button>
            </div>
            <small class="text-muted">${photo.id}</small>
          </div>
        </div>
      </div>
    `;
    
    // Aggiunge la colonna creata alla riga delle immagini
    imagesRow.appendChild(col);
  });

  // Aggiunge i listener per i pulsanti "View" e "Hide"
  addEventListeners();
};

// Funzione per aggiungere i listener ai pulsanti "View" e "Hide"
const addEventListeners = () => {
  // Aggiunge un listener a tutti i pulsanti "Hide"
  document.querySelectorAll('.hide-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
      // Nasconde la colonna contenente la card quando viene cliccato
      e.target.closest('.col-md-4').style.display = 'none';
    });
  });

  // Aggiunge un listener a tutti i pulsanti "View"
  document.querySelectorAll('.view-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
      const photoId = e.target.getAttribute('data-id'); // Ottiene l'ID dell'immagine dal data attribute
      viewImageDetails(photoId); // Chiama la funzione per visualizzare i dettagli dell'immagine
    });
  });
};

// Funzione per visualizzare i dettagli dell'immagine nel modale
const viewImageDetails = (photoId) => {
  // Effettua una chiamata API per ottenere i dettagli dell'immagine tramite il suo ID
  fetch(`https://api.pexels.com/v1/photos/${photoId}`, {
    headers: {
      Authorization: apiKey, // Include l'API key nell'intestazione della richiesta
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json(); // Converte la risposta in formato JSON
      } else {
        throw new Error('Errore nel recupero dei dettagli dell\'immagine'); // Lancia un errore se la risposta non è OK
      }
    })
    .then((photo) => {
      // Popola il modale con i dettagli dell'immagine
      document.getElementById('modalImage').src = photo.src.large;
      document.getElementById('modalPhotographer').textContent = photo.photographer;
      document.getElementById('modalPhotographerUrl').href = photo.photographer_url;
    })
    .catch((err) => {
      console.error(err); // Stampa l'errore in console
    });
};

// Aggiunge un listener al bottone "Load Images"
document.getElementById('loadImagesBtn').addEventListener('click', () => {
  const query = document.getElementById('searchQuery').value || 'forest'; // Usa il valore del campo di ricerca o la query predefinita 'forest'
  loadImages(query); // Chiama la funzione per caricare le immagini
});

// Aggiunge un listener al bottone "Load Secondary Images"
document.getElementById('loadSecondaryImagesBtn').addEventListener('click', () => {
  const query = 'mountains'; // Usa una query predefinita 'mountains' per le immagini secondarie
  loadImages(query); // Chiama la funzione per caricare le immagini
});

