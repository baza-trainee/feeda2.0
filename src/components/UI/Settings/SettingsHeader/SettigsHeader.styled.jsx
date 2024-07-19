import styled from 'styled-components';

export const SettingsHeaderSection = styled.section`
  padding: 32px 312px 32px 312px;
  width: 100%;
  height: 162px;
  border: solid var(--disabled-button) 1px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SettingsPhoto = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 24px;
`;

export const FigcaptionSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SettingsName = styled.figcaption`
  font-weight: var(--body-large-fw);
  font-size: var(--title-large-fs);
  line-height: var(--title-large-lh);
  margin-bottom: 4px;
`;

export const ChangePhotoLink = styled.button`
  font-weight: var(--headline-large-fw: );
  font-size: var(--body-large-fs);
  line-height: var(--title-medium-lh);
  text-decoration: underline;
  cursor: pointer;
  background-color: white;
  border: none;
`;
