Rails.application.routes.draw do
  root to: 'application#index'
  resources :songs
  resources :hamlists do
    member do
      post 'add_song'
      delete 'remove_song'
    end
  end
end
