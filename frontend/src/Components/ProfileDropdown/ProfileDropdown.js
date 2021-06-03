import { React, useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import profile from "../../Images/profileUser.png";
import settings from "../../Images/settings.png";
import logout from "../../Images/logout.png";
import axios from 'axios';
import './ProfileDropdown.css';

const ProfileDropdown = (props) => {

    const [ userName, setUserName ] = useState('UserName');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios('/users/all');
                const firstName = response.data.first_name;
                setUserName(firstName)

            } catch (err) {
                console.log(err + ' | Failed to get user data');
            }
        };
        fetchUserData();
        if (props.setUpdateProfileDropdown) {
            props.setUpdateProfileDropdown(false);
        }
    }, [props.updateProfileDropdown]);

    return (
        <Dropdown menuAlign="right">
            <Dropdown.Toggle variant="light">
                <span id="DropdownUsername">{userName}</span>
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
