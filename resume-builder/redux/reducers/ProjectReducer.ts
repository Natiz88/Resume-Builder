import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects :[
        {
            project_title:"Answerout",
            descreption:"It was made",
            link:"https://answerout.com"
        },
        {
            project_title:"saral print",
            descreption:"It was made",
            link:"https://saral.com"
        },
    ],
}

const ProjectSlice = createSlice({
    name:"project",
    initialState,
    reducers:{
        updateProject(state,action){
            state.projects = action.payload
        },
    }

})

    export const {updateProject} = ProjectSlice.actions;
export default ProjectSlice.reducer;