import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personalInfo :{
        name:"Nabin Sharma",
        bio:"I am a passionate Full Stack Web Developer with expertise in building dynamic and engaging web applications using MERN stack. I take a determined approach to every project, from conceptualization to deployment, accepting obstacles and coming up with creative solutions.",
        email:"nabin@gmail.com",
        phone:"9804320458",
        address:"Itahari"
    },
}

const InfoSlice = createSlice({
    name:"info",
    initialState,
    reducers:{
        updateInfo(state,action){
            state.personalInfo = action.payload
        },
    }

})

export const {updateInfo} = InfoSlice.actions;
export default InfoSlice.reducer;