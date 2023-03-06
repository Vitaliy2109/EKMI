// import "../../../assets/scss/components/common/_Toast.scss";

// function ToastSucces(props) {
//   const { statusText, text, status } = props;
//   const [isActive, setIsActive] = useState(true);
//   const handleButtonClick = () => {
//     setIsActive(false);
//   };
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsActive(false);
//     }, 5000);
//     return () => clearTimeout(timer);
//   });
//   const classActive = isActive ? `active` : "";
//   return (
//     // <div className={`toast ${status} ${isActive ? `${state}` : ""}`}>
//     <div className={`toast ${status} ${classActive}`}>
//       <p className="statusText">{statusText}</p>
//       <p className="text">{text}</p>
//       <button
//         type="button"
//         className="closeBtn"
//         onClick={handleButtonClick}
//       ></button>
//     </div>
//   );
// }
// export const toast = {
//   style: {
//     wrapper: {
//       position: "fixed",
//       left: "20px",
//       top: "20px",
//       width: "350px",
//       zIndex: "10000",
//     },
//     toast: {
//       padding: "15px",
//       color: "#fff",
//       borderRadius: "5px",
//       marginBottom: "10px",
//     },
//   },
//   show: function (text, type) {
//     let wrapper = document.getElementById("toast-wrapper");
//     if (wrapper === null) {
//       wrapper = document.createElement("div");
//       wrapper.id = "toast-wrapper";
//       for (let prop in this.style.wrapper) {
//         wrapper.style[prop] = this.style.wrapper[prop];
//       }
//       document.body.prepend(wrapper);
//     }

//     switch (type) {
//       case "success":
//         this.style.toast.backgroundColor = "rgba(5, 184, 5, .8)";
//         break;
//       case "danger":
//         this.style.toast.backgroundColor = "rgba(195, 22, 22, .8)";
//         break;
//       case "warning":
//         this.style.toast.backgroundColor = "rgba(255, 184, 30, .8)";
//         break;
//       case "info":
//         this.style.toast.backgroundColor = "rgba(30, 199, 255, 0.8)";
//         break;
//     }
//     const div = document.createElement("div");
//     div.id = "my-toast" + document.getElementsByClassName("my-toast").length;
//     div.classList.add(`toast-${type}`);
//     for (let prop in this.style.toast) {
//       div.style[prop] = this.style.toast[prop];
//     }
//     const divText = document.createElement("div");
//     divText.innerText = text;
//     div.prepend(divText);
//     wrapper.prepend(div);
//     div.onclick = div.remove;
//     setTimeout(() => {
//       div.remove();
//     }, 3000);
//   },
//   success: function (text = "") {
//     this.show(text, "success");
//   },
//   danger: function (text = "") {
//     this.show(text, "danger");
//   },
//   warning: function (text = "") {
//     this.show(text, "warning");
//   },
//   info: function (text = "") {
//     this.show(text, "info");
//   },
// };
