const {comments} = require('../assets/comments')
function CareerFair() {

    console.log('COMENTS: ', comments)

    const studentComments = comments.map((comment) => {
        return (
            <tr>
            <td>
            <p style={{color: "white"}}>{comment}</p>
            </td>    
            </tr>
        )
    })


    return(
        <div className = 'general'>
         <h1 style={{color: "white"}}>Newmarket Career Fair</h1>
         <h2 style={{color: "white"}}>Comments from your student body</h2>
         <table>
            {studentComments}
         </table>
        </div>
        
    )

    
}

export default CareerFair