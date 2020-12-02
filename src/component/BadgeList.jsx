import React from "react";
import { Link } from "react-router-dom";
import "../css/badge_list.css";
import Gravatar from "./Gravatar";

export default function BadgeList({ data, buscarBadge, handleChange }) {
  return (
    <>
      <div className="BadgesList">
        <ul>
          {data.map((badge) => {
            return (
              <li key={badge.id} className="BadgesListItem mb-3">
                <Gravatar
                  className="BadgesListItem__avatar "
                  email={badge.email}
                />
                {/* <img
                className="BadgesListItem__avatar "
                src={badge.avatarUrl}
                alt="Avatar"
              /> */}
                <div>
                  <Link
                    to={`/badges/${badge.id}`}
                    className="text-reset text-decoration-none"
                  >
                    {badge.firstName} {badge.lastName}
                  </Link>
                  <div>{badge.jobTitle}</div>
                  <div className="Badge__twitter">@{badge.twitter}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
