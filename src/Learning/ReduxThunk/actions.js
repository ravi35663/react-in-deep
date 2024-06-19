export const FETCH_DATA_REQUEST = 'fetch-data-request';
export const FETCH_DATA_SUCCESS = 'fetch-data-success';
export const FETCH_DATA_ERROR = 'fetch-data-error';

/*
    Redux Thunk is a middleware for Redux that allows you to write action creators 
    that return a function instead of an action object. This is particularly useful 
    for handling asynchronous operations like API calls.

    Why Use Redux Thunk?
    Asynchronous Actions: Helps in managing asynchronous operations such as fetching 
    data from an API.
    
    Simplifies Logic: Keeps action creators clean and easy to manage.

    Flexible Dispatching: Allows dispatching multiple actions, which is useful for 
    complex state changes.

*/
// Action creators
export const fetchDataRequest = ()=>{
    return {type:FETCH_DATA_REQUEST};
}

export const fetchDataSuccess = (data)=>{
    return {type:FETCH_DATA_SUCCESS,payload:data};
}

export const fetchDataError = (err)=>{
    return {type:FETCH_DATA_ERROR,payload:err};
}

// Async stuff => calling two actions together (It can be more than 1 actions with async api calls)
export const fetchData = (dispatch)=>{
    dispatch(fetchDataRequest());
    fetch('https://dummyjson.com/products')
    .then(res=> res.json() )
    .then(res=> dispatch(fetchDataSuccess(res)))
    .catch(err=> dispatch(fetchDataError(err)));
}