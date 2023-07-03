let url = "https://kontests.net/api/v1/all";
fetch(url)
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById("card-container");

    function displayCards(cards) {
      cardContainer.innerHTML = cards.join('');
    }

    function filterCards(searchText) {
      const filteredCards = data.filter(item => {
        const cardTitle = item.name.toLowerCase();
        const cardText = item.site.toLowerCase();
        return cardTitle.includes(searchText) || cardText.includes(searchText);
      });

      const cards = filteredCards.map(item => `
        <div class="card" id="card">
          <img class="card-img-top" src="assests/1.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.site}</p>
            <p class="time">  Starts at: ${item.start_time}</p>
            <p class="time">  Ends at: ${item.end_time}</p>
            <a href="${item.url}" class="btn" target="_blank">Visit</a>
          </div>
        </div>
      `);

      displayCards(cards);

      if(Object.keys(filteredCards).length===0){
        document.getElementById("search-not-found").style.display="flex";
      }
      else{
        document.getElementById("search-not-found").style.display="none";
      }
    }

    // Retrieve the search input element
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');

    // Attach an event listener to capture the form submission
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
      const searchText = searchInput.value.toLowerCase();
      filterCards(searchText);
    });

    searchInput.addEventListener('input', function() {
      const searchText = searchInput.value.toLowerCase();
      filterCards(searchText);
    });

    // Display all cards initially
    filterCards("");
  });

  let nav = document.getElementById('container1');
  let menu = document.getElementById('menu');
  let isNavVisible = false;
  
  menu.addEventListener('click', () => {
    if (isNavVisible) {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
    }
    
    isNavVisible = !isNavVisible;
  });
  

