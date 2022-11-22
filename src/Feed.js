import image from './image.jpeg'

function Feed(){
    return(
        <div>
            <img src={image} alt='post' width='300px'></img>
        </div>
    )
}

export default Feed;