import { MessageProps } from "@/components/Typing";

export const Response = ({ from, message: { text, time } }: MessageProps) => {
  return (
    <li>
      <div className="message-data align-right">
        <span className="message-data-name">{from.name}</span>
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <i className="fa fa-circle online"></i>
      </div>
      <div className="message other-message float-right">{text}</div>
    </li>
  );
};
