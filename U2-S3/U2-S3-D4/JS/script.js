const apiKey = '0iSbaHaZRI5864Qzu7CKCQfPWKc2WsdTPNb2AaNjtmuZLOK2xFSjlD1k';

const loadImages = (query) => {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Errore nel recupero delle immagini');
      }
    })
    .then((data) => {
      displayImages(data.photos);
    })
    .catch((err) => {
      console.error(err);
    });
};

const displayImages = (photos) => {
  const imagesRow = document.getElementById('imagesRow');
  imagesRow.innerHTML = '';
  
  photos.forEach((photo) => {
    const col = document.createElement('div');
    col.classList.add('col-md-4');
    
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
    
    imagesRow.appendChild(col);
  });

  addEventListeners();
};

const addEventListeners = () => {
  document.querySelectorAll('.hide-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
      e.target.closest('.col-md-4').style.display = 'none';
    });
  });

  document.querySelectorAll('.view-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
      const photoId = e.target.getAttribute('data-id');
      viewImageDetails(photoId);
    });
  });
};

const viewImageDetails = (photoId) => {
  fetch(`https://api.pexels.com/v1/photos/${photoId}`, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Errore nel recupero dei dettagli dell\'immagine');
      }
    })
    .then((photo) => {
      document.getElementById('modalImage').src = photo.src.large;
      document.getElementById('modalPhotographer').textContent = photo.photographer;
      document.getElementById('modalPhotographerUrl').href = photo.photographer_url;
    })
    .catch((err) => {
      console.error(err);
    });
};

document.getElementById('loadImagesBtn').addEventListener('click', () => {
  const query = document.getElementById('searchQuery').value || 'forest';
  loadImages(query);
});

document.getElementById('loadSecondaryImagesBtn').addEventListener('click', () => {
  const query = 'mountains';
  loadImages(query);
});
