import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login, Password } from "../../types";

import style from '../../global.module.scss';
import styleSignUp from './SignUp.module.scss';

interface SignInProps {
  loginAuth: Login;
  onIsAuth: (param: boolean) => void;
  setName: (param: Login) => void;
  setPasswordAuth: (param: Password) => void;
}

export const SignUp: FC<SignInProps> = ({loginAuth, onIsAuth, setName, setPasswordAuth}) => {
  const [newLogin, setNewLogin] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [errorLog, setErrorLog] = useState(false);
  const [errorPass, setErrorPass] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setErrorLog(false);
    setErrorPass(false);
    if(newLogin !== loginAuth && newPassword === confirmPass) {
      setName(newLogin);
      setPasswordAuth(confirmPass);
      onIsAuth(true);
      navigate('/');
    } else if(newLogin === loginAuth) {
      setErrorLog(true);
    } else if(newPassword !== confirmPass) {
      setErrorPass(true);
    }
  };

  return(
    <>
      <div className={`${style.container} ${styleSignUp.signUp}`}>
        <form onSubmit={(ev) => handleSubmit(ev)}>
          <h2>Регистрация</h2>
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
            value={newLogin}
            onChange={(e) => setNewLogin(e.target.value)}
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
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            label="Введите свой пароль"
            variant="outlined"
            autoComplete="off"
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
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            label="Подтверждение пароля"
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
                backgroundColor: "#a8a8a8",
              },
            }}
            disabled={!(newLogin && newPassword && confirmPass)}
            >Создать и войти
          </Button>
        </form>
        {errorLog && <p className={styleSignUp.error}>Этот логин уже существует</p>}
        {errorPass && <p className={styleSignUp.error}>Не правильно введен подтверждающий пароль</p>}
      </div>
    </>
  );
};