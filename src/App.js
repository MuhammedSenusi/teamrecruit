// IMAGES
import cardLogo from "./images/mc-logo-52.svg";
import chip from "./images/chip.png";
import cardLogo2 from "./images/mc-logo.png";
import signalLogo from "./images/pngwing.com.png";

// CSS FILES
import "./css/styles.css";
import "./css/reset.css";
import "./css/typography.css";
import "./css/utilities.css";
import "./css/queries.css";

function App() {
  return (
    <div className="payment-page">
      {/* PAYMENT MODAL */}
      <div className="payment-modal">
        {/* PAYMENT FORM */}
        <div className="payment-modal__form">
          {/* PAYMENT FORM HEADER */}
          <div className="payment-modal__form--header">
            <div className="logo">
              <div className="logo__container">
                <i className="fa-solid fa-credit-card icon"></i>
              </div>
              <span className="text-bold">TeamRecruit</span>
              <span className="text-light">Pay</span>
            </div>
            <div className="time">
              <div className="time__box">0</div>
              <div className="time__box">1</div>
              <div className="date-separator">:</div>
              <div className="time__box">1</div>
              <div className="time__box">9</div>
            </div>
          </div>
          {/* PAYMENT FORM INPUT */}
          <div className="payment-modal__form--inputs">
            <div className="form-input">
              <div className="form-input__info">
                <div className="info">
                  <h5>Card Number</h5>
                  <small>Enter the 16-digit card number on the card</small>
                </div>
                <a href="#" className="action-link">
                  <i className="fa-solid fa-pencil"></i>
                  <small className="action-link__text">Edit</small>
                </a>
              </div>
              <div className="form-input__box">
                <picture className="container">
                  <source />
                  <img src={cardLogo} className="img-icon" alt="" />
                </picture>
                <input
                  className="input text-left"
                  type="number"
                  placeholder="2412  -  7512  -  3412  -  3456"
                />
                <div className="container">
                  <i
                    className="bx bxs-badge-check input-icon"
                    style={{ color: "#228be6" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          {/* PAYMENT FORM INPUT */}
          <div className="payment-modal__form--inputs">
            <div className="form-input">
              <div className="form-input__info">
                <div className="info">
                  <h5>CVV Number</h5>
                  <small>Enter the 3 or 4 digit number on the card</small>
                </div>
                <div className="info-input">
                  <div className="form-input__box bg-white">
                    <input
                      className="input input-two"
                      type="text"
                      value="327"
                    />
                    <div className="container">
                      <i className="fa-solid fa-ellipsis-vertical fa-lg icon-two"></i>
                      <i className="fa-solid fa-ellipsis-vertical fa-lg icon-two"></i>
                      <i className="fa-solid fa-ellipsis-vertical fa-lg icon-two"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* PAYMENT FORM INPUT */}
          <div className="payment-modal__form--inputs">
            <div className="form-input">
              <div className="form-input__info">
                <div className="info">
                  <h5>Expiry Date</h5>
                  <small>Enter the expiration date on the card</small>
                </div>
                <div className="d">
                  <div className="form-input__box bg-white">
                    <input className="input input-two" type="text" value="09" />
                  </div>
                  <span className="text-bold">/</span>
                  <div className="form-input__box bg-white">
                    <input className="input input-two" type="text" value="22" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PAYMENT FORM INPUT */}
          <div className="payment-modal__form--inputs">
            <div className="form-input">
              <div className="form-input__info">
                <div className="info">
                  <h5>Password</h5>
                  <small>Enter your Dynamic password</small>
                </div>
                <div className="info-input">
                  <div className="form-input__box bg-white">
                    <input
                      className="input input-two text-left"
                      type="password"
                      value="00000000"
                    />
                    <div className="container">
                      <i className="fa-solid fa-ellipsis-vertical fa-lg icon-two"></i>
                      <i className="fa-solid fa-ellipsis-vertical fa-lg icon-two"></i>
                      <i className="fa-solid fa-ellipsis-vertical fa-lg icon-two"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BTN */}
          <div className="btn-container">
            <button className="btn">Pay Now</button>
          </div>
        </div>
        {/* PAYMENT SUMMARY */}
        <div className="payment-modal__summary">
          <div className="indicator"></div>

          {/* CREDIT CARD */}
          <div className="credit-card">
            <div className="credit-card__signal">
              <img className="chip" src={chip} alt="" />
              <img className="signal-icon" src={signalLogo} alt="" />
            </div>

            <div className="credit-card__info">
              <small className="text-bold mb-1 text-dark">
                Jonathan Micheal
              </small>
              <p className="text-bold info-number">
                <span className="text-bold">· · · · </span>
                <span>3456</span>
              </p>
            </div>

            <div className="credit-card__exp">
              <p className="text-bold">09/22</p>
              <img className="master-card-two" src={cardLogo2} alt="" />
            </div>
          </div>

          {/* */}
          <div className="enum-container">
            <div className="enum">
              <small>Company</small>
              <div className="apple">
                <div className="apple-icon__container">
                  {" "}
                  <i
                    className="fa-brands fa-apple fa-xs"
                    style={{ color: "#ffffff" }}
                  ></i>
                </div>

                <small className="text-dark text-bold">Apple</small>
              </div>
            </div>
            <div className="enum">
              <small>Order Number</small>
              <small className="text-dark text-bold">238954</small>
            </div>
            <div className="enum">
              <small>Product</small>
              <small className="text-dark text-bold">Macbook air</small>
            </div>
            <div className="enum">
              <small>VAT(20%)</small>
              <small className="text-dark text-bold">$100.00</small>
            </div>
          </div>
          <div className="divider-container">
            <div className="divider"></div>
            <div className="circle__one"></div>
            <div className="circle__two"></div>
          </div>
          <div className="enum-total">
            <div className="">
              <small>You have to pay</small>
              <div className="">
                <span className="amount">549</span>
                <small className="text-dark text-bold">.99</small>{" "}
                <small>USD</small>
              </div>
            </div>
            <div className="">
              <i
                className="bx bxs-receipt bx-flip-vertical input-icon"
                style={{ color: "#555555" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
