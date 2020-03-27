class Review < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant

  validates_presence_of :rating, :description, :user_id
end
