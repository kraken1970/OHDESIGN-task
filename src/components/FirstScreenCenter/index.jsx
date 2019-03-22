import React from "react";
import { Form } from "react-bootstrap";

import "./FirstScreenCenter.scss";

const FirstScreenCenter = () => {
  return (
    <div className="appContainer FSC-container">
      <Form className="FSC_formBlock">
        <Form.Group className="wrap_selectBlocks">
          <div className="selectBlock1">
            <div className="selectBlock1_part1">
              <Form.Label>Расположение</Form.Label>
              <Form.Control as="select">
                <option>Регион</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </div>
            <div className="selectBlock1_part2">
              <Form.Control as="select">
                <option>Город</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <Form.Control as="select">
                <option>Район</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </div>
          </div>
        </Form.Group>

        <Form.Group className="wrap_selectBlocks">
          <div className="selectBlock1">
            <div className="selectBlock1_part1">
              <Form.Label>Недвижимость</Form.Label>
              <Form.Control as="select">
                <option>Выбрать недвижимость</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </div>
            <div className="selectBlock1_part2">
              <Form.Control as="select">
                <option>Тип недвижимости</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <Form.Control as="select">
                <option>Вид недвижимости</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </div>
          </div>
        </Form.Group>

        <Form.Group className="wrap_selectBlocks">
          <div className="selectBlock1 selectBlock2">
            <div className="selectBlock1_part1">
              <Form.Label>Цена</Form.Label>
              <Form.Control as="select">
                <option>Минимальная цена</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
              <Form.Control as="select">
                <option>Максимальная цена</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </div>
          </div>
        </Form.Group>

        <Form.Group className="wrap_selectBlocks">
          <div className="selectBlock1 selectBlock2">
            <div className="selectBlock1_part1">
              <Form.Label> ;nbsp:</Form.Label>
              <Form.Control type="text" placeholder="ID" />
              <Form.Control
                type="submit"
                placeholder="ПОИСК"
                value="ПОИСК"
                className="formSubmit"
              />
            </div>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FirstScreenCenter;
