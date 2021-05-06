const user = {
  email: 'pepito@email.com',
  password: '123456'
}

export const loginService = (email, password)=>{
  if(user.email === email && user.password === password){
    const token = `${email}.${password}`
    return token
  } else {
    return new Error('Correo o Contraseña incorrectos ')
  }
}