import React from "react";
import image1 from "../../assets/images/greek_salad.jpg";
import image2 from "../../assets/images/restauranfood.jpg";
import image3 from "../../assets/images/lemon_dessert.jpg";
import dishIcon from "../../assets/images/dish_icon.svg";
import { Button } from "../../components/Button/Button";
import "./SpecialsSection.css";

const specials = [
  {
    src: image1,
    title: "Greek salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    src: image2,
    title: "Bruschetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    src: image3,
    title: "Lemon Dessert",
    price: 5,
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export const SpecialsSection = () => {
  return (
    <section className="specials">
      <div className="container">
        <header className="specials-header">
          <div className="specials-title">This weeks specials!</div>
          <Button>Online Menu</Button>
        </header>
        <div className="specials-content">
          { specials.map(item => (
            <article className="specials-card" key={item.title}>
              <img src={item.src} alt={item.title} className="image" />
              <div className="content">
                <div className="header">
                  <span className="title">{item.title}</span>
                  <span className="price">{`$ ${item.price.toFixed(2)}`}</span>
                </div>
                <div className="body">{item.description}</div>
                <div className="footer">
                  Order a delivery
                  <img src={dishIcon} height="20" width="20" alt="dish icon" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
