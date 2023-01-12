import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UsersMap } from "../../types";

import style from '../../global.module.scss';
import styleSignIn from './SignIn.module.scss';

interface SignInProps {
  users: UsersMap;
  setLoginAuth: (loginAuth: string) => void;
  onIsAuth: (param: boolean) => void;
}

export const SignIn: FC<SignInProps> = ({users, setLoginAuth, onIsAuth}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setError(false);
    if(users.has(login) && users.get(login)?.password === password) {
      onIsAuth(true);
      setLoginAuth(login);
      navigate('/');
    } else {
      setError(true);
    }
  };

  console.log('signIn');

  return(
    <>
      <div className={`${style.container} ${styleSignIn.signIn}`}>
        <form onSubmit={(ev) => handleSubmit(ev)}>
          <h2>Войти в личный кабинет</h2>
          <TextField
            sx={{
              width: "100%",
              mt: "35px",
              "& .MuiInputLabel-root": {
                color: "#d6d6d6",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#757575" 
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#d6d6d6",
              },
              "& .MuiOutlinedInput-root": {
                  color: "#d6d6d6",
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#a8a8a8",
                }
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#a8a8a8"
                }
              },
            }}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            label="Введите свой логин"
            variant="outlined"
            autoComplete="off"
            autoFocus
          />
          <br/>
          <TextField
            sx={{
              width: "100%",
              mt: "35px",
              "& .MuiInputLabel-root": {
                color: "#d6d6d6",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#757575" 
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#d6d6d6",
              },
              "& .MuiOutlinedInput-root": {
                  color: "#d6d6d6",
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "#a8a8a8",
                }
              },
              "& .MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  borderColor: "#a8a8a8"
                }
              },
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Введите свой пароль"
            variant="outlined"
            autoComplete="off"
          />
          <br/>
          <Button 
            type="submit"
            sx={{
              width: "100%",
              mt: "35px",
              color: "#d6d6d6",
              fontWeight: "600",
              border: "1px solid #757575",
              "&:hover":{
                color: "rgba(0, 0, 0, 0.87)",
                backgroundColor: "#d6d6d6",
              },
            }}
            disabled={!(login && password)}
            >Войти
          </Button>
        </form>
        <div className={styleSignIn.signup}>
          <NavLink 
            className={styleSignIn.signup_nav}
            to="/signup"
          >Регистрация
          </NavLink>
        </div>
        {error && <p className={styleSignIn.error}>Логин или пароль не верны</p>}
      </div>
    </>
  );
};