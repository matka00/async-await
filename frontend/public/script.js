//hello




const loadEvent = async function (){
    const rootElement = document.getElementById("root");

    /* fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(function (response){
        console.log(response);
        return response.json()

    }).then(function (json){
        console.log(json.date);
        rootElement.insertAdjacentHTML("beforeend", `
            <img src="${json.hdurl}">
        `)

    }) */
    //a fetch azonnal visszatér egy objektummal és ezen lesz a then metódus
    // kitettük a zárójelet, ezért formálódik a fetch értéke objektummá


    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
    const responseJson = await response.json();
    rootElement.insertAdjacentHTML("beforeend", `
            <img src="${responseJson.hdurl}">
        `);

}


window.addEventListener("load", loadEvent)