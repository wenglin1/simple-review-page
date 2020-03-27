class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :cuisine
  has_many :reviews
  has_many :users, through: :reviews
end
