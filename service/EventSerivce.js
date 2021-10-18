import MomentService from './MomentService'

const EventService = {
    setStartDate: (startDate) => {
        let date = MomentService.format(startDate)
        let yearmmdd = date.split(" ")[0]
        let time = date.split(" ")[1]
        let hour = time.split("시")[0]
        let min = time.split("시")[1]
        let amPm;
        if(hour > 12){
            amPm="오후"
            hour-=12
        }else {
            amPm="오전"
        }
  
        return yearmmdd + " " + amPm + " " + hour+ ":" + min
    },
    setPrice: (price) => {  
        if(price === 0) {
            return "무료"
        } else {
            return price.toLocaleString()+"원"
        }
    },
    formValidtaion: (request) => {
        if(request.name.trim() === "") {
            alert("제목을 입력해주세요!")
            return false;
        }
        if(request.email.trim() === "") {
            alert("이메일을 입력해주세요!")
            return false;
        }
        if(request.price === ""){
            const regex = /\d/
            if(!regex.test(request.price)){
                alert("숫자로 입력해줘요")
            }else{
                alert("가격을 입력해주세요!")
            }
            return false;
        }
        return true;
  
    }
}

export default EventService