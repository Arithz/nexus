import React from "react";

interface BannerProps {
  title: string;
  name: string;
  image?: string;
  description: string;
  extra?: string;
  button: () => JSX.Element;
  buttonstyle?: string;
}

function Banner(props: BannerProps) {
  return (
    <div className="w-full bg-cs-white rounded-b">
      <h1 className="rounded-t bg-cs-accent text-cs-white px-4 py-2">✨ {props.title}</h1>
      <div className="px-4 py-2 space-y-1">
        {props.image && <img src={props.image} alt={props.name} className="aspect-video rounded" />}
        <h2>{props.name}</h2>
        <p className="text-cs-fade1 text-sm">{props.description}</p>
        {props.extra && <p className="text-cs-fade1 text-sm mb-4">{props.extra}</p>}
        <p className={props.buttonstyle + " text-center py-1.5"}>{props.button()}</p>
      </div>
    </div>
  );
}

export default Banner;
