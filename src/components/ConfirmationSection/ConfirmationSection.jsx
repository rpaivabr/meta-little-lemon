import image from "../../assets/images/restaurant_chef.jpg";
import './ConfirmationSection.css';

export const ConfirmationSection = () => {

  return (
    <section className="confirmed">
      <div className="container">
        <div className="confirmed-info">
          <div className="confirmed-info-title">
            Success
          </div>
          <div className="confirmed-info-subtitle">
            Reservation Confirmed
          </div>
          <div className="confirmed-info-text">
            Your reservation is completed. We are waiting for serve you and your guests well.
          </div>
        </div>
        <div className="confirmed-image">
          <img src={image} alt="logo" className="image" />
        </div>
      </div>
    </section>
  );
};