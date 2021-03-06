// data is passed into payload. refer to DataReducer line 279
export const loadFromAsyncStorage = data => ({
    type: 'LOAD_FROM_ASYNCSTORAGE',
    payload: data
});

export const addPlace = place => ({
    type: 'ADD_NEW_PLACE',
    payload: place
})

export const saveToAsyncStorage = (id, data) => ({
    type: 'SAVE_TO_ASYNCSTORAGE',
    payload: [id, data]
})