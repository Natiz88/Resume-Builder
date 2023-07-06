import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    socialSites : [
        {site_name:"github",site_icon:"GitHubIcon",site_link:"http://github/sharma"},
        {site_name:"linkedin",site_icon:"LinkedInIcon",site_link:"http://linkedIn/sharma"},
    ],
}

const SiteSlice = createSlice({
    name:"site",
    initialState,
    reducers:{
        updateSite(state,action){
            state.socialSites = action.payload
        }
    }

})

export const {updateSite} = SiteSlice.actions;
export default SiteSlice.reducer;