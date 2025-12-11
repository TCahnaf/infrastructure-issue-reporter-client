import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const {createUser} = useAuth();

    const handleRegistration = (data) => {
        createUser(data.email, data.password)

    }



    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <div className="hero min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign up!</h1>
      <p className="py-6">
       Let's make New York City great like it should be !!! Your city, your way 
      </p>
    </div>
    <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">

             <label className="label">Your Name</label>
          <input type="text" {...register('name', {required:true})} className="input" placeholder="name" />
          {errors.name?.type === 'required' && <p className='text-red-500'>Add your name</p>}

            <label className="label">Upload Your Photo</label>
          <input type="file" {...register('photo', {required:true})} className="file-input" placeholder="name" />
          {errors.photo?.type === 'required' && <p className='text-red-500'>Add your photo</p>}

          


          <label className="label">Email</label>
          <input type="email" {...register('email', {required:true})} className="input" placeholder="Email" />
          {errors.email?.type === 'required' && <p className='text-red-500'>Add your email</p>}

          <label className="label">Password</label>
          <input type="password" {...register('password', {required:true, minLength:6, pattern:/^(?=.*[a-z])(?=.*[A-Z]).+$/})} className="input" placeholder="Password" />
             {errors.password?.type === 'required' && <p className='text-red-500'>Add a password</p>}
             {errors.password?.type === 'minLength' && <p className='text-red-500'>password must be at least 6 characters</p>}
            {errors.password?.type === 'pattern' && <p className='text-red-500'>password must be contain at least one lowercase and one uppercase letter</p>}


          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>


    

            </form>
            
        </div>
    );
};

export default Register;