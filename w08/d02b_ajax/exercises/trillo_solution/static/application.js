$(function() {
  fetchAndRenderCards();
  $('#new-card-button').on('click', addCard);
  $('.card-list').on('click', '.delete', deleteCard);
  $('.card-list').on('click', '.finish', finishCard);
  $('.card-list').on('click', '.text', editCard);
  $('.card-list').on('keypress', '.edit-form-text', updateCard);
});

function fetchAndRenderCards() {
  var results;
  $.get("http://localhost:3000/cards")
  .done(function(data) {
      renderCards(data);
  });
}

function renderCards(cards) {
  cards.forEach(function(card) {
    if (card.completed === false) {
      renderTodo(card);
    } else {
      renderCompleted(card);
    }
  });
}

function addCard() {
  var description = $('#new-card-text').val();
  $('#new-card-text').val('');
  var cardObject = {description: description, completed: false};
  $.post("http://localhost:3000/cards", {card: cardObject })
    .done(function(data) {
      renderTodo(data);
    });
}

function deleteCard() {
  var cardElement = $(this).closest('.card');
  var id = cardElement.data('id');
  $.ajax('http://localhost:3000/cards/' + id, {type: "DELETE"})
    .done(function(data) {
      cardElement.remove();
    });
}

function renderTodo(card) {
  var todoList = $('#todo-column').find('.card-list');

  var cardElement = $('<li class="card todo" data-id="' + card.id + '">');
  var textElement = $('<span class="text">' + card.description + '</span>');
  var deleteLink = $('<span class="delete">X</span>');
  var finishLink = $('<span class="finish">Finish</span>');

  cardElement.append(textElement).append(deleteLink).append(finishLink);
  $(cardElement).appendTo(todoList);
}

function renderCompleted(card) {
  var todoList = $('#completed-column').find('.card-list');

  var cardElement = $('<li class="card todo" data-id="' + card.id + '">');
  var textElement = $('<span class="text">' + card.description + '</span>');
  var deleteLink = $('<span class="delete">X</span>');

  cardElement.append(textElement).append(deleteLink);
  $(cardElement).appendTo(todoList);
}

function finishCard() {
  var cardElement = $(this).closest('.card');
  var id = cardElement.data('id');
  var cardText = cardElement.find('.text').text();
  var cardInfo = { completed: true }
  $.ajax('http://localhost:3000/cards/' + id, {type: "PUT", data: {card: cardInfo}})
    .done(function(card) {
      cardElement.remove();
      renderCompleted(card);
    });
}

function editCard() {
  var cardElement = $(this).closest('.card');
  var cardTextElement = cardElement.find('.text');

  var editForm = $('<span class="edit-form">');
  var editText = $('<input type="text" class="edit-form-text">').val(cardTextElement.text());

  editForm.append(editText);
  cardTextElement.replaceWith(editForm);
  $(this).remove();
}

function updateCard(e) {
  if (e.which === 13) {
    var cardElement = $(this).closest('.card');
    var id = cardElement.data('id');
    var cardText = cardElement.find('.edit-form-text').val();
    var cardInfo = { description: cardText };

    $.ajax('http://localhost:3000/cards/' + id, {type: "PUT", data: {card: cardInfo}})
      .done(function(card) {
        var newCardText = $('<span class="text">' + card.description + '</span>');
        cardElement.find('.edit-form').replaceWith(newCardText);
      });
  }
}
