import React from "react";
import './About.css';
import pic from '../../images/image-03.jpg';
function About() {
    return (
        <div className="about">
            <img className="about__picture" src={pic} alt="Фото автора"/>
            <div className="about__text">
                <h3 className="about__title">Об авторе</h3>
                <p className="about__subtitle">Это блок с описанием автора проекта. Здесь следует указать, как вас
                    зовут, чем вы занимаетесь, какими технологиями разработки владеете.
                </p>
                <p className="about__subtitle">Также можно рассказать о процессе обучения в Практикуме, чему вы тут
                    научились, и чем можете помочь потенциальным заказчикам</p>
            </div>
        </div>
    );
}

export default About;