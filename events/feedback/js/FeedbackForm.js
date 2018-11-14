'use strict';

ReactDOM.render(
  <FeedbackForm data={form} />,
  document.getElementById('root')
);

const form = {
  salutation: '',
  name: '',
  subject: '',
  message: '',
  email: '',
  snacks: []
};

function FeedbackForm({data}) {
  const SaveForm = (event) => {
    event.preventDefault();

    data.salutation = salutation.querySelector('input[type=radio]:checked').value;
    data.name = nameField.value;
    data.email = emailField.value;
    data.subject = subjectField.value;
    data.message = messageField.value;


    if(snacksField.querySelectorAll('input[type=checkbox]:checked')) {
      data.snacks.shift();
    }

    Array.from(snacksField.querySelectorAll('input[type=checkbox]:checked')).forEach(snack => {
      data.snacks.push(snack.value);
    });

    console.log(JSON.stringify(data));
  };

  let salutation, nameField, emailField, subjectField, messageField, snacksField;
  return (
    <form className="content__form contact-form">
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <div className="contact-form__input-group" ref={element => salutation = element}>
        <input className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation"
               type="radio" value="Мистер"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
        <input className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation"
               type="radio" value="Мисис"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
        <input className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation"
               type="radio" value="Мис"/>
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name">Имя</label>
        <input ref={element => nameField = element}
          className="contact-form__input contact-form__input--text" id="name" name="name" type="text"/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input ref={element => emailField = element}
          className="contact-form__input contact-form__input--email" id="email" name="email" type="email"/>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select ref={element => subjectField = element}
          className="contact-form__input contact-form__input--select" id="subject" name="subject">
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
      <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea ref={element => messageField = element}
          className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6"
                  cols="65"></textarea>
      </div>
      <div ref={element => snacksField = element} className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks"
               type="checkbox" value="пицца"/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
        <input className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks"
               type="checkbox" value="пирог"/>
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
      </div>
      <button className="contact-form__button" type="submit" onClick={SaveForm}>Отправить сообщение!</button>
      <output id="result"/>
    </form>
  )
}