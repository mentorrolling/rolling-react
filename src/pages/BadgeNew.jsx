import React, { useState } from "react";

import Badge from "../component/Badge";
import BadgeForm from "../component/BadgeForm";
import BadgeHero from "../component/BadgeHero";

export default function BadgeNew(props) {
  const [state, setState] = useState({
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      twitter: "",
      email: "",
    },
  });

  const handleChange = (e) => {
    setState({
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Hiciste Submit");
    try {
      const resp = await fetch("http://localhost:3004/data", {
        method: "POST",
        body: JSON.stringify(state.form),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      // const data = await resp.json();
      // console.log(data);
      props.history.push('/badges')

    } catch (error) {
      console.warn(error);
    }
  };

 

  return (
    <>
      <BadgeHero />

      <div className="container">
        <div className="row mb-3">
          <div className="col-6">
            <Badge
              firstName={state.form.firstName || "FIRST_NAME"}
              lastName={state.form.lastName || "LAST_NAME"}
              jobTitle={state.form.jobTitle || "JOB_TITLE"}
              twitter={state.form.twitter || "twitter"}
              email={state.form.email}
              avatarUrl="http://1.gravatar.com/avatar/2bd6474c77fd501924adfa0aae631f57"
            />
          </div>
          <div className="col-6">
          <h1>Nuevo asistente</h1>
            <BadgeForm
              handleChange={handleChange}
              formValues={state.form}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
}
