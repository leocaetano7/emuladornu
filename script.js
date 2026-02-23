// Navegação Geral
function irPara(idTela) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(idTela).classList.add('active');
}

// Visibilidade de Saldo
let visivel = true;
function toggleSaldo() {
    visivel = !visivel;
    const saldos = document.querySelectorAll('.nu-balance');
    saldos.forEach(s => {
        // Mantém a cor do cartão de crédito mas esconde o valor
        if (s.style.color === 'rgb(0, 166, 208)') {
            s.innerText = visivel ? "R$ 850,00" : "••••";
        } else {
            s.innerText = visivel ? "R$ 2.450,60" : "••••";
        }
    });
}

// Consultar Senha
function revelarSenha() {
    if (confirm("O app pediria FaceID/Biometria agora. Simular confirmação?")) {
        document.getElementById('box-senha').style.display = 'block';
        setTimeout(() => { document.getElementById('box-senha').style.display = 'none'; }, 10000);
    }
}
