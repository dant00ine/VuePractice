class Employee < ApplicationRecord
    validates :name, :email, :manager, presence: true
end
