import styled from 'styled-components';

export const MainPage = styled.article`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(15deg, #D8D8D8, #F1F5F8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ReviewContainer = styled.div`
    width: 90vw;
    max-width: 65rem;
    display: grid;
    place-items: center;
    background: #fff;
    padding: 1.5rem 2rem;
    border-radius: .4rem;
    text-align: center;
    box-shadow: 0 5px 15px rgba(83, 22, 99, 0.3);
`;

export const ReviewSection = styled.div`
    background: #fff;
    padding: 1.5rem 2rem;
    border-radius: .4rem; 
    transition: all 0.3s linear;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.18);
`;

export const Title = styled.h2`
    text-align: center;
    text-transform: capitalize;
    letter-spacing: .3rem;
    font-size: 3.2rem;
`;

export const Author = styled.h4`
    font-size: 1.5rem;
    letter-spacing: .2rem;
`;

export const InfoJ = styled.p`
  margin: .4rem 0 1.5rem;
  color: purple;
  text-transform: uppercase;
  color: purple;
  font-size: 1.3rem;
  letter-spacing: .1rem;
`;

export const InfoI = styled.p`
  font-size: 1.4rem;
  color: #888;
  letter-spacing: .08rem;
  margin-bottom: 1.2rem;
`;

export const Underline = styled.div`
    height: .2rem;
    width: 20%;
    background: linear-gradient(#5B146F, #FFFFFF);
    margin: 1rem auto 2rem;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  margin: 1rem auto 2rem;

  &::before {
  content: '';
  width: 100%;
  height: 100%;
  background: linear-gradient(#5B146F, #C89FEB);
  position: absolute;
  top: -0.4rem;
  right: -0.8rem;
  border-radius: 50%;
}
`;

export const PersonImg = styled.img`
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  cursor: pointer;

  &:hover {
    // effect will be added
  }
`;

export const QuoteIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transform: translateY(25%);
  background: linear-gradient(#5B146F, #9E6EBB);
  color: #fff;
`;

export const ButtonContainer = styled.div`
  
`;

export const Buttons = styled.button`
  color: #C498DD;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  margin: .4rem 0.8rem;
  transition: all .25s ease-out;
  cursor: pointer;

  &:hover {
    color: #A370C1;
  }
`;

export const RandButton = styled.button`
  margin: .8rem auto 2rem;
  background: #C498DD;
  color: #5B146F;
  letter-spacing: .1rem;
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  border-radius: .3rem;
  transition: all .25s ease-out;
  border: none;
  cursor: pointer;
  box-shadow: 0 0.2rem .4rem rgba(0,0,0,.3);

  &:hover {
    background: #A370C1;
    color: #FFFFFF;
    box-shadow: none;
  }
`;