function knuth_shuffle(array){
  var current_index = array.length;
  var random_index;
  var temporary_value;
  while(current_index > 0){
    random_index   = Math.floor(Math.random() * current_index);
    current_index -= 1;

    temporary_value       = array[current_index];
    array[current_index]  = array[random_index];
    array[random_index]   = temporary_value;
  }
  return array;
}

function build_deck(){ 
  var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
  var deck    = []

  for(var suit_index = 0; suit_index < suits.length; suit_index++){
    for(var value_index = 0; value_index < values.length; value_index++){
      deck.push({
        "suit"  : suits[suit_index],
        "value" : values[value_index]
      });
    }
  }
  return deck;
}

var deck  = build_deck();
deck = knuth_shuffle(deck);

