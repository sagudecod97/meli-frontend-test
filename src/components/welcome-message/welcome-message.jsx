import "./welcome-message.scss";

const WelcomeMessage = () => {
  return (
    <div className="welcome-message">
      <h1 className="welcome-message__title">Bienvenido al Buscador</h1>

      <p className="welcome-message__paragraph">
        ¿Qué estás buscando hoy? Ingresa tu consulta a continuación y presiona
        buscar.
      </p>

      <span className="welcome-message__icon material-symbols-outlined">
        sentiment_satisfied
      </span>
    </div>
  );
};

export default WelcomeMessage;
