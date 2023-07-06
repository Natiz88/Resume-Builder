import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    education : [
        {
            id:1,
            school:"Las ejt",
            degree:"bachelor",
            startData:"june 2022",
            endDate:"june 2023",
            city:"Daharan"
        },
    ],
}

const EducationSlice = createSlice({
    name:"education",
    initialState,
    reducers:{
        updateEducation(state,action){
            state.education = action.payload
        }
    }

})

export const {updateEducation} = EducationSlice.actions;
export default EducationSlice.reducer;