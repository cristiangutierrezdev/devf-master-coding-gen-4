const user = {
  email: 'pepito@email.com',
  password: '123456',
};

export const login = (email, password) => {
  // Estamos simulando el tiempo de espera
  if (email === user.email && password === user.password) {
    // Esto lo compara el backend
    const token = '12345.6asdfg'; // Esto lo genera el backend

    sessionStorage.setItem('token', token); // Esto si es del front end

    return true;
  } else {
    return false;
  }
};
