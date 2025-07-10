import { useEffect, useState } from "react"

const RestaurantCard = ({apiUrl}) => {
  const [resList, setResList] = useState([]);
  
  // Function to fetch data from the API
  const handleFetchData = async (apiUrl) => {
    const response = await fetch(apiUrl);
    const res = await response.json();
    setResList(res?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  }
  useEffect(() => {
      handleFetchData(apiUrl);
  }, []);
  
  return (
    <>
      <h1 className="pt-4 pb-2 text-xl font-bold">What's on your mind?</h1>
      <div className="flex gap-6 px-4 overflow-x-scroll snap-x">
        {resList?.length === 0 && <span>Loading...</span>}
        {resList && resList?.map((restaurant) => {
          return (
            <a key={restaurant?.id} href={restaurant?.action?.link} className="snap-start">
              <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${restaurant?.imageId}`} alt={restaurant?.accessibility?.altText} className="max-w-[140px]" />            
            </a>
          );
        })}
      </div>
    </>
  )
}

export default RestaurantCard;