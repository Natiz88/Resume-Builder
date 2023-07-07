import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects :[
        {
            id:1,
            project_title:"Answerout",
            description:"It was made",
            link:"https://answerout.com"
        },
        {
            id:2,
            project_title:"saral print",
            description:"It was made",
            link:"https://saral.com"
        },
    ],
}

const ProjectSlice = createSlice({
    name:"project",
    initialState,
    reducers:
    {
        addProject(state,action){
            state.projects = [...state.projects,action.payload.value]
        },
        updateProject(state,action){
            state.projects = state.projects.map(obj => {
                if (obj.id === action.payload.id) {
                  return obj = action.payload.value
                }
                  return obj;
              });
        },
        deleteProject(state,action){
            state.projects = state.projects.filter(exp => action.payload.id !== exp.id)
       },
    }

})

    export const {addProject,updateProject,deleteProject} = ProjectSlice.actions;
export default ProjectSlice.reducer;