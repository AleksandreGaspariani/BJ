
let players = 0;
let hidden;
let deck;

let playerSums = [];

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let types = ["C", "D", "H", "S"];
    deck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + "-" + types[i]); //A-C -> K-C, A-D -> K-D
        }
    }
    // console.log(deck);
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length); // (0-1) * 52 => (0-51.9999)
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    // console.log(deck);
}

function drawPlayers(players){
	
	for(let i = 1; i <= players; i++){
		$('#players').append(
	 	"<div id='p"+ i +"' class='d-flex flex-column'>"+
		 	"<div class='w-100 d-flex justify-content-end'>"+
		 		"<button class='bg-danger border rounded' onclick='addCard("+i+")'>➕</button>"+
		 	"</div>"+
			"<p class='text-white d-flex flex-column'>"+
				"Player " + i + ": "+
				"<div class='d-flex' style='gap: 5px'>"+
					"<input type='text' style='width: 170px'>"+
					"<input type='text' style='width: 50px'>"+
				"</div>"+
			"</p>"+
		"</div>" 
		)
	}
}


$('#playersCountApprove').on('click',(e)=>{
	e.preventDefault();
	let players = $('#playersCount').val();
	$('#playerNum').toggleClass('visually-hidden');

	drawPlayers(players);
	buildDeck();
	shuffleDeck();
	addCardDealer();
});

function addCardDealer(){
	hidden = deck.pop();
	// console.log(hidden);

	for(let i = 0; i < 1; i++){
		let card = deck.pop();
		$('#dealerCards').append(
			"<img src='cards/"+card+".png' width='80px'>"
		);
	}
}

function addCardsForPlayers(){
	// for (var i= 1; i <= playerSum; i++ ) {
	// 	addCardAfterReset(i);
	// }
	console.log('test');
}

function addDealerCardBtn() {
	let card = deck.pop();
	$('#dealerCards').append(
		"<img src='cards/"+card+".png' width='80px'>"
	);
}

$('#hiddenCard').on('click',()=>{
	$('#hiddenCard').attr('src','cards/'+hidden+'.png');
});

function addCard(id){
	let card = deck.pop();
	
	$('#p'+id).append(
			"<div id='cardsP"+id+"' style='gap: 5px' class='playerCards'></div>"
		)

	$('#cardsP'+id).append(
			"<img src='cards/"+card+".png' width='80px'>"
		)

}

function resetGame(){
	deck = [];
	buildDeck();
	shuffleDeck();
	$('#dealerCards').empty();
	$('#hiddenCard').attr('src','cards/back.png');
	addCardDealer();
	$('.playerCards').empty();
}



function countCards(){
	for(let i = 1; i < players; i++){
		let test = $('cardsP'+i+' > img').attr('src');
		// console.log(test);
	}
}


