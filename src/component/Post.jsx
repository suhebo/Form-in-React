function Post (props){
    return <div className="flex justify-center ">
        <div className="border-2 border-gray-200 mt-4 px-3 pt-5 rounded ">
    <img className="w-[400px]" src={props.image}/>
    <p> {props.title} </p>
        </div>
    </div>
}

export default Post