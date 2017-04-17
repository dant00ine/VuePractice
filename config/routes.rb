Rails.application.routes.draw do
  get 'sessions/new'

  get 'sessions/create'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'employees#index'

  get '/login', to: 'sessions#login'
  get '/register', to: 'sessions#register'
 
  resources :employees, :except => [:new, :edit]
end
