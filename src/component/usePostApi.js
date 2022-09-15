import { useEffect, useState } from "react";

const usePostApi = (id) => {
  const data = { is_archived: true };

  fetch(`https://aircall-job.herokuapp.com/activities/${id}`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {});
};

export default usePostApi;
