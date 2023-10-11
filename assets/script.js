// Recupero i dati
fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      if (res.status === 404) {
        throw new Error("404 - Not Found");
      } else if (res.status === 500) {
        throw new Error("500 - Internal Server Error");
      } else {
        throw new Error("Errore generico");
      }
    }
  })
  .then((libraryData) => {
    console.log("libraryData", libraryData);
    // Genero funzione per generazione cards, targetto, creo e assegno

    for (let i = 0; i < libraryData.length; i++) {
      const rowReference = document.getElementById("rack");
      const newCol = document.createElement("div");
      newCol.classList.add("col");
      newCol.classList.add("col-lg-2");
      newCol.classList.add("col-4");
      newCol.classList.add("h-50");
      const newCard = document.createElement("div");
      newCard.classList.add("card");
      const newImage = document.createElement("img");
      newImage.classList.add("card-img-top");
      newImage.src = libraryData[i].img;
      const newBody = document.createElement("div");
      newBody.classList.add("card-body");
      const newTitle = document.createElement("h5");
      newTitle.classList.add("text-uppercase");
      newTitle.classList.add("text-decoration-underline");
      newTitle.textContent = libraryData[i].title;
      const newCategory = document.createElement("h6");
      newCategory.textContent = libraryData[i].category;
      const newAsin = document.createElement("h6");
      newAsin.textContent = libraryData[i].asin;
      const newPrice = document.createElement("h6");
      newPrice.textContent = libraryData[i].price;
      const newButton = document.createElement("button");
      newButton.classList.add("btn");
      newButton.classList.add("btn-primary");
      newButton.innerText = "Add to cart";
      // Appendo come non ci fosse un domani
      rowReference.appendChild(newCol);
      newCol.appendChild(newCard);
      newCard.appendChild(newImage);
      newCard.appendChild(newBody);
      newBody.appendChild(newTitle);
      newBody.appendChild(newCategory);
      newBody.appendChild(newAsin);
      newBody.appendChild(newPrice);
      newBody.appendChild(newButton);
    }
  })
  .catch((err) => {
    console.log(err);
  });
