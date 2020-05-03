

//Creating Player Card 1
const playerCard1 = document.createElement("img") ; 
playerCard1.setAttribute("src", "images/2_of_clubs.png");  

//Setting variable for Player Area 
const playerPoints = document.getElementById("player-points");  



//Creating Player Card 2
const playerCard2 = document.createElement("img") ; 
playerCard2.setAttribute("src","images/2_of_diamonds.png");  





//Setting Variable for Dealer Area 
const dealerPoints = document.getElementById("dealer-points"); 



//creating a variable for the Deal Button 

function dealCards(){  
    //Creating Dealer Cards
    const dealerCard2 = document.createElement("img"); 
    dealerCard2.setAttribute("src","images/2_of_spades.png"); 
    //Putting Dealer Card 1 in Dealer Area 
    dealerPoints.appendChild(dealerCard1); 
    dealerPoints.appendChild(dealerCard2);   

    //Putting 1st card inside Player Area
    playerPoints.appendChild(playerCard1); 
    //Putting 2nd card inside Player Area
    playerPoints.appendChild(playerCard2);  
    
}  

//Creating Dealer Hit Card
const dealerHit = document.createElement("img"); 
dealerHit.setAttribute("src","images/3_of_clubs.png");  

//Creating Player Hit Card 
const playerHit = document.createElement("img"); 
playerHit.setAttribute("src","images/3_of_diamonds.png")


function hitCards(){  
    //putting hit card in Dealer Area 
    dealerPoints.appendChild(dealerHit); 
    // put hit card in Player Area 
    playerPoints.appendChild(playerHit);

} 




//Deck of cards creation 



    const twoOfClubs = {point:2, suit:"clubs"}; 
    const twoOFDiamonds = {point:2, suit:"diamonds"};
    const twoOfHearts = {point:2, suit:"hearts"}; 
    const twoOfSpades = {point:2, suit:"spades"}; 

    const threeOfClubs = {point:3, suit:"clubs"};
    const threeOfDiamonds = {point:3 , suit:"diamonds"};
    const threeOfHearts = {point:3 , suit:"hearts"};
    const threeOfSpades = {point:3 , suit:"spades"};

    const fourOfClubs = {point:4 , suit:"clubs"};
    const fourOfDiamonds = {point:4 , suit:"diamonds"};
    const fourOfHearts = {point:4 , suit:"hearts"};
    const fourOfSpades  = {point:4 , suit:"spades"};


    const fiveOfClubs = {point:5, suit:"clubs"}; 
    const fiveOfDiamonds = {point:5, suit:"diamonds"};
    const fiveOfHearts = {point:5, suit:"hearts"}; 
    const fiveOfSpades  = {point:5 , suit:"spades"};


    const sixOfClubs = {point:6 , suit:"clubs"};
    const sixOfDiamonds = {point:6 , suit:"diamonds"};
    const sixOfHearts= {point:6, suit:"hearts"};
    const sixOfSpades = {point:6, suit:"spades"};
    

    const sevenOfClubs= {point:7, suit:"clubs"};
    const sevenOfDiamonds= {point:7, suit:"diamonds"};
    const sevenOfHearts= {point:7, suit:"hearts"};
    const sevenOfSpades= {point:7, suit:"spades"};
    

    const eightOfClubs ={point:8, suit:"clubs"};
    const eightOfDiamonds ={point:8, suit:"diamonds"}; 
    const eightOfHearts ={point:8, suit:"hearts"}; 
    const eightOfSpades ={point:8, suit:"spades"}; 

    const nineOfClubs ={point:9, suit:"clubs"}; 
    const nineOfDiamonds ={point:9, suit:"diamonds"}; 
    const nineOfHearts ={point:9, suit:"hearts"}; 
    nineOfSpades ={point:9, suit:"spades"}; 

    const tenOfClubs ={point:10 , suit:"clubs"};
    const tenOfDiamonds ={point:10 , suit:"diamonds"}; 
    const tenOfHearts ={point:10 , suit:"hearts"}; 
    const tenOfSpades  ={point:10, suit:"spades"};

    const aceOfClubs ={point:1, suit:"clubs"};
    const aceOfDiamonds ={point:1, suit:"diamonds"}; 
    const aceOfHearts ={point:1, suit:"hearts"};
    const aceOfSpades  ={point:1, suit:"spades"};

    // blackJoker ={point: , suit:"joker"};
    // redJoker ={point: , suit:"joker"};

    const jackOfClubs ={point:11 , suit:"clubs"}; 
    const jackOfDiamonds ={point:11 , suit:"diamonds"};  
    const jackOfHearts ={point:11 , suit:"hearts"}; 
    const jackOfSpades ={point:11 , suit:"spades"}; 


    const kingOfClubs = {point:13, suit:"clubs"};
    const kingOfDiamonds = {point:13, suit:"diamonds"};
    const kingOfHearts = {point:13, suit:"hearts"};
    const kingOfSpades ={point:13, suit:"spades"};

    const queenOfClubs ={point:12, suit:"clubs"};
    const queenOfDiamonds ={point:12, suit:"diamonds"};
    const queenOfHearts ={point:12, suit:"hearts"};
    const queenOfSpades ={point:12, suit:"spades"};

deckOfCards = [ 
    twoOfClubs,twoOFDiamonds,twoOfHearts,twoOfSpades,
    threeOfClubs,threeOfDiamonds,threeOfHearts,threeOfSpades, 
    fourOfClubs,fourOfDiamonds,fourOfHearts, fourOfSpades, 
    fiveOfClubs, fiveOfDiamonds, fiveOfHearts, fiveOfSpades, 
    sixOfClubs, sixOfDiamonds, sixOfHearts, sixOfSpades, 
    sevenOfClubs, sevenOfDiamonds, sevenOfHearts,sevenOfSpades, 
    eightOfClubs, eightOfDiamonds, eightOfHearts, eightOfSpades, 
    nineOfClubs, nineOfDiamonds, nineOfHearts, nineOfSpades, 
    tenOfClubs,tenOfDiamonds,tenOfHearts,tenOfSpades, 
    jackOfClubs,jackOfDiamonds, jackOfHearts,jackOfSpades, 
    queenOfClubs,queenOfDiamonds,queenOfHearts,queenOfSpades, 
    kingOfClubs, kingOfDiamonds, kingOfHearts, kingOfSpades, 
    aceOfClubs,aceOfDiamonds, aceOfHearts, aceOfSpades
]
deckOfCardsInPlay = [ ]

function getCardImageURL(card){ 
    let value = ""; 
    if (card.point == 1){ 
        value = "ace"
    }  
    else if (card.point == 11){ 
        value = "jack"
    } 
    else if (card.point == 12){ 
        value = "queen"
    } 
    else if (card.point == 13){ 
        value = "king"
    }
    else { 
        value = card.point 
    }     
    return `images/${value}_of_${card["suit"]}.png`
    
} 
 
console.log(getCardImageURL(twoOfClubs)); 

function calculatePoints (arrayOfCards){  
   let  x = arrayOfCards.length -1; 
   let total = 0; 
   let numbOfPoints = ""
    for (let i = 0; i <=x; i++){
        
        if (arrayOfCards[i]["point"] >= 10){ 
        numbOfPoints = 10; 
        total = numbOfPoints + total;
        } 
        else { 
        numbOfPoints = arrayOfCards[i]["point"]; 
        total = numbOfPoints + total;
        }}
    return total
   
        
    
}  

console.log(kingOfDiamonds.point) 


var q = calculatePoints([kingOfDiamonds,kingOfHearts]);

console.log(q); 




function shuffleTheDeck(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
} 

console.log(shuffleTheDeck(deckOfCards)); 
console.log(shuffleTheDeck(deckOfCards)); 


function displayPoints(arrayOfCards){ 
    let totalDealerpoints = document.createElement("p"); 
    totalDealerpoints.textContent = "Point Total:"
    dealerPoints.appendChild(totalDealerpoints); 

    let totalPlayerpoints = document.createElement("p")

}