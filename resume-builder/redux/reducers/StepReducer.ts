import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step:0
}

const StepSlice = createSlice({
    name:"step",
    initialState,
    reducers:{
        addStep(state,action){
            if(state.step <= 3){
            state.step = state.step +=1
            }
        },
        subtractStep(state,action){
            if(state.step >= 0){
            state.step = state.step -=1
            }
        },
    }

})

export const {addStep,subtractStep} = StepSlice.actions;
export default StepSlice.reducer;