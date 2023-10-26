import YouTubeVideo from "./YouTubeVideo";

export default function Modal({ onClose }) {
  return (
    <div className="modal fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay bg-black opacity-80 inset-0 fixed"></div>
      <div className="modal-content h-1/2 bg-white md:w-1/2 p-8 drop-shadow-md ">
        <div>MODAL</div>
        <YouTubeVideo />
        <button className="bg-red-500 px-3 text-white mt-2" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
