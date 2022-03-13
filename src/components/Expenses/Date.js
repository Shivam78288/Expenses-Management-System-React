import "./Date.css";

const Date = (props) => {
  return (
    <div className="date-container">
      <div className="date-props month">
        {props.date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="date-props date">{props.date.getDate()}</div>
      <div className="date-props year">{props.date.getFullYear()}</div>
    </div>
  );
};

export default Date;
