export default function authHeader() {
  const token = localStorage.getItem("token");
  if (token) {
    return `bearer ${token}`;
  } else {
    return "";
  }
}
