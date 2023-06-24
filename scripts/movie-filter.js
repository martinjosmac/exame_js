const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "bs": "target end-to-end models"
        }
    }
]
const movies = [
    {
        "userId": 10,
        "id": 1,
        "title": "The Godfather",
        "genre": "Thriller",
        "watched": "2022-04-01 09:40:48",
        "rate": 7.6,
        "image": "https://i.ebayimg.com/images/g/X~cAAOSwz2ZiaB2w/s-l1600.jpg"
    },
    {
        "userId": 7,
        "id": 2,
        "title": "The Texas Chain Saw Massacre",
        "genre": "Horror",
        "watched": "2020-05-25 13:11:24",
        "rate": 7.4,
        "image": "https://m.media-amazon.com/images/I/91ei8JE0SDL.jpg"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "The Shining",
        "genre": "Horror",
        "watched": "2022-02-24 00:21:22",
        "rate": 5.8,
        "image": "https://cdn.posteritati.com/posters/000/000/061/864/the-shining-md-web.jpg"
    },
    {
        "userId": 3,
        "id": 4,
        "title": "Toy Story",
        "genre": "Animation|Children|Comedy|Fantasy",
        "watched": "2022-06-17 23:21:12",
        "rate": 5.9,
        "image": "https://m.media-amazon.com/images/I/71aBLaC4TzL.jpg"
    },
    {
        "userId": 8,
        "id": 5,
        "title": "Halloween: The Curse of Michael Myers",
        "genre": "Horror|Thriller",
        "watched": "2020-04-18 15:47:33",
        "rate": 0.7,
        "image": "https://m.media-amazon.com/images/I/91UHof7cKKL.jpg"
    },
    {
        "userId": 5,
        "id": 6,
        "title": "Die Hard",
        "genre": "Action|Crime|Thriller",
        "watched": "2020-06-15 22:49:31",
        "rate": 3.3,
        "image": "https://cdn.shopify.com/s/files/1/1057/4964/products/Die-Hard-Vintage-Movie-Poster-Original-1-Sheet-27x41-7126.jpg"
    },
    {
        "userId": 2,
        "id": 7,
        "title": "The Dark Knight Rises",
        "genre": "Action|Adventure|Crime",
        "watched": "2022-11-16 04:22:21",
        "rate": 4.7,
        "image": "https://m.media-amazon.com/images/I/81G+2LJQJeL.jpg"
    },
    {
        "userId": 3,
        "id": 8,
        "title": "Fight Club",
        "genre": "Action|Crime|Drama|Thriller",
        "watched": "2022-10-26 07:04:17",
        "rate": 4,
        "image": "https://m.media-amazon.com/images/I/81D+KJkO4SL.jpg"
    },
    {
        "userId": 5,
        "id": 9,
        "title": "Avengers: Infinity War",
        "genre": "Action|Adventure|Sci-Fi",
        "watched": "2022-07-12 20:36:17",
        "rate": 2.8,
        "image": "https://i.ebayimg.com/images/g/kukAAOSw-YZa8mLH/s-l1600.jpg"
    },
    {
        "userId": 7,
        "id": 10,
        "title": "The Hangover",
        "genre": "Comedy",
        "watched": "2020-08-13 01:17:10",
        "rate": 1.4,
        "image": "https://www.tvguide.com/a/img/catalog/provider/1/2/1-172442538.jpg"
    },
    {
        "userId": 4,
        "id": 11,
        "title": "Your Name",
        "genre": "Animation|Drama|Fantasy|Romance",
        "watched": "2020-10-06 00:08:50",
        "rate": 1,
        "image": "https://i0.wp.com/www.septimacaja.com/wp-content/uploads/xq1Ugd62d23K2knRUx6xxuALTZB.jpg"
    },
    {
        "userId": 9,
        "id": 12,
        "title": "How to Train Your Dragon",
        "genre": "Adventure|Animation|Children|Fantasy",
        "watched": "2022-01-11 23:06:04",
        "rate": 9.1,
        "image": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg"
    },
    {
        "userId": 8,
        "id": 13,
        "title": "Robin Hood",
        "genre": "Adventure|Animation|Children|Comedy|Musical",
        "watched": "2021-08-05 18:57:45",
        "rate": 5.8,
        "image": "https://pics.filmaffinity.com/Robin_Hood-466796044-large.jpg"
    },
    {
        "userId": 6,
        "id": 14,
        "title": "Whiplash",
        "genre": "Drama|Musical",
        "watched": "2022-04-23 00:44:02",
        "rate": 0.7,
        "image": "https://flxt.tmsimg.com/assets/p10488558_p_v12_ai.jpg"
    },
    {
        "userId": 5,
        "id": 15,
        "title": "Life Is Beautiful",
        "genre": "Comedy|Drama|Romance|War",
        "watched": "2022-05-02 20:00:04",
        "rate": 6.4,
        "image": "https://flxt.tmsimg.com/assets/p22005_p_v8_aa.jpg"
    }
]

const form = document.getElementById('form');
const fromDate = document.getElementById('fromDate');
const toDate = document.getElementById('toDate');
const rate = document.getElementById('rate');
const userId = document.getElementById('userId');

//funcion principal donde se filtra a traves del id, fecha y clasificacion
function filterMovies({ users, movies, userId, fromDate, toDate, rate }) {
    const fromDateValue = fromDate.value;
    const toDateValue = toDate.value;
    const millisecondsFrom = new Date(fromDateValue).getTime();
    const millisecondsTo = new Date(toDateValue).getTime();



    const filteredMovies = movies.filter((movie) => {
        const movieDate = new Date(movie.watched);
        const movieDateMilliseconds = movieDate.getTime();
        if (userId !== '') {
            return (
                movieDateMilliseconds >= millisecondsFrom &&
                movieDateMilliseconds <= millisecondsTo &&
                movie.rate >= Number(rate.value) && movie.userId === Number(userId.value)
            );
        } else {
            return (
                movieDateMilliseconds >= millisecondsFrom &&
                movieDateMilliseconds <= millisecondsTo &&
                movie.rate >= Number(rate.value) //&& movie.userId === Number(userId.value)
            );
        }

    });

    return filteredMovies

}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const filteredData = filterMovies({ users, movies, userId, fromDate, toDate, rate });

    const targetElement = document.getElementById('miList');
    targetElement.textContent = '';

    filteredData.forEach((movie) => {
        const user = users.find((user) => movie.userId === user.id);

        const cardElement = document.createElement('div');

        const userIdElement = document.createElement('p');
        userIdElement.textContent = `id: ${user.id}`
        cardElement.appendChild(userIdElement);

        const usernameElement = document.createElement('p');
        usernameElement.textContent = `username: ${user.username}`;
        cardElement.appendChild(usernameElement);

        const emailElement = document.createElement('p');
        emailElement.textContent = `Email: ${user.email}`;
        cardElement.appendChild(emailElement);

        const fullAddressElement = document.createElement('p');
        fullAddressElement.textContent = `Full Address: ${user.address.street} - ${user.address.city}`;
        cardElement.appendChild(fullAddressElement);

        const companyElement = document.createElement('p');
        companyElement.textContent = `Company: ${user.company.name}`;
        cardElement.appendChild(companyElement);

        const movieElement = document.createElement('p');
        movieElement.textContent = `Movie: ${movie.title}`;
        cardElement.appendChild(movieElement);

        const rateElement = document.createElement('p');
        rateElement.textContent = `Rate: ${movie.rate}`;
        cardElement.appendChild(rateElement);

        const imageElement = document.createElement('img');
        imageElement.src = movie.image;
        cardElement.appendChild(imageElement);

        targetElement.appendChild(cardElement);
    });
});
