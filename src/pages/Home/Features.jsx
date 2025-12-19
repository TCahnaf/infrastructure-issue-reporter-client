import React from 'react';
import nycImg from '../../../public/images/new-york.png'

const Features = () => {
    return (
        
    <div className="bg-gray-800 text-white max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 hover:shadow-2xl hover:bg-black transition-all duration-500 ease-in-out">
      <div className="md:flex items-center">
        <div className="p-8 flex-1">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Why are we relevant ?
          </div>
          <p className="block mt-1 text-lg leading-tight font-medium text-white">
            We work to make sure NYC is always the best !
          </p>
          <p className="mt-2 text-gray-400">
            Our platform allows users to report issues as soon as they notice them ! we want to grab the attention of the city officals and make sure the city is always efficient and safe !
          </p>
        </div>

        <div className="flex items-center p-8">
          {/* Replaced style="margin-right: 20px" with mr-5 */}
          <button className="flex items-center gap-2 mr-5 text-red-500 hover:text-red-400 transition-colors">
            <img className='h-12 w-12' src= {nycImg} alt="" />
              <path d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.633-8.018-4.129-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.772.098-1.52.266-2.241C2.752 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.469.268 2.241" />
          
            <span className="font-bold">Let's Go NYC</span>
          </button>
        </div>
      </div>
    </div>


    );
};

export default Features;