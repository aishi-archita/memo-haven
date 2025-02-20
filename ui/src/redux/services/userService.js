import apiMemoHaven from "../../axios/apiMemoHaven";

// API call for user login
const login = async (userCredentials, rememberMe) => {
  const response = await apiMemoHaven.post("/users/login", userCredentials);

  if (response.data && response.data.data && response.data.statusCode === 200) {
    const userData = response.data.data;

    if (rememberMe) {
      sessionStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      sessionStorage.setItem("user", JSON.stringify(userData));
    }
  }

  return { user: response?.data?.data };
};

// API call for register user
const register = async (userData) => {
  const response = await apiMemoHaven.post("/users/register", userData);
  return response.data;
};

// User Logout
const logout = () => {
  sessionStorage.removeItem("user");
  localStorage.removeItem("user");
};

// API call for getting the user profile
const getProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await apiMemoHaven.get("/users/me", config);
  return response.data;
};

// API Call for Edit User Profile
const updateProfile = async (token, updatedProfile) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await apiMemoHaven.post(
    "users/me/edit",
    updatedProfile,
    config
  );
  return response.data;
};

// API call for sending the reset email
const sendPasswordResetEmail = async (userEmail) => {
  const response = await apiMemoHaven.post("/users/reset-password-email", {
    email: userEmail,
  });
  return response.data;
};

// API call for reseting password
const resetPassword = async (token, password) => {
  const response = await apiMemoHaven.post(
    `/users/reset-password?token=${token}`,
    { password }
  );
  return response.data;
};

const userService = {
  login,
  register,
  logout,
  getProfile,
  updateProfile,
  sendPasswordResetEmail,
  resetPassword,
};

export default userService;
