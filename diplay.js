document.addEventListener("DOMContentLoaded", function() {
    const customerData = JSON.parse(localStorage.getItem("customerData"));
    const displayDiv = document.getElementById("customerData");
    
    if (customerData) {
        displayDiv.innerHTML = `
            <p><strong>Nome:</strong> ${customerData.nome}</p>
            <p><strong>CPF:</strong> ${customerData.cpf}</p>
            <p><strong>Nascimento:</strong> ${customerData.nascimento}</p>
            <p><strong>Telefone:</strong> ${customerData.telefone}</p>
            <p><strong>E-mail:</strong> ${customerData.email}</p>
            <p><strong>Endereço:</strong> ${customerData.endereco}</p>
            <p><strong>Profissão:</strong> ${customerData.profissao}</p>
            <p><strong>Renda Mensal:</strong> ${customerData.renda}</p>
        `;
    } else {
        displayDiv.innerHTML = "<p>Nenhum dado encontrado.</p>";
    }
});