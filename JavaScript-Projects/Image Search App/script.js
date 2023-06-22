
const accessKey = "H4xUmLMym5L_8RjLGS07LTOX4RzJBn7CX984tzXEb4";

const formElement = document.querySelector("form")
//stores input element
const inputElement = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-btn")

//stores all the keywords which will enter in input
let inputData = "";
let page = 1;

async function searchImages () {
  inputData = inputElement.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${encodeURIComponent(inputData)}&client_id=${accessKey}`;


  const response = await fetch(url);
  const data = await response.json();

  const results = data.results;

  if(page === 1) {
    searchResults.innerHTML = "";
  }

  //image container like div
  // results.map((result) => {
  //     const imageWrapper = document.createElement('div');
  //     imageWrapper.classList.add("search-result-box");
  //     const image = document.createElement('img');
  //     image.src = result.urls.small;
  //     image.alt = result.alt_description;
  //     const imageLink = document.createElement('a');
  //     imageLink.href = result.links.html;
  //     imageLink.target = "_blank";
  //     imageLink.textContent = result.alt_description;

  //     //append elements
  //     imageWrapper.appendChild(image);
  //     imageWrapper.appendChild(imageLink);
  //     searchResults.appendChild(imageWrapper);

  // });

  if (Array.isArray(results)) {
    results.map((result) => {
      const imageWrapper = document.createElement('div');
      imageWrapper.classList.add("search-result-box");
      const image = document.createElement('img');
      image.src = result.urls.small;
      image.alt = result.alt_description;
      const imageLink = document.createElement('a');
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.textContent = result.alt_description;

      //append elements
      imageWrapper.appendChild(image);
      imageWrapper.appendChild(imageLink);
      searchResults.appendChild(imageWrapper);
    });
  }

  // results.forEach((result) => {
  //   console.log(result);
  //   const imageWrapper = document.createElement('div');
  //   imageWrapper.classList.add("search-result-box");
  //   const image = document.createElement('img');
  //   image.src = result.urls.small;
  //   image.alt = result.alt_description;
  //   const imageLink = document.createElement('a');
  //   imageLink.href = result.links.html;
  //   imageLink.target = "_blank";
  //   imageLink.textContent = result.alt_description;
  
  //   // append elements
  //   imageWrapper.appendChild(image);
  //   imageWrapper.appendChild(imageLink);
  //   searchResults.appendChild(imageWrapper);
  // });

  page++;
  if (page > 1) {
    showMore.style.display = "block"
  }
}

formElement.addEventListener("submit",(event) => {
  event.preventDefault()
  page = 1;
  searchImages();
})

showMore.addEventListener("click",() => {
  searchImages();
})