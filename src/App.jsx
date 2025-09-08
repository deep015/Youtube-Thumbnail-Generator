import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import 'animate.css'
import getYouTubeID from 'get-youtube-id'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const [url, setUrl] = useState('')
  const [thumbnail, setThumbnail] = useState([])

  const urlModel = [
    { width: 120, height: 90, url: 'https://img.youtube.com/vi', filename: 'default.jpg' },
    { width: 320, height: 180, url: 'https://img.youtube.com/vi', filename: 'mqdefault.jpg' },
    { width: 480, height: 360, url: 'https://img.youtube.com/vi', filename: 'hqdefault.jpg' },
    { width: 640, height: 480, url: 'https://img.youtube.com/vi', filename: 'sddefault.jpg' },
    { width: 1280, height: 720, url: 'https://img.youtube.com/vi', filename: 'maxresdefault.jpg' },
  ]

  const fetchThumbnail = (e) => {
    e.preventDefault()
    const videoId = getYouTubeID(url)
    if (videoId) {
      const model = urlModel.map((item) => ({
        ...item,
        url: `${item.url}/${videoId}/${item.filename}`
      }))
      setThumbnail(model)
    } else {
      toast.error('Invalid Video URL', { position: 'top-center' })
    }
  }

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url)
    toast.success('Thumbnail URL copied!', { position: 'top-center' })
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 py-12 px-4'>
      {/* Header */}
      <div className='text-center mb-12'>
        <h1 className='text-5xl font-extrabold text-gray-800 mb-4 animate__animated animate__fadeInDown'>
          YouTube Thumbnail Generator
        </h1>
        <p className='text-gray-600 text-lg'>
          Paste a YouTube video URL and get all thumbnail sizes instantly!
        </p>

        {/* Form */}
        <form
          onSubmit={fetchThumbnail}
          className='mt-6 flex flex-col sm:flex-row justify-center items-center gap-4'
        >
          <input
            type='url'
            placeholder='Enter YouTube Video URL'
            className='w-full sm:w-96 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition'>
            <i className='ri-search-line text-lg'></i> Generate
          </button>
        </form>
      </div>

      {/* Thumbnail Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto'>
        {thumbnail.map((item, index) => (
          <div
            key={index}
            className='relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out group animate__animated animate__fadeInUp'
            style={{ animationDelay: `${index * 0.1}s` }} // staggered animation
          >
            {/* Thumbnail Image */}
            <img
              src={item.url}
              alt={`${item.width}x${item.height}`}
              className='w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'
            />

            {/* Gradient Overlay on Hover */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

            {/* Content */}
            <div className='absolute bottom-0 w-full p-4 backdrop-blur-sm bg-white/40 rounded-t-xl'>
              <h3 className='text-gray-800 font-bold text-lg'>
                {item.width} x {item.height}
              </h3>
              <div className='flex gap-2 mt-3'>
                <a href={item.url} target='_blank' rel='noreferrer'>
                  <button className='flex-1 py-2 px-4 bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-lg font-medium flex justify-center items-center gap-2 transition'>
                    <i className='ri-download-2-line'></i> Download
                  </button>
                </a>
                <button
                  onClick={() => copyToClipboard(item.url)}
                  className='flex-1 py-2 px-4 bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-white rounded-lg font-medium flex justify-center items-center gap-2 transition'
                >
                  <i className='ri-file-copy-line'></i> Copy URL
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  )
}

export default App
