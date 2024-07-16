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
            <nav>
              <ul>
                <li>
                  <PrimaryButton
                    clickFunc={handleDropdownClick}
                    text="Кандидати"
                    title="Бургер меню, що відкриває список кандидатів"
                    disabled={false}
                    fontSize="16px"
                    fontWeight="600"
                    textAlign="left"
                    width="286px">
                    <FaUsers
                      aria-hidden="true"
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
                        aria-hidden="true"
                        style={{
                          width: '18px',
                          height: '16px',
                          marginLeft: '100px',
                        }}
                      />
                    ) : (
                      <IoIosArrowDown
                        aria-hidden="true"
                        style={{
                          width: '18px',
                          height: '16px',
                          marginLeft: '100px',
                        }}
                      />
                    )}
                  </PrimaryButton>
                </li>
                {isDropdownOpen && (
                  <DropdownMenu>
                    <ul>
                      <li>
                        <SecondaryButton
                          clickFunc={() =>
                            navigate('/failed')
                          }
                          title="Кнопка, що відкриває сторінку кандидатів 'Не пройшов'"
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
                            alt=""
                            aria-hidden="true"
                            style={{
                              marginRight: '15px',
                            }}
                          />
                          <span>Не пройшов</span>
                        </SecondaryButton>
                      </li>
                      <li>
                        <SecondaryButton
                          clickFunc={() =>
                            navigate('/passed')
                          }
                          title="Кнопка, що відкриває сторінку кандидатів 'Пройшов'"
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
                            aria-hidden="true"
                            size={18}
                            style={{
                              marginRight: '15px',
                            }}
                          />
                          <span>Пройшов</span>
                        </SecondaryButton>
                      </li>
                      <li>
                        <SecondaryButton
                          clickFunc={() => navigate('/add')}
                          title="Кнопка, що відкриває форму заповнення даних кандидатів"
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
                            aria-hidden="true"
                            size={18}
                            style={{
                              marginRight: '15px',
                            }}
                          />
                          <span>Додати кандидата</span>
                        </SecondaryButton>
                      </li>
                    </ul>
                  </DropdownMenu>
                )}
                <li>
                  <PrimaryButton
                    clickFunc={() => navigate('/settings')}
                    title="Кнопка, що відкриває сторінку налаштування користувача"
                    disabled={false}
                    fontSize="16px"
                    fontWeight="600"
                    textAlign="left"
                    width="286px">
                    <SlSettings
                      aria-hidden="true"
                      style={{
                        width: '18px',
                        height: '16px',
                        marginRight: '24px',
                        marginLeft: '24px',
                      }}
                    />
                    <span>Налаштування</span>
                  </PrimaryButton>
                </li>
              </ul>
            </nav>
            <nav>
              <ul>
                <li>
                  <SecondaryButton
                    disabled={false}
                    title="Кнопка виходу зі сторінки користувача"
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
                    aria-hidden="true"
                    clickFunc={() =>
                      console.log(
                        'Має виходити на сторінку login та сбрасувати токени'
                      )
                    }>
                    <TbLogout2
                      aria-hidden="true"
                      size={24}
                      style={{
                        marginRight: '15px',
                      }}
                    />
                    <p>Вийти</p>
                  </SecondaryButton>
                </li>
              </ul>
            </nav>
          </SidebarSection>
        </>
      )}
    </>
  );
};

export default Sidebar;
