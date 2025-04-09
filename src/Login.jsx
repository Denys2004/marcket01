import { useState } from "react";

export default function Login({ onLogin }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) return alert("Введите логин и пароль");

    if (isRegistering) {
      localStorage.setItem("user", JSON.stringify({ username, password }));
      alert("Успешно зарегистрировано!");
    } else {
      const stored = JSON.parse(localStorage.getItem("user"));
      if (stored?.username === username && stored?.password === password) {
        alert("Вход выполнен");
        onLogin(username);
      } else {
        alert("Неверные данные");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">
          {isRegistering ? "Регистрация" : "Вход"}
        </h2>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded mb-2">
          {isRegistering ? "Зарегистрироваться" : "Войти"}
        </button>
        <p
          className="text-sm text-center text-blue-500 cursor-pointer"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? "Уже есть аккаунт?" : "Создать аккаунт"}
        </p>
      </form>
    </div>
  );
}