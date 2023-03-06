import "../../assets/scss/components/common/_FeedbackForm.scss";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import axios from "axios";
import FormTitle from "../FeedbackSection/FormTitle";
import InputComponent from "./InputComponent";
import Button from "../common/Button";
import { isValidPhone } from "./Helpers";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
function FeedbackForm(props) {
  const { titleText } = props;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    const errors = [];

    if (name === "") {
      errors.push("Введіть ваше ім'я.");
    }
    if (!isValidPhone(phone)) {
      errors.push("Введіть правильний номер телефону.");
    }
    if (!isChecked) {
      errors.push("Підтвердіть умови користувацької угоди.");
    }

    if (!errors.length) {
      const BOT_TOKEN = "6241383538:AAGsGDi_N86cjc1FsOnB9tWmEg96FdP2p-c";
      const CHAT_ID = "-1001801264330";
      const text = `Ім'я: ${name}
         Номер телефону: ${phone}
         Країна: ${location}
         Коментар: ${comment}`;
      axios
        .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          chat_id: CHAT_ID,
          text: text,
        })
        .then((resp) => {
          setName("");
          setPhone("");
          setLocation("");
          setComment("");
          setIsChecked(false);
          toast.success("Ваш запит успішно відправлено!");
        })
        .catch((err) => {
          toast.error("Упс! Сталася помилка.");
        });
    } else {
      toast.error(errors.join(" "));
    }
  };

  return (
    <div className="form-wrap">
      {toast}
      <p className="suptitle">Заповніть форму</p>
      <FormTitle titleText={titleText} />
      <form id="feedback-form" onSubmit={handlerSubmit}>
        <InputComponent
          label="Ваше ім'я*"
          value={name}
          required
          setInputValue={(val) => {
            setName(val);
          }}
        />
        <InputComponent
          label="Ваш номер телфону*"
          value={phone}
          required
          setInputValue={(val) => {
            setPhone(val);
          }}
        />
        <InputComponent
          label="Ваша країна"
          value={location}
          setInputValue={(val) => {
            setLocation(val);
          }}
        />
        <InputComponent
          label="Комментар"
          value={comment}
          setInputValue={(val) => {
            setComment(val);
          }}
        />
        <ToastContainer
          toastStyle={{
            backgroundColor: "#333",
            borderRadius: "10px",
            top: "50%",
          }}
        />
        <div className="checkbox-wrap">
          <div className="input-wrap">
            <input
              type="checkbox"
              id="termsOfUse"
              onChange={handleCheckboxChange}
              checked={isChecked}
            />
            <label htmlFor="termsOfUse">
              Підтвержуючи замовлення, я приймаю умови користувацької угоди
            </label>
          </div>
        </div>
        <Button text="Запросити дзвінок" type="submit" />
      </form>
    </div>
  );
}

export default FeedbackForm;
