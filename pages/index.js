import RestaurantList from "../components/RestaurantList";

// props getStaticProps ({ restaurants })
export default function Home({ restaurants }) {
  return (
    <div className="container">
      {/* {restaurant} diambil dari parameter HOME */}
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://restaurant-api.dicoding.dev/list");
  const { restaurants } = await response.json();

  return {
    props: {
      restaurants, // ini akan dikirim ke komponen sebagai props
    },
  };
}

/**
 * [API] -->
 * [getStaticProps] -->
 * { props: { restaurants } } -->
 * [Home({ restaurants })] -->
 * <RestaurantList restaurants={restaurants} /> -->
 * [RestaurantList({ restaurants })]
 */
