import { MessageProps } from "@/components/Typing";

export const Message = ({ from, message: { text, time } }: MessageProps) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {from.name}
        </span>
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
      </div>
      <div className="message my-message">{text}</div>
    </li>
  );
};
