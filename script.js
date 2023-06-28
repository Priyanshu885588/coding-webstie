let url = "https://kontests.net/api/v1/all";
let response = fetch(url);
response
  .then((val) => {
    return val.json();
  })
  .then((val1) => {
    console.log(val1);
    inhtml = "";
    for (item in val1) {
      console.log(val1.item);
      inhtml += `
        <div class="card" >
                <img class="card-img-top" src="assests/1.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${val1[item].name}</h5>
                  <p class="card-text">Site: ${val1[item].site}</p>
                  <p>Starts at: ${val1[item].start_time}</p>
                  <p>Ends at: ${val1[item].end_time}</p>
                  <a href="${val1[item].url}" class="btn">Visit</a>
                </div>
            </div>
        `
    }
    document.getElementById("card-container").innerHTML=inhtml;
  });

