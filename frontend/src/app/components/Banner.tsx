import React from "react";

interface BannerProps {
  title: string;
  name: string;
  image?: string;
  description: string;
  extra?: string;
  button: {
    text: string;
    style: string;
    callback: () => void;
  };
}

function Banner(props: BannerProps) {
  return (
    <div className="w-full bg-cs-white rounded border border-cs-border-fade">
      <h1 className="rounded-t bg-cs-accent text-cs-white px-4 py-2">✨ {props.title}</h1>
      <div className="px-4 py-3 space-y-1">
        {/* image */}
        {props.image && (
          <div className="w-full overflow-hidden rounded bg-gray-300 aspect-video ">
            <img src={props.image} alt={props.name} className="object-cover w-full object-center" />
          </div>
        )}
        {/* name */}
        <h2>{props.name}</h2>
        {/* description */}
        <p className="text-cs-fade1 text-sm">{props.description}</p>
        {/* extra */}
        {props.extra && <p className="text-cs-fade1 text-sm !my-2">{props.extra}</p>}
        {/* button */}
        <div className="w-full block text-center">
          <button
            className={props.button.style + " w-full py-1.5"}
            onClick={() => props.button.callback()}
          >
            {props.button.text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
