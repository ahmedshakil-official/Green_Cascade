import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loadItames = items => {
    return {
        type: actionTypes.LOAD_ITEMS,
        payload: items,
    }
}

export const getItems = () => dispatch => {
    axios.get("https://green-cascade-default-rtdb.firebaseio.com/")
        .then(response => dispatch(loadDishes(response.data)))
        .catch(err => console.log(err))
}