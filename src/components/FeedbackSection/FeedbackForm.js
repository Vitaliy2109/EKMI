import "../../assets/scss/components/common/_FeedbackForm.scss";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useId } from "react";
import axios from "axios";
import FormTitle from "../FeedbackSection/FormTitle";
import InputComponent from "./InputComponent";
import Button from "../common/Button";
import { isValidEmail, isValidPhone, isValidLocation } from "./Helpers";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { Toast } from "react-bootstrap";
function FeedbackForm(props) {
  const { titleText, formClass } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [comment, setComment] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const attrId = useId();
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    const errors = [];

    if (name === "" || name.length <= 1) {
      errors.push("Введіть ваше ім'я.");
    }

    if (!isValidEmail(email)) {
      if (formClass === "deallers") {
        errors.push("Введіть правильний e-mail.");
      }
    }
    if (phone.trim() === "") {
      errors.push("Введіть номер телефону.");
    } else if (!isValidPhone(phone)) {
      errors.push("Введіть правильний номер телефону.");
    }

    if (!isValidLocation(location)) {
      if (formClass === "deallers") {
        errors.push("Введіть ваше місто.");
      }
    }

    if (!isChecked) {
      errors.push("Підтвердіть умови користувацької угоди.");
    }

    if (!errors.length) {
      const BOT_TOKEN = "6241383538:AAGsGDi_N86cjc1FsOnB9tWmEg96FdP2p-c";
      const CHAT_ID = "-1001801264330";
      let text = "";
      {
        formClass === "deallers"
          ? (text = `
          Ім'я: ${name}
E-mail: ${email}
Номер телефону: ${phone}
Місто: ${location}
Компанія: ${company}
Повідомлення: ${comment}`)
          : (text = `
          Ім'я: ${name}
Номер телефону: ${phone}
Країна: ${location}
Коментар: ${comment}`);
      }
      axios
        .post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          chat_id: CHAT_ID,
          text: text,
        })
        .then((resp) => {
          setName("");
          setEmail("");
          setPhone("");
          setLocation("");
          setCompany("");
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
      <Toast />
      <p className="suptitle">Заповніть форму</p>
      <FormTitle titleText={titleText} />
      <form id="feedback-form" onSubmit={handlerSubmit} className={formClass}>
        <div className="wrap">
          <InputComponent
            label="Ваше ім'я*"
            value={name}
            required
            setInputValue={(val) => {
              setName(val);
            }}
          />
        </div>
        {formClass === "deallers" ? (
          <InputComponent
            label="Ваш e-mail*"
            value={email}
            required
            setInputValue={(val) => {
              setEmail(val);
            }}
          />
        ) : (
          ""
        )}
        <InputComponent
          label="Ваш номер телфону*"
          value={phone}
          required
          setInputValue={(val) => {
            setPhone(val);
          }}
        />

        {formClass === "deallers" ? (
          <InputComponent
            label="Ваше місто*"
            value={location}
            required
            setInputValue={(val) => {
              setLocation(val);
            }}
          />
        ) : (
          <InputComponent
            label="Ваша країна"
            value={location}
            setInputValue={(val) => {
              setLocation(val);
            }}
          />
        )}
        {formClass === "deallers" ? (
          <InputComponent
            label="Ваша компанія"
            value={company}
            setInputValue={(val) => {
              setCompany(val);
            }}
          />
        ) : (
          ""
        )}
        {formClass === "deallers" ? (
          <InputComponent
            label="Повідомлення"
            value={comment}
            setInputValue={(val) => {
              setComment(val);
            }}
          />
        ) : (
          <InputComponent
            label="Комментар"
            value={comment}
            setInputValue={(val) => {
              setComment(val);
            }}
          />
        )}

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
              id={attrId}
              onChange={handleCheckboxChange}
              checked={isChecked}
            />
            <label htmlFor={attrId}>
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
