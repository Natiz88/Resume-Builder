import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    experience :[
        {
            title:"Frontend Developer",
            employer:"Bluefox pvt. ltd",
            location:"Itahari",
            start:"july 2022",
            end:"november 2022",
            descreption:"I worked as a frontend developer"
        }
    ],
}

const ExperienceSlice = createSlice({
    name:"experience",
    initialState,
    reducers:{
        updateExperience(state,action){
            state.experience = action.payload
        }
    }

})

export const {updateExperience} = ExperienceSlice.actions;
export default ExperienceSlice.reducer;