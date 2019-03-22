import React from "react";
import "./SliderItems.scss";

const SliderItems = () => {
  return (
    <div className="SliderItems">
      <div className="SliderItem_img">
        <p>Прочитать об этапах покупки подробнее</p>
      </div>
      <ul className="SliderItems_list">
        <li className="SliderItems_list--item actived">
          <p className="SI_list--title">
            <span>01</span> Подписание договора о поиске объекта
          </p>
          <p className="SI_item--text">
            Принимая решение купить доходную недвижимость в Европе, многие
            профессиональные инвесторы отдают предпочтение Германии. И в этом
            нет ничего удивительного. Доступные цены, надежность экономики и
            стабильность политической ситуации в стране формируют благоприятный
            инвестиционный климат с возможностью просчитать развитие рынка в
            долгосрочной перспективе.
          </p>
        </li>
        <li className="SliderItems_list--item">
          <p className="SI_list--title">
            <span>02</span> Выбор объекта
          </p>
        </li>
        <li className="SliderItems_list--item">
          <p className="SI_list--title">
            <span>03</span> Бронирование объекта и договор об оказании
            риэлторских услуг
          </p>
        </li>
        <li className="SliderItems_list--item">
          <p className="SI_list--title">
            <span>04</span> Предварительный договор купли-продажи
          </p>
        </li>
        <li className="SliderItems_list--item">
          <p className="SI_list--title">
            <span>05</span> Проверка объекта
          </p>
        </li>
        <li className="SliderItems_list--item">
          <p className="SI_list--title">
            <span>06</span> Подписание договора купли-продажи
          </p>
        </li>
        <li className="SliderItems_list--item">
          <p className="SI_list--title">
            <span>07</span> Оплата стоимости объекта
          </p>
        </li>
        <li className="SliderItems_list--item">
          <p className="SI_list--title">
            <span>08</span> Переход права собственности и регистрация нового
            собственника
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SliderItems;
