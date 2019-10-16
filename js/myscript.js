const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    const searchBar = document.getElementById('searchBar');
    const searchUrlForGames = "https://api.rawg.io/api/games?page_size=5&search=" + searchBar.value
    const search = fetch(searchUrlForGames)
        .then((response) => response.json())
            .then((json) => {
                document.getElementById('searchResults').innerHTML = ""
                const imageUrl = json.results[0].background_image
                const gameName = json.results[0].name
                const releasedDate = json.results[0].released
                let img = document.createElement('img');
                img.src = imageUrl
                img.style.width = '220px'
                img.style.height = '263px'
                let gameNameField = document.createElement("p")
                gameNameField.style.textAlign = 'center'
                gameNameField.innerText = gameName
                let releasedDateField = document.createElement("p")
                releasedDateField.style.textAlign = 'center'
                releasedDateField.innerText = releasedDate
                document.getElementById('searchResults').appendChild(img);
                document.getElementById('searchResults').appendChild(gameNameField);
                document.getElementById('searchResults').appendChild(releasedDateField);
                return json
            })
});