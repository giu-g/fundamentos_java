function SearchBar() {
    const valor = document.querySelector('#search').value;

    if (valor == "objeto" || valor == "Objeto" || valor == "objetos" || valor == "Objetos") {
        window.location.href = "objeto.html#objeto";
    }
    else if (valor == "instanciar um objeto" || valor == "Instanciar um objeto") {
        window.location.href = "objeto.html#instanciar";
    }
    else if (valor == "classe" || valor == "Classe" || valor == "classes" || valor == "Classes") {
        window.location.href = "classes.html#classe";
    }
    else if (valor == "classe interna" || valor == "Classe Interna") {
        window.location.href = "classes.html#classeinterna";
    }
    else if (valor == "classe abstrata" || valor == "Classe Abstrata") {
        window.location.href = "classes.html#classeabstrata";
    }
    else if (valor == "classe anonima" || valor == "Classe Anonima") {
        window.location.href = "classes.html#classeanonima";
    }
    else if (valor == "atributos" || valor == "Atributos") {
        window.location.href = "atributos.html#atributo";
    }
    else if (valor == "metodo" || valor == "Metodo") {
        window.location.href = "metodos.html#metodo";
    }
    else if (valor == "modificadores de acesso" || valor == "Modificadores de Acesso") {
        window.location.href = "metodos.html#modificador";
    }
    else if (valor == "pacote" || valor == "Pacote") {
        window.location.href = "pacotes.html#pacote";
    }
    else if (valor == "implementar classes em pacotes" || valor == "Implementar Classes em Pacotes") {
        window.location.href = "pacotes.html#implementar";
    }
    else if (valor == "interface" || valor == "Interface") {
        window.location.href = "interface.html#interface";
    }
    else if (valor == "enumeração" || valor == "Enumeração") {
        window.location.href = "enumeracao.html#enumeracao";
    }
    else if (valor == "serialização" || valor == "Serialização") {
        window.location.href = "serializacao.html#serializacao";
    }
    else if (valor == "relacionamento" || valor == "Relacionamento") {
        window.location.href = "relacionamentos.html#relacionamento";
    }
    else {
        alert("Pesquisa inválida!");
    }
}