import moment from "moment";

const Moment = {
  format: (date) => {
    return moment(date).format("YYYY년MM월DD일 HH시mm");
  },
};
export default Moment;