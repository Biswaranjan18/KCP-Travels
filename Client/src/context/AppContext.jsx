import { createContext, useState } from "react";
// import { farmers } from "../assets/assets";
// import { CatagoryData } from "../assets/assets";
// import { cars } from "../assets/assets.js";



export const AppContext = createContext()

const AppContextProvider = (props) => {

    // const [cart, setCart] = useState([]);
    // const [cartItems, setCartItems] = useState([]);
    // const [ordersLength, setOrdersLength] = useState(null);
     const [selectedCar, setSelectedCar] = useState(null);


    const value = {
        // farmers,
        // CatagoryData,
        // cart, 
        // setCart,
        // cartItems,
        // setCartItems,
        // ordersLength,
        // setOrdersLength,
        selectedCar,
        setSelectedCar,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider