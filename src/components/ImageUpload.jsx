const ImageUpload = () => {
  return (
    <div className='bg-white shadow-lg rounded-2xl p-2 w-full max-w-2xl'>
      <label htmlFor="fileInput" className='w-full block cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500'>
        <input type="file" name="" id="fileInput" className='hidden' />
        <span className='text-lg font-medium text-gray-600'>
          Click and drag to upload your image
        </span>
      </label>
    </div>
  )
}

export default ImageUpload