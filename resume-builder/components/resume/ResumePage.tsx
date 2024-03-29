'use client'
import {useRef} from 'react';
import Image from 'next/image';
import ProfilePic from '../../images/profile.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import HomeIcon from '@mui/icons-material/Home';

import {useSelector,useDispatch} from 'react-redux';
import type { RootState } from '../../redux/store';

const ResumePage = () => {
    const personalInfo = useSelector((state:RootState) => state.info.personalInfo)
    const socialSites = useSelector((state:RootState) => state.site.socialSites)
    const education = useSelector((state:RootState) => state.education.education)
    const skills = useSelector((state:RootState) => state.skill.skills)
    const experience = useSelector((state:RootState) => state.experience.experience)
    const projects = useSelector((state:RootState) => state.project.projects)

    const printRef = useRef<HTMLInputElement>(null);
    const printBill = () => {
        return window.print()
        if(printRef.current){
        let element = printRef.current.innerHTML;
        let doc = document.body.innerHTML;
        document.body.innerHTML = element;
        window.print();
        document.body.innerHTML = doc;
        }
      };

  return (
    <>
    <div ref={printRef} id="resume" className='w-full mx-8 lg:mx-0 h-[800px] flex shadow-lg'>
        <div className='w-[35%] p-4 h-full flex flex-col items-center bg-primary text-white'>
        <Image
            src={ProfilePic}
            width={130}
            height={130}
            alt="Pic"
            />
            <div className="w-full py-8 text-white">
                <h2>Contact</h2>
                <hr />
                <div className='flex flex-col space-y-2 py-1 pl-2 text-white'>
                    <p><HomeIcon/>{personalInfo.address}</p>
                    <p><PermDeviceInformationIcon/>{personalInfo.phone}</p>
                    <p><MailIcon/>{personalInfo.email}</p>
                    {socialSites.map((site,idx) => 
                    <>
                        <p key={idx+1}>{site.site_name === "github" && <GitHubIcon/>}
                        {site.site_name === "linkedin" && <LinkedInIcon/>}
                        {site.site_name === "facebook" && <FacebookIcon/>}
                        {site.site_link}</p>
                    </>
                    )}
                </div>
            </div>
            <div className="w-full py-4">
                <h2>Education</h2>
                <hr />
                <div>
                    <div className='pl-2'>
                    {education.map((edu) => 
                    <div key={edu.id} className='py-1'>
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
                    {skills.map((skill) => 
                    <div key={skill.id} className='py-1'>
                        <p>{skill.skill}</p>
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
                    {projects.map((project) => 
                    <div key={project.id} className='py-2'>
                        <h4>{project.project_title}</h4>
                    <p>{project.description}</p>
                    <p>{project.link}</p>
                    </div>
                    )}
                </div>
            </div>
            <div className='w-full py-4'>
                <h2>Experience</h2>
                <hr />
                <div className='pl-2'>
                    {experience.map((exp) => 
                    <div key={exp.id} className='py-2'>
                    <h2>{exp?.title}</h2>
                    {exp.employer && <h4>{exp?.employer},{exp?.location}</h4>}
                    <p>{exp?.description}</p>
                    {exp?.start && <p>{exp?.start} - {exp.current ? "Present" : exp.end}</p>}
                    </div>
                    )}
                </div>
            </div>
        </div>
    </div>
                    <button onClick={()=>window.print()}>Print</button>
</>
  )
}

export default ResumePage