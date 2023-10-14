
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Home() {

    return(
        <div className = 'general'>
         <h1 style={{color: "white"}}>Jokes on you, there's nothing here</h1>
         <table>
            <tr>
                <td>
                    <h2 style={{color: "white"}}>Go here:</h2>
                </td>
                <td>
                    <a style={{color: "cyan"}} href="http://devinborchard.com/newmarket" > <h2>Newmarket Career Fair  </h2></a> 
                </td>
            </tr>
         </table>
         
         
         
        </div>
        
    )

    
}

export default Home