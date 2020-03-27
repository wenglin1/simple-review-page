class User < ApplicationRecord
    has_many :reviews
    has_many :restaurants, through: :reviews

    validates :username, uniqueness: true
    validates :username, length: { minimum: 4 }
    validates :password, length: { minimum: 4 }

    has_secure_password
end
