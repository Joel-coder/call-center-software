const useGetResetApi = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
    });
};

export default useGetResetApi;
