import { useState } from 'react';

export default function LoginForm() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', form.username);
    console.log('Senha:', form.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Login" onChange={handleChange} />
      <input name="password" type="password" placeholder="Senha" onChange={handleChange} />
      <button type="submit">Entrar</button>
    </form>
  );
}
