import { QuestaoQuiz } from "./modulos";

export const quizGeral: QuestaoQuiz[] = [
  {
    id: "gq1",
    tipo: "multipla_escolha",
    enunciado: "Quais são os 4 tipos de poluição luminosa segundo a IDA?",
    alternativas: [
      "Glare, Skyglow, Clutter e Light Trespass",
      "Haze, Smog, Flare e Overlight",
      "Neon, Flash, Beam e Glow",
      "Urban, Rural, Industrial e Commercial",
    ],
    resposta: "Glare, Skyglow, Clutter e Light Trespass",
    explicacao:
      "A IDA (International Dark-Sky Association) classifica a PL em 4 tipos: Glare (brilho ofuscante), Skyglow (brilho do céu urbano), Clutter (desordem luminosa) e Light Trespass (luz invasora).",
  },
  {
    id: "gq2",
    tipo: "verdadeiro_falso",
    enunciado:
      "A poluição luminosa pode prejudicar o sono humano ao suprimir a produção de melatonina.",
    resposta: true,
    explicacao:
      "VERDADEIRO. A luz noturna suprime a produção de melatonina pelo núcleo supraquiasmático, desregulando o ritmo circadiano e prejudicando a qualidade do sono.",
  },
  {
    id: "gq3",
    tipo: "multipla_escolha",
    enunciado: "Qual país se destaca como referência em astroturismo e proteção do céu noturno?",
    alternativas: ["Brasil", "Estados Unidos", "Chile", "Japão"],
    resposta: "Chile",
    explicacao:
      "O Chile possui infraestrutura, leis específicas e políticas públicas eficazes para proteção do céu noturno, além de abrigar grandes observatórios internacionais como o VLT no Atacama.",
  },
  {
    id: "gq4",
    tipo: "multipla_escolha",
    enunciado: "Qual é a economia anual potencial para o Brasil com a redução de 20% do desperdício em iluminação pública?",
    alternativas: [
      "R$ 750 milhões",
      "R$ 2,5 bilhões",
      "R$ 7,5 bilhões",
      "R$ 15 bilhões",
    ],
    resposta: "R$ 7,5 bilhões",
    explicacao:
      "Com base nos dados de 2020, uma redução de 20% no desperdício da iluminação pública brasileira representaria aproximadamente R$7,5 bilhões de economia por ano.",
  },
  {
    id: "gq5",
    tipo: "verdadeiro_falso",
    enunciado: "Filhotes de tartarugas marinhas podem morrer ao se desorientar por luzes artificiais nas praias.",
    resposta: true,
    explicacao:
      "VERDADEIRO. Filhotes se orientam pela escuridão e luminescência natural das ondas. Luzes artificiais os confundem, levando-os na direção errada e à morte por desidratação ou atropelamento.",
  },
  {
    id: "gq6",
    tipo: "multipla_escolha",
    enunciado: "O telescópio de Monte Palomar teve sua eficiência reduzida em quanto por causa da PL?",
    alternativas: ["25%", "33%", "50%", "75%"],
    resposta: "50%",
    explicacao:
      "O crescimento das cidades de San Diego e Los Angeles ao longo do século XX reduziu a eficiência do famoso telescópio de 5 metros de Monte Palomar à metade.",
  },
  {
    id: "gq7",
    tipo: "multipla_escolha",
    enunciado: "Qual foi o primeiro país com lei federal específica sobre poluição luminosa?",
    alternativas: ["Estados Unidos", "Espanha", "República Tcheca", "Itália"],
    resposta: "República Tcheca",
    explicacao:
      "A República Tcheca foi o primeiro país do mundo a aprovar legislação federal específica sobre poluição luminosa, em 2002.",
  },
  {
    id: "gq8",
    tipo: "verdadeiro_falso",
    enunciado:
      "O Brasil possui lei federal abrangente e eficaz para combater a poluição luminosa.",
    resposta: false,
    explicacao:
      "FALSO. O Brasil não possui lei federal específica sobre PL. As medidas existentes são pontuais e pouco eficazes por falta de fiscalização e conscientização.",
  },
  {
    id: "gq9",
    tipo: "multipla_escolha",
    enunciado: "Qual fórmula estima o aumento do brilho do céu próximo a uma cidade?",
    alternativas: [
      "Lei de Newton (F = ma)",
      "Lei de Walker (I = 0,01Pd⁻²·⁵)",
      "Lei de Ohm (V = RI)",
      "Lei de Beer-Lambert (A = εcl)",
    ],
    resposta: "Lei de Walker (I = 0,01Pd⁻²·⁵)",
    explicacao:
      "A Lei de Walker, desenvolvida por Merle Walker, estima o aumento do brilho do céu (I) em função da população da cidade (P) e da distância do centro (d).",
  },
  {
    id: "gq10",
    tipo: "multipla_escolha",
    enunciado: "Como a PL afeta os vagalumes?",
    alternativas: [
      "Aumenta a temperatura corporal",
      "Interfere na comunicação bioluminescente durante o acasalamento",
      "Destrói diretamente seus ovos",
      "Atrai predadores com a luz",
    ],
    resposta: "Interfere na comunicação bioluminescente durante o acasalamento",
    explicacao:
      "Vagalumes se comunicam por flashes de luz para se reproduzir. A poluição luminosa confunde esses sinais, impedindo que fêmeas reconheçam os machos e comprometendo a reprodução.",
  },
  {
    id: "gq11",
    tipo: "verdadeiro_falso",
    enunciado: "Cerca de 1/5 da população mundial perdeu a capacidade de ver a Via Láctea a olho nu.",
    resposta: true,
    explicacao:
      "VERDADEIRO. Segundo Cinzano et al. (2003), cerca de 1/5 da população mundial — incluindo mais de 2/3 dos americanos e metade dos europeus — perdeu a visibilidade da Via Láctea.",
  },
  {
    id: "gq12",
    tipo: "multipla_escolha",
    enunciado: "O que é o 'skyglow'?",
    alternativas: [
      "O brilho natural das estrelas",
      "O brilho alaranjado ou branco do céu sobre cidades causado por luz artificial",
      "Um tipo de aurora boreal",
      "A reflexão da lua na superfície de lagos",
    ],
    resposta: "O brilho alaranjado ou branco do céu sobre cidades causado por luz artificial",
    explicacao:
      "Skyglow é o brilho difuso artificial que cobre o céu noturno sobre centros urbanos, causado por luz mal direcionada que se espalha pela atmosfera, tornando o fundo do céu muito mais luminoso.",
  },
  {
    id: "gq13",
    tipo: "multipla_escolha",
    enunciado: "Qual organização certifica locais como 'Dark Sky Parks'?",
    alternativas: [
      "NASA",
      "UNESCO",
      "IDA (International Dark-Sky Association)",
      "WWF",
    ],
    resposta: "IDA (International Dark-Sky Association)",
    explicacao:
      "A IDA é a principal organização que certifica locais com baixa PL como 'Parques de Céus Escuros' (Dark Sky Parks), Santuários, Reservas e outras categorias.",
  },
  {
    id: "gq14",
    tipo: "verdadeiro_falso",
    enunciado:
      "A iluminação artificial pode fazer certas plantas florescerem fora de sua época natural.",
    resposta: true,
    explicacao:
      "VERDADEIRO. A luz artificial altera o fotoperíodo das plantas. Algumas florescem prematuramente ou não florescem quando a duração da noite é artificialmente encurtada.",
  },
  {
    id: "gq15",
    tipo: "multipla_escolha",
    enunciado: "O projeto 'Tem Luz Aí?' é desenvolvido por qual instituição?",
    alternativas: [
      "Universidade de São Paulo (USP)",
      "IFBA / UFBA (grupo CientificAção)",
      "Observatório Nacional do Rio de Janeiro",
      "Instituto de Astronomia, Geofísica e Ciências Atmosféricas",
    ],
    resposta: "IFBA / UFBA (grupo CientificAção)",
    explicacao:
      "O projeto é desenvolvido por Joabe Carmo de Santana, estudante do IFBA, no grupo de iniciação científica CientificAção, sob orientação de Gorhan Freitas Noronha (UFBA).",
  },
  {
    id: "gq16",
    tipo: "multipla_escolha",
    enunciado: "Qual é o principal objetivo do projeto 'Tem Luz Aí?'?",
    alternativas: [
      "Medir a intensidade da PL em Salvador",
      "Investigar se a PL é abordada nos currículos escolares da RMS",
      "Criar um aplicativo para medir a poluição luminosa",
      "Propor leis municipais sobre PL em cidades baianas",
    ],
    resposta: "Investigar se a PL é abordada nos currículos escolares da RMS",
    explicacao:
      "O projeto investiga a presença de abordagens acerca da poluição luminosa nas ementas do ensino básico dos municípios da Região Metropolitana de Salvador.",
  },
  {
    id: "gq17",
    tipo: "verdadeiro_falso",
    enunciado:
      "Lâmpadas que direcionam luz para baixo reduzem a poluição luminosa sem diminuir a iluminação necessária.",
    resposta: true,
    explicacao:
      "VERDADEIRO. Luminárias que direcionam a luz para baixo (full-cutoff) são mais eficientes porque concentram a luz onde é necessária, evitando o desperdício que gera o skyglow.",
  },
  {
    id: "gq18",
    tipo: "multipla_escolha",
    enunciado: "Quais hormônios são afetados pela exposição à luz noturna artificial?",
    alternativas: [
      "Insulina e glucagon",
      "Adrenalina e testosterona",
      "Melatonina, serotonina, prolactina, glicocorticóides e adrenocorticóides",
      "Apenas a melatonina",
    ],
    resposta: "Melatonina, serotonina, prolactina, glicocorticóides e adrenocorticóides",
    explicacao:
      "Segundo Fernandes et al. (2001), a luz noturna afeta vários hormônios: melatonina (suprimida), além de serotonina, prolactina, glicocorticóides e adrenocorticóides.",
  },
  {
    id: "gq19",
    tipo: "multipla_escolha",
    enunciado:
      "A Portaria IBAMA nº 11/1992 foi criada para proteger quais animais?",
    alternativas: ["Aves migratórias", "Tartarugas marinhas", "Vagalumes", "Anfíbios"],
    resposta: "Tartarugas marinhas",
    explicacao:
      "A Portaria IBAMA nº 11/1992 foi criada para proteger as tartarugas marinhas, proibindo iluminação que cause intensidade superior a zero lux nas praias de nidificação.",
  },
  {
    id: "gq20",
    tipo: "verdadeiro_falso",
    enunciado:
      "O astroturismo existe como prática há apenas algumas décadas.",
    resposta: false,
    explicacao:
      "FALSO. O astroturismo existe há centenas de anos, inicialmente relacionado à agricultura e práticas culturais tradicionais. Sua forma moderna inclui astrofotografia e visitas a observatórios.",
  },
];
