const cartReducer = (state: any, action: any) => {
    switch (action.type) {
        case "INIT_PRODUCTS":
            return {...state, products:action.payload}
        default:
            return state;
    }
}

export default cartReducer;