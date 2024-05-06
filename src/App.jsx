import { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";

function App() {
  const [dataUri, setDataUri] = useState(null);
  const [startCamera, setStartCamera] = useState(false);

  const handleTakePhotoAnimationDone = (dataUri) => {
    setDataUri(dataUri);
  };

  const handleToggleCamera = () => {
    if (dataUri === null) {
      setDataUri("");
      setStartCamera(true);
    } else {
      setDataUri(null);
      setStartCamera(false);
    }
  };

  function handleTakePhoto(dataUri) {
    console.log("Photo Data URI:", dataUri);
  }

  function handleCameraError(error) {
    // console.log('handleCameraError', error);
  }

  function handleCameraStart(stream) {
    // console.log('handleCameraStart');
  }

  function handleCameraStop() {
    // console.log('handleCameraStop');
  }

  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12">
                      <div className="box">
                        <div className="box-header">
                        </div>
                       
                            <div className="grid grid-cols-12 gap-x-6">
                              <div className="col-span-12">
                                <div className="box !bg-transparent border-0 shadow-none">
                                  <div className="box-footer text-center border-t-0 px-0">
                                    <button
                                      type="button"
                                      onClick={handleToggleCamera}
                                      className="ti-btn ti-btn-primary ti-custom-validate-btn"
                                    >
                                      {dataUri === null
                                        ? "Open Camera"
                                        : "Close Camera"}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {startCamera && (
                              <Camera
                                onTakePhoto={(dataUri) => {
                                  handleTakePhoto(dataUri);
                                }}
                                onTakePhotoAnimationDone={(dataUri) => {
                                  handleTakePhotoAnimationDone(dataUri);
                                }}
                                onCameraError={(error) => {
                                  handleCameraError(error);
                                }}
                                idealFacingMode={FACING_MODES.ENVIRONMENT}
                                idealResolution={{ width: 640, height: 480 }}
                                imageType={IMAGE_TYPES.JPG}
                                imageCompression={0.97}
                                isMaxResolution={true}
                                isImageMirror={false}
                                isSilentMode={false}
                                isDisplayStartCameraError={true}
                                isFullscreen={false}
                                sizeFactor={1}
                                onCameraStart={(stream) => {
                                  handleCameraStart(stream);
                                }}
                                onCameraStop={() => {
                                  handleCameraStop();
                                }}
                              />
                            )}
                          </div>
                    </div>
                  </div>
                  <span className="absolute -right-2 top-20 border-4 border-black h-10 rounded-md"></span>
                  <span className="absolute -right-2 top-44 border-4 border-black h-24 rounded-md"></span>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
