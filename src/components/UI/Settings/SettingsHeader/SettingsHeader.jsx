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
          alt="user photo"></SettingsPhoto>
        <FigcaptionSection>
          <SettingsName>Олена Лисенко</SettingsName>
          <ChangePhotoLink
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
