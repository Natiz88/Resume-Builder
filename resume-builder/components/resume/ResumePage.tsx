'use client'
import {useRef} from 'react';
import Image from 'next/image';
import ProfilePic from '../../images/profile.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import { EmailOutlined } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';

const ResumePage = () => {

    const printRef = useRef<HTMLInputElement>(null);

    const printBill = () => {
        if(printRef.current){
        let element = printRef.current.innerHTML;
        let doc = document.body.innerHTML;
        document.body.innerHTML = element;
        window.print();
        document.body.innerHTML = doc;
        }
      };

    let personalInfo = {
        name:"Nabin Sharma",
        bio:"I am a passionate Full Stack Web Developer with expertise in building dynamic and engaging web applications using MERN stack. I take a determined approach to every project, from conceptualization to deployment, accepting obstacles and coming up with creative solutions.",
        email:"nabin@gmail.com",
        phone:"9804320458",
        address:"Itahari"
    }
    let socialSites = [
        {site_name:"github",site_icon:"GitHubIcon",site_link:"http://github/sharma"},
        {site_name:"linkedin",site_icon:"LinkedInIcon",site_link:"http://linkedIn/sharma"},
    ]
    let education = [
        {
            school:"Las ejt",
            degree:"bachelor",
            startData:"june 2022",
            endDate:"june 2023",
            city:"Daharan"
        },
    ]
    let experience = [
        {
            title:"Frontend Developer",
            employer:"Bluefox pvt. ltd",
            location:"Itahari",
            start:"july 2022",
            end:"november 2022",
            descreption:"I worked as a frontend developer"
        }
    ]
    let projects = [
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
    ]

    let skills = [
        {name:"HTML, CSS, Javascript"},
        {name:"React"},
    ]

  return (
    <div ref={printRef} className='w-full mx-8 lg:mx-0 h-[700px] flex border border-gray-400'>
        <div className='w-[35%] p-4 h-full flex flex-col items-center  bg-blue-900 text-white'>
            <Image
      src={ProfilePic}
      width={130}
      height={130}
      alt="Pic"
            />
            <div className="w-full py-4">
                <h2>Contact</h2>
                <hr />
                <div className='py-1 pl-2'>
                    <p><HomeIcon/>{personalInfo.address}</p>
                    <p><PermDeviceInformationIcon/>{personalInfo.phone}</p>
                    <p><MailIcon/>{personalInfo.email}</p>
                    <div>
                    {socialSites.map((site,idx) => 
                    <div key={idx+1} className=''>
                        <p>{site.site_name === "github" && <GitHubIcon/>}
                        {site.site_name === "linkedin" && <LinkedInIcon/>}
                        {site.site_name === "facebook" && <FacebookIcon/>}
                        {site.site_link}</p>
                    </div>
                    )}
                </div>
                </div>
            </div>
            <div className="w-full py-4">
                <h2>Education</h2>
                <hr />
                <div>
                    <div className='pl-2'>
                    {education.map((edu,idx) => 
                    <div key={idx+1} className='py-1'>
                                                <h4>{edu.degree}</h4>
                        <p>{edu.school},{edu.city}</p>
                        <p>{edu.startData} - {edu.endDate}</p>
                    </div>
                    )}
                </div>
                </div>
            </div>
            <div className="w-full py-4">
                <h2>Skills</h2>
                <hr />
                <div className='pl-2'>
                    {skills.map((skill,idx) => 
                    <div key={idx+1} className='py-1'>
                        <p>{skill.name}</p>
                    </div>
                    )}
                </div>
                
            </div>
        </div>
        <div className='w-[65%] p-4 min-h-full'>
            <div className='w-full min-h-1/5'>
                <h1 className="py-2">{personalInfo.name}</h1>
                <p>{personalInfo.bio}</p>
            </div>
            <div className='w-full py-4'>
                <h2>Projects</h2>
                <hr />
                <div className='pl-2'> 
                    {projects.map((project,idx) => 
                    <div key={idx+1} className='py-2'>
                        <h4>{project.project_title}</h4>
                    <p>{project.descreption}</p>
                    <p>{project.link}</p>
                    </div>
                    )}
                </div>
            </div>
            <div className='w-full py-4'>
                <h2>Experience</h2>
                <hr />
                <div className='pl-2'>
                    {experience.map((exp,idx) => 
                    <div key={idx+1} className='py-2'>
                        <h4>{exp.employer},{exp.location}</h4>
                    <p>{exp.descreption}</p>
                    <p>{exp.start} - {exp.end}</p>
                    </div>
                    )}
                </div>
                <button onClick={printBill}>Print</button>
            </div>
        </div>
    </div>
  )
}

export default ResumePage