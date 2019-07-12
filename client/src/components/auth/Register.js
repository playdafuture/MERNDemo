import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confpassword: ''
  });

  const { name, email, password, confpassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confpassword) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign up</h1>
      <p className='lead'>
        <i className='fas fa-user'>Create your account</i>
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
            required
          />
          <small className='form-text'>
            Your full name (you can change this later)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
          <small className='form-text'>
            This site uses Gravatar, use your Gravatar email if you wish to link
            your avatar
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            required
          />
          <small className='form-text'>6 or more characters</small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            minLength='6'
            name='confpassword'
            value={confpassword}
            onChange={e => onChange(e)}
            required
          />
          <small className='form-text'>Enter your password again</small>
        </div>
        <input type='submit' value='Register' className='btn btn-primary' />
      </form>
      <div className='p my-1 text-white'>
        Already have an account?
        <Link to='/login' className='btn btn-small btn-light'>
          Login
        </Link>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert, register }
)(Register);
