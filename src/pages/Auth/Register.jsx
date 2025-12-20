import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const Register = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const {createUser, updateUser, googleSignIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleRegistration = (data) => {
        const img = data.photo[0]
        createUser(data.email, data.password).then(res => {
            console.log(res)
            const formData = new FormData();
            formData.append('image',img)
            axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`, formData).then( res => {
                const profileInfo = {
                    displayName: data.name,
                    photoURL: res.data.data.url
                    
                }

                updateUser(profileInfo).then().catch(error => console.log(error))
               

                const userPhoto = res.data.data.url
                const userInfo = {
                    name:data.name,
                    email:data.email,
                    photo:userPhoto
                }

                axiosSecure.post('/users', userInfo).then( res => {
                    if(res.data.insertedId){
                         navigate(location.state?.from && location.state?.from !== '/login' 
                                ? location.state.from 
                                : '/', { replace: true });

                    }
                
                })


            })
                
     } ).catch( error => {
        console.log(error)
     })
     } 

      const handleGoogleSignIn = () => {
        googleSignIn().then(()=> navigate(location.state?.from || '/', { replace: true })).catch(error => {
            console.log(error)
        })
    
        }

    

    



    return (
        
        <div>
           
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
         <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset space-y-1">

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


    

          <div>
            <Link to = "/login" state={location.state} className='hover:bg-sky-500 btn'>
              Already a user, click here to login 

            </Link>
          </div>
        

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        </form>
         <div className = "flex justify-center"> <button onClick={handleGoogleSignIn} className="btn w-[300px] mx-auto bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button></div>
      </div>
    </div>
  </div>
  
</div>
            
           
         
          
        </div>
    );
};

export default Register;


