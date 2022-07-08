import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import friendshipImage from "../../components/_assets/img/amizade.png";
import newGroupImage from "../../components/_assets/img/novo-grupo.png";
import sendMessage from "../../components/_assets/img/nova-mensagem.png";
import PostAddIcon from '@mui/icons-material/PostAdd';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoodIcon from '@mui/icons-material/Mood';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';



const MembersCard = ({MemberCover, MemberProfile, UserName, UserNickName, userRate, totalRatings}) => {
    return (
        <Container>
            <div className="member-cover-image">
              <img src={MemberCover} alt="Member Cover" />
            </div>
            <div className="member-profile-image">
              <Link to="/membros"><img src={MemberProfile} alt="Member Profile" /></Link>
            </div>
            <div className="member-info">
              <div className="info-user-name">
                  <Link to="/membros">
                    <span className="user-name">
                        {UserName}
                    </span>
                    <span>
                        <CheckIcon className="user-check-icon" />
                    </span>
                  </Link>
              </div>
              <div className="info-user-nickname">
                  {UserNickName}
              </div>
              <div className="info-user-badges">
                  <ul className="badges-list">
                      <li><img src={friendshipImage} alt="Nova Amizade" /></li>
                      <li><img src={newGroupImage} alt="Novo Grupo" /></li>
                      <li><img src={sendMessage} alt="Enviar Mensagem" /></li>
                  </ul>
              </div>
              <div className="info-user-ratings-datails">
                  <div className="user-stars">
                    <StarIcon className="star-rate-icon" />
                    <StarIcon className="star-rate-icon" />
                    <StarIcon className="star-rate-icon" />
                    <StarIcon className="star-rate-icon" />
                    <StarIcon className="star-rate-icon" />
                  </div>
                  <div className="ratings">
                      <div className="user-rate">
                        {userRate} de 5
                      </div>
                      <span className="rating-separator">•</span>
                      <div className="user-total-rate">
                        {totalRatings} classificações
                      </div>
                  </div>
              </div>
            </div>
            <div className="member-statistics">
              <ul className="list-user-statistics">
                <li><PostAddIcon className="statistics-user-post-icon" /></li>
                <li><CommentIcon className="statistics-user-comment-icon" /></li>
                <li><VisibilityIcon className="statistics-user-views-icon" /></li>
                <li><MoodIcon className="statistics-user-friendship-icon" /></li>
              </ul>
            </div>
        </Container>
    );
}

export default MembersCard;