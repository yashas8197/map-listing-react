import "./App.css";

const ProductList = ({ products }) => {
  const productListing = products.map((product) => (
    <div key={product.id}>
      <h3>Name: {product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  ));

  return (
    <>
      <h2>Products</h2>
      {productListing}
    </>
  );
};

const RestaurantsList = ({ restaurants }) => {
  const restaurantsListing = restaurants.map((restaurant) => (
    <div key={restaurant.id}>
      <h3>Name: {restaurant.name}</h3>
      <p>cuisines: {restaurant.cuisines}</p>
    </div>
  ));
  return (
    <>
      <h2>Restaurants</h2>
      {restaurantsListing}
    </>
  );
};

const VideoList = ({ videos }) => {
  const videoListing = videos.map((video) => (
    <div key={video.id}>
      <h3>Title: {video.name}</h3>
      <p>Views: {video.views}</p>
    </div>
  ));
  return (
    <>
      <h2>Videos</h2>
      {videoListing}
    </>
  );
};

export default function App() {
  const products = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 },
  ];

  const restaurants = [
    { id: 1, name: "Restaurants 1", cuisines: "Italian" },
    { id: 2, name: "Restaurants 2", cuisines: "Mexican" },
    { id: 3, name: "Restaurants 3", cuisines: "Chinese" },
  ];

  const videos = [
    { id: 1, name: "Video 1", views: 1000 },
    { id: 2, name: "Video 2", views: 2000 },
    { id: 3, name: "Video 3", views: 3000 },
  ];

  return (
    <main>
      <ProductList products={products} />
      <hr />
      <RestaurantsList restaurants={restaurants} />
      <hr/>
      <VideoList videos={videos}/>
    </main>
  );
}
