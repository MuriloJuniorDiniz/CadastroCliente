document.getElementById("customerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const formData = {
        nome: this.querySelector("input[placeholder='Nome Completo']").value,
        cpf: this.querySelector("input[placeholder='CPF']").value,
        nascimento: this.querySelector("input[type='date']").value,
        telefone: this.querySelector("input[placeholder='Telefone']").value,
        email: this.querySelector("input[placeholder='E-mail']").value,
        endereco: this.querySelector("input[placeholder='Endereço']").value,
        profissao: this.querySelector("input[placeholder='Profissão']").value,
        renda: this.querySelector("input[placeholder='Renda Mensal']").value
    };
    
    // Salva no localStorage para exibir na próxima página
    localStorage.setItem("customerData", JSON.stringify(formData));
    
    // Gera e faz download do TXT
    generateTXT(formData);
    
    // Redireciona para a página de exibição
    window.location.href = "display.html";
});

function generateTXT(data) {
    let txtContent = `DADOS DO CLIENTE:\n\n`;
    for (const [key, value] of Object.entries(data)) {
        txtContent += `${key}: ${value}\n`;
    }
    
    const blob = new Blob([txtContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cliente_${data.nome.replace(/\s/g, "_")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}