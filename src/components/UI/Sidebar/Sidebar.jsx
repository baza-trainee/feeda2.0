import React, { useState } from 'react';
import {
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

const Sidebar = () => {
  const [isDropdownOpen, setisDropdownOpen] =
    useState(false);

  const handleDropdownClick = () => {
    setisDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
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
            onClick={() =>
              console.log('Відкрити вкладку "Не пройшов"')
            }>
            <img
              src="../../../../public/NotChecked.svg"
              width="18"
              height="18"></img>
            <ButtonText>Не пройшов</ButtonText>
          </DropdownItem>
          <DropdownItem
            onClick={() =>
              console.log('Відкрити вкладку "Пройшов"')
            }>
            <IoCheckmarkDoneSharp size={18} />
            <ButtonText>Пройшов</ButtonText>
          </DropdownItem>
          <DropdownItem
            onClick={() =>
              console.log(
                'Відкрити вкладку "Додати кандидата"'
              )
            }>
            <FiPlus size={18} />
            <ButtonText>Додати кандидата</ButtonText>
          </DropdownItem>
        </DropdownMenu>
      )}
      <SettingsButton
        onClick={() =>
          console.log('Відкрити вкладку "Налаштування"')
        }>
        <SlSettings size={18} />
        <ButtonText>Налаштування</ButtonText>
      </SettingsButton>
    </>
  );
};

export default Sidebar;
