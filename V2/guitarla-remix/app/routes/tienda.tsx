import { getGuitars } from "~/models/guitars.server";

export async function loader(){
    const guitars = await getGuitars();
    console.log(guitars);
    return {};
}

function Tienda(){
    return(
        <div>Tienda</div>
    )
}

export default Tienda