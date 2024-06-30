function executarAcao(tipo) {
    const texto = document.getElementById('texto').value.toLowerCase();
    let resultado = '';

    if (tipo === 'criptografar') {
        resultado = criptografarTexto(texto);
    } else if (tipo === 'descriptografar') {
        resultado = descriptografarTexto(texto);
    }

    document.getElementById('resultado').value = resultado;
}

function criptografarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function copiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
    alert('Resultado copiado para a área de transferência!');
}

function copiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
    alert('Resultado copiado para a área de transferência!');
}
