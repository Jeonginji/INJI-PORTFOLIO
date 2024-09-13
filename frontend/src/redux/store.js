import { configureStore } from '@reduxjs/toolkit'
import portReducer from './reducers/portSlice'

const store = configureStore({
    reducer :  {
        port : portReducer
    }
})

export default store