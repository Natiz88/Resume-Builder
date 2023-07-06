import { configureStore } from "@reduxjs/toolkit";
import InfoReducer from "./reducers/InfoReducer";
import EducationReducer from "./reducers/EducationReducer";
import SkillReducer from "./reducers/SkillReducer";
import ExperienceReducer from "./reducers/ExperienceReducer";
import SiteReducer from "./reducers/SiteReducer";
import ProjectReducer from "./reducers/ProjectReducer";
import StepReducer from "./reducers/StepReducer";

export const store = configureStore({ reducer: 
    {
    info:InfoReducer,
    education:EducationReducer,
    skill:SkillReducer,
    experience:ExperienceReducer,
    site:SiteReducer,
    project:ProjectReducer,
    step:StepReducer,
} 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;