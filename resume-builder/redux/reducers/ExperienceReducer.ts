import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    experience :[
        {
            id:1,
            title:"Frontend Developer",
            employer:"Bluefox pvt. ltd",
            location:"Itahari",
            start:"july 2022",
            end:"november 2022",
            description:"I worked as a frontend developer",
            current:false,
        }
    ],
}

const ExperienceSlice = createSlice({
    name:"experience",
    initialState,
    reducers:
    {
        addExperience(state,action){
            state.experience = [...state.experience,action.payload.value]
        },
        updateExperience(state,action){
            state.experience = state.experience.map(obj => {
                if (obj.id === action.payload.id) {
                  return obj = action.payload.value
                }
                  return obj;
              });
        },
        deleteExperience(state,action){
            state.experience = state.experience.filter(exp => action.payload.id !== exp.id)
       },
    }

})

export const {addExperience,updateExperience,deleteExperience} = ExperienceSlice.actions;
export default ExperienceSlice.reducer;