const Post = ({params}:any) => {
    return (
        <div>
            <h1>Post {params.postId}</h1>
        </div>
    );
};

export default Post;