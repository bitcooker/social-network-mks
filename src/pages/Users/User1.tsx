import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Link } from "react-router-dom";
import { 
  Container, 
  HeaderInfo, 
  HeaderNetwork, 
  Portfolio, 
  PortfolioContent, 
  PortfolioItem, 
  PortfolioItemDetail, 
  PortfolioItemLink, 
  Project, 
  ProjectCategory, 
  ProjectContent, 
  ProjectDescription, 
  ProjectHead, 
  ProjectInfo, 
  ProjectLink, 
  ProjectTags, 
  ProjectTagsItems, 
  ProjectTemplate, 
  ProjectTitle, 
  ProjectType, 
  Service, 
  Services, 
  ServicesContent, 
  SkillBar, 
  SkillBarPercent, 
  SkillProgressBar, 
  SkillProgressBarContainer, 
  Skills, 
  UserContent, 
  UserData, 
  UserHeader, 
  UserInfo, 
  UserMainContent, 
  UserProfileImage, 
  UserSectionTitle, 
  UserSidebar 
} from "./styles";

import UserMenuList from "../../components/UserMenuList";

import PublicIcon from '@mui/icons-material/Public';
import InfoIcon from '@mui/icons-material/Info';
import GradingIcon from '@mui/icons-material/Grading';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import ReviewsIcon from '@mui/icons-material/Reviews';

import templateCover from "../../components/_assets/img/img-testes/featured-project.jpg";
import portfolioItem1 from "../../components/_assets/img/img-testes/portf-01.jpg";
import portfolioItem2 from "../../components/_assets/img/img-testes/portf-02.jpg";
import portfolioItem3 from "../../components/_assets/img/img-testes/portf-03.jpg";

import Slider from "../../components/Slider";
import { UserPropsTypes } from "../../types";

import { FcApproval } from "react-icons/fc";
import { ImLocation } from "react-icons/im";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaStar, 
  FaTwitter, 
  FaLink, 
  FaEye,
  FaTags,
  FaWordpressSimple, 
  FaFileCode,
  FaSlidersH,
  FaWrench,
  FaCloud,
  FaTasks,
  FaFolderOpen,
} from "react-icons/fa";

const User1 = () => {

  const { user }: any = useContext(UserContext)

  const userName = user.map((user: UserPropsTypes) => user.name)
  const userCover = user.map((user: UserPropsTypes) => user.image_cover)
  const userImageProfile = user.map((user: UserPropsTypes) => user.image_profile)
  const userRatings = user.map((user: UserPropsTypes) => user.rating)
  const userTotalRatings = user.map((user: UserPropsTypes) => user.total_ratings)

  const itemList = [
    {
      nameItem: 'Visão Geral',
      urlMenu: '/user1',
      iconItem: <PublicIcon />
    },
    {
      nameItem: 'Sobre',
      urlMenu: '/user2',
      iconItem: <InfoIcon />
    },
    {
      nameItem: 'Atividade',
      urlMenu: '/user2',
      iconItem: <GradingIcon />
    },
    {
      nameItem: 'Posts',
      urlMenu: '/user2',
      iconItem: <DynamicFeedIcon />
    },
    {
      nameItem: 'Comentários',
      urlMenu: '/user2',
      iconItem: <CommentIcon />
    },
    {
      nameItem: 'Amizades',
      urlMenu: '/user2',
      iconItem: <PeopleOutlineIcon />
    },
    {
      nameItem: 'Grupos',
      urlMenu: '/user2',
      iconItem: <GroupsIcon />
    },
    {
      nameItem: 'Avaliações',
      urlMenu: '/user2',
      iconItem: <ReviewsIcon />
    }
  ]

  return (
    <Container style={{marginTop:'70px'}}>
      <UserHeader coverHeader={userCover[0]}>
        <HeaderInfo>
          <UserData>
            <UserProfileImage>
              <img src={userImageProfile[0]} alt={userName[0]} />
            </UserProfileImage>
            <UserInfo>
              <div className="name">
                <h2>{userName[0]}</h2>
                <span>
                  <FcApproval size="24" />
                </span>
              </div>
              <div className="user-meta">
                <div className="user-meta-left">
                  <ImLocation size="16" /><span>Minas Gerais/MG</span>
                </div>
                <div className="user-meta-right">
                  <span>
                    <FaStar color="yellow" size="18" />
                    <FaStar color="yellow" size="18" />
                    <FaStar color="yellow" size="18" />
                    <FaStar color="yellow" size="18" />
                    <FaStar size="18" />
                  </span>
                  <span className="bullet-separator">•</span>
                  <span>{userRatings[0]} de 5</span>
                  <span className="bullet-separator">•</span>
                  <span>{userTotalRatings[0]} classificações</span>
                </div>
              </div>
            </UserInfo>
          </UserData>
        </HeaderInfo>
      </UserHeader>
      <HeaderNetwork>
        <div className="header-network-content">
          <div className="social-networks">
            <FaFacebookF size="20" color="#FFFFFF" className="facebook-icon" />
            <FaTwitter size="20" color="#FFFFFF" className="twitter-icon" />
            <FaInstagram size="20" color="#FFFFFF" className="instagram-icon" />
          </div>
          <div className="user-activities">
            <div className="posts-data">
              <span>21</span>
              <span>posts</span>
            </div>
            <div className="comments-data">
              <span>21</span>
              <span>comentários</span>
            </div>
            <div className="views-data">
              <span>103k</span>
              <span>vizualizações</span>
            </div>
          </div>
        </div>
      </HeaderNetwork>
      
      <UserMenuList itemList={itemList.map((item) => (
          <Link to={item.urlMenu}>
            <span className="user-menu-icon">{item.iconItem}</span>
            <span>{item.nameItem}</span>
          </Link>
        ))} 
      />
      
      <UserContent>
        <UserMainContent>

          <Slider />

          <Project>
           <UserSectionTitle><FaFolderOpen /> Projetos</UserSectionTitle>
           <ProjectContent>
            <ProjectTemplate 
              templateCover={templateCover}
            />
            <ProjectInfo>
              <ProjectHead>
                <ProjectType>
                  Projeto Destaque
                </ProjectType>
                <ProjectTitle>
                  Olympus - HTML Social Network Toolkit
                </ProjectTitle>
                <ProjectCategory>
                  <FaTags /> Web Design
                </ProjectCategory>
                <ProjectLink>
                  <FaLink /> <span>olympus-html-social-network-toolkit.com</span>
                </ProjectLink>
              </ProjectHead>
              <ProjectDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, illo consequatur ex provident veniam et soluta ratione accusantium, earum nesciunt culpa sint tenetur illum ipsa, obcaecati natus dolore aliquam tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis itaque beatae, facere blanditiis recusandae laborum tempore quae molestias aperiam? Cumque odit ducimus consequuntur deserunt itaque quisquam.
              </ProjectDescription>
              <ProjectTags>
                <ProjectTagsItems><span className="hastag">#</span> Templates</ProjectTagsItems>
                <ProjectTagsItems><span className="hastag">#</span> Webdesign</ProjectTagsItems>
                <ProjectTagsItems><span className="hastag">#</span> Html</ProjectTagsItems>
              </ProjectTags>
            </ProjectInfo>
           </ProjectContent>
          </Project>

          <Skills>

            <UserSectionTitle><FaTasks /> Skills</UserSectionTitle>
            
            <SkillProgressBarContainer>
              <SkillProgressBar>
                <SkillBar 
                  percentAnimation="82" 
                  skillBarBg="rgb(255, 96, 58)" 
                  skillBarWidth="82%"
                >
                  <span>PHP</span>
                </SkillBar>
                <SkillBarPercent>82%</SkillBarPercent>             
              </SkillProgressBar>

              <SkillProgressBar>
                <SkillBar 
                  percentAnimation="86" 
                  skillBarBg="rgb(42, 125, 161)" 
                  skillBarWidth="86%"
                >
                  <span>Javascript</span>
                </SkillBar>
                <SkillBarPercent>86%</SkillBarPercent>
              </SkillProgressBar>

              <SkillProgressBar>
                <SkillBar 
                  percentAnimation="98" 
                  skillBarBg="rgb(255, 162, 58)" 
                  skillBarWidth="98%"
                >
                  <span>CSS</span>
                </SkillBar>
                <SkillBarPercent percentColor>98%</SkillBarPercent>
              </SkillProgressBar>

              <SkillProgressBar>
                <SkillBar 
                  percentAnimation="100" 
                  skillBarBg="rgb(42, 183, 99)" 
                  skillBarWidth="100%"
                >
                  <span>HTML</span>
                </SkillBar>
                <SkillBarPercent percentColor>100%</SkillBarPercent>
              </SkillProgressBar>
            </SkillProgressBarContainer>

          </Skills>

          <Portfolio>
            <UserSectionTitle><FaCloud /> Portfólio</UserSectionTitle>
            <PortfolioContent>
              <div className="portfolio-box">
                <PortfolioItem src={portfolioItem1} />
                <div className="portfolio-links">
                  <PortfolioItemLink><FaLink size="18" /></PortfolioItemLink>
                  <PortfolioItemDetail><FaEye size="18" /></PortfolioItemDetail>
                </div>
              </div>
              <div className="portfolio-box">
                <PortfolioItem src={portfolioItem2} />
                <div className="portfolio-links">
                  <PortfolioItemLink><FaLink size="18" /></PortfolioItemLink>
                  <PortfolioItemDetail><FaEye size="18" /></PortfolioItemDetail>
                </div>
              </div>
              <div className="portfolio-box">
                <PortfolioItem src={portfolioItem3} />
                <div className="portfolio-links">
                  <PortfolioItemLink><FaLink size="18" /></PortfolioItemLink>
                  <PortfolioItemDetail><FaEye size="18" /> </PortfolioItemDetail>
                </div>
              </div>
            </PortfolioContent>
          </Portfolio>

          <Services>
            <UserSectionTitle><FaWrench /> Serviços</UserSectionTitle>
            <ServicesContent>
              <Service>
                <div className="service-icon">
                  <FaWordpressSimple size="26" />
                </div>
                <div className="service-title">
                  WordPress Themes
                </div>
                <div className="service-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem saepe, eaque officia animi laudantium beatae necessitatibus eius quae sint, distinctio consectetur fuga alias, optio nostrum quas atque tempora porro?
                </div>
              </Service>
              <Service>
                <div className="service-icon">
                  <FaFileCode size="26" />
                </div>
                <div className="service-title">
                  HTML Templates
                </div>
                <div className="service-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem saepe, eaque officia animi laudantium beatae necessitatibus eius quae sint, distinctio consectetur fuga alias, optio nostrum quas atque tempora porro?
                </div>
              </Service>
              <Service>
                <div className="service-icon">
                  <FaSlidersH size="26" />
                </div>
                <div className="service-title">
                  Plugins Development
                </div>
                <div className="service-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus autem saepe, eaque officia animi laudantium beatae necessitatibus eius quae sint, distinctio consectetur fuga alias, optio nostrum quas atque tempora porro?
                </div>
              </Service>
            </ServicesContent>
          </Services>

        </UserMainContent>
        <UserSidebar>
          Sidebar
        </UserSidebar>
      </UserContent>
    </Container>
  )
}

export default User1;