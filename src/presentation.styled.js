import styled from '@emotion/styled/macro';
import { Image } from 'spectacle';

const colors = {
  primary: '#214172',
  secondary: '#fff',
  tertiary: '#CC5E84',
};

export const IntroBox = styled.div`
  border: 10px solid ${colors.primary};
  max-width: 680px;
  padding: 32px 20px;
  margin: 0 auto;
`;

export const Mark = styled.span`
  color: ${colors.tertiary};
`;

export const ImportantBox = styled.div`
  background-color: ${colors.secondary};
  padding: 12px;
`;

export const AndroidImage = styled(Image)`
  && {
    margin: 0;
    max-width: 286px;
    max-height: 455px;
    margin-left: 64px;
    margin-top: 32px;
  }
`;

export const CodeWithImage = styled.div`
  display: flex;
  justify-content: flex-start;
`;
