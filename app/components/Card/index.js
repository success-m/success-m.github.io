import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  padding: 4% 2% 2% 2%;
  margin: 5px 0;

  &:hover {
    box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.05);
  }

  & .card-wrapper {
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  &.even {
    background-color: #f2f2f2;
  }

  &.odd .card-wrapper {
    flex-direction: row-reverse;
  }

  & .image-wrapper {
    width: 25%;
    margin: 0 auto;
    min-width: 148px;
    max-width: 156px;
  }

  & .image-wrapper img {
    width: 100%;
  }

  & p.info {
    width: 65%;
    align-self: flex-start;
  }

  @media only screen and (max-width: 767px) {
    & .card-wrapper {
      width: 100%;
    }
    & .image-wrapper {
      min-width: 129px;
    }
  }

  @media only screen and (max-width: 524px) {
    width: 80%;
    margin: 3px auto;
    & .image-wrapper {
      max-width: 129px;
      min-width: 100px;
    }

    & p.info {
      margin: 1em 2em;
      width: 65%;
      display: none;
    }

    &:hover img,
    &:active img {
      margin-top: -5px;
      margin-bottom: 5px;
    }

    &:hover p.info,
    ,
    &:active p.info {
      display: block;
    }
  }

  @media only screen and (max-width: 400px) {
    & p.info {
      width: 75%;
    }
  }
`;

export default Card;
