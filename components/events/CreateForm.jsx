import React from 'react'
import styled from 'styled-components'
import EventService from '../../service/EventSerivce';
import createForm from './EventFormData'
const handleFileOnChange = (e) => {
  e.preventDefault();
  const reader = new FileReader()
  let file = e.target.files[0]
  reader.onloadend = async () => {
    document.getElementById("preview").src= reader.result
  }
  reader.readAsDataURL(file);
}

const createEvent = async () => {
  const eRequest = {
    name: document.getElementById("eventTitle").value,
    email: document.getElementById("hostEmail").value,
    price: parseInt(document.getElementById("price").value) ,
    startDate: document.getElementById("startDate").value,
    imageUrl: null
  }
  if(EventService.formValidtaion(eRequest)){
    if(!eRequest.startDate){
      eRequest.startDate = "2020-08-03T11:36:11.552Z"
    }
    if(!eRequest.imageUrl) {
      eRequest.imageUrl = "https://s3.ap-northeast-2.amazonaws.com/festa-temp/devfest-cover.jpg"
    }
    const file = document.getElementById("eventImg").files[0]
    if(file){
      // const reader = new FileReader()
      // let form = new FormData();
      // reader.onloadend = async () => {
      //   form.append('image', new Blob([reader.result]));
      const options = {
        method: "POST",
        body: file,
      }
      const imgUrl = await fetch(`/api/events/imgurl?name=${file.name}&width=200&height=200`, options)
      eRequest.imageUrl =imgUrl
      // reader.readAsBinaryString(file);
    }
      const options = {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(eRequest),
      }
      const response = await fetch(`/api/events/create`,options)
      const resJson = await response.json();
      alert(resJson.msg)
  }
    
}
const CreateForm = () => {
    return (
        <Wrapper>
          <Left id="createForm">
          {
            createForm.map((input, index) => (
              <div key={index}>
                <Label htmlFor={input.id}>{input.label}</Label>
                <Input
                    type={input.type}
                    id={input.id}
                    name={input.id}
                    placeholder={input.placeholder}
                />
              </div>
            ))
          }
          <Label htmlFor="eventImg">이미지</Label>
              <Input
                  type="file"
                  id="eventImg"
                  accept="image/jpg, image/png, image/jpeg"
                  name="eventImg"
                  onChange={handleFileOnChange}
                  style={{ display: "none" }}
              />
            <ImgUploadWrapper>
              <HideButton
               id="uploadButton"
               as="label"
               htmlFor="eventImg"
              ></HideButton>
              <UploadButton
                src="/events/file_upload.svg"
              />
            </ImgUploadWrapper>
            <div style={{width: "12rem", height: "8rem",border: "1px solid #000"}}>
              <img 
                id = "preview"
                src=""
                alt="업로드 이미지 미리보기"
                style={{width:"100%",height:"100%", objectFit:"cover"}}
              />
            </div>
          </Left>
          <Right>
            <Button onClick={createEvent}>이벤트 생성하기</Button>
          </Right>
      
        </Wrapper>
    )
}

export default CreateForm

const Wrapper = styled.div`
  display: flex;
`
const Left = styled.form`

`
const ImgUploadWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 10rem;
  border: solid 0.125rem #d5d5d5;
  border-radius: 5px;
  margin-bottom: 0.3rem;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`

const Input = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 1.2rem;
  border: solid 0.125rem #d5d5d5;
  border-radius: 5px;
  padding-left: 1rem;
  margin-bottom: 1rem;
  margin-top: 0.625rem;
  &:focus {
    outline: none;
    border: solid 0.125rem #000;
  }
`
const Label = styled.label`
  font-size: 1.4rem;
  font-weight: bold;
`

const Button = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 1px;
  color: #FFF;
  width: 12rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #307beb;

`
const UploadButton = styled.img`
  position: absolute;
  z-index: -1;
  width: 3rem;
  opacity: 0.6;
`;
const HideButton = styled.div`
  position: absolute;
  opacity: 1;
  cursor: pointer;
  text-align: center;
  &::after {
    position: relative;
    content: "여기를 눌러서 이미지 업로드를 하시면 좋겠슴니다?";
    color:gray;
    top: 3rem;
  }
`;