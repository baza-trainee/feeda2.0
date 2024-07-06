import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  SidebarSection,
  DropdownMenu,
} from './Sidebar.styled';
import {
  IoIosArrowUp,
  IoIosArrowDown,
} from 'react-icons/io';
import { SlSettings } from 'react-icons/sl';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa6';
import { FiPlus } from 'react-icons/fi';
import { TbLogout2 } from 'react-icons/tb';
import PrimaryButton from '../Button/PrimaryButton/PrimaryButton';
import SecondaryButton from '../Button/SecondaryButton/SecondaryButton';

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
            <section>
              <PrimaryButton
                clickFunc={handleDropdownClick}
                text="Кандидати"
                disabled={false}
                fontSize="16px"
                fontWeight="600"
                textAlign="left"
                width="286px">
                <FaUsers
                  style={{
                    width: '18px',
                    height: '16px',
                    marginRight: '24px',
                    marginLeft: '24px',
                  }}
                />
                <span>Кандидати</span>
                {isDropdownOpen ? (
                  <IoIosArrowUp
                    style={{
                      width: '18px',
                      height: '16px',
                      marginLeft: '100px',
                    }}
                  />
                ) : (
                  <IoIosArrowDown
                    style={{
                      width: '18px',
                      height: '16px',
                      marginLeft: '100px',
                    }}
                  />
                )}
              </PrimaryButton>
              {isDropdownOpen && (
                <DropdownMenu>
                  <SecondaryButton
                    clickFunc={() => navigate('/failed')}
                    disabled={false}
                    width="248px"
                    height="40px"
                    textAlign="left"
                    display="flex"
                    padding="10px"
                    borderRadius="4px"
                    fontSize="16px"
                    fontWeight="600">
                    <img
                      src="/NotChecked.svg"
                      width="18"
                      height="18"
                      alt="Not Checked"
                      style={{
                        marginRight: '15px',
                      }}
                    />
                    <span>Не пройшов</span>
                  </SecondaryButton>
                  <SecondaryButton
                    clickFunc={() => navigate('/passed')}
                    disabled={false}
                    width="248px"
                    height="40px"
                    textAlign="left"
                    display="flex"
                    padding="10px"
                    borderRadius="4px"
                    fontSize="16px"
                    fontWeight="600">
                    <IoCheckmarkDoneSharp
                      size={18}
                      style={{
                        marginRight: '15px',
                      }}
                    />
                    <span>Пройшов</span>
                  </SecondaryButton>
                  <SecondaryButton
                    clickFunc={() => navigate('/add')}
                    disabled={false}
                    width="248px"
                    height="40px"
                    textAlign="left"
                    display="flex"
                    padding="10px"
                    borderRadius="4px"
                    fontSize="16px"
                    fontWeight="600">
                    <FiPlus
                      size={18}
                      style={{
                        marginRight: '15px',
                      }}
                    />
                    <span>Додати кандидата</span>
                  </SecondaryButton>
                </DropdownMenu>
              )}
              <PrimaryButton
                clickFunc={() => navigate('/settings')}
                disabled={false}
                fontSize="16px"
                fontWeight="600"
                textAlign="left"
                width="286px">
                <SlSettings
                  style={{
                    width: '18px',
                    height: '16px',
                    marginRight: '24px',
                    marginLeft: '24px',
                  }}
                />
                <span>Налаштування</span>
              </PrimaryButton>
            </section>
            <section>
              <SecondaryButton
                disabled={false}
                width="286px"
                height="56px"
                textAlign="left"
                display="flex"
                padding="10px"
                borderRadius="4px"
                fontSize="16px"
                fontWeight="600"
                marginBottom="16px"
                marginRight="0"
                alignItems="center"
                clickFunc={() =>
                  console.log(
                    'Має виходити на сторінку login та сбрасувати токени'
                  )
                }>
                <TbLogout2
                  size={24}
                  style={{
                    marginRight: '15px',
                  }}
                />
                <p>Вийти</p>
              </SecondaryButton>
            </section>
          </SidebarSection>
        </>
      )}
    </>
  );
};

export default Sidebar;
