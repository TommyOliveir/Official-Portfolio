import YouTubeVideo from "./YouTubeVideo";

export default function Modal({ onClose }) {
  return (
    <div className="modal fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-conten h-1/2 bg-white w-1/2 p-8 drop-shadow-md">
        <div>I'm a modal dialog</div>
        <YouTubeVideo />
        <button className="bg-red-500 px-3 text-white mt-2" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
