import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personalInfo:{
        name:"Your Name",
        email:"email@gmail.com",
        address:"address",
        phone:"9803023459",
        bio:"Something about yourself"
    }
}

const InfoSlice = createSlice({
    name:"info",
    initialState,
    reducers:{
        updatePersonalInfo(state,action){
            state.personalInfo = action.payload
        }
    }

})

export const loginActions = InfoSlice.actions;
export default InfoSlice;