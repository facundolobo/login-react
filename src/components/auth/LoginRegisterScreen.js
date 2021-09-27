import React from 'react';
import './loginRegister.css';
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth'
import { useForm } from '../../hooks/useForm';


export const LoginRegisterScreen = () => {
    
    const dispatch = useDispatch(); //lo necesitamos para agregar el dispath a redux

    const  [formValue, handleInputChange] = useForm({
        emailLogin: 'nando@gmail.com',
        passwordLogin : '123456'
    });


    const { emailLogin, passwordLogin } = formValue;


    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch( login(1234,'facundito') )
    }

    return (
        <div>
            <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit = {handleLogin} >
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                value = {emailLogin}
                                onChange = {handleInputChange}
                                name = "email"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                value = {passwordLogin}
                                onChange = {handleInputChange}
                                name = "password"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}
