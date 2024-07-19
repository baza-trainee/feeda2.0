import React from 'react';
import {
  SettingsHeaderSection,
  SettingsPhoto,
  SettingsName,
  ChangePhotoLink,
  Figure,
  FigcaptionSection,
} from './SettigsHeader.styled';

const SettingsHeader = () => {
  return (
    <SettingsHeaderSection>
      <Figure>
        <SettingsPhoto
          src="/SettingsUserPhoto.svg"
          alt="userPhoto"
          title="Фото користувача"></SettingsPhoto>
        <FigcaptionSection>
          <SettingsName title="Імʼя користувача">
            Олена Лисенко
          </SettingsName>
          <ChangePhotoLink
            title="Натисніть для зміни фотографії користувача"
            onClick={() => {
              console.log(
                'Має відкривати додаток для зміни фото'
              );
            }}>
            Змінити фото
          </ChangePhotoLink>
        </FigcaptionSection>
      </Figure>
    </SettingsHeaderSection>
  );
};

export default SettingsHeader;
