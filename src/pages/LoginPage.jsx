import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://new.pendagun.in/api/auth/login',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
      const data = await response.json();
      if (!data.success) {
        toast.error(data.message || "Login failed");

        return;
      }
      toast.success("Login Successful 🎉");

    } catch (err) {
      console.log(err);
      setError(err.message);
      toast.error(error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-2xl w-80 space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back 👋
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg transition duration-300 
    ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-500 hover:bg-indigo-600 text-white"}
  `}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

    </div>
  );
};

export default LoginPage;