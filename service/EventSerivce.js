import MomentService from './MomentService'

const EventService = {
    setStartDate: (startDate) => {
        return MomentService.format(startDate);
    },
    setPrice: (price) => {
        if(price === 0) {
            return "무료"
        } else {
            return price.toLocaleString()
        }
    }
}

export default EventService