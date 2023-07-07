import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

const initialState = {
    skills :[
        {id:1,skill:"HTML, CSS, Javascript"},
        {id:2,skill:"React"},
    ]
}

const SkillSlice = createSlice({
    name:"skill",
    initialState,
    reducers:{
        addSkill(state,action){
            state.skills = [...state.skills,{id:uuidv4(),skill:""}]
        },
        updateSkill(state,action){
            state.skills = state.skills.map(obj => {
                if (obj.id === action.payload.id) {
                  return {...obj, skill: action.payload.value};
                }
                  return obj;
              });
        },
        deleteSkill(state,action){
            state.skills = state.skills.filter(skill => action.payload.id !== skill.id)
       },

    }

})

export const {addSkill,updateSkill,deleteSkill} = SkillSlice.actions;
export default SkillSlice.reducer;