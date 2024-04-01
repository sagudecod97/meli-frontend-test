import "./message.scss";

const Message = ({ sad, happy, message, title }) => {
  return (
    <div className="message">
      <h1 className="message__title">{title}</h1>

      <p className="message__paragraph">{message}</p>

      {sad && (
        <span class="message__icon material-symbols-outlined">
          sentiment_dissatisfied
        </span>
      )}

      {happy && (
        <span className="message__icon material-symbols-outlined">
          sentiment_satisfied
        </span>
      )}
    </div>
  );
};

export default Message;
