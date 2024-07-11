// Mostra a mensagem de aviso na tela.
alert('Para um melhor funcionamento, não use letras maiúsculas e caracteres especiais!');

// Esta função executa uma ação com base no tipo (criptografar ou descriptografar)
function executarAcao(tipo) {
    // Pega o texto digitado e converte para minúsculas
    const texto = document.getElementById('texto').value.toLowerCase();
    let resultado = '';

    // Verifica se há caracteres inválidos
    if (/[A-Z!@#$%^&*()_+={}[\]:;"'<>,.?/\\|]/.test(texto)) {
        alert('Texto contém caracteres inválidos. Use apenas letras minúsculas e caracteres válidos.');
        return;
    }

    // Determina a ação com base no tipo (criptografar ou descriptografar)
    if (tipo === 'criptografar') {
        resultado = criptografarTexto(texto);
    } else if (tipo === 'descriptografar') {
        resultado = descriptografarTexto(texto);
    }

    // Exibe o resultado na área designada
    document.getElementById('resultado').value = resultado;
}

// Função para criptografar o texto substituindo letras por palavras específicas
function criptografarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto revertendo as substituições
function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Função para copiar o resultado para a área de transferência
function copiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
    alert('Resultado copiado para a área de transferência!');
}
