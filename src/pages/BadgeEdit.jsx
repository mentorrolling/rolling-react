import React, { useState, useEffect } from "react";

import Badge from "../component/Badge";
import BadgeForm from "../component/BadgeForm";
import BadgeHero from "../component/BadgeHero";

export default function BadgeEdit(props) {
  const badgeId = props.match.params.badgeId;

  const [state, setState] = useState({
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      twitter: "",
      email: "",
    },
  });

  useEffect(() => {
    getDataId();
  }, []);

  const getDataId = async () => {
    try {
      const resp = await fetch(`http://localhost:3004/data?id=${badgeId}`);
      const data = await resp.json();
      console.log(data);
      setState({
        form: data[0],
      });
    } catch (error) {
      console.warn(error);
    }
  };

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
    try {
      const resp= await fetch(`http://localhost:3004/data/${badgeId}`, {
        method: "PUT",
        body: JSON.stringify(state.form),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })

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
