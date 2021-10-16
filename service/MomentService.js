import moment from "moment";

const Moment = {
  format: (date) => {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
  },
};
export default Moment;