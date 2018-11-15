'use strict';

function AuthForm(props) {
  if (!props.onAuth || !isFunction(props.onAuth)) {
    return;
  }
  const cancelAction = e => {
    e.preventDefault();

    const userData = {
      name: nameField.value,
      email: emailField.value,
      password: passworField.value
    };

    props.onAuth(userData);
  };

  function cancelSubmit(event) {
    if(event.keyCode == 13) {
      event.preventDefault();
    }
  }

  function regEmail(event) {
    const regForEmail = /[^@.-\w]/g;

    return event.currentTarget.value = event.currentTarget.value.replace(regForEmail, '');
  }

  function regPassword(event) {
    const regForPass = /\W/g;

    return event.currentTarget.value = event.currentTarget.value.replace(regForPass, '');
  }

  let nameField, emailField, passworField;
  return (
    <form className="ModalForm" action="/404/auth/" method="POST" onKeyDown={cancelSubmit}>
      <div className="Input">
        <input ref={element => nameField = element} required type="text" placeholder="Имя"/>
        <label></label>
      </div>
      <div className="Input">
        <input ref={element => emailField = element} type="email" placeholder="Электронная почта"
               onChange={regEmail}/>
        <label></label>
      </div>
      <div className="Input">
        <input ref={element => passworField = element} required type="password" placeholder="Пароль"
               onChange={regPassword}/>
        <label></label>
      </div>
      <button type="submit" onClick={cancelAction}>
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  )
}

function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}