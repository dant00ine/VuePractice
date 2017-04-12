Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'employees#index'
  resources :employees, :except => [:new, :edit]
end
