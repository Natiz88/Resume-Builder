import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personalInfo :{
        name:"Nabin Sharma",
        bio:"I am a passionate Full Stack Web Developer with expertise in building dynamic and engaging web applications using MERN stack. I take a determined approach to every project, from conceptualization to deployment, accepting obstacles and coming up with creative solutions.",
        email:"nabin@gmail.com",
        phone:"9804320458",
        address:"Itahari"
    },
    socialSites : [
        {site_name:"github",site_icon:"GitHubIcon",site_link:"http://github/sharma"},
        {site_name:"linkedin",site_icon:"LinkedInIcon",site_link:"http://linkedIn/sharma"},
    ],
    education : [
        {
            school:"Las ejt",
            degree:"bachelor",
            startData:"june 2022",
            endDate:"june 2023",
            city:"Daharan"
        },
    ],
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

    skills :[
        {id:1,skill:"HTML, CSS, Javascript"},
        {id:2,skill:"React"},
    ]
}

const InfoSlice = createSlice({
    name:"info",
    initialState,
    reducers:{
        updatePersonalInfo(state,action){
            state.personalInfo = action.payload
        },
        updateSkills(state,action){
            state.skills = action.payload
        }
    }

})

export const infoActions = InfoSlice.actions;
export default InfoSlice.reducer;