import {useState, useRef} from "react"
import Post from "./Post"
function Form (){

    const [title , setTitle]= useState(" ")
    const [image , setImage] = useState(null)
    const [post ,setPost] = useState([])
    const imageRef = useRef ()
    const handlePost = (e) => {
        e.preventDefault()
        const newPost = {title , image}

        if(title != " " && image != " "){
            setPost([...post, newPost])
            setTitle(" ")
            imageRef.current.value = null
            setIsOpen(false)
            handleIsClose()
        }
    }


const [isOpen , setIsOpen] = useState(false)


const handleIsOpen = () => {
    document.body.style.background = "#DED0B9"
    // document.body.style.opacity = "0.9"
    setIsOpen(true)

}
const handleIsClose = () => {
    setIsOpen(false)
}




return <div>
   
    <button onClick={handleIsOpen} className=" fixed w-[60px] h-[60px] rounded-full pb-4 bg-gray-500 text-5xl text-white  right-4 bottom-4 ">+</button>


<div style={{ display:isOpen === true ? "block" : "none" }} className="mt-10 ml-5 w-[350px]  bg-gray-400 p-4 sm:mx-[30%] rounded-xl fixed hiddden">

<i onClick={handleIsClose} class="fa-solid fa-xmark sm:ml-[300px] ml-[280px]  mx-[30%] text-3xl"></i>

<form >

    <input value={title}
    onChange={(event) => {
        setTitle(event.target.value)
    } } 

    className="h-[50px] w-[290px] " type="text" placeholder="Enter Title"></input>
    
  

    <input ref={imageRef}  type="file"
   
    onChange={ (e) => {
        setImage(e.target.files[0])
    } }
    
    className="mt-5  file:bg-black file:text-white file:border-0 file:p-3 file:rounded-xl" ></input>
<br />
<button onClick={handlePost} className="bg-white px-6 text-2xl py-2  hover:bg-gray-300 mt-5 rounded-xl"> Post </button>

</form>

</div>



{ post.map( (item) => {
    return isOpen === true ? "" :  <Post        
    title = {item.title}
    image={URL.createObjectURL(item.image)} />
    
} ) }


    </div>

}
export default Form