import Apple from './Apple.jsx';
function Form()
{
    let name="Shifa"
    return(
        <>
          <div>
            <p><center>Form belongs to <b>{name}</b></center></p>
            <Apple/>
            <center><button>Click Me</button></center>
          </div>    
        </>                                                                                              
    )
}
export default Form


