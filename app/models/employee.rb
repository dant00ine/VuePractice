class Employee < ApplicationRecord
    validates :name, :email, presence: true
end
