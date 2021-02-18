import styled from 'styled-components';
import { 
  BsStarFill, 
  BsStarHalf, 
  BsStar, 
} from 'react-icons/bs';


export const LanguageSkillsCard = styled.div`
  width: 300px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  margin: 0 15px 50px 15px;
`;

export const LanguageSkillsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const LanguageSkillsIconTitle = styled.button`
  width: 60%;
  text-align: center;
  font-size: 18px;
  margin-bottom: 15px;
  padding: 5px 20px;
  cursor: pointer;
  border-radius: 50px;
  background-color: ${({open}) => (open ? '#010606': '#10bf71')};
  color: #fff;

  &:hover {
    background-color: #010606;
    color: #fff;
  }
`;

export const LanguageSkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: ${({open}) => (open ? '120px' : '0')};
  transition: all .5s ease;
  overflow: hidden;
`;

export const LanguageSkillsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 10px;
`;

export const LanguageSkillsLang = styled.div`
  width: 120px; 
  font-size: 18px;
  padding: 0 10px 3px 20px;
`;

export const LanguageSkillsStars = styled.div`
  width: 120px;
  padding: 0 5px; 
  color: #01bf71;
  font-size: 16px;
`;

export const LanguageSkillsStar = styled(BsStar)``;

export const LanguageSkillsStarHalf = styled(BsStarHalf)``;

export const LanguageSkillsStarFill = styled(BsStarFill)``;
