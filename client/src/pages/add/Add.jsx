import React from 'react'
import './add.scss'

const Add = () => {
  return (
    <div className='add'>
        <div className="container">
            <h1>Add New Gig</h1>
            <div className="sections">
                <div className="left">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder='e.g. I will do something I am really good at' />
                    <label htmlFor="">Category</label>
                    <select name="cats" id="cats">
                        <option value="design">design</option>
                        <option value="design">design</option>
                        <option value="design">design</option>
                        <option value="design">design</option>
                    </select>
                    <label htmlFor="">Cover Image</label>
                    <input type="file" />
                    <label htmlFor="">Upload Images</label>
                    <input type="file" multiple />
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" cols="30" rows="16" placeholder='Brief description to introduce your services to customer'></textarea>
                    <button>Create</button>
                </div>
                <div className="right">
                    <label htmlFor="">Service Title</label>
                    <input type="text" name="" id="" placeholder='e.g. one-page web design'/>
                    <label htmlFor="">Short Descriptions</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Short description of your service'></textarea>
                    <label htmlFor="">Delivry Time</label>
                    <input type="number" min={1} />
                    <label htmlFor="">Revision Number</label>
                    <input type="number" min={1} name="" id="" />
                    <label htmlFor="">Add Features</label>
                    <input type="text" placeholder='e.g. page design' />
                    <input type="text" placeholder='e.g. file uploading' />
                    <input type="text" placeholder='e.g. setting up a domain' />
                    <input type="text" placeholder='e.g. hosting' />
                    <label htmlFor="">Price</label>
                    <input type="number" min={1} name="" id="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add