import {Link} from 'react-router-dom';
import { Menu, Icon} from 'antd';
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default function Navbar(){
    return(
        <Menu mode="horizontal">
            <Menu.Item key="home">
                <Link to="/">ExerceTracker</Link>
            </Menu.Item>
            <Menu.Item key="exercises">
                <Link to="/">Exercises</Link>
            </Menu.Item>
            <Menu.Item key="create_exercise">
                <Link to="/create">Create Exercise Log</Link>
            </Menu.Item>
            <Menu.Item key="create_user">
                <Link to="/user">Create User</Link>
            </Menu.Item>
        </Menu>
    );
}
