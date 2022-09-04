import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FiHome, FiLogOut , FiSettings , FiPaperclip} from "react-icons/fi";
import Logo from "../assets/images/logo/virtual_vital.png"

const Header = () => {

  return (
    <>
      <div id="header" >
          
        <ProSidebar collapsed={true} className=" w-max p-4 items-center ">
          <SidebarHeader>
          <div className="logotext py-4">
              <img src={Logo} alt="virtual-vitals-logo" className="w-14 rounded-[50%] mb-4"/>
              <hr ></hr>
            </div>
             </SidebarHeader>
          <SidebarContent className="flex flex-col items-center">
            <Menu >
              <MenuItem active={true} icon={<FiHome size={20} /> } className="py-8" ></MenuItem>
              <MenuItem icon={<FiPaperclip size={20}/>} className="py-8"></MenuItem>
              <MenuItem icon={<FiSettings size={20}/>} className="py-8"></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter className="flex flex-col items-center mt-40">
              <img src={Logo} alt="virtual-vitals-logo" className="w-12  rounded-[50%] mb-2"/>
            <Menu >
              <MenuItem icon={<FiLogOut size={20}/>} className="py-8"></MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
