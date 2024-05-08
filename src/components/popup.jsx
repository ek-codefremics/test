function Popup({ result, onClose }) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4'>
      <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
        <h2 className='text-2xl font-bold mb-2'>Scan Result</h2>
        <p className='mb-4'>Detected barcode: {result}</p>
        <button
          onClick={onClose}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Popup
