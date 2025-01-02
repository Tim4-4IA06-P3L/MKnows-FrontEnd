import React, { FC } from "react";

const Modal: FC<{ error: boolean; onClick: (e: Event) => void }> = ({
  error = false,
  onClick,
}) => {
  if (!error) {
    return (
      <div className="fixed w-full h-full bg-neutral-500/[0.5] top-0 left-0 flex justify-center items-center z-[500]">
        <div className="p-6 flex flex-col gap-5 justify-center items-center bg-neutral-100 shadow-lg text-center rounded-md">
          <p>Pengiriman form berhasil</p>
          <button
            type="button"
            onClick={() => onClick}
            className="rounded-md bg-green-600 hover:bg-green-700 text-white
						active:ring-1 active:ring-offset-1 active:ring-black px-8 py-2"
          >
            OK
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fixed w-full h-full bg-neutral-500/[0.5] top-0 left-0 flex justify-center items-center z-[500]">
        <div className="p-6 flex flex-col gap-5 justify-center items-center bg-neutral-100 shadow-lg text-center rounded-md">
          <p>Pengiriman form gagal</p>
          <button
            type="button"
            onClick={() => onClick}
            className="rounded-md bg-white hover:bg-neutral-100 text-black border-2 border-black
						active:ring-1 active:ring-offset-1 active:ring-black px-8 py-2"
          >
            Coba lagi
          </button>
        </div>
      </div>
    );
  }
};

export default Modal;
