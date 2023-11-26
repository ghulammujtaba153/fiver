import React from "react";
import "./message.scss";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <spn className="breadcrumbs">
          <Link to="/messages" className="link">
            Messages
          </Link>{" "}
          > John >
        </spn>
        <div className="messages">
          <div className="item">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              necessitatibus distinctio magni, quaerat tempore fuga sunt unde
              nulla nisi perspiciatis in quidem commodi, sit autem beatae
              sapiente ab cum! Suscipit.
            </p>
          </div>

          <div className="item owner">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              necessitatibus distinctio magni, quaerat tempore fuga sunt unde
              nulla nisi perspiciatis in quidem commodi, sit autem beatae
              sapiente ab cum! Suscipit.
            </p>
          </div>

          <div className="item">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              necessitatibus distinctio magni, quaerat tempore fuga sunt unde
              nulla nisi perspiciatis in quidem commodi, sit autem beatae
              sapiente ab cum! Suscipit.
            </p>
          </div>

          <div className="item owner">
            <img src="" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              necessitatibus distinctio magni, quaerat tempore fuga sunt unde
              nulla nisi perspiciatis in quidem commodi, sit autem beatae
              sapiente ab cum! Suscipit.
            </p>
          </div>

        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            placeholder="enter message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
