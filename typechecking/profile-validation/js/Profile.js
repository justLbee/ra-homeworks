'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  // console.log(props);
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  img: './images/profile.jpg'
};

Profile.propTypes = {
  url: (props, propName, componentName) => {
    const regUrl = /https\:\/\/vk.com\/id([0-9]+|[A-Za-z0-9_-])+/;

    if (!regUrl.test(props[propName])) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'https://vk.com/id123'. Validation failed.`);
    }
  },
  birthday: (props, propName, componentName) => {
    if(!dateCheck(props[propName])) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'YYYY-MM-DD'. Validation failed.`);
    }
  }
};

function dateCheck(date) {
  if(!date || date.split('-').length !== 3 ) {
    return date;
  }

  const dateArr = date.split('-');

  if(dateArr[0].length !== 4 && dateArr[1].length !== 2 && dateArr[2].length !== 2) {
    return false;
  }

  if(new Date(date) == 'Invalid Date' || new Date(date) > new Date()) {
    return false;
  }

  return date;
}
