export interface Image{
    src: string;
    height: number;
    width: number;
    blurDataURL: string; 
    blurWidth: number;
    blurHeight: number; 
}

export type ImagemSelecionada = {
    id: number;
    img: Image;
}