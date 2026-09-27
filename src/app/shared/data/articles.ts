import { Article } from '../models/portfolio.models';

// Conteúdo importado de https://medium.com/@anaheckk — texto e imagens originais
// da autora, mantendo a ordem de publicação do Medium. Pequenos ajustes de
// pontuação/typos, sem alterar o sentido do texto. Campos *En contêm a
// tradução para inglês do mesmo conteúdo.

export const ARTICLES: Article[] = [
  {
    slug: 'sienge',
    kicker: 'Case de UX/UI',
    kickerEn: 'UX/UI Case Study',
    title: 'Como melhoramos a gestão das unidades no ERP Sienge',
    titleEn: 'How we improved unit management in the Sienge ERP',
    meta: '7 de maio de 2025 · 3 min de leitura',
    metaEn: 'May 7, 2025 · 3 min read',
    cover: '/assets/articles/sienge/01-cover.png',
    listDate: '7 mai 2025',
    listDateEn: 'May 7, 2025',
    listTitle: 'Como melhoramos a gestão das unidades no ERP Sienge',
    listTitleEn: 'How we improved unit management in the Sienge ERP',
    listExcerpt: 'Um estudo para o módulo Comercial.',
    listExcerptEn: 'A study for the Commercial module.',
    body: [
      {
        kind: 'paragraph',
        text: 'Durante um discovery sobre distratos, percebemos que muitos clientes tinham dificuldades para visualizar e controlar as receitas e despesas das unidades. Esse problema apareceu tantas vezes durante o workshop que resolvemos priorizá-lo e investigar mais a fundo.',
      },
      {
        kind: 'paragraph',
        text: 'A ideia foi entender exatamente quais eram os principais desafios, aproveitando a oportunidade do discovery para isso. Os principais problemas que identificamos foram:',
      },
      {
        kind: 'list',
        items: [
          'Falta de uma visão clara e consolidada das movimentações financeiras das unidades',
          'Necessidade de exportar dados para planilhas para conseguir analisar melhor',
          'Dificuldade em identificar padrões e tomar decisões baseadas nesses dados',
        ],
      },
      { kind: 'heading', text: 'Como chegamos à solução' },
      {
        kind: 'paragraph',
        text: 'Esse projeto foi diferente porque precisávamos entrevistar clientes para entender quais tipos de informações deveriam estar nessa nova tela e quais dores iríamos abordar. Como era uma funcionalidade totalmente nova no Sienge, tivemos que construir tudo do zero, o que trouxe desafios adicionais, principalmente na definição das regras de negócio, que são bastante complexas.',
      },
      {
        kind: 'paragraph',
        text: 'Depois de entender as dores dos clientes, seguimos um processo de pesquisa e design para criar a melhor solução possível:',
      },
      {
        kind: 'list',
        items: [
          'Pesquisa e benchmarking: exploramos como outras plataformas lidavam com essa questão e quais eram as melhores práticas do mercado',
          'Mapeamento da jornada do usuário: identificamos os pontos de maior dificuldade e onde poderíamos melhorar a experiência',
          'Wireframing e prototipação: criamos algumas versões da interface e testamos com usuários para validar as ideias',
          'Validação com desenvolvedores: apresentamos os resultados da pesquisa ao time de desenvolvimento, garantindo que as decisões de design fossem viáveis e bem compreendidas',
          'Testes e ajustes: refinamos a solução com base no feedback dos usuários para garantir que as informações estivessem fáceis de acessar e interpretar',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Apesar de seguirmos o Design System padrão, conseguimos trazer elementos visuais diferenciados, como o uso de cores, algo que os usuários sempre pediam. Além disso, implementamos visualizações por chips na grid, o que não só melhorou a rapidez na identificação das informações, mas também permitiu usá-los como filtros interativos, virando um novo padrão nas demais telas dos outros módulos.',
      },
      { kind: 'heading', text: 'O que mudou' },
      {
        kind: 'paragraph',
        text: 'Com a nova interface de Consulta de Receitas e Despesas de Unidades, os usuários agora têm:',
      },
      {
        kind: 'list',
        items: [
          'Um dashboard intuitivo que centraliza todas as informações financeiras das unidades',
          'Filtros avançados para personalizar as buscas de acordo com a necessidade',
          'Opção de exportação dos dados, facilitando a análise e a tomada de decisão',
          'Uma experiência mais fluida e rápida, reduzindo o tempo gasto para encontrar informações importantes',
        ],
      },
      { kind: 'heading', text: 'Resultados e impacto' },
      { kind: 'paragraph', text: 'Desde o lançamento, os usuários deram um feedback superpositivo! Agora, eles conseguem:' },
      {
        kind: 'list',
        items: [
          'Gerenciar melhor as finanças das unidades sem precisar recorrer a soluções externas',
          'Reduzir a dependência de planilhas e centralizar tudo dentro do sistema',
          'Tomar decisões com mais segurança, já que as informações estão organizadas e acessíveis',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Esse projeto mostrou como ouvir os usuários e aplicar boas práticas de design pode transformar processos complicados em algo simples e eficiente. Além disso, envolver o time de desenvolvimento desde o início ajudou a garantir que a solução fosse implementada de forma alinhada com as necessidades técnicas e de produto.',
      },
      { kind: 'image', src: '/assets/articles/sienge/02-inline.png' },
      {
        kind: 'paragraph',
        text: 'A funcionalidade já está disponível no Sienge. Se quiser trocar uma ideia sobre esse ou outros projetos, é só me chamar!',
      },
    ],
    bodyEn: [
      {
        kind: 'paragraph',
        text: 'During a discovery on contract cancellations (distratos), we noticed that many customers struggled to view and control revenue and expenses for their units. This problem came up so often during the workshop that we decided to prioritize it and dig deeper.',
      },
      {
        kind: 'paragraph',
        text: 'The idea was to understand exactly what the main challenges were, using the discovery as an opportunity to do so. The main problems we identified were:',
      },
      {
        kind: 'list',
        items: [
          "No clear, consolidated view of the units' financial transactions",
          'Need to export data to spreadsheets to analyze it properly',
          'Difficulty spotting patterns and making decisions based on that data',
        ],
      },
      { kind: 'heading', text: 'How we got to the solution' },
      {
        kind: 'paragraph',
        text: "This project was different because we needed to interview customers to understand what kind of information should be on this new screen and which pain points we'd address. Since it was a completely new feature in Sienge, we had to build everything from scratch, which brought extra challenges, especially in defining the business rules, which are quite complex.",
      },
      {
        kind: 'paragraph',
        text: "After understanding customers' pain points, we followed a research and design process to build the best possible solution:",
      },
      {
        kind: 'list',
        items: [
          "Research and benchmarking: we explored how other platforms handled this issue and what the market's best practices were",
          'User journey mapping: we identified the points of greatest difficulty and where we could improve the experience',
          'Wireframing and prototyping: we created a few versions of the interface and tested them with users to validate ideas',
          'Validation with developers: we presented the research results to the development team, making sure design decisions were feasible and well understood',
          'Testing and refinement: we refined the solution based on user feedback to make sure information was easy to access and interpret',
        ],
      },
      {
        kind: 'paragraph',
        text: "Even while following the standard Design System, we managed to bring in some distinctive visual elements, like the use of color, something users had always asked for. We also implemented chip-based views in the grid, which not only made it faster to spot information but also let them work as interactive filters, becoming a new pattern across other modules' screens.",
      },
      { kind: 'heading', text: 'What changed' },
      {
        kind: 'paragraph',
        text: "With the new Revenue and Expense Inquiry interface for units, users now have:",
      },
      {
        kind: 'list',
        items: [
          "An intuitive dashboard that centralizes all of a unit's financial information",
          'Advanced filters to tailor searches to their needs',
          'A data export option, making analysis and decision-making easier',
          'A smoother, faster experience, cutting down the time spent finding important information',
        ],
      },
      { kind: 'heading', text: 'Results and impact' },
      { kind: 'paragraph', text: "Since launch, user feedback has been overwhelmingly positive! Now they're able to:" },
      {
        kind: 'list',
        items: [
          'Better manage unit finances without relying on external solutions',
          'Reduce dependence on spreadsheets and centralize everything within the system',
          'Make decisions with more confidence, since the information is organized and accessible',
        ],
      },
      {
        kind: 'paragraph',
        text: 'This project showed how listening to users and applying good design practices can turn complicated processes into something simple and efficient. Involving the development team from the start also helped ensure the solution was implemented in a way that aligned with technical and product needs.',
      },
      { kind: 'image', src: '/assets/articles/sienge/02-inline.png' },
      {
        kind: 'paragraph',
        text: "The feature is already live in Sienge. If you'd like to chat about this or other projects, just reach out!",
      },
    ],
  },
  {
    slug: 'feedback',
    kicker: 'Product Design',
    kickerEn: 'Product Design',
    title: 'Depoimento anônimo: como captamos feedbacks autênticos em um evento presencial',
    titleEn: 'Anonymous testimonials: how we captured authentic feedback at an in-person event',
    meta: '10 de março de 2025 · 4 min de leitura',
    metaEn: 'March 10, 2025 · 4 min read',
    cover: '/assets/articles/feedback/01-cover.jpeg',
    coverCaption: 'Espaço ConstrUX, Construsummit 2024',
    coverCaptionEn: 'ConstrUX Space, Construsummit 2024',
    listDate: '10 mar 2025',
    listDateEn: 'Mar 10, 2025',
    listTitle: 'Depoimento anônimo: como captamos feedbacks autênticos em um evento presencial',
    listTitleEn: 'Anonymous testimonials: how we captured authentic feedback at an in-person event',
    listExcerpt: 'Uma maneira diferente de fazer pesquisa.',
    listExcerptEn: 'A different way to do research.',
    body: [
      {
        kind: 'paragraph',
        text: 'Dinâmica realizada no Construsummit 2024, o maior evento de gestão e tecnologia da construção civil e do mercado imobiliário da América Latina.',
      },
      { kind: 'heading', text: 'Introdução' },
      {
        kind: 'paragraph',
        text: 'Coletar feedback sincero dos usuários nem sempre é fácil, principalmente presencialmente. Muitas vezes, as pessoas hesitam em compartilhar suas opiniões por receio de exposição ou julgamentos. Durante um evento presencial da empresa, nos deparamos com esse desafio: como poderíamos incentivar feedback sem gerar desconforto, de uma maneira diferente?',
      },
      {
        kind: 'paragraph',
        text: 'Foi assim que surgiu a ideia da dinâmica dos depoimentos anônimos, seguindo referências jornalísticas. Por se tratar de um formato totalmente novo para nós de coleta de feedback, apresento neste artigo o nosso MVP, onde criamos um espaço seguro para os usuários falarem livremente sobre a plataforma que utilizam no dia a dia.',
      },
      {
        kind: 'paragraph',
        text: 'Já adiantando sobre o resultado: tivemos um formato novo, devidamente testado, sem muito esforço, sem muitos gastos, mas gerando um grande impacto, que nos trouxe percepções sobre as reais dores e necessidades dos nossos clientes.',
      },
      { kind: 'heading', text: 'O conceito da dinâmica' },
      {
        kind: 'paragraph',
        text: 'A dinâmica era simples, mas cuidadosamente planejada para garantir o anonimato e a espontaneidade dos depoimentos:',
      },
      {
        kind: 'list',
        items: [
          'Montamos uma sala escura, onde os participantes entravam sozinhos para gravar seu feedback',
          'Apenas a silhueta da pessoa era filmada, eliminando qualquer identificação visual',
          'A voz era modificada na edição, garantindo ainda mais sigilo',
          'Os participantes tinham até 3 minutos para compartilhar qualquer opinião sobre a plataforma',
          'Para facilitar a participação, tínhamos um vídeo de exemplo com o resultado, mostrado ao cliente quando ele chegava ao nosso espaço',
          'Para incentivar a participação, cada depoimento garantia um ingresso no sorteio de uma Alexa',
        ],
      },
      {
        kind: 'image',
        src: '/assets/articles/feedback/02-mvp.jpeg',
        caption:
          'MVP 1, Dinâmica do depoimento anônimo. Na imagem, os materiais utilizados: uma cadeira caso o usuário precisasse se sentar, à frente um X no chão demarcando a posição do cliente, uma luz direta que projetava sombra na parede, ao redor uma cartolina vermelha para direcionar a luz, e na mesa em frente à cadeira um suporte com um celular gravando somente a sombra na parede e a voz do participante.',
      },
      {
        kind: 'paragraph',
        text: 'A resposta dos usuários foi incrível! As pessoas se sentiram confortáveis para falar abertamente, compartilhando insights e experiências que dificilmente seriam ditos em uma pesquisa tradicional.',
      },
      {
        kind: 'paragraph',
        text: 'Nossa dinâmica teve duração de 2 horas, competindo com palestras e outras atividades do evento, mas ainda assim tivemos um total de 19 depoimentos, reforçando a eficácia e validando nosso MVP.',
      },
      { kind: 'heading', text: 'Resultados e aprendizados' },
      {
        kind: 'paragraph',
        text: 'Ao final do evento, reunimos os vídeos e realizamos uma edição cuidadosa, adicionando legendas e organizando os temas abordados. Também analisamos e categorizamos os achados e documentamos tudo.',
      },
      {
        kind: 'paragraph',
        text: 'O que encontramos foi um padrão interessante: sem a preocupação com exposição, os usuários eram mais diretos, transparentes e, acima de tudo, colaborativos.',
      },
      {
        kind: 'image',
        src: '/assets/articles/feedback/03-video.png',
        caption: 'Print do vídeo editado, voz e imagem anonimizadas',
      },
      { kind: 'paragraph', text: 'Entre os principais aprendizados:' },
      {
        kind: 'list',
        items: [
          'A importância de um ambiente seguro: o anonimato foi um fator determinante para a sinceridade dos depoimentos',
          'Feedbacks mais profundos e ricos: as pessoas se sentiram livres para compartilhar tanto pontos positivos quanto críticas construtivas',
          'Engajamento gerado pelo sorteio: o incentivo fez com que mais pessoas participassem, aumentando a diversidade de opiniões',
        ],
      },
      { kind: 'heading', text: 'Mas o que difere de um questionário anônimo?' },
      {
        kind: 'paragraph',
        text: 'Uma das grandes vantagens desse formato em comparação a um questionário anônimo foi a riqueza dos depoimentos captados. Com os vídeos, conseguimos não apenas registrar o que os usuários disseram, mas também interpretar o tom de voz, pausas e emoções presentes nas falas, um nível de profundidade e empatia que dificilmente seria alcançado apenas com respostas escritas.',
      },
      { kind: 'heading', text: 'Impacto e próximos passos' },
      {
        kind: 'paragraph',
        text: 'Os insights coletados foram analisados e apresentados aos times responsáveis por cada módulo da plataforma, influenciando diretamente melhorias na experiência do usuário. Além disso, esse modelo de captação de feedback mostrou-se tão eficaz que já estamos planejando novas edições e adaptações para diferentes contextos.',
      },
      { kind: 'heading', text: 'Agradecimento' },
      {
        kind: 'paragraph',
        text: 'Esse workshop só foi possível graças ao apoio incrível da equipe que acreditou na ideia e trabalhou comigo para torná-la realidade. Meu muito obrigada a cada um que participou desse processo, mas especialmente aos designers Felipe Carvalho e Clara Jaborandy, que estiveram desde a ideação até a análise dos resultados.',
      },
      {
        kind: 'image',
        src: '/assets/articles/feedback/04-team.jpeg',
        caption: 'Equipe do espaço ContrUX, Diego, Felipe, Ana (eu), Clara e Andreza',
      },
      { kind: 'heading', text: 'Conclusão' },
      {
        kind: 'paragraph',
        text: 'Criar espaços seguros para ouvir os usuários pode transformar a forma como entendemos suas necessidades. Esse workshop nos mostrou que, ao remover barreiras como o medo de exposição, conseguimos obter feedbacks mais valiosos.',
      },
    ],
    bodyEn: [
      {
        kind: 'paragraph',
        text: "An activity run at Construsummit 2024, the largest construction management and technology event in Latin America's real estate market.",
      },
      { kind: 'heading', text: 'Introduction' },
      {
        kind: 'paragraph',
        text: "Collecting honest feedback from users isn't always easy, especially in person. People often hesitate to share their opinions for fear of being exposed or judged. During an in-person company event, we ran into exactly this challenge: how could we encourage feedback without causing discomfort, in a different kind of way?",
      },
      {
        kind: 'paragraph',
        text: "That's how the idea for the anonymous testimonials activity came about, drawing on journalism references. Since this was a completely new feedback-collection format for us, in this article I'm sharing our MVP, where we created a safe space for users to speak freely about the platform they use every day.",
      },
      {
        kind: 'paragraph',
        text: "Spoiler on the outcome: we ended up with a new format, properly tested, with little effort and little spend, but with a big impact, giving us real insight into our customers' actual pain points and needs.",
      },
      { kind: 'heading', text: 'The concept behind the activity' },
      {
        kind: 'paragraph',
        text: 'The activity was simple, but carefully planned to guarantee the anonymity and spontaneity of the testimonials:',
      },
      {
        kind: 'list',
        items: [
          'We set up a dark room where participants entered alone to record their feedback',
          'Only the person\'s silhouette was filmed, removing any visual identification',
          'The voice was altered in editing, adding an extra layer of confidentiality',
          'Participants had up to 3 minutes to share any opinion about the platform',
          'To make participation easier, we had an example video showing the result, shown to the customer as soon as they arrived at our space',
          'To encourage participation, every testimonial earned an entry into a raffle for an Alexa',
        ],
      },
      {
        kind: 'image',
        src: '/assets/articles/feedback/02-mvp.jpeg',
        caption:
          "MVP 1, The anonymous testimonial activity. In the picture, the materials used: a chair in case the participant needed to sit, an X taped on the floor marking their position, a direct light casting a shadow on the wall, red poster board around it to direct the light, and, on the table in front of the chair, a phone stand recording only the shadow on the wall and the participant's voice.",
      },
      {
        kind: 'paragraph',
        text: "The users' response was incredible! People felt comfortable speaking openly, sharing insights and experiences that would rarely come out in a traditional survey.",
      },
      {
        kind: 'paragraph',
        text: 'Our activity ran for 2 hours, competing with talks and other event activities, and we still collected a total of 19 testimonials, reinforcing how effective it was and validating our MVP.',
      },
      { kind: 'heading', text: 'Results and learnings' },
      {
        kind: 'paragraph',
        text: 'At the end of the event, we gathered the videos and did a careful edit, adding captions and organizing the topics covered. We also analyzed and categorized the findings and documented everything.',
      },
      {
        kind: 'paragraph',
        text: 'What we found was an interesting pattern: without the worry of being exposed, users were more direct, more transparent and, above all, more collaborative.',
      },
      {
        kind: 'image',
        src: '/assets/articles/feedback/03-video.png',
        caption: 'Screenshot of the edited video, voice and image anonymized',
      },
      { kind: 'paragraph', text: 'Among the main learnings:' },
      {
        kind: 'list',
        items: [
          'The importance of a safe environment: anonymity was a determining factor in how honest the testimonials were',
          'Deeper, richer feedback: people felt free to share both positive points and constructive criticism',
          'Engagement driven by the raffle: the incentive brought in more participants, increasing the diversity of opinions',
        ],
      },
      { kind: 'heading', text: 'But how is this different from an anonymous survey?' },
      {
        kind: 'paragraph',
        text: 'One of the big advantages of this format compared to an anonymous survey was the richness of the testimonials we captured. With video, we could not only record what users said, but also read tone of voice, pauses and emotion in what they shared, a level of depth and empathy that would be hard to reach with written answers alone.',
      },
      { kind: 'heading', text: 'Impact and next steps' },
      {
        kind: 'paragraph',
        text: "The insights we gathered were analyzed and presented to the teams responsible for each module of the platform, directly influencing improvements to the user experience. This feedback-collection model also proved so effective that we're already planning new editions and adaptations for different contexts.",
      },
      { kind: 'heading', text: 'Acknowledgments' },
      {
        kind: 'paragraph',
        text: 'This workshop was only possible thanks to the incredible support of the team who believed in the idea and worked with me to make it happen. My deepest thanks to everyone who took part in this process, and especially to designers Felipe Carvalho and Clara Jaborandy, who were there from ideation through to analyzing the results.',
      },
      {
        kind: 'image',
        src: '/assets/articles/feedback/04-team.jpeg',
        caption: 'The ConstrUX space team, Diego, Felipe, Ana (me), Clara and Andreza',
      },
      { kind: 'heading', text: 'Conclusion' },
      {
        kind: 'paragraph',
        text: 'Creating safe spaces to listen to users can transform how we understand their needs. This workshop showed us that by removing barriers like the fear of exposure, we can get much more valuable feedback.',
      },
    ],
  },
  {
    slug: 'recrutamento',
    kicker: 'Product Design',
    kickerEn: 'Product Design',
    title: 'Como melhorar o recrutamento para pesquisas de Design?',
    titleEn: 'How to improve recruiting for design research?',
    meta: '10 de março de 2025 · 5 min de leitura',
    metaEn: 'March 10, 2025 · 5 min read',
    cover: '/assets/articles/recrutamento/01-cover.jpeg',
    coverCaption: 'Imagem ilustrativa gerada por IA',
    coverCaptionEn: 'AI-generated illustrative image',
    listDate: '10 mar 2025',
    listDateEn: 'Mar 10, 2025',
    listTitle: 'Como melhorar o recrutamento para pesquisas de Design?',
    listTitleEn: 'How to improve recruiting for design research?',
    listExcerpt: 'Transformando desafios em insights de Design.',
    listExcerptEn: 'Turning challenges into design insights.',
    body: [
      {
        kind: 'paragraph',
        text: 'Se você trabalha com UX Research ou Design de Produto, já deve ter passado pelo mesmo dilema: encontrar usuários dispostos a participar de entrevistas, testes de validação de produto e discovery. No nosso time, essa era uma dor constante e o impacto era enorme.',
      },
      {
        kind: 'paragraph',
        text: 'Neste artigo, compartilho como conduzi uma pesquisa para identificar os desafios do recrutamento, uma breve análise dos dados coletados e, em seguida, como envolvi o time de design na fase de ideação para transformar esses insights em estratégias de solução.',
      },
      { kind: 'heading', text: 'O problema' },
      {
        kind: 'paragraph',
        text: 'Nossa equipe de design tinha um desafio recorrente: conseguir clientes para participar de entrevistas e pesquisas. Mas a questão não era simplesmente "não encontrar pessoas", o maior problema era o engajamento. Entre os principais impactos dessa dificuldade, percebemos que:',
      },
      {
        kind: 'list',
        items: [
          'As pesquisas ficavam restritas a poucos usuários, porque eram sempre os mesmos que aceitavam participar, o que limitava os insights e a representatividade',
          'Projetos eram atrasados ou até cancelados por falta de validação e demora para encontrar participantes',
          'Gastávamos horas tentando recrutar, em vez de analisar insights, o mesmo designer responsável pela pesquisa é quem fazia o recrutamento, muitas vezes por e-mail ou telefone',
          'Sem uma base representativa por baixa adesão de participantes, o produto perdia oportunidades de melhoria',
        ],
      },
      { kind: 'paragraph', text: 'Então, decidi entender melhor as causas do problema e buscar soluções.' },
      { kind: 'heading', text: 'Investigando o problema: o que descobri?' },
      {
        kind: 'paragraph',
        text: 'Para entender as raízes desses desafios, decidi conduzir uma investigação completa, que se desdobrou em três frentes principais.',
      },
      { kind: 'heading', text: '1. Pesquisa desk e levantamento bibliográfico' },
      {
        kind: 'paragraph',
        text: 'Mapeei referências, estudos e boas práticas sobre recrutamento para pesquisas de design. Identifiquei que muitos dos problemas que enfrentávamos eram comuns em outras empresas, e encontrei soluções que já estavam sendo aplicadas com sucesso em outros contextos.',
      },
      { kind: 'heading', text: '2. Aplicação de questionários' },
      {
        kind: 'paragraph',
        text: 'Criei dois formulários para captar diferentes perspectivas. No formulário para clientes, a intenção foi investigar o que motivaria ou desmotivaria os usuários a participar de nossas pesquisas, questionei sobre preferências, expectativas e a percepção dos convites. No formulário para designers (equipes internas e externas), mapeei os métodos de recrutamento existentes e os desafios enfrentados pelos profissionais da área, além de recolher sugestões sobre como aprimorar o processo e aumentar a taxa de adesão.',
      },
      { kind: 'heading', text: '3. Análise quantitativa dos dados' },
      {
        kind: 'paragraph',
        text: 'Após a coleta, dediquei-me à análise dos resultados para identificar padrões e insights. Algumas descobertas importantes:',
      },
      {
        kind: 'list',
        items: [
          '34% dos clientes afirmaram que participariam mais se tivessem acesso a novidades e conteúdos exclusivos sobre a plataforma',
          '25% enxergam aprendizado e treinamentos como recompensa valiosa, pedindo cursos, certificados e vídeos educativos',
          'Muitos clientes não sabiam o que acontecia com seu feedback, apontando a necessidade de mais transparência',
          'Designers de outras empresas enfrentam desafios semelhantes, e alguns já utilizam incentivos para aumentar a adesão',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Meu papel: realizei toda a pesquisa e a análise dos dados, extraindo os principais desafios do recrutamento. Após essa fase investigativa, envolvi o time de design para a etapa de ideação, onde apresentei todos os resultados coletados e, juntos, exploramos e priorizamos soluções que pudessem transformar esse cenário.',
      },
      { kind: 'heading', text: 'Da análise à ação: ideação colaborativa' },
      {
        kind: 'paragraph',
        text: 'Após a pesquisa, apresentei os resultados ao time de design e conduzi um brainstorming para gerar novas soluções. Em seguida, utilizamos o Product Backlog Brainstorming (PBB) para detalhar as soluções levantadas e entender o grau de esforço de cada uma. Com as features definidas, aplicamos a matriz impacto x esforço para priorizar as mais viáveis e estratégicas, resultando em um backlog organizado, com direcionamento claro e focado nas soluções de maior valor para o recrutamento.',
      },
      { kind: 'image', src: '/assets/articles/recrutamento/02-board.jpeg', caption: 'Board da sessão de ideação' },
      { kind: 'heading', text: 'Algumas das soluções que encontramos' },
      { kind: 'paragraph', text: 'E que podem funcionar para você também, adaptando-as para o seu cenário:' },
      { kind: 'heading', text: '1. Recompensas e benefícios para engajamento' },
      {
        kind: 'paragraph',
        text: 'Criar incentivos para atrair participantes, oferecendo cursos de aperfeiçoamento e conteúdos exclusivos, certificados de participação, acesso antecipado a novidades e um grupo VIP para interações mais próximas. O objetivo é aumentar a adesão e valorizar os participantes.',
      },
      { kind: 'heading', text: '2. Terceirização do recrutamento com equipes internas' },
      {
        kind: 'paragraph',
        text: 'Envolver as equipes de CS e Suporte, que já possuem contato próximo com os clientes, para ajudar no recrutamento, sempre com base no perfil definido pelo time de design, com modelos de mensagens criados junto com o marketing. Benefício: abordagens mais eficazes e personalizadas, aumentando a taxa de conversão.',
      },
      { kind: 'heading', text: '3. Uso da comunidade da empresa como canal de recrutamento' },
      {
        kind: 'paragraph',
        text: 'Criar uma página do time de design dentro da comunidade da empresa, com formulários de recrutamento para filtrar perfis, calendários de eventos e atualizações de projetos, e um espaço para divulgar clientes participantes e promover networking, um canal centralizado para relacionamento e recrutamento contínuo.',
      },
      { kind: 'heading', text: '4. Botão de feedback no produto' },
      {
        kind: 'paragraph',
        text: 'Implementar um botão fixo dentro da plataforma para que os clientes enviem feedbacks espontaneamente, facilitando a comunicação entre clientes e equipe de forma mais ágil e contínua.',
      },
      { kind: 'heading', text: '5. Criação de uma plataforma de recrutamento estilo Colab' },
      {
        kind: 'paragraph',
        text: 'Um site específico para divulgação de workshops e eventos anuais, inscrição direta para testes e pesquisas, e acompanhamento do status dos projetos, incluindo depoimentos de clientes satisfeitos para gerar credibilidade e incentivar novos participantes.',
      },
      { kind: 'heading', text: '6. WhatsApp corporativo verificado para o time de Design' },
      {
        kind: 'paragraph',
        text: 'Um canal oficial e verificado para comunicação com os clientes, trazendo mais confiança e uma comunicação mais rápida e acessível, avaliando antes a melhor forma de uso para evitar problemas de volume e suporte.',
      },
      { kind: 'heading', text: '7. Gamificação para incentivar a participação' },
      {
        kind: 'paragraph',
        text: 'Um sistema de pontuação, níveis e desafios interativos dentro do processo de recrutamento, com o objetivo de tornar o processo mais dinâmico e motivador.',
      },
      { kind: 'heading', text: 'Próximos passos e aprendizados' },
      {
        kind: 'paragraph',
        text: 'Estamos implementando essas estratégias de forma gradual e monitorando seus impactos. Alguns aprendizados já se destacam:',
      },
      {
        kind: 'list',
        items: [
          'As pessoas querem participar, mas precisam perceber o valor do seu feedback',
          'Incentivos nem sempre precisam ser financeiros; conteúdos exclusivos podem ser um diferencial importante',
          'Recrutar no momento certo (como durante a interação com a plataforma) pode aumentar significativamente a adesão',
          'Colaboração é a chave, a união do conhecimento dos dados com a criatividade do time resultou em soluções mais alinhadas às necessidades dos usuários',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Se você também enfrenta desafios no recrutamento de usuários para pesquisa, experimente algumas dessas estratégias e compartilhe sua experiência comigo.',
      },
      {
        kind: 'paragraph',
        text: 'Obs.: neste artigo optei por não entrar em detalhes da condução das pesquisas, mas fico à disposição para aprofundar o tema caso haja interesse.',
      },
    ],
    bodyEn: [
      {
        kind: 'paragraph',
        text: "If you work with UX Research or Product Design, you've probably run into the same dilemma: finding users willing to take part in interviews, product validation tests and discovery. On our team, this was a constant pain point, and the impact was huge.",
      },
      {
        kind: 'paragraph',
        text: 'In this article, I share how I ran a study to identify the challenges around recruiting, a brief analysis of the data collected, and then how I brought the design team into the ideation phase to turn those insights into solution strategies.',
      },
      { kind: 'heading', text: 'The problem' },
      {
        kind: 'paragraph',
        text: 'Our design team had a recurring challenge: getting customers to take part in interviews and research. But the issue wasn\'t simply "not finding people", the bigger problem was engagement. Among the main impacts of this difficulty, we noticed that:',
      },
      {
        kind: 'list',
        items: [
          'Research was limited to a small pool of users, because it was always the same people agreeing to participate, which limited the insights and how representative they were',
          'Projects were delayed or even canceled due to a lack of validation and the time it took to find participants',
          'We spent hours trying to recruit instead of analyzing insights, the same designer responsible for the research also handled recruiting, often by email or phone',
          'Without a representative base due to low participant turnout, the product missed opportunities for improvement',
        ],
      },
      { kind: 'paragraph', text: 'So I decided to better understand the root causes of the problem and look for solutions.' },
      { kind: 'heading', text: 'Investigating the problem: what I found' },
      {
        kind: 'paragraph',
        text: 'To understand the roots of these challenges, I decided to run a full investigation, which unfolded across three main fronts.',
      },
      { kind: 'heading', text: '1. Desk research and literature review' },
      {
        kind: 'paragraph',
        text: 'I mapped out references, studies and best practices on recruiting for design research. I found that many of the problems we were facing were common at other companies, and I found solutions that were already being applied successfully in other contexts.',
      },
      { kind: 'heading', text: '2. Running surveys' },
      {
        kind: 'paragraph',
        text: 'I created two forms to capture different perspectives. In the customer form, the goal was to investigate what would motivate or discourage users from taking part in our research, I asked about preferences, expectations and how they perceived our invitations. In the designer form (internal and external teams), I mapped existing recruiting methods and the challenges faced by professionals in the field, and also gathered suggestions on how to improve the process and increase participation rates.',
      },
      { kind: 'heading', text: '3. Quantitative data analysis' },
      {
        kind: 'paragraph',
        text: 'After collecting the data, I focused on analyzing the results to identify patterns and insights. Some key findings:',
      },
      {
        kind: 'list',
        items: [
          "34% of customers said they'd participate more if they had access to exclusive updates and content about the platform",
          '25% see learning and training as a valuable reward, asking for courses, certificates and educational videos',
          "Many customers didn't know what happened to their feedback, pointing to a need for more transparency",
          'Designers at other companies face similar challenges, and some already use incentives to boost participation',
        ],
      },
      {
        kind: 'paragraph',
        text: 'My role: I ran the entire study and data analysis, extracting the main recruiting challenges. After that investigative phase, I brought the design team in for the ideation stage, where I presented all the results we\'d collected and, together, we explored and prioritized solutions that could change the picture.',
      },
      { kind: 'heading', text: 'From analysis to action: collaborative ideation' },
      {
        kind: 'paragraph',
        text: 'After the research, I presented the results to the design team and ran a brainstorming session to generate new solutions. We then used Product Backlog Brainstorming (PBB) to flesh out the proposed solutions and understand how much effort each would take. With the features defined, we applied an impact-versus-effort matrix to prioritize the most viable and strategic ones, resulting in an organized backlog with clear direction, focused on the solutions with the most value for recruiting.',
      },
      { kind: 'image', src: '/assets/articles/recrutamento/02-board.jpeg', caption: 'Board from the ideation session' },
      { kind: 'heading', text: 'Some of the solutions we found' },
      { kind: 'paragraph', text: 'And that might work for you too, adapted to your own context:' },
      { kind: 'heading', text: '1. Rewards and perks for engagement' },
      {
        kind: 'paragraph',
        text: 'Create incentives to attract participants, offering advanced courses and exclusive content, participation certificates, early access to new features, and a VIP group for closer interactions. The goal is to boost participation and make participants feel valued.',
      },
      { kind: 'heading', text: '2. Outsourcing recruiting to internal teams' },
      {
        kind: 'paragraph',
        text: 'Bring in the CS and Support teams, who already have close contact with customers, to help with recruiting, always based on the profile defined by the design team, with message templates created together with marketing. Benefit: more effective, more personalized outreach, increasing the conversion rate.',
      },
      { kind: 'heading', text: '3. Using the company community as a recruiting channel' },
      {
        kind: 'paragraph',
        text: 'Create a page for the design team inside the company community, with recruiting forms to filter profiles, event calendars and project updates, and a space to spotlight participating customers and encourage networking, a centralized channel for ongoing relationships and recruiting.',
      },
      { kind: 'heading', text: '4. In-product feedback button' },
      {
        kind: 'paragraph',
        text: 'Add a persistent button inside the platform so customers can send feedback spontaneously, making communication between customers and the team faster and more continuous.',
      },
      { kind: 'heading', text: '5. Building a Colab-style recruiting platform' },
      {
        kind: 'paragraph',
        text: 'A dedicated site to promote workshops and annual events, direct sign-up for tests and research, and status tracking for projects, including testimonials from satisfied customers to build credibility and encourage new participants.',
      },
      { kind: 'heading', text: '6. A verified corporate WhatsApp for the Design team' },
      {
        kind: 'paragraph',
        text: 'An official, verified channel for communicating with customers, bringing more trust and faster, more accessible communication, while first evaluating the best way to use it to avoid volume and support issues.',
      },
      { kind: 'heading', text: '7. Gamification to encourage participation' },
      {
        kind: 'paragraph',
        text: 'A points, levels and interactive-challenges system built into the recruiting process, aimed at making it more dynamic and motivating.',
      },
      { kind: 'heading', text: 'Next steps and learnings' },
      {
        kind: 'paragraph',
        text: "We're rolling out these strategies gradually and tracking their impact. A few learnings already stand out:",
      },
      {
        kind: 'list',
        items: [
          'People want to participate, but they need to see the value of their feedback',
          "Incentives don't always have to be financial; exclusive content can be an important differentiator",
          'Recruiting at the right moment (like during interaction with the platform) can significantly increase participation',
          "Collaboration is key, combining data knowledge with the team's creativity led to solutions better aligned with user needs",
        ],
      },
      {
        kind: 'paragraph',
        text: 'If you also face challenges recruiting users for research, try some of these strategies and share your experience with me.',
      },
      {
        kind: 'paragraph',
        text: "Note: in this article I chose not to go into detail about how the research itself was conducted, but I'm happy to dig deeper into that if there's interest.",
      },
    ],
  },
  {
    slug: 'ux-research',
    kicker: 'UX Research',
    kickerEn: 'UX Research',
    title: 'UX Research na prática: insights de um evento presencial',
    titleEn: 'UX Research in practice: insights from an in-person event',
    meta: '9 de março de 2025 · 4 min de leitura',
    metaEn: 'March 9, 2025 · 4 min read',
    cover: '/assets/articles/ux-research/01-cover.png',
    coverCaption: 'LUPA, Laboratório de UX Research, oferecido pelo ResearchPro',
    coverCaptionEn: 'LUPA, UX Research Lab, hosted by ResearchPro',
    listDate: '10 mar 2025',
    listDateEn: 'Mar 10, 2025',
    listTitle: 'UX Research na prática: insights de um evento presencial',
    listTitleEn: 'UX Research in practice: insights from an in-person event',
    listExcerpt:
      'Há algum tempo queria escrever sobre essa experiência e, finalmente, consegui organizar minhas ideias para compartilhar.',
    listExcerptEn:
      "I've wanted to write about this experience for a while, and I finally managed to organize my thoughts to share it.",
    body: [
      {
        kind: 'paragraph',
        text: 'Há algum tempo queria escrever sobre essa experiência e, finalmente, consegui organizar minhas ideias para compartilhar. Tive a oportunidade de participar do evento LUPA (Laboratório de UX Research), promovido pelo ResearchPro e conduzido pelo Pedro Vargas. A experiência foi incrível e repleta de aprendizados valiosos, que gostaria de compartilhar com outros designers.',
      },
      {
        kind: 'paragraph',
        text: 'Esse artigo tem um texto breve, mas principalmente para quem está começando na carreira de UX vale a leitura, muitos desses insights são especialmente úteis para quem trabalha com pesquisa.',
      },
      { kind: 'heading', text: 'Aprendizados para UX Designers' },
      { kind: 'heading', text: '1. Planejamento é crucial' },
      {
        kind: 'paragraph',
        text: 'Um bom planejamento define o sucesso da pesquisa. Ter clareza sobre os objetivos, estruturar bem o roteiro de entrevistas e alinhar expectativas com a equipe fazem toda a diferença.',
      },
      { kind: 'heading', text: '2. A análise dos dados demanda tempo e dedicação' },
      {
        kind: 'paragraph',
        text: 'Coletar dados é apenas uma parte do processo. Para obter insights realmente valiosos, é necessário tempo para organizar, interpretar e sintetizar as informações. Métodos como matrizes de priorização e ferramentas de análise podem facilitar esse processo, uma ferramenta que ajudou muito foi o Marvin, que permite gravar entrevistas e organizar os dados de forma estruturada. Vale a pena testar!',
      },
      { kind: 'heading', text: '3. Quanto mais pesquisa e entrevistas realizamos, mais respostas encontramos' },
      {
        kind: 'paragraph',
        text: 'Entrevistas e coletas de dados sucessivas permitem validar hipóteses e descobrir novas questões. Sempre que possível, é interessante testar diferentes abordagens para enriquecer a pesquisa.',
      },
      { kind: 'heading', text: '4. Eventos presenciais são ótimos para networking' },
      {
        kind: 'paragraph',
        text: 'Além do aprendizado técnico, eventos presenciais oferecem uma grande oportunidade de conhecer outros profissionais da área, trocar experiências e expandir sua rede de contatos. Conversas informais podem trazer insights valiosos e até abrir portas para futuras colaborações.',
      },
      { kind: 'heading', text: '5. Improvisação, agilidade e falar em público são habilidades essenciais' },
      {
        kind: 'paragraph',
        text: 'Uma das experiências mais valiosas desse evento foi praticar a improvisação e a agilidade na pesquisa, além de falar na frente de pessoas que eu nunca havia encontrado antes. Isso me ajudou a ganhar mais confiança, melhorar minha performance no trabalho e desenvolver habilidades essenciais para apresentações e dinâmicas com stakeholders, e me ajudou até na vida pessoal, tornando-me mais segura e articulada no dia a dia.',
      },
      { kind: 'image', src: '/assets/articles/ux-research/02-inline.jpeg' },
      { kind: 'heading', text: 'Como foi o evento?' },
      { kind: 'paragraph', text: 'O workshop foi dividido em quatro momentos:' },
      {
        kind: 'list',
        items: [
          'Dia 1, remoto: divisão da equipe e dinâmica de quebra-gelo, apresentação do problema, construção da matriz CSD',
          'Dia 2, evento presencial: criação do roteiro de entrevistas, realização das entrevistas, início da análise dos dados',
          'Dia 3, remoto: continuação da análise, desenvolvimento da apresentação',
          'Dia 4, remoto: apresentação dos resultados para todos, com feedback recebido de forma assíncrona durante a apresentação',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Minha equipe trabalhou na seguinte questão: quais são as barreiras e impulsos para a inovação nas empresas?',
      },
      {
        kind: 'paragraph',
        text: 'Por conta da dinâmica do evento e do tempo reduzido, entrevistamos participantes de outras equipes para praticar a condução de entrevistas. Todos os entrevistados atuavam com UX, e as entrevistas tiveram uma média de 15 minutos de duração. Para apoiar a análise, utilizamos a ferramenta Marvin para gravar e processar os resultados.',
      },
      { kind: 'image', src: '/assets/articles/ux-research/03-evento.jpeg', caption: 'Dia do evento presencial' },
      {
        kind: 'paragraph',
        text: 'Participar do evento foi uma experiência muito animadora e de muita aprendizagem. Além da troca de conhecimentos, o evento reforçou a importância de planejamento, análise aprofundada e iteração constante na pesquisa. Também ficou claro como eventos presenciais são uma excelente oportunidade para networking e aprendizado coletivo.',
      },
      {
        kind: 'paragraph',
        text: 'Como bônus, ainda fui sorteada com o livro O Teste da Mãe no final do evento, recomendo demais a leitura!',
      },
      { kind: 'image', src: '/assets/articles/ux-research/04-livro.png' },
      { kind: 'image', src: '/assets/articles/ux-research/05-livro2.png' },
      {
        kind: 'paragraph',
        text: 'Se você é designer e trabalha com pesquisa, espero que esses aprendizados te ajudem a refinar suas práticas e tornar suas pesquisas mais eficazes! Dica bônus: sempre tente participar de eventos da área, seja como forma de networking ou aprendizado, é muito bom aprender e trocar com quem já atua no mercado.',
      },
    ],
    bodyEn: [
      {
        kind: 'paragraph',
        text: "I've wanted to write about this experience for a while, and I finally managed to organize my thoughts to share it. I had the chance to take part in LUPA (UX Research Lab), hosted by ResearchPro and led by Pedro Vargas. It was an incredible experience, full of valuable lessons that I'd like to share with other designers.",
      },
      {
        kind: 'paragraph',
        text: "This is a short read, but especially worth it if you're just starting out in UX, many of these insights are particularly useful if you work with research.",
      },
      { kind: 'heading', text: 'Lessons for UX Designers' },
      { kind: 'heading', text: '1. Planning is crucial' },
      {
        kind: 'paragraph',
        text: 'Good planning is what makes research successful. Having clarity on your objectives, structuring a solid interview script, and aligning expectations with the team make all the difference.',
      },
      { kind: 'heading', text: '2. Data analysis takes time and dedication' },
      {
        kind: 'paragraph',
        text: "Collecting data is only part of the process. To get truly valuable insights, you need time to organize, interpret and synthesize the information. Tools like prioritization matrices and analysis tools can make this easier, one tool that helped a lot was Marvin, which lets you record interviews and organize the data in a structured way. Worth trying!",
      },
      { kind: 'heading', text: '3. The more research and interviews you do, the more answers you find' },
      {
        kind: 'paragraph',
        text: "Successive interviews and data collection let you validate hypotheses and uncover new questions. Whenever possible, it's worth testing different approaches to enrich the research.",
      },
      { kind: 'heading', text: '4. In-person events are great for networking' },
      {
        kind: 'paragraph',
        text: 'Beyond the technical learning, in-person events are a great opportunity to meet other professionals in the field, exchange experiences and expand your network. Informal conversations can bring valuable insights and even open doors for future collaborations.',
      },
      { kind: 'heading', text: '5. Improvisation, agility and public speaking are essential skills' },
      {
        kind: 'paragraph',
        text: "One of the most valuable experiences from this event was practicing improvisation and agility in research, as well as speaking in front of people I'd never met before. It helped me build more confidence, improve my performance at work, and develop skills that are essential for presentations and stakeholder sessions, and it even helped me in my personal life, making me more self-assured and articulate day to day.",
      },
      { kind: 'image', src: '/assets/articles/ux-research/02-inline.jpeg' },
      { kind: 'heading', text: 'What was the event like?' },
      { kind: 'paragraph', text: 'The workshop was split into four moments:' },
      {
        kind: 'list',
        items: [
          'Day 1, remote: team split and an icebreaker activity, problem presentation, building the CSD matrix',
          'Day 2, in person: building the interview script, running the interviews, starting the data analysis',
          'Day 3, remote: continuing the analysis, building the presentation',
          'Day 4, remote: presenting results to everyone, with feedback given asynchronously during the presentation',
        ],
      },
      {
        kind: 'paragraph',
        text: 'My team worked on the following question: what are the barriers to, and drivers of, innovation inside companies?',
      },
      {
        kind: 'paragraph',
        text: 'Because of how the event was structured and the limited time, we interviewed participants from other teams to practice running interviews. All the interviewees worked in UX, and the interviews averaged 15 minutes. To support the analysis, we used the Marvin tool to record and process the results.',
      },
      { kind: 'image', src: '/assets/articles/ux-research/03-evento.jpeg', caption: 'The in-person event day' },
      {
        kind: 'paragraph',
        text: 'Taking part in the event was an exciting, high-learning experience. Beyond the exchange of knowledge, it reinforced the importance of planning, deep analysis and constant iteration in research. It also became clear how in-person events are a great opportunity for networking and collective learning.',
      },
      {
        kind: 'paragraph',
        text: 'As a bonus, I even won a copy of The Mom Test in the event\'s raffle, highly recommend reading it!',
      },
      { kind: 'image', src: '/assets/articles/ux-research/04-livro.png' },
      { kind: 'image', src: '/assets/articles/ux-research/05-livro2.png' },
      {
        kind: 'paragraph',
        text: "If you're a designer who works with research, I hope these lessons help you refine your practice and make your studies more effective! Bonus tip: always try to attend events in the field, whether for networking or learning, it's great to learn from and trade notes with people who are already out there in the market.",
      },
    ],
  },
  {
    slug: 'workshops',
    kicker: 'UX Design',
    kickerEn: 'UX Design',
    title: 'Aprendizados realizando workshops remotos e presenciais',
    titleEn: 'Lessons from running remote and in-person workshops',
    meta: '12 de janeiro de 2024 · 9 min de leitura',
    metaEn: 'January 12, 2024 · 9 min read',
    cover: '/assets/articles/workshops/01-cover.jpg',
    coverCaption: 'Workshop presencial com clientes. Todos os direitos reservados a Softplan.',
    coverCaptionEn: 'In-person workshop with customers. All rights reserved to Softplan.',
    coauthors: 'Escrito com Clara Jaborandy e Maria Luiza Viegas · publicado no UX Collective 🇧🇷',
    coauthorsEn: 'Written with Clara Jaborandy and Maria Luiza Viegas · published on UX Collective 🇧🇷',
    listDate: '12 jan 2024',
    listDateEn: 'Jan 12, 2024',
    listTitle: 'Aprendizados realizando workshops remotos e presenciais',
    listTitleEn: 'Lessons from running remote and in-person workshops',
    listExcerpt:
      'Lições com workshops que gostaria de saber antes para aprender mais rápido, acertar mais cedo e errar menos.',
    listExcerptEn:
      "Lessons from running workshops that I wish I'd known earlier, to learn faster, get things right sooner, and make fewer mistakes.",
    body: [
      { kind: 'heading', text: 'Quem somos e o que fazemos' },
      {
        kind: 'paragraph',
        text: 'Somos três designers de produto do time do Sienge (Softplan), com foco em pesquisa e em soluções centradas na experiência do usuário. Entre 2022 e 2023 conduzimos vários workshops, remotos e presenciais, com clientes, buscando entender problemas reais e trazer inovação para o software B2B em que atuamos.',
      },
      {
        kind: 'paragraph',
        text: 'Como cada empresa cliente tem seus próprios processos, reunir times diferentes num mesmo workshop deixa evidente o quanto o produto precisa suportar formas de trabalho distintas, um desafio direto para quem desenha fluxos e interfaces.',
      },
      { kind: 'heading', text: 'O que é um workshop' },
      {
        kind: 'paragraph',
        text: 'Um workshop é uma dinâmica colaborativa em que design, usuários e outras partes interessadas constroem juntos soluções para um problema específico. É uma forma eficaz de trazer o usuário para dentro do processo, ouvindo dores, ideias e experiências, a caminho de produtos mais alinhados com o que as pessoas realmente precisam.',
      },
      {
        kind: 'image',
        src: '/assets/articles/workshops/02-postits.jpg',
        caption: 'Post-its de ideação sendo colados em portas de vidro por clientes. Todos os direitos reservados a Softplan.',
      },
      { kind: 'heading', text: 'A estrutura do workshop e nosso papel' },
      {
        kind: 'paragraph',
        text: 'Nossa equipe sempre reserva de dois a três designers para os papéis de Facilitador e Observador(es). O Facilitador cria o ambiente colaborativo, define objetivos e conduz as atividades, gerando ideias, mediando conflitos e praticando escuta ativa para que todas as perspectivas sejam ouvidas, sem perder de vista o tempo de cada dinâmica.',
      },
      {
        kind: 'image',
        src: '/assets/articles/workshops/03-facilitador.jpeg',
        caption: 'Designer Facilitador: media e apresenta, mas também tem uma escuta ativa. Todos os direitos reservados a Softplan.',
      },
      {
        kind: 'paragraph',
        text: 'Os demais designers atuam como apoio: registram o que passa despercebido, filmam, anotam pontos-chave e, dependendo da dinâmica, incentivam mais participação, mas o papel principal é observar, entendendo tanto o ritmo quanto o conteúdo da discussão.',
      },
      {
        kind: 'paragraph',
        text: 'No remoto, esses papéis se adaptam: uma pessoa lidera a facilitação enquanto a outra documenta insights, sentimentos e comentários dos usuários, muitos têm receio de editar os boards diretamente, então essa documentação feita pelo Observador facilita bastante a análise depois.',
      },
      { kind: 'heading', text: 'Aprendizados' },
      {
        kind: 'paragraph',
        text: 'Separamos os principais aprendizados para workshops de sucesso, remotos ou presenciais.',
      },
      { kind: 'heading', text: 'Workshop remoto' },
      {
        kind: 'image',
        src: '/assets/articles/workshops/04-miro.png',
        caption: 'Criando ambientes colaborativos através da plataforma Miro. Todos os direitos reservados a Softplan.',
      },
      {
        kind: 'list',
        items: [
          'Disponibilidade: é o mais rápido de agendar. Escolha uma plataforma de videoconferência estável e fácil de usar, e verifique se dá para controlar microfones abertos, ruídos e conversas cruzadas atrapalham bastante',
          'Propósito claro: explique bem o objetivo no convite. Já tivemos clientes que apareceram achando que seria um treinamento, mesmo com os objetivos em negrito no e-mail, confirme que a pessoa entendeu a proposta antes de enviar',
          'Instruções prévias: peça silêncio, microfone testado e internet estável. Manter a atenção de quem está no próprio ambiente de trabalho é o maior desafio, por isso workshops remotos não podem ser longos, ajuda dar um tempo para ensinar o uso dos boards interativos e garantir que todos tenham voz, com um tom leve e descontraído',
          'Viabilidade: mais barato, sem gastos com espaço, deslocamento ou alimentação, e mais fácil de escalar, dá para reunir participantes do Brasil inteiro em um único workshop, o que seria inviável presencialmente',
          'Documentação: gravar e transcrever fica mais simples, já que as plataformas de vídeo têm recursos nativos para isso',
        ],
      },
      { kind: 'heading', text: 'Workshop presencial' },
      {
        kind: 'image',
        src: '/assets/articles/workshops/05-construsummit.jpg',
        caption: 'Workshop presencial realizado no Construsummit. Todos os direitos reservados a Softplan.',
      },
      {
        kind: 'list',
        items: [
          'Disponibilidade: o maior desafio é a agenda de todo mundo. Optamos por realizar workshops em diferentes capitais, guiados pela concentração de usuários, nem sempre a decisão ideal, mas a possível',
          'Mais colaborativo: sem câmera fechada e sem comentários anônimos, o ambiente fica mais espontâneo, fica evidente sobretudo nas dinâmicas de quebra-gelo, com maior fluidez e produtividade',
          'Instruções prévias: sem problemas de conexão, mas o local precisa ser silencioso, iluminado e ventilado, já fizemos workshops em locais com acústica tão ruim que os próprios participantes mal se ouviam. Leve os recursos necessários (computador, projetor, flipchart, post-its) e chegue com antecedência para testar tudo',
          'Flexibilidade: atrasos acontecem, então tenha um plano B. Workshops de dois dias tendem a perder metade dos participantes no segundo dia, o ideal é concentrar em um único turno de até 5h, com intervalos que não sejam longos demais',
          'Viabilidade: mais caro e exige mais organização, espaço, materiais, transporte e alimentação entram na conta',
          'Documentação: o local e o equipamento de gravação importam muito. Tenha sempre alguém dedicado a observar, anotar e registrar fotos, sem ser o Facilitador, pensando tanto na documentação quanto na divulgação do trabalho',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Remoto ou presencial, o essencial é que os clientes se sintam à vontade para colaborar, expor sua visão e trazer os gargalos do dia a dia, e que a gente, como designers, esteja pronto para escutar com atenção, porque qualquer detalhe pode ser a peça-chave para inovar. Cada workshop ensina algo novo, e é assim que seguimos evoluindo.',
      },
      {
        kind: 'image',
        src: '/assets/articles/workshops/06-autoras.png',
        caption: 'As autoras: Clara, Ana e Maria Luiza',
      },
    ],
    bodyEn: [
      { kind: 'heading', text: 'Who we are and what we do' },
      {
        kind: 'paragraph',
        text: "We're three product designers on the Sienge (Softplan) team, focused on research and experience-centered solutions. Between 2022 and 2023, we ran several workshops, remote and in person, with customers, aiming to understand real problems and bring innovation to the B2B software we work on.",
      },
      {
        kind: 'paragraph',
        text: "Since every client company has its own processes, bringing different teams together in the same workshop makes it obvious just how much the product needs to support different ways of working, a direct challenge for anyone designing flows and interfaces.",
      },
      { kind: 'heading', text: 'What is a workshop' },
      {
        kind: 'paragraph',
        text: "A workshop is a collaborative activity where design, users and other stakeholders build solutions to a specific problem together. It's an effective way to bring the user into the process, listening to pain points, ideas and experiences, on the way to products that are better aligned with what people actually need.",
      },
      {
        kind: 'image',
        src: '/assets/articles/workshops/02-postits.jpg',
        caption: 'Ideation post-its being stuck to glass doors by customers. All rights reserved to Softplan.',
      },
      { kind: 'heading', text: 'The workshop structure and our role' },
      {
        kind: 'paragraph',
        text: "Our team always sets aside two to three designers for the roles of Facilitator and Observer(s). The Facilitator creates the collaborative environment, sets objectives and runs the activities, generating ideas, mediating conflict and practicing active listening so every perspective is heard, without losing track of each activity's time.",
      },
      {
        kind: 'image',
        src: '/assets/articles/workshops/03-facilitador.jpeg',
        caption: 'The Facilitator designer: mediates and presents, but also listens actively. All rights reserved to Softplan.',
      },
      {
        kind: 'paragraph',
        text: 'The other designers act as support: they capture what might go unnoticed, film, note down key points and, depending on the activity, encourage more participation, but their main role is to observe, understanding both the pace and the content of the discussion.',
      },
      {
        kind: 'paragraph',
        text: "Remotely, these roles adapt: one person leads facilitation while the other documents insights, feelings and comments from users, many are hesitant to edit the boards directly, so this documentation from the Observer makes the later analysis much easier.",
      },
      { kind: 'heading', text: 'Lessons learned' },
      {
        kind: 'paragraph',
        text: "We've broken down the main lessons for successful workshops, remote or in person.",
      },
      { kind: 'heading', text: 'Remote workshop' },
      {
        kind: 'image',
        src: '/assets/articles/workshops/04-miro.png',
        caption: 'Building collaborative environments through the Miro platform. All rights reserved to Softplan.',
      },
      {
        kind: 'list',
        items: [
          'Availability: the fastest to schedule. Choose a stable, easy-to-use video conferencing platform, and check whether you can mute open microphones, background noise and crosstalk get in the way a lot',
          'Clear purpose: explain the goal clearly in the invite. We\'ve had customers show up thinking it would be a training session, even with the objectives in bold in the email, confirm the person understood the proposal before sending',
          "Prior instructions: ask for quiet, a tested microphone and a stable connection. Holding the attention of someone who's in their own workspace is the biggest challenge, so remote workshops can't run too long, it helps to set aside time to teach people how to use the interactive boards and make sure everyone has a voice, with a light, relaxed tone",
          'Feasibility: cheaper, no spending on venue, travel or catering, and easier to scale, you can bring together participants from all over Brazil in a single workshop, which would be unfeasible in person',
          'Documentation: recording and transcribing is simpler, since video platforms have built-in features for that',
        ],
      },
      { kind: 'heading', text: 'In-person workshop' },
      {
        kind: 'image',
        src: '/assets/articles/workshops/05-construsummit.jpg',
        caption: 'In-person workshop held at Construsummit. All rights reserved to Softplan.',
      },
      {
        kind: 'list',
        items: [
          "Availability: the biggest challenge is everyone's schedule. We chose to hold workshops in different capital cities, guided by where users were concentrated, not always the ideal decision, but the feasible one",
          'More collaborative: with no camera off and no anonymous comments, the environment feels more spontaneous, it shows especially in icebreaker activities, with more flow and productivity',
          "Prior instructions: no connectivity issues, but the venue needs to be quiet, well lit and ventilated, we've run workshops in places with acoustics so bad that participants could barely hear each other. Bring the resources you need (computer, projector, flipchart, post-its) and arrive early to test everything",
          "Flexibility: delays happen, so have a plan B. Two-day workshops tend to lose half their participants on the second day, it's best to fit everything into a single session of up to 5 hours, with breaks that aren't too long",
          'Feasibility: more expensive and requires more organization, venue, materials, transport and catering all factor in',
          'Documentation: the venue and recording equipment matter a lot. Always have someone dedicated to observing, taking notes and capturing photos, someone other than the Facilitator, thinking about both documentation and sharing the work afterward',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Remote or in person, what matters most is that customers feel comfortable collaborating, sharing their view and bringing up their day-to-day bottlenecks, and that we, as designers, are ready to listen closely, because any detail can be the key to innovation. Every workshop teaches us something new, and that\'s how we keep evolving.',
      },
      {
        kind: 'image',
        src: '/assets/articles/workshops/06-autoras.png',
        caption: 'The authors: Clara, Ana and Maria Luiza',
      },
    ],
  },
  {
    slug: 'ondoc',
    kicker: 'Estudo de caso de UX/UI',
    kickerEn: 'UX/UI Case Study',
    title: 'onDoc, a sua carteira de documentação digital',
    titleEn: 'onDoc, your digital document wallet',
    meta: '24 de fevereiro de 2022 · 16 min de leitura',
    metaEn: 'February 24, 2022 · 16 min read',
    cover: '/assets/articles/ondoc/01-cover.png',
    listDate: '24 fev 2022',
    listDateEn: 'Feb 24, 2022',
    listTitle: 'onDoc, a sua carteira de documentação digital',
    listTitleEn: 'onDoc, your digital document wallet',
    listExcerpt:
      'Um estudo para ajudar as pessoas com o armazenamento e envio de documentos pessoais para processos burocráticos mais seguro, fácil e rápido.',
    listExcerptEn:
      'A study to help people store and send personal documents for bureaucratic processes in a safer, easier and faster way.',
    body: [
      {
        kind: 'paragraph',
        text: 'Aceitei o desafio de desenvolver um aplicativo de carteira virtual, para que os documentos físicos pudessem ser substituídos pelos digitais sem o risco de perdê-los, buscando uma maneira de ajudar as pessoas em processos burocráticos.',
      },
      {
        kind: 'paragraph',
        text: 'Todo cidadão brasileiro precisa obrigatoriamente ter documentos de identificação desde o nascimento e, com o passar dos anos, é necessário emitir mais documentos que identificam e registram informações importantes sobre cada pessoa.',
      },
      {
        kind: 'paragraph',
        text: 'Iniciei o estudo com pesquisas para entender o cenário atual e encontrei o DNI (Documento Nacional de Identidade), um documento único que reuniria todos os dados de identificação de um indivíduo. Por já estar em desenvolvimento, descartei a possibilidade inicialmente proposta de encontrar um meio que substituísse os documentos físicos por digitais.',
      },
      {
        kind: 'image',
        src: '/assets/articles/ondoc/02-dni.jpeg',
        caption: 'DNI (documento nacional de identidade)',
      },
      {
        kind: 'paragraph',
        text: 'A maioria de nós conta com muitos outros documentos importantes, certificações, diplomas, currículos e até comprovantes de residência, que precisa carregar consigo ou enviar em cópia para dar andamento a burocracias no Brasil, seja para cadastro escolar, processos admissionais, aluguéis, entre outros. Vale também ressaltar que muitos pais precisam guardar, além dos próprios documentos, os de seus filhos até uma determinada idade, o que multiplica a quantidade de documentos para transportar.',
      },
      {
        kind: 'paragraph',
        text: 'Com essa quantidade elevada de documentos físicos importantes, é comum a perda ou o roubo. Devido à pandemia, em 2020 os Correios receberam mais de 90 mil documentos perdidos em suas agências, em anos anteriores, sem isolamento social, a média era superior a 170 mil.',
      },
      {
        kind: 'paragraph',
        text: 'Pela quantidade de burocracia necessária ao perder um documento, e como em muitos lugares não é preciso apresentá-los fisicamente (apenas informar os números), as pessoas procuram alternativas para não precisar carregar todos eles consigo.',
      },
      {
        kind: 'paragraph',
        text: 'Levando em consideração que hoje o celular é o principal meio de acesso à internet no país e já substitui alguns documentos, carteira de trabalho, CNH, CPF, título de eleitor, mas em aplicativos diferentes para cada um, o aplicativo onDoc foi criado.',
      },
      { kind: 'heading', text: 'Objetivo do projeto' },
      {
        kind: 'paragraph',
        text: 'Criar uma solução viável para trazer praticidade à vida das pessoas na hora de reunir cópias de documentos pessoais para processos burocráticos no Brasil.',
      },
      {
        kind: 'paragraph',
        text: 'Através das pesquisas deste estudo, observei que, quando as pessoas precisam entregar cópias de documentos para algum cadastro, há um esforço grande para reuni-los, seja por perda, roubo, desorganização ou por ter que refazer as cópias, o que gera impaciência.',
      },
      {
        kind: 'paragraph',
        text: 'Para resolver esse problema, o onDoc foi criado para otimizar o tempo das pessoas: com os documentos salvos virtualmente em um único lugar, o envio fica mais fácil e a consulta mais rápida, com acesso móvel a qualquer momento.',
      },
      {
        kind: 'paragraph',
        text: 'Com base nisso, busquei desenvolver o aplicativo junto com um desenvolvedor até o final do primeiro semestre de 2022, traçando as seguintes métricas:',
      },
      {
        kind: 'list',
        items: [
          'Quantidade de vezes que o usuário abre o aplicativo no mês, para analisar o quão útil e frequente é o uso',
          'Quantidade de documentos cadastrados por usuário, para validar novas funcionalidades',
          'Quantidade de usuários ativos com base no total de downloads vs. desinstalações, para medir a satisfação geral',
        ],
      },
      { kind: 'paragraph', text: 'E metas:' },
      {
        kind: 'list',
        items: [
          'Retenção de 30% no aplicativo sobre o total de downloads',
          'Manter a nota do aplicativo nas lojas acima de 4 estrelas',
          'Ter 90% dos usuários ativos com pelo menos um documento cadastrado',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Por falta de uma linha de base, as métricas, objetivos e prazos seriam revisados mensalmente. Abaixo, apresento as principais etapas realizadas para a prototipação do onDoc.',
      },
      { kind: 'heading', text: 'Matriz CSD' },
      {
        kind: 'paragraph',
        text: 'Para entender melhor o cenário, as protopersonas e o mapa da jornada, apliquei uma pesquisa via formulário do Google. As perguntas foram desenvolvidas a partir de uma matriz CSD, de acordo com as principais Certezas, Suposições e Dúvidas.',
      },
      { kind: 'image', src: '/assets/articles/ondoc/03-matriz-csd.jpeg', caption: 'Matriz CSD' },
      {
        kind: 'paragraph',
        text: 'A pesquisa foi enviada em dezembro de 2021 por redes sociais e contou com 64 participantes, ajudando a validar a matriz CSD e a entender melhor o problema e o público para o qual o produto seria desenvolvido.',
      },
      { kind: 'heading', text: 'Pesquisa quantitativa' },
      {
        kind: 'image',
        src: '/assets/articles/ondoc/04-pesquisa-quant.png',
        caption: 'Resumo dos resultados da pesquisa quantitativa',
      },
      {
        kind: 'paragraph',
        text: 'Uma das perguntas buscava validar a certeza de que todo mundo já precisou enviar cópia de algum documento, incluí a opção "nunca precisei" para não enviesar a questão. Resultado: 100% das pessoas já precisaram enviar cópias de documentos para algo.',
      },
      {
        kind: 'paragraph',
        text: 'Também validei a suposição de que as pessoas não lembram de todos os números de seus documentos: 92% já precisou de alguma informação de um documento e não tinha em mãos para conferir.',
      },
      {
        kind: 'paragraph',
        text: 'Outra suposição era que as pessoas acham chato separar e enviar documentos para processos burocráticos: 57%, mais da metade, disse se sentir impaciente com essa tarefa.',
      },
      {
        kind: 'paragraph',
        text: 'Para a suposição de que as pessoas não têm seus documentos salvos digitalmente, perguntei como costumavam proceder da última vez que precisaram enviá-los: 58% não tinha os documentos salvos e refazia o processo de digitalização sempre que necessário; 21% precisou pedir ou pagar para alguém fazer esse processo por não saber como.',
      },
      {
        kind: 'paragraph',
        text: 'Por se tratar de documentos pessoais, eu supunha que as pessoas tivessem receio de usar aplicativos ou salvar dados em algum lugar digital. Perguntei se utilizavam algum aplicativo com dados pessoais sensíveis (banco, CNH, etc.) e 97% respondeu que sim, o que invalidou essa suposição.',
      },
      {
        kind: 'paragraph',
        text: 'Essas informações evidenciaram grandes oportunidades para o estudo e trouxeram mais clareza ao projeto, mas ainda seria necessária uma pesquisa qualitativa para entender melhor o processo do usuário.',
      },
      { kind: 'heading', text: 'Pesquisa qualitativa' },
      {
        kind: 'paragraph',
        text: 'Nesta etapa, formulei uma pesquisa semiestruturada com 4 pessoas que deixaram contato na pesquisa quantitativa, feita conforme a disponibilidade de cada uma, algumas pessoalmente, outras por videochamada.',
      },
      {
        kind: 'paragraph',
        text: 'As pessoas entrevistadas tinham respostas em comum: já haviam precisado de um dado de algum documento e não o tinham em mãos, já haviam enviado documentos para processos admissionais e se sentiam impacientes ao precisar separá-los.',
      },
      {
        kind: 'paragraph',
        text: 'A partir disso, formulei perguntas para entender melhor o processo de separação e envio dos documentos, conduzindo a entrevista como uma conversa para deixar a pessoa mais à vontade, sempre passando por algumas perguntas-chave, como:',
      },
      {
        kind: 'list',
        items: [
          'Você indicou que já precisou de algum número ou dado importante de um documento e não o tinha em mãos. Lembra de algum fato marcante quando isso aconteceu? Poderia relatar?',
          'Tem algum motivo especial para não carregar esses documentos com você? Resolveu esse problema de alguma maneira?',
          'Você respondeu que precisou separar e enviar cópias de documentos para processos admissionais, poderia descrever como fez nessa tarefa?',
        ],
      },
      { kind: 'paragraph', text: 'Algumas respostas interessantes:' },
      {
        kind: 'list',
        items: [
          '"Lembro de precisar do número do PIS que tem na carteira de trabalho, era pra verificar se eu tinha direito a um valor no site da Caixa. Fiquei bem estressado na hora, porque moro em outra cidade e minha carteira estava na casa da minha mãe, tive que esperar ela procurar e me enviar uma foto com o número."',
          '"Não gosto de carregar muitos documentos, dinheiro ou cartão de crédito, por segurança, porque, se eu perder um documento, é muito burocrático emitir a segunda via. E também por necessidade, dificilmente preciso da carteira de trabalho comigo."',
          '"Não gosto de carregar por medo de ser roubada ou de perder. Já perdi minha carteira com tudo dentro, foi muito trabalhoso refazer todos os documentos, e senti medo de que usassem meus dados."',
          '"Hoje tenho meus documentos como fotos no celular, mas sempre que preciso fico procurando, demora um pouco."',
          '"É sempre bem trabalhoso, porque não sei mexer bem no computador; sempre que preciso enviar essa documentação, tenho que pedir para os meus filhos fazerem por mim."',
        ],
      },
      {
        kind: 'paragraph',
        text: 'Essa pesquisa me ajudou a compreender melhor o processo dos usuários, suas reais necessidades, e a extrair diversas oportunidades.',
      },
      { kind: 'heading', text: 'Usuários' },
      {
        kind: 'paragraph',
        text: 'A persona criada ajuda qualquer pessoa no projeto a entender o usuário com objetividade.',
      },
      { kind: 'image', src: '/assets/articles/ondoc/05-persona.jpeg', caption: 'Persona Kátia Silva' },
      {
        kind: 'paragraph',
        text: 'Com base nos resultados das pesquisas, este projeto focou em apenas uma persona para melhor representar uma solução específica, embora as pesquisas qualitativas indiquem que o projeto possa se estender a outros perfis de usuário no futuro.',
      },
      { kind: 'heading', text: 'Mapa da jornada da Kátia' },
      {
        kind: 'paragraph',
        text: 'Com a persona definida, criei o mapa de jornada do usuário a partir das pesquisas qualitativas, trazendo mais clareza sobre a rotina da usuária, os problemas que enfrentava e novas oportunidades de melhoria da experiência.',
      },
      {
        kind: 'image',
        src: '/assets/articles/ondoc/06-journey-map.jpeg',
        caption: 'Nielsen Norman Group Journey Map Template, traduzido por Leandro Rezende (@uxunicornio)',
      },
      { kind: 'heading', text: 'Storytelling' },
      {
        kind: 'paragraph',
        text: 'Nessa etapa, utilizei o Pixar Storytelling para representar com clareza a jornada da persona Kátia Silva e ajudar a entender melhor o propósito do produto:',
      },
      {
        kind: 'paragraph',
        text: 'Era uma vez Kátia Silva, casada, mãe de um casal de adolescentes, professora dedicada de 45 anos que sempre amou sua profissão e adora estar com seus alunos. Todos os dias pela manhã, Kátia arruma a casa e faz o almoço para os filhos irem à escola; quando sobra uma folga, estuda um pouco e se prepara para os concursos que pretende prestar, para garantir sua vaga como professora no ano seguinte.',
      },
      {
        kind: 'paragraph',
        text: 'Um dia, os filhos ligaram avisando que o resultado do concurso havia saído e que ela tinha passado. Feliz, Kátia precisou se organizar para separar os documentos do processo de admissão, mas, nessa etapa, fica nervosa: acha que tem muita coisa para fazer, não sabe mexer bem no computador, sente que perde muito tempo nele e se frustra por não conseguir fazer tudo sozinha.',
      },
      {
        kind: 'paragraph',
        text: 'Por isso, precisa sempre pedir ajuda aos filhos e, quando eles não estão em casa, recorre a terceiros e paga por esse serviço, o que a deixa preocupada em sair de casa e perder seus documentos na rua.',
      },
      {
        kind: 'paragraph',
        text: 'Até que Kátia descobriu o onDoc e agora se sente segura, pois sempre tem seus documentos salvos no celular, sem medo de perdê-los fisicamente. Com a usabilidade fácil e poucas etapas para enviar seus documentos, consegue fazer tudo sozinha, sem depender de ninguém, e hoje se sente mais feliz e empoderada.',
      },
      { kind: 'heading', text: 'Alternativas de solução' },
      {
        kind: 'paragraph',
        text: 'De acordo com os resultados das pesquisas e as oportunidades descritas nas jornadas de usuários, fiz uma matriz de impacto x esforço para encontrar uma possível solução de MVP, Produto Mínimo Viável, com funcionalidades simples, rápidas de desenvolver, mas que gerassem valor e pensassem nos usuários.',
      },
      { kind: 'image', src: '/assets/articles/ondoc/07-impacto-esforco.jpeg', caption: 'Matriz Impacto x Esforço' },
      {
        kind: 'paragraph',
        text: 'Priorizei as oportunidades no quadrante de maior prioridade, menor esforço e maior impacto: tornar a separação de documentos mais fácil, e o envio mais fácil e rápido para processos burocráticos.',
      },
      {
        kind: 'paragraph',
        text: 'Esforço: baixo, pois seria necessário construir um aplicativo para manter os documentos cadastrados e prontos para envio. Impacto: alto, pois as pessoas teriam maior organização dos seus documentos, já prontos para uso, ajudando em processos burocráticos. Alternativa de solução: um aplicativo com armazenamento dos documentos, sempre prontos para envio quando necessário.',
      },
      {
        kind: 'paragraph',
        text: 'Entre as demais oportunidades não priorizadas: substituir o documento físico pelo digital (impacto alto, mas esforço alto por depender de validação junto ao governo); ajudar as pessoas a não perderem seus documentos (esforço alto, dependeria de uma campanha de conscientização); ensinar pessoas com dificuldade em ferramentas online (impacto baixo, público muito específico); encontrar documentos perdidos (esforço mediano, dependeria de uma plataforma de achados e perdidos sempre atualizada); e ajudar as pessoas a guardar documentos em nuvem (impacto e esforço baixos, mas pouco prático por não ser uma solução exclusiva para documentos pessoais).',
      },
      {
        kind: 'paragraph',
        text: 'A prioridade escolhida para a construção do MVP foi validada com um desenvolvedor, para avaliar o grau de dificuldade e a viabilidade.',
      },
      { kind: 'heading', text: 'A solução' },
      {
        kind: 'paragraph',
        text: 'Priorizei: facilidade na hora de enviar e separar documentos para processos burocráticos. Como tornar esse processo mais fácil e rápido?',
      },
      {
        kind: 'paragraph',
        text: 'A solução proposta foi o desenvolvimento do onDoc, que reúne cópias de documentos pessoais em um só aplicativo. O onDoc permite ao usuário incluir o documento por digitalização e mantê-lo armazenado para uso sempre que necessário, exportando em PDF, individualmente ou em conjunto, em um único arquivo. O aplicativo conta com a preocupação de segurança dos dados, permitindo acesso apenas com e-mail e senha cadastrados pelo usuário.',
      },
      { kind: 'heading', text: 'Business Model Canvas' },
      { kind: 'paragraph', text: 'Para melhor entendimento do projeto, criei um Business Model Canvas.' },
      { kind: 'image', src: '/assets/articles/ondoc/08-bmc.png', caption: 'Business Model Canvas' },
      {
        kind: 'paragraph',
        text: 'A oferta de valor seria um aplicativo de carteira de documentação pessoal que reúne em um único lugar a cópia de todos os documentos que a pessoa desejar cadastrar, tornando mais fácil, rápido e seguro o envio para processos burocráticos. Uma atividade-chave seria o desenvolvimento e a manutenção do software, com desenvolvedores e um servidor seguro como recursos-chave, e a estrutura de custos incluindo equipe, servidor e publicidade em redes sociais, comerciais e rádios.',
      },
      {
        kind: 'paragraph',
        text: 'Entre as parcerias-chave estariam RH\'s e escolas, já que grande parte dos resultados das pesquisas apontou a separação de documentos para processos admissionais e para os filhos. De início, o aplicativo seria gratuito, mas o desenvolvimento de novas funções poderia se tornar uma fonte de receita futura.',
      },
      { kind: 'heading', text: 'Rabiscoframe' },
      {
        kind: 'paragraph',
        text: 'A partir da solução escolhida, criei os primeiros rabiscoframes, que deram origem ao primeiro protótipo de baixa fidelidade testado com usuários. As próximas etapas trouxeram muitos ajustes e novas funcionalidades, aqui ficou clara a importância de testar, entender o usuário e observar suas ações.',
      },
      { kind: 'image', src: '/assets/articles/ondoc/09-rabiscoframes.jpeg', caption: 'Rabiscoframes da ideação escolhida' },
      { kind: 'heading', text: 'Primeiro teste de usabilidade' },
      {
        kind: 'paragraph',
        text: 'Com o auxílio do Marvel, criei um protótipo de baixa fidelidade a partir das ideias dos rabiscoframes e testei com usuários, pedindo que realizassem três tarefas: digitalizar a CNH, exportar documentos em PDF e cadastrar um novo documento.',
      },
      {
        kind: 'paragraph',
        text: 'O teste mostrou o que deveria ser mantido, descartado e melhorado, além de validar as ideias priorizadas. Entre os principais feedbacks: a necessidade de uma opção para excluir documentos (incluí o ícone de lixeira), a opção de editar o nome do arquivo (antes só era possível refazer a digitalização) e, principalmente, a inclusão personalizada de documentos, antes o aplicativo dava opções fixas, mas percebi que nem todas as pessoas tinham CNH ou outros documentos específicos, então passei a permitir que cada uma personalizasse e incluísse os documentos na ordem que preferisse.',
      },
      { kind: 'heading', text: 'Wireframe e fluxo do usuário' },
      {
        kind: 'paragraph',
        text: 'Em seguida, desenvolvi o wireframe de média fidelidade e o fluxo do usuário, já ajustados com os pontos levantados nos testes de usabilidade do protótipo de baixa fidelidade.',
      },
      { kind: 'image', src: '/assets/articles/ondoc/10-wireframe.png', caption: 'Wireframe e fluxo do usuário' },
      { kind: 'paragraph', text: 'Testei novamente com usuários reais, observando e anotando os possíveis pontos de melhoria.' },
      { kind: 'heading', text: 'Styleguide' },
      {
        kind: 'paragraph',
        text: 'Com o wireframe pronto e os fluxos definidos, chegou a hora de definir a identidade visual do aplicativo. Criei um guia de estilos para garantir unidade e consistência na experiência, visual, de usabilidade e de acessibilidade.',
      },
      {
        kind: 'paragraph',
        text: 'As cores escolhidas replicam a identidade visual do logotipo (verde e azul), cada uma com duas tonalidades próximas para representar os efeitos de transição dos botões. A tipografia escolhida foi a Poppins, por ter nove pesos diferentes, um design elegante, boa legibilidade e carregamento rápido por ser uma fonte do Google. Botões e ícones seguem o padrão de cores do branding, com ícones do Material Design, de código aberto e gratuitos.',
      },
      {
        kind: 'image',
        src: '/assets/articles/ondoc/11-styleguide.png',
        caption: 'Guia de estilo que consolida o visual do aplicativo',
      },
      { kind: 'heading', text: 'Protótipo de alta fidelidade' },
      {
        kind: 'image',
        src: '/assets/articles/ondoc/12-fluxo-prototipo.gif',
        caption: 'Fluxo do protótipo do onDoc',
      },
      {
        kind: 'paragraph',
        text: 'Com base no wireframe e no guia de estilos, criei um protótipo de alta fidelidade e testei com 5 pessoas, todas conseguiram concluir as tarefas solicitadas. O feedback foi que o aplicativo é simples e fácil de usar; apenas uma pessoa, entre as cinco, teve dúvida sobre o ícone de sair do aplicativo, ponto que ficou marcado para ser estudado futuramente com mais usuários.',
      },
      { kind: 'heading', text: 'Próximos passos' },
      { kind: 'paragraph', text: 'Para dar continuidade ao onDoc, algumas melhorias futuras:' },
      {
        kind: 'list',
        items: [
          'Opção de compartilhar documentos direto do aplicativo, sem precisar baixá-los no celular',
          'Campo de busca para localizar documentos, caso o usuário tenha muitos cadastrados',
          'Opção de alterar os ícones de acordo com o documento, para melhor identificação',
          'Escolha do formato de exportação, JPEG, PDF ou outro',
          'Autenticação biométrica e Face ID',
          'Digitalização com mais de uma folha por documento (ex.: diploma frente e verso)',
          'Possibilidade de anexar arquivos diretamente do dispositivo',
        ],
      },
      {
        kind: 'paragraph',
        text: 'A pesquisa com usuários é essencial para a construção de qualquer solução, e entendo que não existe ponto final para um produto, sempre haverá oportunidades de melhoria. Com a implementação deste projeto no mercado, o foco continuaria no estudo da experiência do usuário, no acompanhamento de métricas para melhorias contínuas e na segurança do aplicativo.',
      },
      { kind: 'heading', text: 'Conclusão e aprendizados' },
      {
        kind: 'paragraph',
        text: 'Este projeto foi desafiador e trouxe muitos ensinamentos importantes: o como só funciona quando a gente entende o por quê.',
      },
      {
        kind: 'paragraph',
        text: 'Focar sempre na resolução dos problemas dos usuários, entender suas sensações e comportamentos para criar soluções melhores, faz com que a experiência seja boa e gere retorno positivo para o produto.',
      },
      {
        kind: 'paragraph',
        text: 'Estou muito feliz com o resultado deste projeto e com todo o conhecimento adquirido. Através do programa UX Unicórnio, pude aplicar esses conhecimentos na minha rotina de trabalho e perceber erros e acertos que contribuíram muito para meu aprendizado e desenvolvimento pessoal e profissional.',
      },
      {
        kind: 'paragraph',
        text: 'Design é projetar soluções, e a experiência ela acontece. Entregar valor é o que me faz UX designer.',
      },
    ],
    bodyEn: [
      {
        kind: 'paragraph',
        text: 'I took on the challenge of building a digital wallet app so physical documents could be replaced by digital ones without the risk of losing them, looking for a way to help people through bureaucratic processes.',
      },
      {
        kind: 'paragraph',
        text: 'Every Brazilian citizen is required to have identification documents from birth, and over the years needs to obtain more documents that identify and record important information about that person.',
      },
      {
        kind: 'paragraph',
        text: 'I started the study with research to understand the current landscape and came across the DNI (National Identity Document), a single document that would bring together all of a person\'s identification data. Since it was already in development, I ruled out the initially proposed idea of finding a way to replace physical documents with digital ones.',
      },
      {
        kind: 'image',
        src: '/assets/articles/ondoc/02-dni.jpeg',
        caption: 'DNI (National Identity Document)',
      },
      {
        kind: 'paragraph',
        text: "Most of us also rely on many other important documents, certificates, diplomas, résumés and even proof of address, that we need to carry around or send copies of to get through bureaucratic processes in Brazil, whether for school enrollment, hiring processes, renting a home, and more. It's also worth noting that many parents need to keep not only their own documents but their children's as well, up to a certain age, which multiplies the number of documents to carry.",
      },
      {
        kind: 'paragraph',
        text: 'With such a large number of important physical documents, loss or theft is common. Because of the pandemic, in 2020 the Brazilian postal service received more than 90,000 lost documents at its branches, in previous years, without social isolation, the average was over 170,000.',
      },
      {
        kind: 'paragraph',
        text: "Given how much bureaucracy is involved in losing a document, and since in many places you don't need to present them physically (just provide the numbers), people look for alternatives so they don't have to carry them all around.",
      },
      {
        kind: 'paragraph',
        text: 'Considering that today the phone is the main way people access the internet in the country, and already replaces some documents, work card, driver\'s license, tax ID, voter ID, but in a different app for each one, the onDoc app was created.',
      },
      { kind: 'heading', text: 'Project goal' },
      {
        kind: 'paragraph',
        text: "Create a viable solution to bring convenience to people's lives when gathering copies of personal documents for bureaucratic processes in Brazil.",
      },
      {
        kind: 'paragraph',
        text: "Through the research in this study, I observed that when people need to hand over copies of documents for some kind of registration, there's a lot of effort involved in gathering them, whether due to loss, theft, disorganization, or having to redo the copies, which creates impatience.",
      },
      {
        kind: 'paragraph',
        text: 'To solve this problem, onDoc was created to optimize people\'s time: with documents saved virtually in one place, sending them becomes easier and looking them up faster, with mobile access anytime.',
      },
      {
        kind: 'paragraph',
        text: 'Based on this, I set out to build the app together with a developer by the end of the first half of 2022, defining the following metrics:',
      },
      {
        kind: 'list',
        items: [
          'How many times a user opens the app per month, to gauge how useful and frequent its use is',
          'How many documents each user registers, to validate new features',
          'How many active users, based on total downloads versus uninstalls, to measure overall satisfaction',
        ],
      },
      { kind: 'paragraph', text: 'And goals:' },
      {
        kind: 'list',
        items: [
          '30% app retention out of total downloads',
          'Keep the app store rating above 4 stars',
          'Have 90% of active users with at least one document registered',
        ],
      },
      {
        kind: 'paragraph',
        text: 'With no baseline to work from, the metrics, goals and deadlines would be reviewed monthly. Below, I walk through the main steps taken to prototype onDoc.',
      },
      { kind: 'heading', text: 'CSD Matrix' },
      {
        kind: 'paragraph',
        text: 'To better understand the landscape, proto-personas and journey map, I ran a survey using a Google Form. The questions were built from a CSD matrix, based on the main Certainties, Assumptions and Doubts.',
      },
      { kind: 'image', src: '/assets/articles/ondoc/03-matriz-csd.jpeg', caption: 'CSD Matrix' },
      {
        kind: 'paragraph',
        text: 'The survey was sent out in December 2021 via social media and had 64 respondents, helping validate the CSD matrix and better understand the problem and the audience the product would be built for.',
      },
      { kind: 'heading', text: 'Quantitative research' },
      {
        kind: 'image',
        src: '/assets/articles/ondoc/04-pesquisa-quant.png',
        caption: 'Summary of the quantitative research results',
      },
      {
        kind: 'paragraph',
        text: 'One of the questions aimed to validate the certainty that everyone has needed to send a copy of some document at some point, I included the option "never needed to" so as not to bias the question. Result: 100% of people had needed to send document copies for something.',
      },
      {
        kind: 'paragraph',
        text: "I also validated the assumption that people don't remember all their document numbers: 92% had needed some piece of document information at some point and didn't have it on hand to check.",
      },
      {
        kind: 'paragraph',
        text: 'Another assumption was that people find it annoying to gather and send documents for bureaucratic processes: 57%, more than half, said they felt impatient with this task.',
      },
      {
        kind: 'paragraph',
        text: "For the assumption that people don't have their documents saved digitally, I asked how they usually handled it the last time they needed to send them: 58% didn't have the documents saved and went through the scanning process again whenever needed; 21% had to ask or pay someone else to do it because they didn't know how.",
      },
      {
        kind: 'paragraph',
        text: 'Since these are personal documents, I assumed people would be wary of using apps or saving data somewhere digital. I asked whether they used any app with sensitive personal data (banking, driver\'s license, etc.), and 97% said yes, which invalidated that assumption.',
      },
      {
        kind: 'paragraph',
        text: 'This information revealed big opportunities for the study and brought more clarity to the project, but qualitative research was still needed to better understand the user\'s process.',
      },
      { kind: 'heading', text: 'Qualitative research' },
      {
        kind: 'paragraph',
        text: "At this stage, I put together a semi-structured study with 4 people who'd left their contact info in the quantitative survey, conducted based on each person's availability, some in person, others over video call.",
      },
      {
        kind: 'paragraph',
        text: "The people interviewed had answers in common: they'd all needed a piece of document information at some point and didn't have it on hand, had all sent documents for hiring processes, and felt impatient having to gather them.",
      },
      {
        kind: 'paragraph',
        text: 'From there, I put together questions to better understand the process of gathering and sending documents, running the interview like a conversation to keep the person at ease, always covering a few key questions, like:',
      },
      {
        kind: 'list',
        items: [
          "You mentioned you've needed a number or piece of information from a document and didn't have it on hand. Do you remember a specific time that happened? Could you tell me about it?",
          "Is there a particular reason you don't carry these documents with you? Did you solve that problem in some way?",
          "You said you've had to gather and send copies of documents for hiring processes, could you describe how you went about that task?",
        ],
      },
      { kind: 'paragraph', text: 'Some interesting answers:' },
      {
        kind: 'list',
        items: [
          '"I remember needing my PIS number, which is on my work card, to check whether I was entitled to a payment on Caixa\'s website. I was really stressed in the moment, because I live in another city and my work card was at my mom\'s house, I had to wait for her to find it and send me a photo of the number."',
          '"I don\'t like carrying a lot of documents, cash or credit cards, for safety reasons, because if I lose a document, it\'s a huge hassle to get a replacement. Also out of necessity, I rarely need my work card with me."',
          '"I don\'t like carrying them because I\'m afraid of being robbed or losing them. I once lost my wallet with everything inside, it was a lot of work redoing every document, and I was scared someone would use my information."',
          '"Right now I keep my documents as photos on my phone, but whenever I need one I end up searching for a while, it takes some time."',
          '"It\'s always a hassle, because I\'m not great with computers; whenever I need to send that kind of documentation, I have to ask my kids to do it for me."',
        ],
      },
      {
        kind: 'paragraph',
        text: "This research helped me better understand users' processes and real needs, and to surface several opportunities.",
      },
      { kind: 'heading', text: 'Users' },
      {
        kind: 'paragraph',
        text: 'The persona created helps anyone on the project understand the user objectively.',
      },
      { kind: 'image', src: '/assets/articles/ondoc/05-persona.jpeg', caption: 'Persona: Kátia Silva' },
      {
        kind: 'paragraph',
        text: 'Based on the research results, this project focused on a single persona to better represent one specific solution, though the qualitative research suggests the project could extend to other user profiles in the future.',
      },
      { kind: 'heading', text: "Kátia's journey map" },
      {
        kind: 'paragraph',
        text: "With the persona defined, I built the user journey map from the qualitative research, bringing more clarity to the user's routine, the problems she faced, and new opportunities to improve the experience.",
      },
      {
        kind: 'image',
        src: '/assets/articles/ondoc/06-journey-map.jpeg',
        caption: 'Nielsen Norman Group Journey Map Template, translated by Leandro Rezende (@uxunicornio)',
      },
      { kind: 'heading', text: 'Storytelling' },
      {
        kind: 'paragraph',
        text: "At this stage, I used Pixar Storytelling to clearly represent persona Kátia Silva's journey and help clarify the product's purpose:",
      },
      {
        kind: 'paragraph',
        text: "Once upon a time there was Kátia Silva, married, mother of two teenagers, a dedicated 45-year-old teacher who always loved her profession and adores being with her students. Every morning, Kátia tidies the house and makes lunch so her kids can go to school; whenever she has a free moment, she studies a bit and prepares for the civil-service exams she plans to take, to secure her teaching position for the following year.",
      },
      {
        kind: 'paragraph',
        text: "One day, her kids called to tell her the exam results were out and that she'd passed. Happy, Kátia needed to get organized and gather the documents for the hiring process, but at this stage, she gets nervous: she feels like there's too much to do, doesn't know her way around computers well, feels like she wastes a lot of time on them, and gets frustrated at not being able to handle it all on her own.",
      },
      {
        kind: 'paragraph',
        text: "So she always has to ask her kids for help, and when they're not home, she turns to a third party and pays for the service, which worries her about leaving the house and losing her documents out and about.",
      },
      {
        kind: 'paragraph',
        text: 'Until Kátia discovered onDoc and now feels secure, since she always has her documents saved on her phone, with no fear of losing them physically. With easy usability and just a few steps to send her documents, she can do everything on her own, without depending on anyone, and today she feels happier and more empowered.',
      },
      { kind: 'heading', text: 'Solution alternatives' },
      {
        kind: 'paragraph',
        text: 'Based on the research results and the opportunities described in the user journeys, I built an impact-versus-effort matrix to find a possible MVP solution, a Minimum Viable Product, with simple features that were quick to build but still delivered value and kept users in mind.',
      },
      { kind: 'image', src: '/assets/articles/ondoc/07-impacto-esforco.jpeg', caption: 'Impact x Effort Matrix' },
      {
        kind: 'paragraph',
        text: 'I prioritized the opportunities in the highest-priority quadrant, lowest effort and highest impact: making it easier to gather documents, and easier and faster to send them for bureaucratic processes.',
      },
      {
        kind: 'paragraph',
        text: 'Effort: low, since it would only require building an app to keep documents registered and ready to send. Impact: high, since people would have their documents better organized, already ready to use, helping with bureaucratic processes. Solution alternative: an app that stores documents, always ready to send when needed.',
      },
      {
        kind: 'paragraph',
        text: "Among the other, non-prioritized opportunities: replacing the physical document with a digital one (high impact, but high effort since it depends on government validation); helping people avoid losing their documents (high effort, would depend on an awareness campaign); teaching people who struggle with online tools (low impact, a very specific audience); finding lost documents (medium effort, would depend on an always-up-to-date lost-and-found platform); and helping people store documents in the cloud (low impact and effort, but not very practical since it's not a solution built specifically for personal documents).",
      },
      {
        kind: 'paragraph',
        text: 'The chosen priority for building the MVP was validated with a developer, to assess the level of difficulty and feasibility.',
      },
      { kind: 'heading', text: 'The solution' },
      {
        kind: 'paragraph',
        text: 'I prioritized: making it easy to send and gather documents for bureaucratic processes. How could this process be made easier and faster?',
      },
      {
        kind: 'paragraph',
        text: 'The proposed solution was building onDoc, which brings together copies of personal documents in a single app. onDoc lets the user add a document by scanning it and keep it stored for whenever it\'s needed, exporting as PDF, individually or together, in a single file. The app is built with data security in mind, allowing access only with an email and password registered by the user.',
      },
      { kind: 'heading', text: 'Business Model Canvas' },
      { kind: 'paragraph', text: 'To better understand the project, I built a Business Model Canvas.' },
      { kind: 'image', src: '/assets/articles/ondoc/08-bmc.png', caption: 'Business Model Canvas' },
      {
        kind: 'paragraph',
        text: 'The value proposition would be a personal document wallet app that brings together, in one place, copies of every document the person wants to register, making it easier, faster and safer to send them for bureaucratic processes. A key activity would be developing and maintaining the software, with developers and a secure server as key resources, and the cost structure including team, server and advertising across social media, TV and radio.',
      },
      {
        kind: 'paragraph',
        text: 'Among the key partnerships would be HR departments and schools, since a large share of the research results pointed to gathering documents for hiring processes and for children. Initially, the app would be free, but building new features could become a future revenue source.',
      },
      { kind: 'heading', text: 'Rough sketches' },
      {
        kind: 'paragraph',
        text: 'Based on the chosen solution, I created the first rough sketches, which led to the first low-fidelity prototype tested with users. The next steps brought a lot of adjustments and new features, this is where it became clear how important it is to test, understand the user, and observe their actions.',
      },
      { kind: 'image', src: '/assets/articles/ondoc/09-rabiscoframes.jpeg', caption: 'Rough sketches from the chosen ideation' },
      { kind: 'heading', text: 'First usability test' },
      {
        kind: 'paragraph',
        text: "With Marvel's help, I built a low-fidelity prototype from the sketch ideas and tested it with users, asking them to complete three tasks: scan a driver's license, export documents as PDF, and register a new document.",
      },
      {
        kind: 'paragraph',
        text: "The test showed what should be kept, dropped or improved, and validated the prioritized ideas. Among the main feedback: the need for an option to delete documents (I added a trash icon), the option to edit a file's name (previously you could only redo the scan), and, most notably, custom document entry, the app used to offer only fixed options, but I realized not everyone had a driver's license or other specific documents, so I let each person customize and add documents in whatever order they preferred.",
      },
      { kind: 'heading', text: 'Wireframe and user flow' },
      {
        kind: 'paragraph',
        text: "Next, I developed the mid-fidelity wireframe and user flow, already adjusted with the points raised in the low-fidelity prototype's usability tests.",
      },
      { kind: 'image', src: '/assets/articles/ondoc/10-wireframe.png', caption: 'Wireframe and user flow' },
      { kind: 'paragraph', text: 'I tested again with real users, observing and noting possible points for improvement.' },
      { kind: 'heading', text: 'Style guide' },
      {
        kind: 'paragraph',
        text: "With the wireframe ready and the flows defined, it was time to define the app's visual identity. I built a style guide to ensure consistency across the experience, visual, usability and accessibility.",
      },
      {
        kind: 'paragraph',
        text: "The chosen colors mirror the logo's visual identity (green and blue), each with two close shades to represent button transition effects. The chosen typeface was Poppins, for its nine different weights, elegant design, good legibility and fast loading as a Google font. Buttons and icons follow the branding's color scheme, with Material Design icons, open-source and free.",
      },
      {
        kind: 'image',
        src: '/assets/articles/ondoc/11-styleguide.png',
        caption: "Style guide that ties together the app's visual identity",
      },
      { kind: 'heading', text: 'High-fidelity prototype' },
      {
        kind: 'image',
        src: '/assets/articles/ondoc/12-fluxo-prototipo.gif',
        caption: 'onDoc prototype flow',
      },
      {
        kind: 'paragraph',
        text: 'Based on the wireframe and style guide, I built a high-fidelity prototype and tested it with 5 people, all of them completed the requested tasks. The feedback was that the app is simple and easy to use; only one out of the five was unsure about the icon for exiting the app, a point flagged to be studied further with more users in the future.',
      },
      { kind: 'heading', text: 'Next steps' },
      { kind: 'paragraph', text: 'To keep evolving onDoc, some future improvements:' },
      {
        kind: 'list',
        items: [
          'Option to share documents directly from the app, without needing to download them to the phone',
          'Search field to locate documents, in case the user has registered many',
          'Option to change icons based on the document, for easier identification',
          'Choice of export format, JPEG, PDF or other',
          'Biometric authentication and Face ID',
          'Scanning documents with more than one page (e.g., diploma front and back)',
          'Ability to attach files directly from the device',
        ],
      },
      {
        kind: 'paragraph',
        text: "User research is essential to building any solution, and I understand there's no real finish line for a product, there will always be room for improvement. If this project were implemented in the market, the focus would remain on studying the user experience, tracking metrics for continuous improvement, and app security.",
      },
      { kind: 'heading', text: 'Conclusion and takeaways' },
      {
        kind: 'paragraph',
        text: 'This project was challenging and brought a lot of important lessons: the how only works once you understand the why.',
      },
      {
        kind: 'paragraph',
        text: 'Always focusing on solving users\' problems, understanding their feelings and behaviors to build better solutions, makes for a good experience and generates a positive return for the product.',
      },
      {
        kind: 'paragraph',
        text: "I'm really happy with the outcome of this project and everything I learned along the way. Through the UX Unicórnio program, I was able to apply this knowledge in my day-to-day work and recognize both mistakes and wins that contributed a lot to my personal and professional growth.",
      },
      {
        kind: 'paragraph',
        text: 'Design is about engineering solutions, and experience is what happens. Delivering value is what makes me a UX designer.',
      },
    ],
  },
];
