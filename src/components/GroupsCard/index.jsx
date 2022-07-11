import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import PublicIcon from '@mui/icons-material/Public';
import CreateIcon from '@mui/icons-material/Create';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import LockIcon from '@mui/icons-material/Lock';

const GroupsCard = ({GroupCoverImg, GroupProfileImg, GroupName, GroupType, PrivateGroup}) => {

  return (
    <Container>
      <div className="group-cover-image">
        <img src={GroupCoverImg} alt="Group Cover" />
      </div>
      <div className="group-profile-image">
        <Link to="/grupos"><img src={GroupProfileImg} alt="Group Profile" /></Link>
      </div>
      <div className="group-info">
        <div className="info-group-name">
            <Link to="/grupos">
              <span className="group-name">
                  {GroupName}
              </span>
            </Link>
        </div>
        <div className="info-group-specification">
            <span><PublicIcon className="group-specification-icon"/></span>{GroupType} {PrivateGroup === true ? <LockIcon className="lock-group-icon"/> : ''}
        </div>
      </div>
      <div className="group-statistics">
        <ul className="list-group-statistics">
          <li><CreateIcon className="statistics-group-post-icon" /></li>
          <li><AccessTimeIcon className="statistics-group-activity-icon" /></li>
          <li><GroupsIcon className="statistics-group-members-icon" /></li>
        </ul>
      </div>
    </Container>
  )
}

export default GroupsCard;