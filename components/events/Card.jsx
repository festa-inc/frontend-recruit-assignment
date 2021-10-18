import styled from "styled-components";
import EventService from '../../service/EventSerivce'

const handleImgError = (e) => {
    e.target.src = "https://festa.io/festa-og-img.png";
}

function Card(props) {
    return (
        <Wrapper>
            <ImgWrapper>
                <Img 
                    src={props.imageUrl} 
                    alt="eventImg" 
                    onError={handleImgError}
                />
            </ImgWrapper>
            <InfoWrapper>
                <strong>{props.name}</strong>
                <p>{EventService.setStartDate(props.startDate)}</p>
                <p>호스트 연락처: {props.email}</p>
                <p>{EventService.setPrice(props.price)}</p>
            </InfoWrapper>
        </Wrapper>
    )
}

export default Card

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex: 0 0 100%;
  border: 0.125rem solid #ebebeb;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  @media all and (max-width: 480px) {
    flex: 0 0 50%;
    flex-direction: column;
    font-size: 0.8rem;
  }
`
const ImgWrapper = styled.div`
  width: 25%;
  height: 10rem;
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 5px;
    object-fit: cover;
    @media all and (max-width: 480px) {
        width: 100%;
        height: 8rem;
        margin: 0 auto;
  }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
`
const InfoWrapper = styled.div`
    padding-left: 1rem;
    @media all and (max-width: 480px) {
        padding-left: 0rem;
    }
`