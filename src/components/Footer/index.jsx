import React from "react";
import { Nav, Form } from "react-bootstrap";
import logo from "../../img/logo.svg";
import facebook from "../../img/f.svg";
import twitter from "../../img/t.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="appContainer FooterContainer">
        <div className="Footer_block Footer_contact">
          <div className="Header_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="Footer_contact--content">
            <p className="adress">Kurfürstendamm 45 Berlin 10719</p>
            <Nav.Link
              href="tel:+49 30 889 203 99"
              className="Header_phone phone"
            >
              +49 30 889 203 99
            </Nav.Link>
            <Nav.Link
              href="tel:+49 178 519-87-28"
              className="Header_phone phone"
            >
              +49 178 519-87-28
            </Nav.Link>
            <p className="post">
              <Nav.Link
                href="mailto:info@ew-realestate.de"
                className="Header_phone Footer_post"
              >
                info@ew-realestate.de
              </Nav.Link>
              <Nav.Link
                href="skype:east-westrealestate"
                className="Header_phone Footer_post"
              >
                east-westrealestate
              </Nav.Link>
              <p>Игорь Зиберт</p>
            </p>
          </div>
          <div className="network_block">
            <img src={facebook} alt="f" />
            <img src={twitter} alt="t" />
          </div>
        </div>
        <div className="Footer_block Footer_nav">
          <p className="Footer_contact--title">НАВИГАЦИЯ</p>
          <div className="Footer_contact--content">
            <Nav.Link href="#" className="FST_link">
              Главная
            </Nav.Link>
            <Nav.Link href="#" className="FST_link">
              О компании
            </Nav.Link>
            <Nav.Link href="#" className="FST_link">
              Информация
            </Nav.Link>
            <Nav.Link href="#" className="FST_link">
              Новости
            </Nav.Link>
            <Nav.Link href="#" className="FST_link">
              Контакты
            </Nav.Link>
            <Nav.Link href="#" className="FST_link">
              Заявка online
            </Nav.Link>
          </div>
        </div>
        <div className="Footer_block Footer_services">
          <p className="Footer_contact--title">УСЛУГИ</p>
          <div className="Footer_contact--content">
            <Nav.Link href="#" className="FST_link">
              Индивидуальный поиск и<br /> продажа недвижимости
            </Nav.Link>
            <Nav.Link href="#" className="FST_link">
              Послепродажное обслуживание
            </Nav.Link>
            <Nav.Link href="#" className="FST_link">
              Открытие счета в банке
            </Nav.Link>
            <Nav.Link href="#" className="FST_link">
              Ипотечный кредит
            </Nav.Link>
          </div>
        </div>
        <div className="Footer_block Footer_estate">
          <p className="Footer_contact--title">НЕДВИЖИМОСТЬ</p>
          <div className="wrap_content">
            <div className="Footer_contact--content">
              <Nav.Link href="#" className="FST_link">
                Квартиры
              </Nav.Link>
              <Nav.Link href="#" className="FST_link">
                Дома и виллы
              </Nav.Link>
              <Nav.Link href="#" className="FST_link">
                Доходные квартиры
              </Nav.Link>
              <Nav.Link href="#" className="FST_link">
                Доходные дома
              </Nav.Link>
            </div>
            <div className="Footer_contact--content">
              <Nav.Link href="#" className="FST_link">
                Коммерческая недвижимость
              </Nav.Link>
              <Nav.Link href="#" className="FST_link">
                Новостройки
              </Nav.Link>
              <Nav.Link href="#" className="FST_link">
                Земля
              </Nav.Link>
              <Nav.Link href="#" className="FST_link">
                Инвестиции
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
      <Form className="FooterScreenTop appContainer FSC-container">
        <div className="FST_block FST_text">
          <p className="FST_text--title">
            Не нашли, что искали? Нужна консультация? Оставьте номер своего
            телефона и мы вам перезвоним.
          </p>
          <p className="FST_text--politic">
            Нажимая "Отправить" вы соглашаетесь с правилами обработки
            персональных данных и <br />{" "}
            <span>политикой конфиденциальности</span> EW Real Estate
          </p>
        </div>

        <div className="FST_block FST_input">
          <Form.Control
            type="text"
            placeholder="Как к вам обращаться"
            className="Footer_input"
          />
          <Form.Control
            type="text"
            placeholder="Ваш номер телефона"
            className="Footer_input"
          />
        </div>

        <div className="FST_block FST_submit">
          <Form.Control
            type="submit"
            placeholder="ОТПРАВИТЬ"
            value="ОТПРАВИТЬ"
            className="formSubmit Footer_input"
          />
        </div>
      </Form>
    </div>
  );
};

export default Footer;
