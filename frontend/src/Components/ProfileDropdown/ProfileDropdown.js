import {React, useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import profile from "../../Images/profileUser.png";
import settings from "../../Images/settings.png";
import logout from "../../Images/logout.png";
import axios from 'axios';
import './ProfileDropdown.css';


const ProfileDropdown = () => {

  const [email, setEmail] = useState('');

  const fetchUserEmail = async () => {
    try {
      const response = await axios('/users/email');
      console.log("Email should be " + response.data)
      setEmail(response.data);
    } catch (err) {
      console.log(err + ' | Failed to get user email');
    }
  };

  fetchUserEmail();

    return (
        <Dropdown menuAlign="right">
            <Dropdown.Toggle variant="light">
                <span id="DropdownUsername">{email ? email : 'Username'}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="/home">
                    <span className="DropdownItem">
                        Profile
                        <img className="Icon" src={profile} />
                    </span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/settings">
                    <span className="DropdownItem">
                        Settings
                        <img className="Icon" src={settings} />
                    </span>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/" onClick={ () => {
                        localStorage.removeItem('loggedIn');
                        axios.delete('/logout');
                    }}>
                    <span className="DropdownItem">
                        Sign Out
                        <img className="Icon" src={logout} />
                    </span>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ProfileDropdown;
