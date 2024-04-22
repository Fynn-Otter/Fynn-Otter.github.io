const api = "https://api.magicthegathering.io"
const output = document.getElementById("output")

function check_Cookie(){
     

    //Gets cookie and trims
   
    if (document.cookie === "") {
        var x = document.getElementById("snackbar");
        x.className = "show";
    }

    let mode = document.cookie;
    let modetrim = mode.trim().split("=")[1]; //Gets 2nd element, Mode value
    if (modetrim === "on") {
        let element = document.body;
        let img = document.getElementById("dark");
        element.classList.toggle("lightmode"); //toggles darkmode off on load
        img.src = "dark_off.png";

    }

}

//sets cookie to not null so the bar wont show again
function cookieOK(){
    document.cookie = ".";
    var x = document.getElementById("snackbar");
    x.className = "";
}


function toggle_Light(){
    let element = document.body;
   
    var img = document.getElementById("dark");
    
    element.classList.toggle("lightmode");
  
// Checks if darkmode png is on, if so, switch to off. otherwise change back to on
    if (dark.src.match("dark_on.png")) {
        img.src = "dark_off.png";
        document.cookie ="lightmode=on;";
        
        
    }
    else {
        img.src = "dark_on.png" ;
        document.cookie ="lightmode=off;";   

        }
    }

function card_Search(){
    let search = ("https://api.magicthegathering.io/v1/cards?name=" + document.getElementById("search").value)

    console.clear(); //Clears for readabilty

    fetch(search) //Fetches list of cards with searched name (Max 100 cards)
        .then((Response) => Response.json()) //returns all cards from search
        .then((data) => {
            console.log(data);
            let card = data.cards[0]; //get first card
            console.log(card);
            let image = card.imageUrl; //gets imageURL from object
            let cardName = card.name;
            let cost = card.manaCost;
            let rules = card.text;
            let power = (card.power +"/" + card.toughness);
            let rarity = card.rarity; 

            console.log(image)
            console.log(cardName)
            console.log(cost)
            console.log(rules)
            console.log(power)
            console.log(rarity)


            document.getElementById("output").src = image
            document.getElementById("name").textContent = cardName
            document.getElementById("cost").textContent =cost
            document.getElementById("rules").textContent = rules
            document.getElementById("pt").textContent = power
            document.getElementById("rare").textContent = rarity
        })

             

    }
//API fetch/get reference https://snipcart.com/blog/integrating-apis-introduction
//Wizards API Documentation - https://docs.magicthegathering.io/




   
    

