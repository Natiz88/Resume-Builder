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

import {useSelector,useDispatch} from 'react-redux';
import type { RootState } from '../../redux/store';

const ResumePage = () => {
    const personalInfo = useSelector((state:RootState) => state.info.personalInfo)
    const socialSites = useSelector((state:RootState) => state.info.socialSites)
    const education = useSelector((state:RootState) => state.info.education)
    const skills = useSelector((state:RootState) => state.info.skills)
    const experience = useSelector((state:RootState) => state.info.experience)
    const projects = useSelector((state:RootState) => state.info.projects)

    const printRef = useRef<HTMLInputElement>(null);

    console.log("s",skills)

    const printBill = () => {
        if(printRef.current){
        let element = printRef.current.innerHTML;
        let doc = document.body.innerHTML;
        document.body.innerHTML = element;
        window.print();
        document.body.innerHTML = doc;
        }
      };

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