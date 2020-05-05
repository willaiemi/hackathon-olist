<p align="center">
  <img
    alt="StovePipe"
    src="https://user-images.githubusercontent.com/43147902/81023362-7a5d2100-8e46-11ea-94dc-cbadf2d6fbbb.png"
    width="400"
  />
</p>

<p align="center">StovePipe atua com uma inteligência artifical que filtra as mensagens recebidas
nos canais de vendas e aloca em cinco sessões: perguntas relacionadas à funcionalidade, descrição dos produtos, pagamento, cancelamento e frete.</p>

O Back-end funciona como um meio de campo, é nele que recebemos as perguntas/respostas e repassamos para a Inteligência Artificial do Watson Assistant, então, ele ira pegar o texto, e com base no treinamento atual, irá retornar alguns dados importantes para armazenar na base de dados.

Como: Intenção da pergunta, Grupo da entidade e resposta automatica caso tenha.

Com esses dados, o back-end do StovePipe vai armazena-los de forma organizada para retornar à plataforma da Olist os dados necessários para preencher a dashboard de forma adequada.

O formato como está as tabelas no backend está praticamente pronto para ser exportado de tempos e tempos e alimentar a inteligência artificial do Watson, melhorando cada vez mais o match de respostas e categorizando cada vez melhor as perguntas.
