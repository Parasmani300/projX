export const increment = (payload)  => {
    return {
        type: 'INCREMENT',
        payload: payload
    }
}

export const decrement = (payload) => {
    return {
        type: 'DECREMENT',
        payload:payload
    }
}

export const selectCake = (payload) => {
    return {
        type:'SELECT_CAKE',
        payload:payload
    }
}