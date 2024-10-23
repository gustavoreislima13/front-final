import Menu from "../Menu/menu";

export default function Cabecalho(){
    return(
        <header className="bg-blue-500 h-40 flex flex-col items-center justify-center py-4">
            <div>
                <h1 className="text-black text-3xl font-bold mb-4">Words in Collision - Immanuel Velikovsky</h1>
            </div>
            <div><Menu/></div>
        </header> 
    )
};
