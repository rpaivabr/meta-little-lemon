import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/images/restauranfood.jpg";
import { Button } from "../../components/Button/Button";
import './HeroSection.css';

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-info">
          <div className="hero-info-title">
            Little Lemon
          </div>
          <div className="hero-info-subtitle">
            Chicago
          </div>
          <div className="hero-info-text">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </div>
          <Button onClick={() => navigate('/reservations')}>Reserve a table</Button>
        </div>
        <div className="hero-image">
          <img src={image} alt="logo" className="image" />
        </div>
      </div>
    </section>
  );
};