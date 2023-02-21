class InProductManager {
    constructor() {
        this.elementos = []
    }

    guardar(elemento) {
        this.elementos.push(elemento)
        return elemento
    }
    
    recuperarTodoSegunCriterio({campo, valor}){
        if (!campo){
            return this.elementos
    }   else {
        return this.elementos.filter(e => {
            return e[campo] === valor
        })
    }
    }
}

export const inProductManager = new InProductManager()