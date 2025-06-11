# backend/config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins [
      "localhost:3000",
      "localhost:10000",
      "https://prioritask-front.onrender.com",
      ENV['FRONTEND_URL'], # Add this in Render's environment variables
      /\Ahttps:\/\/.*\.onrender\.com\z/  # Allows all Render domains during development
    ].compact

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end