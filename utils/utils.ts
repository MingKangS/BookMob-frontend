export const checkAuthAndGetUser = (): Promise<String | boolean> => {
  const token: String = localStorage.getItem('jwt');
  if (!token) return;

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  //var user: Boolean | userType
  return fetch("http://localhost:8000/api/get-user/" + token, requestOptions)
    .then(async (response) => {
      if (response.status == 200) {
        console.log("This user is already logged in.");
        return await response.json();
      } else {
        return false
      };
    });
}