require 'rails_helper'

describe "Cards", js: true do

  def add_card(description)
    fill_in('new-card-text', with: description)
    click_button('Add Card')
  end

  before(:each) do
    Card.destroy_all
    Card.create!(description: "write some tests", completed: true)
    Card.create!(description: "make them pass", completed: false)
    Card.create!(description: "refactor our code", completed: false)
  end

  it "shows all cards when we visit the main page" do
    visit(root_path)
    expect(page).to have_content("write some tests")
  end

  it "should add a card to the todo column when a new card is added" do
    visit(root_path)
    add_card("Go for a swim")
    todo_list = find("#todo-column")
    expect(todo_list).to have_content("Go for a swim")
  end

  it "should add a card to the database when a new card is added" do
    starting_card_count = Card.count

    visit(root_path)
    add_card("wash the dishes")

    expect(Card.count - starting_card_count).to eq(1)
  end

  it "should move a card to the completed column when finish link is clicked" do
    todo_card = Card.where(completed: false).first

    visit(root_path)
    card_element = find("li", text: todo_card.description)
    card_element.find("span", text: "Finish").click

    # card should now be considered completed
    done_list = find("#completed-column")
    expect(done_list).to have_content(todo_card.description)
  end

  it "should mark a card as completed column when finish link is clicked" do
    todo_card = Card.where(completed: false).first

    visit(root_path)
    card_element = find("li", text: todo_card.description)
    card_element.find("span", text: "Finish").click

    # card should now be considered completed
    todo_card.reload
    expect(todo_card.completed).to eq(true)

  end

end
