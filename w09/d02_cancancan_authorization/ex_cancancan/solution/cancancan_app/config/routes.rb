Rails.application.routes.draw do
  root to: 'welcome#home'
  resources :articles

  get '/sessions/new', to: 'sessions#new', as: 'sign_in'
  post '/sessions', to: 'sessions#create'
  delete '/sessions', to: 'sessions#destroy'
end
