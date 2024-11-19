import { useState } from "react";

export const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    setErrors({ email: "", password: "" }); // Limpiar errores al cambiar de modo
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = { email: "", password: "" };
    let valid = true;

    // Validación de email
    if (!email) {
      formErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Please enter a valid email.";
      valid = false;
    }

    // Validación de password
    if (!password) {
      formErrors.password = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(formErrors);

    if (valid) {
      // Aquí puedes manejar el envío de formulario si todo es válido
      console.log("Form submitted:", { email, password });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 pt-20">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-6 text-brown-800">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="text-red-500 text-xs italic">
                {errors.email}
              </span>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="text-red-500 text-xs italic">
                {errors.password}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <button
            className="text-pink-500 hover:underline focus:outline-none"
            onClick={toggleAuthMode}
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};
