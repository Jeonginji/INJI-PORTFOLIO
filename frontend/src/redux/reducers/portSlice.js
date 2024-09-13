import { createSlice } from "@reduxjs/toolkit" 

const portSlice = createSlice({
    name : 'port',
    initialState : [],
    reducers : {
        initData : (state, action)=>{
            // console.log('portSlice initData', action)

        }
    },
})


export const portActions = portSlice.actions
export default portSlice.reducer