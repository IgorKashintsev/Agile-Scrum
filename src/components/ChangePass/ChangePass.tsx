import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

import style from '../../global.module.scss';
import styleChangePass from './ChangePass.module.scss';
import { IsAuth, Password } from '../../types';

interface ChangePassProps {
  isAuth: IsAuth;
  passwordAuth: Password;
  setPasswordAuth: (param: Password) => void;
}

export const ChangePass: FC<ChangePassProps> = ({isAuth, passwordAuth, setPasswordAuth}) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [errorPass, setErrorPass] = useState(false);
  const [errorNewPass, setErrorNewPass] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if(!isAuth) {
      navigate('/');
    }
    return
  }, [isAuth]);
  
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setErrorPass(false);
    setErrorNewPass(false);
    if(password === passwordAuth && newPassword === confirmPass) {
      setPasswordAuth(confirmPass)
      navigate(-1);
    } else if(password !== passwordAuth) {
      setErrorPass(true);
    } else if(newPassword !== confirmPass) {
      setErrorNewPass(true);
    }
  };

  console.log('ChangePass');

  return(
    <>
      <div className={`${style.container} ${styleChangePass.changePass}`}>
        <form onSubmit={(ev) => handleSubmit(ev)}>
          <h2>Изменение пароля</h2>
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
            label="Введите новый пароль"
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
            label="Подтверждение нового пароля"
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
            disabled={!(password && newPassword && confirmPass)}
            >Подтвердить
          </Button>
        </form>
        {errorPass && <p className={styleChangePass.error}>Пароль не верный</p>}
        {errorNewPass && <p className={styleChangePass.error}>Не правильно введен подтверждающий пароль</p>}
      </div>
    </>  
  )
}