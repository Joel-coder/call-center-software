import React from "react";
import moment from "moment/moment";
import Dropdown from "react-bootstrap/Dropdown";
import useApi from "./useApi.js";
import { useEffect, useState } from "react";
const PhoneContainer = ({ data, setID }) => {
  let dt = new Date(data.created_at);
  let hour = moment(dt).format("hh a");
  let date = moment(dt).format("MMMM, D YYYY");

  return (
    <div>
      {!data.is_archived && (
        <div>
          <div className="divider line one-line">{date}</div>
          <div className="phone-container">
            <div className="activity-container transform-shadow">
              <div className="flex-row">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone-inbound-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </span>
                <div>
                  <div className="phone-number">{data.from}</div>
                  <div className="call-detail">{`Tried to call on ${data.to}`}</div>
                </div>
              </div>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    color: "white",
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    padding: "2px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-three-dots-vertical"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setID(data.id)}>
                    Archive
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <span className="general-font-family transform-uppercase">{`${hour}`}</span>
            </div>
          </div>
        </div>
      )}

      <div className="side-form-three-dots me-1"></div>
    </div>
  );
};

export default PhoneContainer;
