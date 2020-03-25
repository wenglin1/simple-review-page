class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :cuisine, :rating
  has_many :reviews
end
