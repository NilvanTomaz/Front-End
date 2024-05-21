import { Link } from "react-router-dom"


export default function Cabecalho(){
    return(
        <nav>
            <div>
            <Link to='/'> <h1>Doracorde</h1> </Link>
            </div>
        </nav>
    )
}