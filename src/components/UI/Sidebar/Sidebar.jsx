import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  SidebarSection,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  ButtonText,
  SettingsButton,
} from './Sidebar.styled';
import {
  IoIosArrowUp,
  IoIosArrowDown,
} from 'react-icons/io';
import { SlSettings } from 'react-icons/sl';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa6';
import { FiPlus } from 'react-icons/fi';
import ButtonUI from '../Button/PrimaryButton/ButtonUI';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDropdownOpen, setisDropdownOpen] =
    useState(false);

  const handleDropdownClick = () => {
    setisDropdownOpen(!isDropdownOpen);
  };

  const shouldRenderSidebar = (path) => {
    const hiddenPaths = [
      '/login',
      '/register',
      '/forgot-pass',
    ];
    return !hiddenPaths.includes(path);
  };

  return (
    <>
      {shouldRenderSidebar(location.pathname) && (
        <>
          <SidebarSection>
            <DropdownButton onClick={handleDropdownClick}>
              <FaUsers size={18} />
              <ButtonText>Кандидати</ButtonText>
              {isDropdownOpen ? (
                <IoIosArrowUp size={24} />
              ) : (
                <IoIosArrowDown size={24} />
              )}
            </DropdownButton>
            {isDropdownOpen && (
              <DropdownMenu>
                <DropdownItem
                  onClick={() => navigate('/failed')}>
                  <img
                    src="/NotChecked.svg"
                    width="18"
                    height="18"
                    alt="Not Checked"
                  />
                  <ButtonText>Не пройшов</ButtonText>
                </DropdownItem>
                <DropdownItem
                  onClick={() => navigate('/passed')}>
                  <IoCheckmarkDoneSharp size={18} />
                  <ButtonText>Пройшов</ButtonText>
                </DropdownItem>
                <DropdownItem
                  onClick={() => navigate('/add')}>
                  <FiPlus size={18} />
                  <ButtonText>Додати кандидата</ButtonText>
                </DropdownItem>
              </DropdownMenu>
            )}
            <ButtonUI
              text="Налаштування"
              clickFunc={() => navigate('/settings')}
              disabled={false}
              fontSize="16px"
              fontWeight="600"
              textAlign="left"
              display="flex"
              justifyContent="space-around"
              gap="2px">
              <SlSettings
                style={{
                  width: '18px',
                  height: '16px',
                }}
              />
            </ButtonUI>
          </SidebarSection>
        </>
      )}
    </>
  );
};

export default Sidebar;
