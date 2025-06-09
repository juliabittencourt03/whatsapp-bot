import { create } from 'venom-bot';

create({
  session: 'bot-whatsapp'
}).then(client => start(client))
  .catch((error) => {
    console.error('Erro ao iniciar o bot:', error);
  });

function start(client) {
  client.onMessage(async (message) => {
    const msg = message.body.toLowerCase();

    if (msg.includes('agendamento')) {
      client.sendText(message.from, 'Você pode agendar aqui: https://www.doctoralia.com.br/natalia-bittencourt-da-silva/.');
    } else if (msg.includes('nota fiscal')) {
      client.sendText(message.from, 'Por favor, irei precisar dos seguintes dados para sua NOTA FISCAL:\n- Nome completo\n- CPF\n- Endereço completo com CEP\n- Email\n- Telefone');
    } else if (msg.includes('dúvida') || msg.includes('duvidas')) {
      client.sendText(message.from, 'Envie o nome completo do paciente e conte sua dúvida sobre o tratamento, que vou encaminhar para a Dra.!');
    } else {
      client.sendText(message.from, 'Olá! Escolha uma opção:\n1. Agendamento\n2. Nota Fiscal\n3. Dúvidas sobre o tratamento');
    }
  });
}
