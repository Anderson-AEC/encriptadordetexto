// Esta função faz algo quando apertamos um botão
function executarAcao(tipo) {
    // Pega o que a pessoa escreveu e transforma tudo em letras pequenas
    const texto = document.getElementById('texto').value.toLowerCase();
    let resultado = '';

    // Se o botão apertado for o de "criptografar"
    if (tipo === 'criptografar') {
        // Chama uma função que vai transformar o texto de um jeito especial
        resultado = criptografarTexto(texto);
    // Se o botão apertado for o de "descriptografar"
    } else if (tipo === 'descriptografar') {
        // Chama uma função que vai transformar o texto de volta ao normal
        resultado = descriptografarTexto(texto);
    }

    // Coloca o texto transformado na caixinha de resultado
    document.getElementById('resultado').value = resultado;
}

// Esta função transforma o texto de um jeito especial, trocando letras por palavras
function criptografarTexto(texto) {
    return texto
        // Troca 'e' por 'enter'
        .replace(/e/g, 'enter')
        // Troca 'i' por 'imes'
        .replace(/i/g, 'imes')
        // Troca 'a' por 'ai'
        .replace(/a/g, 'ai')
        // Troca 'o' por 'ober'
        .replace(/o/g, 'ober')
        // Troca 'u' por 'ufat'
        .replace(/u/g, 'ufat');
}

// Esta função transforma o texto de volta ao normal
function descriptografarTexto(texto) {
    return texto
        // Troca 'enter' por 'e'
        .replace(/enter/g, 'e')
        // Troca 'imes' por 'i'
        .replace(/imes/g, 'i')
        // Troca 'ai' por 'a'
        .replace(/ai/g, 'a')
        // Troca 'ober' por 'o'
        .replace(/ober/g, 'o')
        // Troca 'ufat' por 'u'
        .replace(/ufat/g, 'u');
}

// Esta função copia o texto do resultado para a área de transferência
function copiarResultado() {
    // Pega o texto da caixinha de resultado
    const resultado = document.getElementById('resultado');
    resultado.select();
    // Copia o texto selecionado
    document.execCommand('copy');
    // Mostra uma mensagem dizendo que o texto foi copiado
    alert('Resultado copiado para a área de transferência!');
}
