import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postUser, getUser } from '../service/usePost';
import { UserProvider } from '../service/userContext';
import { UserContext } from '../service/userContext.jsx';
import style from './style.module.css';
import opening from '../assets/republicaLogo.mp4';
import backGround from '../assets/menuInicial.mp4';
import icone from '../assets/avatar.gif';
import { Howl, Howler } from 'howler';
import volume from '../assets/audio/volume.png'

export const App = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [soundState, setSound] = useState(null);
  const fadeDuration = 2000;

  const usuario = {
    email: email,
    senha: senha,
    nickname: nickname
  };


  useEffect(() => {
    const sound = new Howl({
      src: ['./src/assets/audio/background-audio.mp3'],
      loop: false,
      onend: function () {
        setTimeout(() => {
          sound.fade(0, 1, fadeDuration);
          sound.play();
        }, 2000);
      }
    });

    sound.play();
    sound.fade(0, 1, fadeDuration);
    setSound(sound);

    return () => {
      sound.stop();
    }

  }, []);

  const setVolume = (event) => {
    const volume = event.target.value;
    soundState.volume(volume);
  };

  const pauseSound = () => {
    sound.pause();
  };


  const userExists = async (email, senha) => {
    try {
      const response = await getUser();
      const usuarios = response.data;
      const usuario = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha);

      console.log("Usuário encontrado: ", usuario);

      return usuario ? true : false;

    } catch (error) {
      console.error('Erro ao verificar usuário:', error);
      return false;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (email == '' || senha == '' || nickname == '') {
        setMessage('');
        setError(<p><strong>Usuário não pode ser nulo.</strong></p>);
      } else {
        await postUser(usuario);
        setMessage(<p><strong>Sucesso! Agora logue para iniciar!</strong></p>);
        setError(null);
      }

    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      setError('Erro ao registrar usuário. Tente novamente.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const usuario = await userExists(email, senha);
    if (usuario) {
      setUser(nickname);
      navigate('../entrada');
    } else {
      setMessage('');
      setError(<p><strong>Email ou senha inválidos!</strong></p>); // aparece dentro do card o erro
    }
  };

  useEffect(() => {
    const introductionVideo = document.querySelector('.' + style.opening);
    const backgroundVideo = document.querySelector('.' + style.backGround);

    introductionVideo.play();

    introductionVideo.addEventListener('ended', () => {
      introductionVideo.classList.add(style.hidden);
      backgroundVideo.style.opacity = 1;
    });

    return () => {
      introductionVideo.removeEventListener('ended', () => { });
    };
  }, []);

  const handleQuemSomosClick = () => {
    navigate('../quemSomos');
  };

  return (
    <>
      <UserProvider>
        <div className={style.mainContainer}>
          <video className={style.opening} src={opening} autoPlay muted><span className={style.span01}></span></video>
          <span className={style.span01}></span>
          <video className={style.backGroundVideo} src={backGround} loop autoPlay muted></video>
          <nav className={style.navBarMenu}>
            <ul className='animate__animated animate__fadeInLeft animate__delay-5s'>
              <div>
                <li><p>A República</p></li>
                <p className={style.paragrafo}>Ajude a desvendar um crime</p>
                <p className={style.paragrafo}><a href="#" className={style.paragrafo} onClick={handleQuemSomosClick}>Quem somos?</a></p>
              </div>
            </ul>
            <label className={style.volumeLabel + ' animate__animated animate__fadeInRight animate__delay-5s'}>
              <img className="volume" src={volume} alt="icon Lupa" />
              <input type="range" min="0" max="1" step="0.01" onChange={setVolume} />
            </label>
          </nav>


          <div className={style.iconContainer + ' animate__animated animate__fadeInRight animate__delay-5s'}>
            <a href="#"><img className={style.iconAvatar} src={icone} alt="" onClick={() => setOpenForm(!openForm)} /></a>
          </div>

          {
            openForm &&
            <form action="#" className={style.formContainer}>
              <h2 className={style.h2Style}>REGISTER / LOGIN</h2>
              <div className={style.underline}></div>
              <div className={style.inputData}>
                <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="#">Email</label>
              </div>
              <section>
                <div className={style.inputData}>
                  <input type="password" required value={senha} onChange={(e) => setSenha(e.target.value)} />
                  <label htmlFor="#">Senha</label>
                </div>
              </section>
              <div className={style.inputData}>
                <input type="text" placeholder='NickName' value={nickname} onChange={(e) => setNickname(e.target.value)} />
                <label htmlFor="#"></label>
              </div>
              <div className={style.divButton}>
                <button className={style.buttonStyle} onClick={handleRegister}><span>Register</span></button>
                <button className={style.buttonStyle} onClick={handleLogin}><span>Login</span></button>
              </div>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              {message && <p style={{ color: 'green' }}>{message}</p>}
            </form>
          }
        </div>
      </UserProvider>
    </>
  );
}

export default App;
