import React from "react";
import TypeIt from "typeit-react";
import "./App.css";

export default function App() {
  return (
    <div className="containerMessage">
      <div className="bar">
        <span className="icon icon-red"></span>
        <span className="icon icon-yellow"></span>
        <span className="icon icon-green"></span>
      </div>
      <div className="screen">
        <TypeIt
          options={{ speed: 100 }}
          getBeforeInit={(instance) => {
            instance
              .break()
              .type("Hey... Hello sir 👋 ", { delay: 200 })
              .pause(500)
              .break({ delay: 500 })
              .type("<strong> I'm Enes. </strong>")
              .break({ delay: 200 })
              .break({ delay: 200 })
              .type("I'm a university student")
              .break()
              .type("and learn Front-End development")
              .delete(27, { delay: 400 })
              .type("Front-End developer. 💻 ")
              .break()
              .break()
              .type(
                "İf you want to contact me ?<br> <a href='mailto:eneskt1@hotmail.com'>eneskt1@hotmail.com</a> <i> you can disturb me 👌</i>"
              )
              .break()
              .break()
              .type(
                "İf you wonder about me ?<br> <a href='https://github.com/eneskt' target=_blank>GitHub Page</a> <br> <a href='https://www.linkedin.com/in/enes-kutlay-4038b01a0/' target=_blank>LinkedIn Profile </a> <br> <a href='https://twitter.com/eneskt01' target=_blank>Twitter Profile <br> <a href='https://eneskutlay.medium.com/' target=_blank>Medium Blog Page</a></a>"
              )
              .break()
              .break()
              .type("Have good day 🎉 ");

            return instance;
          }}
        />
      </div>
    </div>
  );
};