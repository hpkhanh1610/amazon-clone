export const initialState = {
  basket: [
  {
    id: "1234",
    title: "New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Silver",
    price: 2149,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71UItVa0VmL._AC_UY218_.jpg",
  }, 
  {
    id: "1234",
    title: "New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Silver",
    price: 2149,
    rating: 4,
    image: "https://m.media-amazon.com/images/I/71UItVa0VmL._AC_UY218_.jpg",
  }],
  user: null,
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      // logic for adding item to basket
      return { 
        ...state,
        basket: [...state.basket, action.item],
      }
      
    case 'REMOVE_FROM_BASKET':
      // logic for removing item from basket

      // cloned the basket
      let newBasket = [...state.basket]

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

      if (index >= 0) {
        // item exists in basket, remove it
        newBasket.splice(index, 1)
        
      } else {
        console.warn(
          `Can't remove product (id ${action.id}) as its not in basket`
        )
      }

      return { ...state, basket: newBasket }

    default:
      return state;
  }
}

export default reducer;

/* 

*/