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
      <div className="px-4 py-3">
        {/* image */}
        {props.image && (
          <div className="w-full overflow-hidden rounded bg-gray-300 aspect-video my-2">
            <img
              width="100%"
              height="100%"
              src={props.image}
              alt={props.name}
              className="object-cover w-full object-center"
            />
          </div>
        )}
        {/* name */}
        <h2 className="font-bold text-cs-fade1">{props.name}</h2>
        {/* description */}
        <p className="text-cs-fade1 text-sm">{props.description}</p>
        {/* extra */}
        {props.extra && <p className="text-cs-fade1 text-sm !my-1">{props.extra}</p>}
        {/* button */}
        <div className="w-full block text-center">
          <button
            className={props.button.style + " w-full py-1.5 text-sm font-medium !my-2"}
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
