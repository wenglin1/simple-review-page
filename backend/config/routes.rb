Rails.application.routes.draw do
  resources :reviews, only: [:index, :create, :new, :update, :destroy, :show]
  resources :restaurants, only: [:index, :show]
  resources :users, only: [:create, :index]
  post '/login', to: 'users#login'
  get '/persist', to: 'users#persist'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
