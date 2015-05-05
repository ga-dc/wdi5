$(function() {
  fetchAndRenderCards();
  $('#new-card-button').on('click', addCard);
  $('.card-list').on('click', '.delete', deleteCard);
});

function fetchAndRenderCards() {
  var results;
  $.get("/cards")
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
  $.post("/cards", {card: cardObject })
    .done(function(data) {
      renderTodo(data);
    });
}

function deleteCard() {
  var cardElement = $(this).closest('.card');
  var id = cardElement.data('id');
  $.ajax('/cards/' + id, {type: "DELETE"})
    .done(function(data) {
      cardElement.remove();
    });
}

function renderTodo(card) {
  var todoList = $('#todo-column').find('.card-list');

  var cardElement = $('<li class="card todo" data-id="' + card.id + '">' + card.description + '</li>');
  var deleteLink = $('<span class="delete">X</span>');
  var finishLink = $('<span class="finish">Finish</span>');

  cardElement.append(deleteLink).append(finishLink);
  $(cardElement).appendTo(todoList);
}

function renderCompleted(card) {
  var todoList = $('#completed-column').find('.card-list');

  var cardElement = $('<li class="card todo" data-id="' + card.id + '">' + card.description + '</li>');
  var deleteLink = $('<span class="delete">X</span>');

  cardElement.append(deleteLink);
  $(cardElement).appendTo(todoList);
}
