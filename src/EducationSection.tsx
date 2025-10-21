import ReactModal from "react-modal";
import { useState } from "react";

ReactModal.setAppElement("#root");

export const EducationSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h3 className="text-xl font-semibold">WeStride Institute of Technology</h3>
      <p className="text-gray-700">Full-Stack Development (course)</p>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
      >
        View Certificate
      </button>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="bg-white p-6 rounded-xl max-w-2xl mx-auto mt-20 outline-none"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <img
          src="/westride-certificate.jpg"
          alt="Certificate"
          className="rounded-lg w-full object-contain"
        />
      </ReactModal>
    </div>
  );
};
