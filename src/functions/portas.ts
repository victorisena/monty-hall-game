import PortaModel from "../model/porta";

export function criarPortas(quantidade: number, portaComPresente: number): PortaModel[] {
    return Array.from({ length: quantidade }, (_, i) => {
        const numero = i + 1
        const presente = numero === portaComPresente

        return new PortaModel(numero, presente)
    })
}

export function atualizarPortas(portas : PortaModel[], portaModificada : PortaModel) : PortaModel[]{
    return portas.map(portaAtual => {
        const igualModificada = portaAtual.numero === portaModificada.numero

        if(igualModificada){
            return portaModificada
        }else{
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar()
        }
    })    
}