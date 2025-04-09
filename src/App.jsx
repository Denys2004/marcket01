import { useState, useEffect } from "react";
import Login from "./Login";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored) setUser(stored.username);
  }, []);

  return user ? (
    <div className="min-h-screen flex items-center justify-center bg-green-50 text-center">
      <div className="p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-green-700 mb-2">Добро пожаловать, {user}!</h1>
        <button
          onClick={() => {
            localStorage.removeItem("user");
            setUser(null);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Выйти
        </button>
      </div>
    </div>
  ) : (
    <Login onLogin={(username) => setUser(username)} />
  );
}