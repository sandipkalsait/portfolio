import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useTheme } from 'next-themes'
import Nav from "./../../styles/Navbar.module.css"
import { FaMenorah, FaCog } from 'react-icons/fa'
import { FcComments, FcDeleteDatabase, FcComboChart } from 'react-icons/fc'
import { TbLayoutDashboard } from "react-icons/tb"
import Image from 'next/image';
import { RiProjectorLine } from "react-icons/ri"
import { AiOutlineSchedule } from "react-icons/ai"
import { MdOutlineWorkOutline } from "react-icons/md"
import { GiSkills } from "react-icons/gi"
import {FiUser} from "react-icons/fi"
import Header from './Header';


function Navigation({children}) {
    const { theme, setTheme } = useTheme()

    return (
        <>
        <Header/>
        <Navbar className={Nav.body} >
            <Container className={Nav.container}>
                <nav className={Nav.nav}>

                    <li>
                        {/* <a href="#" className={Nav.logo}>
                                <Image src="/favicon.ico" width={50} height={50} />
                                <span className={Nav.navitem}>Admin</span>
                           
                            </a> */}
                        

                            <div style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                <Image src="/profile1.jpg" width={60} height={60} style={{padding:"3px"}}  objectFit="cover" />
                            </div>

                    </li>
                    



                    <li><a href="/">
                        {/* <i className="fas fa-menorah"></i> */}
                        <TbLayoutDashboard size={30} />
                        {/* <span className={Nav.navitem}>Dashboard</span> */}
                    </a></li>
                    
                    <li><a href="/about">
                        {/* <i className="fas fa-menorah"></i> */}
                        <FiUser size={30} />
                        {/* <span className={Nav.navitem}>Dashboard</span> */}
                    </a></li>
                    <li><a href="/skills">
                        <GiSkills size={30} />
                        {/* <span className={Nav.navitem}>Skills</span> */}
                    </a></li>
                    <li><a href="/education">
                        <AiOutlineSchedule size={30} />
                        {/* <span className={Nav.navitem}>Education</span> */}
                    </a></li>
                    <li><a href="/projects">
                        {/* <i className="fas fa-comment"></i> */}
                        <RiProjectorLine size={30} />
                        {/* <span className={Nav.navitem}>Projects</span> */}
                    </a></li>

                    <li><a href="/work">
                        <MdOutlineWorkOutline size={30} />
                        {/* <span className={Nav.navitem}>Work</span> */}
                    </a></li>

                </nav>

                {children}

            </Container>

        </Navbar>
        </>
    );
}

export default Navigation;