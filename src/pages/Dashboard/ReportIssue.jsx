import React from 'react';

const ReportIssue = () => {
    return (
        <div>

            <div className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-[600px] ">
  <legend className="fieldset-legend">Fill out the form </legend>

  
<div className='grid grid-cols-2 gap-5 '>

    <div> <label className="label">Title</label>
  <input type="text" className="input" placeholder="My awesome page" /></div>
    <div> <label className="label">Slug</label>
  <input type="text" className="input" placeholder="my-awesome-page" /></div>
    <div>
  <label className="label">Author</label>
  <input type="text" className="input" placeholder="Name" />
</div>
 <div>
  <label className="label">Author</label>
  <input type="text" className="input" placeholder="Name" />
</div>

 <div>
  <label className="label">Upload a photo of the issue</label>
  <input type="file" className="file-input" placeholder="Name" />
</div>

 <div>
  <label className="label">Author</label>
  <input type="text" className="input" placeholder="Name" />
</div>



</div>

 

 

</div>
            
        </div>
    );
};

export default ReportIssue;