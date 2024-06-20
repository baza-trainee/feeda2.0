import React from 'react';
import {
  SettingsHeaderSection,
  SettingsPhoto,
  SettingsName,
  ChangePhotoLink,
  TextArea,
} from './SettigsHeader.styled';

const SettingsHeader = () => {
  return (
    <SettingsHeaderSection>
      <SettingsPhoto src="/SettingsUserPhoto.svg"></SettingsPhoto>
      <TextArea>
        <SettingsName>Олена Лисенко</SettingsName>
        <ChangePhotoLink
          onClick={() => {
            console.log(
              'Має відкривати додаток для зміни фото'
            );
          }}>
          Змінити фото
        </ChangePhotoLink>
      </TextArea>
    </SettingsHeaderSection>
  );
};

export default SettingsHeader;
