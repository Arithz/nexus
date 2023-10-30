import React from "react";

const User = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-xs text-cs-white bg-cs-accent rounded-[50%] w-6 leading-6 text-center">
        A
      </div>
      <div className="text-sm flex gap-2 text-cs-fade2">
        <p>Ammar Adnan</p>•<p>1h ago</p>
      </div>
    </div>
  );
};

const PostDetails = () => {
  return (
    <div className="py-2">
      <h1 className="text-cs-black font-bold text-lg">API Key in Github</h1>
      <div className="flex flex-col gap-2 text-cs-fade2 text-sm mt-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate, quibusdam,
          officia, doloremque voluptatum quia deserunt molestiae rem quos dolorum voluptatibus eius.
          Quisquam voluptate, quibusdam, officia, doloremque voluptatum quia deserunt molestiae rem
          quos dolorum voluptatibus eius.
        </p>
      </div>
    </div>
  );
};

const PostActions = () => {
  return (
    <div className="flex gap-4">
      <button aria-label="1" className="flex items-center gap-2 text-cs-fade2">
        <i className="fa-solid fa-arrow-up text-cs-fade2" aria-hidden="true" />
        <p>1</p>
      </button>
      <button aria-label="1" className="flex items-center gap-2 text-cs-fade2">
        <i className="fa-solid fa-comment text-cs-fade2" aria-hidden="true" />
        <p>1</p>
      </button>
      <button aria-label="options" className="flex items-center gap-2 text-cs-fade2">
        <i className="fa-solid fa-ellipsis-h text-cs-fade2" aria-hidden="true" />
      </button>
    </div>
  );
};

function Post() {
  return (
    <div className="bg-white px-6 py-3 mb-4 border border-cs-border-fade rounded">
      <User />
      <PostDetails />
      <PostActions />
    </div>
  );
}

export default Post;
