Review.destroy_all
Restaurant.destroy_all
User.destroy_all

admin = User.create(name: "weng", username: "weng", password: "123456")
bob = User.create(name: "bob", username: "bob", password: "123456")
mike = User.create(name: "mike", username: "mike", password: "123456")

10.times do
    Restaurant.create({
    name: Faker::Restaurant.name, 
    location: Faker::Address.state,
    cuisine: Faker::Restaurant.type, 
    rating: (6..10).to_a.sample,
    img_url: Faker::Placeholdit.image(size: '50x50', format: 'jpeg', background_color: :random)
})
end

50.times do
    Review.create({
    description: Faker::Restaurant.review,
    user_id: User.all.sample.id,
    restaurant_id: Restaurant.all.sample.id
})
end

p 'done'