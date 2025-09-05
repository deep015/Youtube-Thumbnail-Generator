
import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import 'animate.css'
import getYouTubeID from 'get-youtube-id'
import { toast, ToastContainer } from 'react-toastify'
const App = () => {

  const [url,setUrl] =useState('')
 const [thumbnail,setThumbnail] = useState([])  

  const urlModel =[
    {
      width:120,
      height:90,
      url:'https://img.youtube.com/vi',
      filename:'default.jpg'

    },
    {
      width:320,
      height:180,
      url:'https://img.youtube.com/vi',
      filename:'mqdefault.jpg'

    },
    {
      width:480,
      height:360,
      url:'https://img.youtube.com/vi',
      filename:'hqdefault.jpg'

    },
    {
      width:640,
      height:480,
      url:'https://img.youtube.com/vi',
      filename:'sddefault.jpg'

    },
    {
      width:1280,
      height:720,
      url:'https://img.youtube.com/vi',
      filename:'maxresdefault.jpg'

    },
  ]

  const fetchThumbnail = (e) => {
    e.preventDefault()
    const videoId = getYouTubeID(url)
    console.log(videoId)
    if(videoId) {
      const model = urlModel.map((item) => {
        return {
          ...item,
          url:`${item.url}/${videoId}/${item.filename}`,
          width:item.width,
          height:item.height
        }
       
      })
       setThumbnail(model)
    }else {
        toast.error('Invalid Video URL')
    }

  }
  return (
    <div className='min-h-screen bg-gray-200 py-8 '>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>YouTube Thumbnail generator</h1>
        <form action="" className='space-x-4 mt-8' onSubmit={fetchThumbnail}>
          <input type="url"  
          className='bg-white p-3 rounded-lg'
          required placeholder='Enter Youtube Video URL'
          onChange={(e)=>setUrl(e.target.value)}/>
          <button className='bg-blue-500 text-white p-3 rounded-lg'>
            <i className='ri-search-line mr-1'></i>Search
            </button>
        </form>
      </div>
      <div className='grid-cols-3  w-10/12 mx-auto grid gap-10 mt-12'>
      {
        thumbnail.map((item,index) => (
          <div className='bg-white rounded-lg ' key={index}>
            <img src={item.url} alt="" className='w-full h-[250px] object-cover rounded-t-lg'/>
            <div className='p-3 bg-white'>
              <h3 className='text-sm font-bold'>{item.width}x{item.height}</h3>
              <a href={item.url} target='_blank'>
                 <button className='mt-2 py-2 px-4 rounded-lg bg-green-500 text-white font-medium'>
              <i className='ri-download-2-line mr-1'></i>Download
              </button>
              </a>
             
              </div>
        </div>
        ))
      }
        
      </div>
      <ToastContainer />
    </div>
  )
}

export default App