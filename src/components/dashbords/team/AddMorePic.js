import React, { useEffect, useState } from 'react'
import { Button, Card, Table } from 'reactstrap'
import TeamLayout from '../../../Layout/Team/TeamLayout'
import { ImCross } from 'react-icons/im';
import "./AddMorePic.css"
import { useDispatch, useSelector } from 'react-redux';
import { addMorePicApi, getMorePicApi } from '../../../store/team/TeamSlice';
import { ToastContainer } from 'react-toastify';

const AddMorePic = () => {
const dispatch= useDispatch()
const [Images, setImages] = useState(null);
const {getMore} = useSelector((state) => state.team);
    console.log("GET MORE",getMore);

    useEffect(() => {
    dispatch(getMorePicApi());
    }, []);






    const AddMoreHandle = (e) => {
      e.preventDefault();
      const formData = new FormData();
      // formData.append("more_photos", e.target.profile_pic.files[0]);
      formData.append("more_photos", e.target.more_photos.files[0]);
      dispatch(addMorePicApi(formData));
     

    };


  return (
    <TeamLayout>
        <Card className='add-more-pic-card'>
        <ToastContainer />

            <div className='heading-add-more-pic'>
                <h5 style={{fontSize:"15px"}}>ADD MORE PICTURE</h5>
                <div>
                <form onSubmit={AddMoreHandle}>

                <input type="file" name='more_photos' onChange={(e)=>setImages(e.target.files[0])} />
                <Button type='submit' className='add-more-pic-btn'>+ADD</Button>
                </form>
                </div>
            </div>
                <hr style={{width:"100%", margin:"8Spx"}} />
            <div>
            <Table
  responsive
  size=""
>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
    List
      </th>
      
      <th>
      Action
      </th>
    </tr>
  </thead>
  <tbody>
  { getMore?.map((item,key)=>{
    return (
        <tr>
      <th scope="row">
        {key+1}
      </th>
      <td>
        <img className='list-pic' src={item?.more_photos} alt="" />
        
      </td>
      <td>
        <ImCross color='red' />
      </td>
      
    </tr>

    )
  })}
    
   
   
  </tbody>
</Table>
            </div>


        </Card>
    </TeamLayout>
  )
}

export default AddMorePic