const api_key = "3b35903ece0341770101d34c647f2ac9";
const url = "https://api.themoviedb.org/3";
const base_image = "https://image.tmdb.org/t/p/w500";
const base_url = "/discover/movie";

async function fetchZobir(datas) {
    try {
        const response = await fetch(datas);
        const data = await response.json();
        printData(data.results);
        descriptionData(data.results);
        carouselThreeGet(data.results);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function printData(movies) {
    const carousel = document.querySelector(".owl-carousel");
    carousel.innerHTML = ""; // Clear previous content before adding new content

    movies.forEach((movie) => {
        const imageUrl = movie.poster_path
            ? `${base_image}${movie.poster_path}`
            : "path_to_default_image"; // Replace "path_to_default_image" with the path to your default image

        carousel.innerHTML += `
            <div class="owl-carousel-info-wrap item">
                <img src="${imageUrl}" class="owl-carousel-image img-fluid" alt="${movie.title}">
    
                <div class="owl-carousel-info">
                    <h6 class="mb-2">${movie.original_title}</h6>
    
                    <span class="badge">${movie.original_language}</span>
    
                    <span class="badge">${movie.release_date}</span>
                </div>
    
                <div class="social-share">
                    <ul class="social-icon">
                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link bi-twitter"></a>
                        </li>
    
                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link bi-facebook"></a>
                        </li>
    
                        <li class="social-icon-item">
                            <a href="#" class="social-icon-link bi-pinterest"></a>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    });

}

function descriptionData(data) {
    const carouselTwo = document.getElementById("carouselTwo");
  
    data.forEach((item) => {
        const imageUrl = item.poster_path
        ? `${base_image}${item.poster_path}`
        : "https://img.freepik.com/vecteurs-libre/inserer-illustration-concept-bloc_114360-4106.jpg?w=826&t=st=1701006056~exp=1701006656~hmac=989645d4b15a8a070ea3c8778a971aabc319e8c49891c0369a4c1e65ea144f98"; // Replace "path_to_default_image" with the path to your default image

      carouselTwo.innerHTML += `
            <div class="custom-block d-flex">
            <div class="">
                <div class="custom-block-icon-wrap">
                    <div class=""></div>
                    <a href="">
                    <img src="${imageUrl}" class="custom-block-image img-fluid" alt="${item.title}">
                </a>
                </div>
                <div class="mt-2">
                    <a href="#" class="btn custom-btn">
                        ${item.original_title}
                    </a>
                </div>
            </div>

            <div class="custom-block-info">
                <div class="custom-block-top d-flex mb-1">
                    <small class="me-4">
                        <i class="bi-clock-fill custom-icon"></i>
                        ${item.original_language}
                    </small>
                </div>

                <h5 class="mb-2">
                    <a href="detail-page.html">
                    ${item.original_title}

                    </a>
                </h5>

                <div class="profile-block d-flex">
                    <img src="images/profile/woman-posing-black-dress-medium-shot.jpg" class="profile-block-image img-fluid" alt="">
                    <p>
                        ${item.title}
                        <img src="images/verified.png" class="verified-image img-fluid" alt="">
                        <strong>${item.release_date}</strong>
                    </p>
                </div>

                <p class="mb-0">${item.overview}</p>

                <div class="custom-block-bottom d-flex justify-content-between mt-3">
                    <a href="#" class="">
                    <i class="fa-solid fa-star fa-bounce"></i>
                        <span>${item.vote_average}</span>
                    </a>

                    <a href="#" class="">
                    <i class="fa-solid fa-video fa-bounce"></i>
                        <span>${item.video}</span>
                    </a>

                    <a href="#" class="">
                    <i class="fa-regular fa-user fa-bounce"></i>
                        <span>${item.genre_ids}</span>
                    </a>
                </div>
            </div>

            <div class="d-flex flex-column ms-auto">
                <a href="#" class="badge ms-auto">
                    <i class="bi-heart"></i>
                </a>
                <a href="#" class="badge ms-auto">
                    <i class="bi-bookmark"></i>
                </a>
            </div>
        </div>
      <br>
      `;
    });

    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        autoplay: true,
        responsiveClass: true,
        responsive:{
            0:{
                items: 2,
            },
            767:{
                items: 3,
            },
            1200:{
                items: 4,
            }
        }
    });
}

function carouselThreeGet(dataThreeCar){
    const cswFilms = document.getElementById("carouselThree");
    dataThreeCar.forEach((dataThree) =>{
        const imageUrl = dataThree.poster_path
        ? `${base_image}${dataThree.poster_path}`
        : "https://img.freepik.com/vecteurs-libre/inserer-illustration-concept-bloc_114360-4106.jpg?w=826&t=st=1701006056~exp=1701006656~hmac=989645d4b15a8a070ea3c8778a971aabc319e8c49891c0369a4c1e65ea144f98"; // Replace "path_to_default_image" with the path to your default image
    
    
        cswFilms.innerHTML += `
        <div class="custom-block custom-block-full">
        <div class="custom-block-image-wrap">
            <a href="detail-page.html">
                <img src="${imageUrl}" class="" alt="${dataThree.title}">
            </a>
        </div>
    
        <div class="custom-block-info">
            <h5 class="mb-2">
                <a href="detail-page.html">
                    ${dataThree.original_title}
                </a>
            </h5>
    
            <div class="profile-block d-flex">
                <img src="images/profile/woman-posing-black-dress-medium-shot.jpg" class="profile-block-image img-fluid" alt="">
    
                <p>${ dataThree.title }
                    <strong>${dataThree.release_date}</strong>
                </p>
            </div>
    
            <p class="mb-0">${dataThree.overview}</p>
    
            <div class="custom-block-bottom d-flex justify-content-between mt-3">
                <a href="#" class="">
                <i class="fa-solid fa-star fa-bounce"></i>
                    <span>${dataThree.vote_average}</span>
                </a>
    
                <a href="#" class="">
                <i class="fa-solid fa-video fa-bounce"></i>
                    <span>${dataThree.video}</span>
                </a>
    
                <a href="#" class="">
                <i class="fa-regular fa-user fa-bounce"></i>
                    <span>${dataThree.genre_ids}</span>
                </a>
            </div>
        </div>
    
        <div class="social-share d-flex flex-column ms-auto">
            <a href="#" class="badge ms-auto">
                <i class="bi-heart"></i>
            </a>
    
            <a href="#" class="badge ms-auto">
                <i class="bi-bookmark"></i>
            </a>
        </div>
    </div>

        <br>
    `;
    })
}

const DatdataOfkir = `${url}${base_url}?api_key=${api_key}`;
fetchZobir(DatdataOfkir);

