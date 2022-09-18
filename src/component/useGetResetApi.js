const useGetResetApi = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
  
    });
};

export default useGetResetApi;
