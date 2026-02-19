export interface GlossarioItem {
  termo: string;
  definicao: string;
}

export interface Exemplo {
  titulo: string;
  descricao: string;
}

export interface QuestaoQuiz {
  id: string;
  tipo: "multipla_escolha" | "verdadeiro_falso";
  enunciado: string;
  alternativas?: string[];
  resposta: string | boolean;
  explicacao: string;
}

export interface Modulo {
  id: number;
  slug: string;
  titulo: string;
  subtitulo: string;
  icone: string;
  cor: string;
  resumo: string;
  conteudo: string;
  glossario: GlossarioItem[];
  exemplos: Exemplo[];
  revisao: string[];
  quiz: QuestaoQuiz[];
  // Para Professores
  textoCompleto: string;
  orientacoesDidaticas: string;
  perguntasRevisao: Array<{ pergunta: string; gabarito: string }>;
  atividadePratica: string;
  conexaoBNCC: string;
}

export const modulos: Modulo[] = [
  {
    id: 1,
    slug: "introducao",
    titulo: "Introdução à Poluição Luminosa",
    subtitulo: "O que é, tipos e como medir",
    icone: "💡",
    cor: "from-yellow-400 to-orange-500",
    resumo:
      "A poluição luminosa (PL) é causada pelo uso excessivo e descontrolado de luz artificial. Ela afeta a observação do céu noturno, a biodiversidade e a saúde humana. Desde a Revolução Industrial, a iluminação artificial cresceu de forma exponencial, transformando nosso relacionamento com a noite.",
    conteudo: `
## O que é Poluição Luminosa?

No passado, há cerca de 200 mil anos, o céu era límpido, belo e era possível contemplar até mesmo o braço da Via Láctea. Com o passar dos séculos, o céu tornou-se acinzentado e já não é mais possível admirá-lo em sua total magnitude (PEREIRA DOMINICI; FERREIRA RANGEL, 2017).

A **poluição luminosa (PL)** é uma ocorrência em ascensão provocada pelo uso excessivo e descontrolado de luz artificial. Ela afeta a observação do céu, a biodiversidade e a saúde humana. No Brasil, a falta de uma regulamentação efetiva agrava o problema, destacando a necessidade de políticas públicas focadas na diminuição do desperdício energético.

A luz artificial já era parte da humanidade com candeeiros a óleo, carvão vegetal e outros. No entanto, a modernidade aumentou a níveis astronômicos a acessibilidade, variedade e alcance da iluminação artificial (MARQUES, 2022).

## Os 4 Tipos de Poluição Luminosa

Segundo a **International Dark-Sky Association (IDA)**, existem quatro tipos principais:

1. **Glare (brilho):** Um clarão excessivo que causa incômodo e desconforto aos olhos, podendo inclusive ofuscar a visão.

2. **Light trespass (luz invasora ou incômoda):** Luz que invade e ilumina ambientes para os quais não foi projetada, como postes ou outdoors que atrapalham o sono ao invadir os quartos durante a noite.

3. **Skyglow (brilho do céu noturno):** Comum em centros urbanos, causado pela iluminação de lâmpadas mal direcionadas, que geram um efeito alaranjado ou branco no céu, dependendo do tipo de lâmpada utilizada.

4. **Clutter (desordem):** Agrupamentos de fontes de iluminação excessiva, confusas e desordenadas.

## A Lei de Walker

Dentre os métodos de calcular o brilho causado pela PL, destaca-se a **fórmula de Merle Walker** — a "Lei de Walker" — uma estimativa matemática baseada em uma observação do céu com um telescópio a um ângulo zênite de 45°.

A equação é: **I = 0,01 × P × d⁻²·⁵**

- **I** = aumento do nível de brilho do céu acima do céu escuro natural
- **P** = população da cidade em habitantes
- **d** = distância do centro da cidade em km
- **0,01** = constante típica para a maioria das cidades

## Contexto no Brasil

No Brasil, ainda há muito pouca informação e estudo sobre a poluição luminosa, bem como poucas medidas de combate e prevenção. Não há muita supervisão ou punição para a prática da poluição luminosa no país, pois os instrumentos legais ainda são insuficientes para abranger o problema de forma eficaz.
    `,
    glossario: [
      {
        termo: "Poluição Luminosa (PL)",
        definicao:
          "Perturbação causada pelo uso excessivo, mal direcionado ou desnecessário de luz artificial, com efeitos negativos sobre o meio ambiente, a saúde humana e a observação do céu noturno.",
      },
      {
        termo: "Glare",
        definicao:
          "Clarão excessivo que causa incômodo visual, podendo ofuscar a visão de motoristas e pedestres.",
      },
      {
        termo: "Light Trespass (Luz Invasora)",
        definicao:
          "Luz que penetra em espaços onde não é necessária nem desejada, como postes que iluminam quartos à noite.",
      },
      {
        termo: "Skyglow",
        definicao:
          "Brilho artificial do céu noturno sobre cidades, causado pela luz que se espalha pela atmosfera.",
      },
      {
        termo: "Clutter",
        definicao:
          "Desordem visual causada por agrupamentos excessivos de fontes de luz artificiais.",
      },
      {
        termo: "IDA",
        definicao:
          "International Dark-Sky Association — organização internacional dedicada à preservação do céu noturno.",
      },
      {
        termo: "Lei de Walker",
        definicao:
          "Fórmula matemática (I = 0,01Pd⁻²·⁵) para estimar o aumento do brilho do céu causado por uma cidade.",
      },
    ],
    exemplos: [
      {
        titulo: "Skyglow nas grandes cidades",
        descricao:
          "São Paulo e Rio de Janeiro são exemplos de cidades onde o skyglow é tão intenso que praticamente nenhuma estrela pode ser vista a olho nu. O céu fica com uma coloração alaranjada ou esbranquiçada durante toda a noite.",
      },
      {
        titulo: "Luz invasora nos quartos",
        descricao:
          "Em bairros residenciais próximos a postes mal projetados ou letreiros luminosos de lojas, a luz entra diretamente nos quartos à noite, perturbando o sono dos moradores.",
      },
      {
        titulo: "Glare em rodovias",
        descricao:
          "Luminárias mal posicionadas em rodovias podem ofuscar temporariamente a visão de motoristas, aumentando o risco de acidentes.",
      },
    ],
    revisao: [
      "A poluição luminosa é provocada pelo uso excessivo de luz artificial.",
      "Existem 4 tipos: Glare, Light Trespass, Skyglow e Clutter.",
      "A Lei de Walker permite estimar o brilho do céu próximo a cidades.",
      "No Brasil, a regulamentação sobre PL ainda é muito insuficiente.",
      "O problema cresceu significativamente desde a Revolução Industrial.",
    ],
    quiz: [
      {
        id: "m1q1",
        tipo: "multipla_escolha",
        enunciado: "Qual dos seguintes é um tipo de poluição luminosa?",
        alternativas: [
          "Ozônio",
          "Skyglow",
          "Aquecimento global",
          "Chuva ácida",
        ],
        resposta: "Skyglow",
        explicacao:
          "O Skyglow é um dos 4 tipos de poluição luminosa segundo a IDA. Refere-se ao brilho artificial do céu noturno sobre cidades, causado por luz mal direcionada que se espalha pela atmosfera.",
      },
      {
        id: "m1q2",
        tipo: "verdadeiro_falso",
        enunciado:
          "A poluição luminosa é causada apenas por iluminação pública.",
        resposta: false,
        explicacao:
          "FALSO. A PL é causada por qualquer fonte de luz artificial mal utilizada, incluindo iluminação privada, outdoors, fachadas de prédios, holofotes e iluminação residencial.",
      },
      {
        id: "m1q3",
        tipo: "multipla_escolha",
        enunciado:
          "Na fórmula de Merle Walker (I = 0,01Pd⁻²·⁵), o que representa 'P'?",
        alternativas: [
          "Potência da lâmpada",
          "Poluição acumulada",
          "População da cidade em habitantes",
          "Pressão atmosférica",
        ],
        resposta: "População da cidade em habitantes",
        explicacao:
          "Na Lei de Walker, P representa a população da cidade em habitantes. Quanto maior a população (e portanto mais iluminação), maior o valor de I (intensidade do brilho do céu).",
      },
      {
        id: "m1q4",
        tipo: "verdadeiro_falso",
        enunciado:
          "Há 200 mil anos era possível ver o braço da Via Láctea a olho nu.",
        resposta: true,
        explicacao:
          "VERDADEIRO. Antes da industrialização e do uso massivo de luz artificial, o céu era muito mais escuro e era possível contemplar a Via Láctea com clareza.",
      },
      {
        id: "m1q5",
        tipo: "multipla_escolha",
        enunciado:
          "Light Trespass (luz invasora) é exemplificado por qual situação?",
        alternativas: [
          "Um holofote iluminando um estádio",
          "A luz de um poste entrando pelo quarto durante a noite",
          "Lâmpadas em série em uma avenida",
          "O brilho do sol ao amanhecer",
        ],
        resposta: "A luz de um poste entrando pelo quarto durante a noite",
        explicacao:
          "Light Trespass ocorre quando a luz ilumina espaços para os quais não foi projetada. O exemplo clássico é a luz de postes ou outdoors que invade quartos residenciais durante a noite, perturbando o sono.",
      },
      {
        id: "m1q6",
        tipo: "multipla_escolha",
        enunciado:
          "Qual organização internacional é referência na luta contra a poluição luminosa?",
        alternativas: [
          "NASA",
          "International Dark-Sky Association (IDA)",
          "UNESCO",
          "ONU Meio Ambiente",
        ],
        resposta: "International Dark-Sky Association (IDA)",
        explicacao:
          "A IDA (International Dark-Sky Association) é a principal organização dedicada à preservação do céu noturno e ao combate à poluição luminosa mundialmente.",
      },
      {
        id: "m1q7",
        tipo: "verdadeiro_falso",
        enunciado:
          "O Brasil possui legislação federal abrangente e eficaz para combater a poluição luminosa.",
        resposta: false,
        explicacao:
          "FALSO. No Brasil ainda há muito pouca informação e poucas medidas de combate à PL. Os instrumentos legais são insuficientes e há falta de fiscalização e punições.",
      },
      {
        id: "m1q8",
        tipo: "multipla_escolha",
        enunciado:
          "O tipo de PL chamado 'Clutter' refere-se a qual fenômeno?",
        alternativas: [
          "Brilho excessivo que ofusca a visão",
          "Luz que invade espaços privados",
          "Agrupamentos de fontes de iluminação excessiva e desordenada",
          "Aumento da temperatura pela iluminação",
        ],
        resposta:
          "Agrupamentos de fontes de iluminação excessiva e desordenada",
        explicacao:
          "Clutter refere-se à desordem visual causada por conjuntos excessivos e caóticos de fontes de luz, como acontece em centros comerciais ou avenidas com muitos anúncios luminosos.",
      },
    ],
    textoCompleto: `
## Texto Completo para Professores

### 1. Introdução à Poluição Luminosa

A poluição luminosa (PL) é uma ocorrência em ascensão provocada pelo uso excessivo e descontrolado de luz artificial, afetando a observação do céu, a biodiversidade e a saúde humana. No passado, há cerca de 200 mil anos, o céu era límpido e era possível contemplar até mesmo o braço da Via Láctea. Com o passar dos séculos, o céu tornou-se acinzentado e já não é mais possível admirá-lo em sua total magnitude (PEREIRA DOMINICI; FERREIRA RANGEL, 2017).

A modernidade aumentou a níveis astronômicos a acessibilidade, variedade e alcance da iluminação artificial. Nosso uso excessivo da luz artificial acarreta uma série de problemas que vão desde impactos significativos na nossa saúde e bem-estar até o direito constitucional de termos um céu observável.

### Classificação da IDA

Segundo a IDA (International Dark-Sky Association), existem quatro tipos principais de poluição luminosa:

1. **Glare (brilho):** Clarão excessivo que causa incômodo e pode ofuscar a visão.
2. **Light trespass (luz invasora):** Luz que invade ambientes para os quais não foi projetada.
3. **Skyglow (brilho do céu noturno):** Efeito alaranjado ou branco no céu sobre centros urbanos.
4. **Clutter (desordem):** Agrupamentos de fontes de iluminação excessiva e desordenada.

### A Lei de Walker

A fórmula de Merle Walker (I = 0,01Pd⁻²·⁵) estima o aumento do brilho do céu causado por uma cidade. Esta fórmula demonstra matematicamente que quanto maior a população e menor a distância, maior o impacto no céu noturno.
    `,
    orientacoesDidaticas: `
## Orientações Didáticas – Módulo 1

**Público-alvo sugerido:** Ensino Fundamental II e Ensino Médio (com adaptações)

**Duração sugerida:** 2–3 aulas de 50 minutos

### Sequência Didática

**Aula 1 – Problematização:**
- Iniciar com a pergunta: "Quando foi a última vez que você viu estrelas no céu?"
- Exibir imagens comparativas do céu noturno com e sem poluição luminosa
- Discutir em roda: o que mudou no nosso céu?

**Aula 2 – Conceitos:**
- Apresentar os 4 tipos de PL com exemplos visuais
- Propor que os alunos identifiquem na própria cidade exemplos de cada tipo
- Atividade: mapa mental dos 4 tipos de PL

**Aula 3 – A Lei de Walker:**
- Introduzir o conceito matemático (pode ser interdisciplinar com Matemática)
- Calcular o impacto estimado da cidade dos alunos
- Comparar com cidades maiores e menores

### Material de Apoio
- Imagens do satélite NASA mostrando iluminação noturna do Brasil
- Mapa Bortle (escala de escuridão do céu)
- Aplicativos como "Loss of the Night" para medir PL no celular
    `,
    perguntasRevisao: [
      {
        pergunta: "Defina poluição luminosa com suas próprias palavras.",
        gabarito:
          "A PL é o uso excessivo, desnecessário ou mal direcionado de luz artificial, que causa impactos negativos no meio ambiente, na saúde humana e na observação do céu noturno.",
      },
      {
        pergunta: "Quais são os 4 tipos de PL segundo a IDA? Explique cada um.",
        gabarito:
          "1) Glare – clarão ofuscante; 2) Light Trespass – luz invasora em espaços privados; 3) Skyglow – brilho do céu sobre cidades; 4) Clutter – desordem de fontes luminosas.",
      },
      {
        pergunta:
          "O que é a Lei de Walker e para que serve? Quais são as variáveis da fórmula?",
        gabarito:
          "É uma fórmula matemática (I = 0,01Pd⁻²·⁵) para estimar o aumento do brilho do céu próximo a uma cidade. I = intensidade; P = população; d = distância do centro.",
      },
      {
        pergunta: "Quando se intensificou o problema da PL na história humana?",
        gabarito:
          "A partir da Revolução Industrial, com o uso massivo de iluminação artificial, que aumentou exponencialmente nos séculos XX e XXI.",
      },
      {
        pergunta:
          "Por que no Brasil o combate à PL ainda é considerado insuficiente?",
        gabarito:
          "Falta legislação federal específica, há pouca fiscalização e punição, e a conscientização da população ainda é muito baixa.",
      },
    ],
    atividadePratica: `
## Atividade Prática – Módulo 1

### "Caçadores de Luz"

**Objetivo:** Identificar os tipos de poluição luminosa na comunidade escolar.

**Materiais:** Fichas de registro, lápis, câmera de celular.

**Desenvolvimento:**
1. Dividir a turma em grupos de 3–4 alunos.
2. Cada grupo recebe uma ficha com os 4 tipos de PL e suas descrições.
3. Durante uma semana, os alunos fotografam e registram exemplos de cada tipo encontrados no bairro, escola ou cidade.
4. Os grupos apresentam suas descobertas, montando um painel fotográfico.
5. Discussão final: quais tipos são mais comuns na nossa cidade? O que poderia ser feito para reduzir cada um?

**Avaliação:** Participação, qualidade das observações e capacidade de classificar corretamente.
    `,
    conexaoBNCC: `
## Conexão com a BNCC – Módulo 1

- **(EF02CI05)** Investigar a importância da água e da luz para a manutenção da vida de plantas em geral.
- **(EF03CI03)** Discutir hábitos necessários para a manutenção da saúde auditiva e visual considerando as condições do ambiente em termos de som e luz.
- **(EF08CI03)** Classificar equipamentos elétricos residenciais de acordo com o tipo de transformação de energia (da energia elétrica para a luminosa, por exemplo).
- **(EM13CNT301)** Construir questões, elaborar hipóteses, previsões e estimativas, empregar instrumentos de medição e representar e interpretar modelos explicativos, dados e/ou resultados experimentais para construir, avaliar e justificar conclusões no enfrentamento de situações-problema sob uma perspectiva científica.
    `,
  },
  {
    id: 2,
    slug: "gastos-energia",
    titulo: "Gastos com Energia e Eficiência Energética",
    subtitulo: "O desperdício invisível da iluminação excessiva",
    icone: "⚡",
    cor: "from-green-400 to-teal-500",
    resumo:
      "A poluição luminosa está diretamente ligada ao desperdício de energia. No Brasil, estima-se que o desperdício de iluminação pública represente uma economia potencial de R$7,5 bilhões por ano. A escolha adequada de lâmpadas e luminárias pode reduzir significativamente esse impacto.",
    conteudo: `
## Poluição Luminosa e Desperdício de Energia

Se partirmos do pressuposto de que a poluição luminosa (PL) é causada pelo uso excessivo de luz artificial, então há proporcional desperdício de energia, uma vez que essa luz não ilumina apenas o necessário — não há um bom planejamento quanto ao formato dos postes, tipo de lâmpada e quantidade (MARQUES, 2022).

## Os Números no Brasil

Estima-se que, no Brasil, no ano de 2020, foram consumidos **39.518.458 MWh por mês** pelos 5.570 municípios do país, com 85.773.993 consumidores.

- Do consumo total, o consumo público foi de **6.481.139 MWh/mês**
- Considerando um desperdício médio em torno de **20%**, isso equivale a uma economia potencial de aproximadamente **R$7,5 bilhões por ano** (valor de referência de 2017)

Fonte: ARAUJO; PICAZZIO, 2021.

## Impacto no CO₂

Outro impacto da poluição luminosa é a emissão de CO₂, que contribui para o aquecimento global, pois a geração de energia elétrica por meio de combustíveis fósseis é uma das principais fontes emissoras.

## Tipos de Lâmpadas

| Tipo | Consumo | Situação |
|------|---------|----------|
| Incandescentes | 61–100 W | Proibidas (Portaria nº 1.007/2010) |
| Fluorescentes | Menor consumo | Em transição |
| LED | Muito eficiente | Recomendado |

A Portaria nº 1.007, de 31 de dezembro de 2010, determinou a retirada progressiva das lâmpadas incandescentes do mercado brasileiro por não atenderem aos critérios de eficiência energética. Sua substituição trouxe ganho econômico e ambiental.

## Exemplo Internacional: Hungria

Em 2000, foi criada na Hungria uma associação para prevenir o crescimento do impacto da iluminação no céu noturno. A reconstrução no sistema de iluminação da ferrovia resultou em:

- Redução de **40%** no consumo de energia elétrica
- Economia superior a **1 milhão de euros por ano**
- Custo de reconstrução recuperado em apenas **3 anos**

(KOLLATH, 2002 apud GARGAGLIONI, 2009)

## Soluções Simples

Pode-se identificar facilmente o uso irracional dos sistemas de iluminação. Sistemas mal projetados, que direcionam a luz acima da linha do horizonte, podem ser evitados com planejamento e utilização adequada de:

- **Lâmpadas eficientes** (LED)
- **Luminárias direcionadas** (apenas para baixo)
- **Acessórios de controle** (sensores, temporizadores)
- **Design consciente** com posicionamento estratégico
    `,
    glossario: [
      {
        termo: "Eficiência Energética",
        definicao:
          "Capacidade de realizar a mesma tarefa consumindo menos energia, sem reduzir qualidade ou conforto.",
      },
      {
        termo: "MWh",
        definicao:
          "Megawatt-hora — unidade de medida de energia equivalente a 1.000 kWh.",
      },
      {
        termo: "Lâmpada Incandescente",
        definicao:
          "Tipo de lâmpada que converte energia elétrica em luz por aquecimento de um filamento. Muito ineficiente e proibida no Brasil desde 2017.",
      },
      {
        termo: "LED",
        definicao:
          "Light Emitting Diode — tecnologia de iluminação altamente eficiente que consome muito menos energia que as lâmpadas incandescentes.",
      },
      {
        termo: "Portaria nº 1.007/2010",
        definicao:
          "Norma brasileira que determinou a retirada progressiva das lâmpadas incandescentes por não atenderem critérios de eficiência energética.",
      },
    ],
    exemplos: [
      {
        titulo: "Reforma de iluminação ferroviária na Hungria",
        descricao:
          "Em 2000, a Hungria reformou seu sistema de iluminação ferroviária, reduzindo 40% do consumo de energia elétrica e economizando mais de 1 milhão de euros por ano, com retorno do investimento em apenas 3 anos.",
      },
      {
        titulo: "Desperdício na iluminação pública brasileira",
        descricao:
          "O setor público brasileiro consumiu cerca de 6,48 milhões de MWh/mês em 2020. Estimando 20% de desperdício, isso representa R$7,5 bilhões que poderiam ser economizados anualmente com melhor planejamento.",
      },
    ],
    revisao: [
      "A PL está diretamente ligada ao desperdício de energia.",
      "O Brasil pode economizar ~R$7,5 bilhões/ano melhorando a iluminação pública.",
      "A emissão de CO₂ da geração elétrica agrava o aquecimento global.",
      "Lâmpadas incandescentes foram proibidas pela Portaria nº 1.007/2010.",
      "Luminárias direcionadas para baixo reduzem a PL e o consumo de energia.",
    ],
    quiz: [
      {
        id: "m2q1",
        tipo: "multipla_escolha",
        enunciado:
          "Qual era o consumo público de energia no Brasil em 2020 (em MWh/mês)?",
        alternativas: [
          "1.000.000 MWh",
          "3.000.000 MWh",
          "6.481.139 MWh",
          "39.518.458 MWh",
        ],
        resposta: "6.481.139 MWh",
        explicacao:
          "O consumo público foi de 6.481.139 MWh por mês, enquanto o consumo total de todos os municípios foi de 39.518.458 MWh/mês.",
      },
      {
        id: "m2q2",
        tipo: "verdadeiro_falso",
        enunciado:
          "A substituição de lâmpadas incandescentes por mais eficientes traz apenas benefícios econômicos.",
        resposta: false,
        explicacao:
          "FALSO. A substituição traz benefícios tanto econômicos quanto ambientais, reduzindo o consumo de energia e consequentemente as emissões de CO₂.",
      },
      {
        id: "m2q3",
        tipo: "multipla_escolha",
        enunciado:
          "Quanto o Brasil poderia economizar por ano reduzindo 20% do desperdício na iluminação pública?",
        alternativas: [
          "R$ 750 milhões",
          "R$ 1,5 bilhões",
          "R$ 7,5 bilhões",
          "R$ 75 bilhões",
        ],
        resposta: "R$ 7,5 bilhões",
        explicacao:
          "Com base nos dados de 2020 e no valor do MWh de 2017, uma redução de 20% no desperdício da iluminação pública representaria uma economia de aproximadamente R$7,5 bilhões por ano.",
      },
      {
        id: "m2q4",
        tipo: "verdadeiro_falso",
        enunciado:
          "Luminárias que direcionam a luz para cima são mais eficientes porque iluminam uma área maior.",
        resposta: false,
        explicacao:
          "FALSO. Luminárias que direcionam luz para cima geram poluição luminosa (skyglow) e desperdiçam energia, pois iluminam o céu em vez do solo onde a luz é necessária.",
      },
      {
        id: "m2q5",
        tipo: "multipla_escolha",
        enunciado:
          "A reforma do sistema de iluminação ferroviária na Hungria (2000) resultou em qual redução no consumo de energia?",
        alternativas: ["10%", "20%", "40%", "60%"],
        resposta: "40%",
        explicacao:
          "A reconstrução do sistema de iluminação ferroviária na Hungria resultou em redução de 40% no consumo de energia elétrica, com economia superior a 1 milhão de euros por ano.",
      },
      {
        id: "m2q6",
        tipo: "multipla_escolha",
        enunciado:
          "Qual portaria brasileira determinou a substituição das lâmpadas incandescentes?",
        alternativas: [
          "Portaria nº 500/2005",
          "Portaria nº 1.007/2010",
          "Portaria nº 2.500/2015",
          "Portaria nº 300/2008",
        ],
        resposta: "Portaria nº 1.007/2010",
        explicacao:
          "A Portaria nº 1.007, de 31 de dezembro de 2010, determinou que as lâmpadas incandescentes não atendiam aos critérios de eficiência energética, levando à sua substituição progressiva.",
      },
      {
        id: "m2q7",
        tipo: "verdadeiro_falso",
        enunciado:
          "A poluição luminosa pode contribuir para o aquecimento global.",
        resposta: true,
        explicacao:
          "VERDADEIRO. O desperdício de energia na iluminação excessiva implica maior geração de energia elétrica, frequentemente a partir de combustíveis fósseis, que emitem CO₂ e contribuem para o aquecimento global.",
      },
      {
        id: "m2q8",
        tipo: "multipla_escolha",
        enunciado: "Qual tipo de lâmpada é considerado o mais eficiente hoje?",
        alternativas: [
          "Incandescente",
          "Fluorescente",
          "LED",
          "Halógena",
        ],
        resposta: "LED",
        explicacao:
          "As lâmpadas LED são as mais eficientes atualmente, consumindo muito menos energia que as fluorescentes e incandescentes, com vida útil muito maior.",
      },
    ],
    textoCompleto: `
## Texto Completo para Professores – Módulo 2

### Gastos com Energia e Eficiência Energética

A poluição luminosa e o desperdício energético são faces da mesma moeda. Sistemas de iluminação mal projetados que direcionam a luz acima da linha do horizonte podem ser evitados com planejamento e a utilização adequada de lâmpadas, luminárias e acessórios (GARGAGLIONI, 2009).

**Dados do Brasil (2020):**
- Total consumido: 39.518.458 MWh/mês (5.570 municípios; 85.773.993 consumidores)
- Consumo público: 6.481.139 MWh/mês
- Desperdício estimado: 20% = economia potencial de ~R$7,5 bilhões/ano

**Emissões de CO₂:** O uso excessivo de iluminação elétrica também aumenta a emissão de CO₂ quando a energia é gerada por combustíveis fósseis.

**Histórico de lâmpadas no Brasil:**
- Incandescentes (61–100W): proibidas pela Portaria nº 1.007/2010
- Fluorescentes: substituíram as incandescentes
- LED: tecnologia atual mais eficiente

**Caso da Hungria (2000):** Reforma da iluminação ferroviária resultou em 40% de redução no consumo, economia de +1 milhão de euros/ano, com retorno do investimento em 3 anos.
    `,
    orientacoesDidaticas: `
## Orientações Didáticas – Módulo 2

**Interdisciplinaridade:** Matemática (cálculo de consumo), Física (potência e energia), Química (emissões de CO₂).

### Atividades Sugeridas

**Atividade 1 – Auditoria Energética da Escola:**
- Levantamento de todas as luminárias da escola
- Cálculo do consumo total em kWh
- Comparação entre diferentes tipos de lâmpadas
- Projeção de economia com substituição por LED

**Atividade 2 – Pesquisa na Comunidade:**
- Fotografar luminárias públicas do bairro
- Identificar: direcionamento correto? Tipo de lâmpada? Há desperdício visível?
- Elaborar relatório com propostas de melhoria
    `,
    perguntasRevisao: [
      {
        pergunta:
          "Qual é a relação entre poluição luminosa e desperdício energético?",
        gabarito:
          "A PL é causada por luz artificial excessiva ou mal direcionada, o que implica em consumo de energia além do necessário, gerando desperdício.",
      },
      {
        pergunta:
          "Qual é o consumo público de energia elétrica no Brasil e qual seria a economia com 20% de redução?",
        gabarito:
          "O consumo público foi de 6.481.139 MWh/mês em 2020. Com 20% de redução, a economia seria de aproximadamente R$7,5 bilhões/ano.",
      },
      {
        pergunta: "Por que as lâmpadas incandescentes foram proibidas no Brasil?",
        gabarito:
          "Pela Portaria nº 1.007/2010, pois não atendem aos critérios de eficiência energética, consumindo 61–100W com baixo aproveitamento luminoso.",
      },
      {
        pergunta:
          "Como a poluição luminosa pode contribuir para o aquecimento global?",
        gabarito:
          "Ao desperdiçar energia, a PL aumenta a demanda por geração elétrica. Se essa energia vem de combustíveis fósseis, há emissão de CO₂, intensificando o efeito estufa.",
      },
      {
        pergunta:
          "Cite duas medidas simples para reduzir a PL e o desperdício de energia na iluminação.",
        gabarito:
          "Usar lâmpadas LED eficientes; instalar luminárias que direcionem a luz apenas para baixo; usar sensores de presença ou temporizadores.",
      },
    ],
    atividadePratica: `
## Atividade Prática – Módulo 2

### "Auditoria da Luz"

**Objetivo:** Calcular o desperdício energético da escola ou residência.

**Materiais:** Lista de luminárias, tabela de consumo por tipo de lâmpada, calculadora.

**Desenvolvimento:**
1. Mapear todas as lâmpadas de um espaço (escola ou casa).
2. Pesquisar o consumo em watts de cada modelo.
3. Calcular o consumo total em kWh/mês (W × horas_uso × 30 / 1000).
4. Calcular o custo em R$ (usando tarifa local).
5. Comparar o cenário atual com uma proposta de substituição por LED.
6. Apresentar o potencial de economia em uma apresentação ou cartaz.
    `,
    conexaoBNCC: `
## Conexão com a BNCC – Módulo 2

- **(EF08CI03)** Classificar equipamentos elétricos residenciais de acordo com o tipo de transformação de energia (da energia elétrica para a luminosa, por exemplo).
- **(EM13CNT207)** Identificar, analisar e discutir vulnerabilidades vinculadas às vivências e aos desafios contemporâneos aos quais as juventudes estão expostas, considerando os aspectos físico, psicoemocional e social, a fim de desenvolver e divulgar ações de prevenção e de promoção da saúde e do bem-estar.
- **(EF09CI06)** Discutir o papel do avanço tecnológico na aplicação das energias solar, eólica e outras formas de energia renovável.
    `,
  },
  {
    id: 3,
    slug: "observacoes-astronomicas",
    titulo: "Interferência em Observações Astronômicas",
    subtitulo: "Como a luz artificial apaga as estrelas",
    icone: "🔭",
    cor: "from-blue-500 to-indigo-600",
    resumo:
      "A poluição luminosa reduz drasticamente a eficiência dos telescópios e impede que astrônomos amadores e profissionais observem o céu. Cerca de 1/5 da população mundial perdeu a visibilidade da Via Láctea a olho nu.",
    conteudo: `
## A PL Como Inimiga da Astronomia

A poluição luminosa (PL) é uma grande vilã para os astrônomos e para qualquer pessoa que tenha interesse em observar o céu noturno. Além de trazer prejuízos a instituições que instalam dispositivos de observação astronômica, ela reduz a eficiência dos telescópios.

Toda luz que é mal direcionada e se projeta para o céu atrapalha os astrônomos que, para observar estrelas com brilhos mínimos e/ou muito distantes, dependem de uma boa visibilidade do céu.

## Capacidade dos Telescópios

Com o uso de telescópios de **4 metros de diâmetro**, equipados com detectores eletrônicos sensíveis, é possível observar objetos que são **250 milhões de vezes menos brilhantes** que o limiar da visão humana. A PL compromete drasticamente essa capacidade.

## O Caso de Monte Palomar

O telescópio de **5 metros de diâmetro** instalado em **Monte Palomar, na Califórnia**, foi considerado o maior telescópio do mundo de 1940 até a década de 1970. Com o aumento da poluição luminosa emitida pelas cidades de **San Diego e Los Angeles**:

- Sua eficiência foi **reduzida à metade**
- Estudos apontam que um **aumento de 25% na iluminação noturna** acarreta uma **perda de ~20 milhões de dólares** para a astronomia por telescópio de 8m (Mendez e Schmidt, 2006 apud GARGAGLIONI, 2009)

## O Céu Urbano

"Isto ocorre devido a uma espécie de ofuscamento das estrelas causado pelas intensas luzes das cidades, que fazem com que o céu adquira uma tonalidade clara e acinzentada" (MELLO, 2022, p. 173).

Aqueles que desejam observar o céu por conta própria muitas vezes precisam se deslocar para longe das cidades ou para observatórios, o que nem sempre é viável para moradores de grandes metrópoles.

## Impacto Mundial

- Cerca de **1/5 da população mundial** perdeu a visibilidade a olho nu da Via Láctea
- Mais de **2/3 da população dos EUA** não consegue ver a Via Láctea
- Mais da **metade da população da União Europeia** perdeu essa visibilidade

(CINZANO et al., 2003 apud GARGAGLIONI, 2009)
    `,
    glossario: [
      {
        termo: "Skyglow",
        definicao:
          "Brilho difuso causado pela iluminação artificial acima das cidades, que torna o fundo do céu muito mais luminoso que o natural.",
      },
      {
        termo: "Telescópio",
        definicao:
          "Instrumento óptico que amplia objetos distantes, especialmente usado para observar corpos celestes.",
      },
      {
        termo: "Magnitude",
        definicao:
          "Escala logarítmica para medir o brilho de estrelas e outros objetos celestes. Quanto menor o número, mais brilhante o objeto.",
      },
      {
        termo: "Observatório",
        definicao:
          "Instalação equipada com telescópios e outros instrumentos para observação astronômica, geralmente localizada em locais com baixa PL.",
      },
      {
        termo: "Via Láctea",
        definicao:
          "Galáxia espiral barrada à qual pertence o Sistema Solar. Visível como uma faixa leitosa no céu noturno em locais escuros.",
      },
    ],
    exemplos: [
      {
        titulo: "Monte Palomar — eficiência reduzida à metade",
        descricao:
          "O famoso telescópio de 5m no Observatório de Monte Palomar, Califórnia, teve sua capacidade de observação reduzida em 50% devido ao crescimento das cidades de San Diego e Los Angeles ao longo do século XX.",
      },
      {
        titulo: "Via Láctea invisível para a maioria",
        descricao:
          "Hoje, cerca de 1/5 da população mundial — incluindo mais de 2/3 dos americanos e mais da metade dos europeus — não consegue ver a Via Láctea a olho nu por causa da poluição luminosa.",
      },
    ],
    revisao: [
      "A PL reduz a eficiência dos telescópios e prejudica observações astronômicas.",
      "O telescópio de Monte Palomar teve sua eficiência reduzida à metade pelo skyglow.",
      "Aumento de 25% na iluminação noturna representa ~US$20mi de prejuízo por telescópio de 8m.",
      "1/5 da população mundial não consegue mais ver a Via Láctea a olho nu.",
      "Observatórios modernos precisam ser instalados longe das cidades para funcionar adequadamente.",
    ],
    quiz: [
      {
        id: "m3q1",
        tipo: "multipla_escolha",
        enunciado:
          "Qual telescópio famoso teve sua eficiência reduzida à metade pela PL das cidades próximas?",
        alternativas: [
          "Telescópio Hubble",
          "Telescópio de Monte Palomar",
          "Telescópio James Webb",
          "Telescópio VLT do Chile",
        ],
        resposta: "Telescópio de Monte Palomar",
        explicacao:
          "O telescópio de 5 metros de Monte Palomar, na Califórnia, teve sua eficiência reduzida à metade pelo crescimento das cidades de San Diego e Los Angeles.",
      },
      {
        id: "m3q2",
        tipo: "verdadeiro_falso",
        enunciado:
          "Mais de dois terços da população dos EUA consegue ver a Via Láctea a olho nu.",
        resposta: false,
        explicacao:
          "FALSO. Mais de 2/3 da população dos EUA PERDEU a visibilidade da Via Láctea a olho nu por causa da poluição luminosa.",
      },
      {
        id: "m3q3",
        tipo: "multipla_escolha",
        enunciado:
          "Qual é a estimativa de perda econômica para a astronomia com um aumento de 25% na iluminação noturna (para um telescópio de 8m)?",
        alternativas: [
          "US$ 2 milhões",
          "US$ 8,5 milhões",
          "US$ 20 milhões",
          "US$ 85 milhões",
        ],
        resposta: "US$ 20 milhões",
        explicacao:
          "Estudos de Mendez e Schmidt (2006) indicam que um aumento de 25% na iluminação noturna causa uma perda de aproximadamente US$20 milhões para a astronomia por telescópio de 8 metros.",
      },
      {
        id: "m3q4",
        tipo: "verdadeiro_falso",
        enunciado:
          "A poluição luminosa afeta apenas astrônomos profissionais, não o público em geral.",
        resposta: false,
        explicacao:
          "FALSO. A PL afeta qualquer pessoa que queira observar o céu, incluindo amadores e a população em geral que perde o direito de contemplar o céu estrelado.",
      },
      {
        id: "m3q5",
        tipo: "multipla_escolha",
        enunciado:
          "Que proporção da população mundial perdeu a visibilidade a olho nu da Via Láctea?",
        alternativas: [
          "Cerca de 1/10",
          "Cerca de 1/5",
          "Cerca de 1/3",
          "Mais da metade",
        ],
        resposta: "Cerca de 1/5",
        explicacao:
          "Segundo Cinzano et al. (2003), cerca de 1/5 da população mundial perdeu a visibilidade da Via Láctea a olho nu.",
      },
      {
        id: "m3q6",
        tipo: "multipla_escolha",
        enunciado:
          "Por que os observatórios modernos precisam ser instalados longe das cidades?",
        alternativas: [
          "Por causa de regulamentos de zoneamento urbano",
          "Para evitar poluição sonora e vibrações",
          "Para ter céu escuro e fugir do skyglow causado pela PL",
          "Porque telescópios precisam de altitude para funcionar",
        ],
        resposta: "Para ter céu escuro e fugir do skyglow causado pela PL",
        explicacao:
          "Observatórios são instalados em locais remotos principalmente para fugir da poluição luminosa (skyglow) das cidades, que prejudicaria a qualidade das observações astronômicas.",
      },
      {
        id: "m3q7",
        tipo: "verdadeiro_falso",
        enunciado:
          "Telescópios de 4 metros podem observar objetos 250 milhões de vezes menos brilhantes que o limiar da visão humana.",
        resposta: true,
        explicacao:
          "VERDADEIRO. Com detectores eletrônicos sensíveis, telescópios de 4 metros de diâmetro podem detectar objetos com esse nível de fraqueza luminosa, capacidade severamente comprometida pela PL.",
      },
      {
        id: "m3q8",
        tipo: "multipla_escolha",
        enunciado:
          "Como a PL afeta visualmente o céu urbano segundo pesquisadores?",
        alternativas: [
          "O céu fica mais escuro e frio",
          "O céu adquire uma tonalidade clara e acinzentada",
          "O céu fica com mais estrelas visíveis",
          "Não há mudança visual perceptível",
        ],
        resposta: "O céu adquire uma tonalidade clara e acinzentada",
        explicacao:
          "Segundo Mello (2022), as intensas luzes das cidades causam uma espécie de ofuscamento das estrelas, fazendo o céu adquirir uma tonalidade clara e acinzentada.",
      },
    ],
    textoCompleto: `
## Texto Completo para Professores – Módulo 3

A poluição luminosa é uma grande vilã para os astrônomos. Toda a luz mal direcionada para o céu reduz a eficiência dos instrumentos de observação, de modo que observatórios precisam ser cada vez mais construídos em locais remotos.

**Dados-chave:**
- Telescópios de 4m com detectores eletrônicos: podem ver objetos 250 milhões de vezes menos brilhantes que o limiar humano
- Monte Palomar (5m, Califórnia): eficiência reduzida à metade pelo crescimento de San Diego e Los Angeles
- Aumento de 25% na iluminação noturna = perda de ~US$20mi para astronomia (por telescópio de 8m)

**Impacto global:**
- 1/5 da população mundial perdeu visibilidade da Via Láctea
- Mais de 2/3 dos americanos não veem a Via Láctea
- Mais da metade dos europeus idem

O céu estrelado é um bem cultural e científico da humanidade. A perda da capacidade de observá-lo representa um empobrecimento cultural e científico irreversível se não houver ação.
    `,
    orientacoesDidaticas: `
## Orientações Didáticas – Módulo 3

**Interdisciplinaridade:** Astronomia, Física (óptica), Geografia (urbanização).

### Atividades Sugeridas

**Observação Noturna:** Se possível, organizar uma noite de observação em local afastado, comparando com o que se vê da cidade.

**Mapa da PL:** Usar o aplicativo "Light Pollution Map" ou "Globe at Night" para visualizar a distribuição da PL na região.

**Debate:** "O desenvolvimento urbano deve estar em conflito com a observação do céu?"
    `,
    perguntasRevisao: [
      {
        pergunta:
          "De que forma a poluição luminosa prejudica os telescópios e observatórios?",
        gabarito:
          "O skyglow ilumina o fundo do céu, tornando mais difícil detectar objetos fracos. Isso reduz a eficiência dos telescópios e a qualidade das observações.",
      },
      {
        pergunta:
          "Qual é o prejuízo econômico estimado para um telescópio de 8 metros com aumento de 25% na iluminação noturna?",
        gabarito:
          "Aproximadamente US$20 milhões de perda para a astronomia.",
      },
      {
        pergunta:
          "Que porcentagem da população americana perdeu a capacidade de ver a Via Láctea?",
        gabarito:
          "Mais de 2/3 da população dos EUA não consegue mais ver a Via Láctea a olho nu.",
      },
    ],
    atividadePratica: `
## Atividade Prática – Módulo 3

### "Conta Estrelas"

**Objetivo:** Medir a qualidade do céu local usando o método de contagem de estrelas.

**Desenvolvimento:**
1. Participar do programa Globe at Night (globeatnight.org).
2. Em uma noite limpa, identificar uma constelação de referência.
3. Contar quantas estrelas são visíveis nessa região.
4. Comparar com o padrão esperado sem PL.
5. Registrar os dados na plataforma e comparar com dados de outras regiões.
    `,
    conexaoBNCC: `
## Conexão com a BNCC – Módulo 3

- **(EF09CI14)** Descrever a composição e a estrutura do Universo, incluindo o Sistema Solar, com suas características gerais e particulares.
- **(EM13CNT301)** Construir questões, elaborar hipóteses, previsões e estimativas, empregar instrumentos de medição e representar e interpretar modelos explicativos.
    `,
  },
  {
    id: 4,
    slug: "consequencias-socioambientais",
    titulo: "Consequências Socioambientais",
    subtitulo: "Impactos na fauna, flora e saúde humana",
    icone: "🌿",
    cor: "from-emerald-500 to-green-700",
    resumo:
      "A poluição luminosa afeta profundamente a fauna, a flora e a saúde humana. Tartarugas marinhas se desorientam, aves colidem com prédios, vagalumes perdem a comunicação e humanos têm o sono perturbado. A luz excessiva à noite desregula os ritmos biológicos de toda a natureza.",
    conteudo: `
## Impactos na Saúde Humana

O tipo de PL mais comum a interferir na saúde humana é a **luz intrusa**. A exposição à luz excessiva em momentos que precisamos do escuro não apenas desregula o sono, como também pode trazer malefícios ainda pouco compreendidos pela ciência.

A luz é detectada no olho por células ganglionares que formam o **trato retino-hipotalâmico**. Seus estímulos chegam ao **núcleo supraquiasmático**, o principal marcapasso circadiano (relógio biológico). Na presença de luz, a produção de melatonina é suprimida.

Outros hormônios também são afetados: **prolactina, serotonina, glicocorticóides e adrenocorticóides** (FERNANDES; COELHO; CAIRES, 2001).

**Consequências para a saúde:**
- Distúrbios do sono
- Estresse
- Comprometimento da visão
- Risco de acidentes (motoristas ofuscados por postes ou holofotes)
- Desregulação do sistema imunológico

## Impactos na Fauna

### Tartarugas Marinhas
Filhotes de tartarugas marinhas se guiam pela escuridão e pela luminescência natural das ondas para chegar ao oceano. Ao se depararem com luzes artificiais, confundem-se e se movem na direção contrária, resultando em **morte por desidratação ou atropelamento**.

> Por isso, algumas legislações estaduais no Brasil proíbem luminárias próximas ao litoral (Lei Estadual da Bahia nº 7.034/1997).

### Anfíbios
As rãs da espécie *Physalaemus pustulosus* tornam-se **menos seletivas na escolha de parceiros** quando o nível de iluminação está elevado, comportamento que as expõe mais à predação (RAND et al., 1997 apud GARGAGLIONI, 2009).

### Aves
- Rotas migratórias podem ser alteradas, levando à extinção local de espécies
- Algumas aves são atraídas pela iluminação de edifícios, torres ou monumentos, **voando em círculos até a exaustão** ou colidindo com superfícies

### Vagalumes e Besouros
Vagalumes se comunicam por **códigos bioluminescentes** durante o acasalamento. A poluição luminosa interfere nessa comunicação — as fêmeas não reconhecem os sinais dos machos — **comprometendo a reprodução da espécie**. Esses insetos também são vetores de controle de pragas.

## Impactos na Flora

Certas plantas **não florescem** quando a duração da noite é artificialmente encurtada. Outras florescem prematuramente em resposta a um fotoperíodo alterado, o que:

- Compromete o ciclo natural de produção de frutos
- Altera a cadeia alimentar
- Pode contribuir para o surgimento de doenças em regiões onde antes não havia registros (BARGHINI, 2010)

## A Invisibilidade do Problema

A característica "invisível" da PL torna difícil para o ser humano identificar os danos físicos e mentais causados. Quando esses danos ocorrem, não podem ser avaliados pericialmente, a não ser que as condições sejam reproduzidas exatamente como ocorreram (MARQUES, 2022).

A Constituição Federal estabelece que "todos têm direito ao meio ambiente ecologicamente equilibrado". O equilíbrio ecológico é parte indispensável das condições que garantem uma qualidade de vida saudável.
    `,
    glossario: [
      {
        termo: "Ritmo Circadiano",
        definicao:
          "Ciclo biológico de aproximadamente 24 horas que regula sono, metabolismo, temperatura corporal e outros processos fisiológicos.",
      },
      {
        termo: "Melatonina",
        definicao:
          "Hormônio produzido pela glândula pineal, regulado pela luz. É suprimido na presença de luz e secretado no escuro, regulando o sono.",
      },
      {
        termo: "Núcleo Supraquiasmático",
        definicao:
          "Estrutura no hipotálamo considerada o principal 'relógio biológico' humano, que responde diretamente aos estímulos de luz.",
      },
      {
        termo: "Fotoperíodo",
        definicao:
          "Duração da exposição à luz durante um período de 24h. Muitas plantas e animais usam o fotoperíodo como sinal para processos como floração e migração.",
      },
      {
        termo: "Bioluminescência",
        definicao:
          "Produção e emissão de luz por organismos vivos, como vagalumes e certas bactérias e fungos.",
      },
      {
        termo: "Trato Retino-Hipotalâmico",
        definicao:
          "Via neural que conecta as células ganglionares da retina ao hipotálamo, transmitindo informações sobre luminosidade ambiental.",
      },
    ],
    exemplos: [
      {
        titulo: "Tartarugas desorientadas nas praias",
        descricao:
          "Em praias iluminadas por resorts e cidades litorâneas, filhotes de tartarugas seguem as luzes artificiais em vez do oceano, morrendo de desidratação ou sendo atropelados.",
      },
      {
        titulo: "Aves e os edifícios iluminados",
        descricao:
          "Estudos estimam que milhões de aves morrem anualmente nos EUA ao colidir com arranha-céus iluminados, confundindo a luz dos prédios com o horizonte ou estrelas durante a migração.",
      },
      {
        titulo: "Vagalumes em extinção",
        descricao:
          "Pesquisadores registraram declínio drástico das populações de vagalumes em áreas urbanas. A luz noturna impede que machos e fêmeas se encontrem durante o período reprodutivo.",
      },
    ],
    revisao: [
      "A luz intrusa é o tipo de PL mais prejudicial à saúde humana.",
      "Supressão da melatonina pela luz noturna causa distúrbios do sono.",
      "Tartarugas marinhas se desorientam com luz artificial nas praias.",
      "Aves podem colidir com prédios iluminados durante a migração.",
      "Vagalumes perdem a capacidade de reprodução pelo skyglow.",
      "Plantas podem florescer fora de época por fotoperíodo alterado.",
    ],
    quiz: [
      {
        id: "m4q1",
        tipo: "multipla_escolha",
        enunciado:
          "Qual hormônio é suprimido pela presença de luz, afetando o sono humano?",
        alternativas: [
          "Adrenalina",
          "Melatonina",
          "Insulina",
          "Cortisol",
        ],
        resposta: "Melatonina",
        explicacao:
          "A melatonina é produzida pela glândula pineal e é suprimida na presença de luz. É fundamental para regular o ciclo sono-vigília (ritmo circadiano).",
      },
      {
        id: "m4q2",
        tipo: "verdadeiro_falso",
        enunciado:
          "A poluição luminosa afeta apenas animais, não tendo impacto significativo nas plantas.",
        resposta: false,
        explicacao:
          "FALSO. A PL altera o fotoperíodo das plantas, fazendo com que algumas não floresçam e outras floresçam fora de época, comprometendo a produção de frutos e toda a cadeia alimentar.",
      },
      {
        id: "m4q3",
        tipo: "multipla_escolha",
        enunciado:
          "Por que filhotes de tartarugas marinhas morrem em praias iluminadas?",
        alternativas: [
          "A luz aumenta a temperatura da areia, matando-as por calor",
          "Elas confundem a luz artificial com o oceano e vão na direção errada",
          "A luz interfere na respiração das tartarugas",
          "Predadores são atraídos pela luz e atacam os filhotes",
        ],
        resposta:
          "Elas confundem a luz artificial com o oceano e vão na direção errada",
        explicacao:
          "Os filhotes normalmente se orientam pela escuridão e pela luminescência natural das ondas. Luzes artificiais os confundem, fazendo-os se mover na direção errada e morrer por desidratação ou atropelamento.",
      },
      {
        id: "m4q4",
        tipo: "verdadeiro_falso",
        enunciado:
          "A comunicação dos vagalumes por bioluminescência é prejudicada pela poluição luminosa.",
        resposta: true,
        explicacao:
          "VERDADEIRO. Os vagalumes usam flashes de luz para se comunicar durante o acasalamento. A PL interfere nesses sinais, impedindo que fêmeas reconheçam os machos e comprometendo a reprodução.",
      },
      {
        id: "m4q5",
        tipo: "multipla_escolha",
        enunciado:
          "Qual estrutura cerebral é o principal 'relógio biológico' humano?",
        alternativas: [
          "Cerebelo",
          "Hipocampo",
          "Núcleo Supraquiasmático",
          "Amígdala",
        ],
        resposta: "Núcleo Supraquiasmático",
        explicacao:
          "O núcleo supraquiasmático, localizado no hipotálamo, é o principal marcapasso circadiano humano. Recebe estímulos de luz através do trato retino-hipotalâmico e regula a produção de melatonina.",
      },
      {
        id: "m4q6",
        tipo: "multipla_escolha",
        enunciado:
          "Que lei estadual brasileira proíbe luminárias próximas ao litoral para proteger tartarugas?",
        alternativas: [
          "Lei de São Paulo nº 12.300/2006",
          "Lei do Rio de Janeiro nº 5.234/2008",
          "Lei da Bahia nº 7.034/1997",
          "Lei do Ceará nº 13.103/2001",
        ],
        resposta: "Lei da Bahia nº 7.034/1997",
        explicacao:
          "A Lei Estadual da Bahia nº 7.034/1997 proíbe o uso de fonte de iluminação que ocasione intensidade luminosa superior a zero lux para proteger as tartarugas marinhas no litoral norte.",
      },
      {
        id: "m4q7",
        tipo: "verdadeiro_falso",
        enunciado:
          "A poluição luminosa pode causar riscos a motoristas ao ofuscar sua visão.",
        resposta: true,
        explicacao:
          "VERDADEIRO. O tipo Glare pode ofuscar temporariamente a visão de motoristas ao saírem de áreas escuras para muito iluminadas ou ao se depararem com postes e holofotes mal posicionados.",
      },
      {
        id: "m4q8",
        tipo: "multipla_escolha",
        enunciado:
          "Como a PL pode afetar a reprodução de anfíbios como a rã Physalaemus pustulosus?",
        alternativas: [
          "Impede que as rãs se aproximem da água",
          "Torna as fêmeas menos seletivas na escolha de parceiros, expondo-as à predação",
          "Interfere diretamente no sistema reprodutivo das rãs",
          "Causa mutações genéticas nos ovos",
        ],
        resposta:
          "Torna as fêmeas menos seletivas na escolha de parceiros, expondo-as à predação",
        explicacao:
          "Pesquisas indicam que níveis elevados de iluminação tornam as fêmeas dessa espécie menos seletivas, provavelmente por quererem se acasalar rapidamente e evitar o risco de predação em ambientes muito iluminados.",
      },
    ],
    textoCompleto: `
## Texto Completo para Professores – Módulo 4

### Impactos na Saúde Humana

A luz intrusa é o tipo de PL mais prejudicial à saúde. O mecanismo é: luz → retina → trato retino-hipotalâmico → núcleo supraquiasmático → supressão da melatonina e alteração de outros hormônios (prolactina, serotonina, glicocorticóides, adrenocorticóides).

Consequências: distúrbios do sono, estresse, risco de acidentes (glare para motoristas), problemas de visão.

### Impactos na Fauna

**Tartarugas marinhas:** Filhotes se orientam pela escuridão e luminescência das ondas. Luzes artificiais os desorientam → morte por desidratação/atropelamento. Lei Estadual da Bahia nº 7.034/1997 proíbe luminárias em praias.

**Anfíbios:** *Physalaemus pustulosus* fica menos seletiva em parceiros com alta iluminação, aumentando risco de predação.

**Aves:** Alteração de rotas migratórias; colisão com edifícios iluminados → possível extinção local de espécies.

**Vagalumes:** Comunicação bioluminescente para acasalamento é interrompida → declínio reprodutivo.

### Impactos na Flora

Fotoperíodo alterado → algumas plantas não florescem; outras florescem prematuramente → compromete produção de frutos → altera cadeia alimentar → possível surgimento de doenças.

### Base Legal

Constituição Federal, Art. 225: "todos têm direito ao meio ambiente ecologicamente equilibrado".
    `,
    orientacoesDidaticas: `
## Orientações Didáticas – Módulo 4

**Interdisciplinaridade:** Biologia (fisiologia humana, ecologia), Química (hormônios), Sociologia (direito ao meio ambiente saudável).

### Atividade Sugerida
**"Biodiversidade e Luz Noturna":**
- Pesquisar espécies locais afetadas pela PL
- Criar um quadro comparativo de espécies afetadas (anfíbios, aves, insetos, plantas)
- Propor medidas protetoras específicas para cada grupo
    `,
    perguntasRevisao: [
      {
        pergunta:
          "Explique o mecanismo pelo qual a luz noturna perturba o sono humano.",
        gabarito:
          "A luz é captada pela retina, passa pelo trato retino-hipotalâmico e chega ao núcleo supraquiasmático, que suprime a produção de melatonina — hormônio responsável por induzir o sono.",
      },
      {
        pergunta:
          "Por que filhotes de tartarugas marinhas podem morrer em praias urbanizadas?",
        gabarito:
          "Os filhotes se orientam pela escuridão e pela luminescência das ondas. Luzes artificiais os desorientam, fazendo-os ir na direção errada e morrer por desidratação ou atropelamento.",
      },
      {
        pergunta: "Como a PL afeta a reprodução dos vagalumes?",
        gabarito:
          "A comunicação bioluminescente (flashes de luz) usada no acasalamento é perturbada pela PL. As fêmeas não reconhecem os sinais dos machos, comprometendo a reprodução da espécie.",
      },
      {
        pergunta:
          "Quais são os impactos da PL na flora? Como isso pode afetar a cadeia alimentar?",
        gabarito:
          "Fotoperíodo alterado → floração fora de época → alteração na disponibilidade de néctar e frutos → impacto em polinizadores e demais animais que dependem dessas plantas → desequilíbrio na cadeia alimentar.",
      },
    ],
    atividadePratica: `
## Atividade Prática – Módulo 4

### "Experimento do Fotoperíodo"

**Objetivo:** Observar o efeito da luz artificial no ciclo de plantas.

**Materiais:** 2 vasinhos com a mesma planta sensível ao fotoperíodo (ex: feijão), luz artificial.

**Desenvolvimento:**
1. Grupo Controle: planta em ciclo natural (luz do dia, escuridão à noite).
2. Grupo Experimental: planta com iluminação artificial por 18h/dia.
3. Observar e registrar diferenças de crescimento, floração e saúde durante 3–4 semanas.
4. Relacionar resultados com os impactos da PL na natureza.
    `,
    conexaoBNCC: `
## Conexão com a BNCC – Módulo 4

- **(EF07CI07)** Caracterizar os principais ecossistemas brasileiros quanto à flora, fauna, clima e as práticas de manejo.
- **(EF08CI09)** Relacionar a participação de fungos e bactérias no processo de decomposição, reconhecendo a importância desse processo para a nutrição de plantas em um ecossistema.
- **(EF09CI08)** Associar os efeitos das radiações eletromagnéticas à saúde humana.
- **(EF05CI04)** Identificar os principais usos da luz no cotidiano e explicar o funcionamento de tecnologias que utilizam a luz.
    `,
  },
  {
    id: 5,
    slug: "cultura-ceu",
    titulo: "A Cultura Envolvida no Céu",
    subtitulo: "Astroturismo, patrimônio cultural e o valor do céu escuro",
    icone: "🌌",
    cor: "from-violet-500 to-purple-700",
    resumo:
      "O céu noturno é um patrimônio cultural da humanidade. O astroturismo emerge como prática sustentável de valorização dos céus escuros. Organizações internacionais certificam locais com baixa poluição luminosa, fomentando economia local e a preservação do ambiente noturno.",
    conteudo: `
## O Astroturismo

Quando há deslocamento e pernoite com o objetivo de observar o céu escuro, contemplar os astros ou fenômenos astronômicos, temos uma prática caracterizada como **astroturismo**, ou turismo astronômico (VELLOSO; COSTA, 2022).

Segundo Tapada et al. (2020), o astroturismo corresponde à prática crescente de atividades turísticas de natureza diversa, **inovadoras, integradas e atrativas, centradas na observação dos céus noturnos** e fenômenos celestes, especialmente em espaços naturais. Ele contribui para:
- Envolvimento e participação das comunidades locais
- Desenvolvimento de territórios de baixa densidade
- Promoção de economia, meio ambiente e sustentabilidade

## O Valor Cultural do Céu

"O risco da perda do céu estrelado tem colocado a preservação dos locais escuros em um contexto nobre, despertando a atenção das pessoas e atraindo turistas para locais de rara beleza, na Terra e no firmamento." (MELLO, 2022, p. 172)

O astroturismo existe há centenas de anos, inicialmente relacionado à agricultura e práticas culturais tradicionais. Atualmente é praticado de formas diversas, como a **astrofotografia** (HONORATO; VIOLIN, 2019).

## Programas de Certificação de Céus Escuros

### IDA – International Dark-Sky Association (fundada em 2001)

Programa "Parques Internacionais de Céus Escuros" — 5 categorias:
1. **Santuários de Céus Escuros:** locais remotos, totalmente preservados
2. **Reservas de Céus Escuros:** núcleo escuro com iluminação controlada nas bordas
3. **Parques de Céus Escuros:** parques naturais com políticas adequadas de iluminação
4. **Comunidades de Céus Escuros:** localidades com população engajada
5. **Desenvolvimentos de Distinção:** ações localizadas para iluminação racional

### Fundação Starlight (Espanha – apoio UNESCO/UNWTO/UAI)
1. **Reservas Starlight:** espaços naturais com zonas de proteção
2. **Destinos Turísticos Starlight:** excelente qualidade de céu
3. **Parques Estelares:** áreas rurais para astronomia amadora
4. **Casas e Hotéis Starlight:** hospedagens que promovem o astroturismo

### RASC – Royal Astronomical Society of Canada
1. **Área de Proteção de Céus Escuros:** sem iluminação artificial visível
2. **Parque Celeste Urbano:** áreas urbanas com iluminação estritamente controlada
3. **Reserva Noturna:** controle de luz e atividades de conscientização

## O Brasil e o Astroturismo

"Embora países como Turquia, Rússia e Brasil ainda investem pouco em astroturismo, e outros como Estados Unidos, Canadá, Espanha e Reino Unido demonstram baixo protagonismo, **o Chile se destaca** com infraestrutura, leis específicas e políticas públicas eficazes para a proteção do céu noturno." (MELLO, 2022)

O astroturismo possibilita:
- Desenvolvimento de práticas turísticas sustentáveis
- Ampliação de atrativos em locais que já ofertam turismo
- Educação ambiental e reflexão sobre nosso lugar no mundo

## Conexão com a Astrofotografia

A astrofotografia é uma das formas de astroturismo e arte que está crescendo. O desafio fotográfico do projeto "Tem Luz Aí?" conecta-se diretamente a essa tradição cultural de contemplar e registrar o céu.
    `,
    glossario: [
      {
        termo: "Astroturismo",
        definicao:
          "Prática turística centrada na observação do céu noturno, astros e fenômenos celestes, geralmente em locais com baixa poluição luminosa.",
      },
      {
        termo: "Astrofotografia",
        definicao:
          "Modalidade de fotografia dedicada a registrar objetos celestes e o céu noturno, desde paisagens estreladas até galáxias distantes.",
      },
      {
        termo: "Dark Sky Park",
        definicao:
          "Parque de céus escuros — área certificada pela IDA por ter políticas adequadas de iluminação e qualidade excepcional do céu noturno.",
      },
      {
        termo: "IDA",
        definicao:
          "International Dark-Sky Association — organização americana fundada em 1988 que lidera a proteção do céu noturno mundial.",
      },
      {
        termo: "Fundação Starlight",
        definicao:
          "Organização espanhola, com apoio da UNESCO, que certifica destinos turísticos por sua qualidade de céu noturno.",
      },
      {
        termo: "Escala Bortle",
        definicao:
          "Escala numérica de 1 a 9 que classifica a escuridão do céu noturno de um local, de 1 (céu perfeitamente escuro) a 9 (céu urbano brilhante).",
      },
    ],
    exemplos: [
      {
        titulo: "Chile — referência mundial em astroturismo",
        descricao:
          "O Chile possui legislação específica para proteção do céu noturno, infraestrutura para astroturismo e abriga alguns dos maiores observatórios do mundo, como o VLT (Very Large Telescope) do ESO no deserto do Atacama.",
      },
      {
        titulo: "Parques de Céus Escuros no Brasil",
        descricao:
          "O Brasil possui algumas áreas com certificação ou iniciativas de proteção do céu, especialmente em regiões do interior distantes de grandes cidades. O Polo Astronômico de Amparo/SP é um exemplo de iniciativa local.",
      },
    ],
    revisao: [
      "Astroturismo é a prática turística de observar o céu noturno em locais de baixa PL.",
      "A IDA possui 5 categorias de certificação de locais com céu escuro.",
      "A Fundação Starlight (Espanha) também certifica destinos e possui apoio da UNESCO.",
      "O Chile é referência mundial em astroturismo e proteção do céu noturno.",
      "O astroturismo promove economia local sustentável em regiões de baixa densidade.",
    ],
    quiz: [
      {
        id: "m5q1",
        tipo: "multipla_escolha",
        enunciado: "O que é astroturismo?",
        alternativas: [
          "Turismo espacial para astronautas",
          "Viagens com o objetivo de observar o céu noturno e astros",
          "Visitas a museus de astronomia",
          "Uso de telescópios em cidades",
        ],
        resposta: "Viagens com o objetivo de observar o céu noturno e astros",
        explicacao:
          "O astroturismo é a prática de deslocamento e pernoite com o objetivo de observar o céu escuro, contemplar os astros e fenômenos astronômicos.",
      },
      {
        id: "m5q2",
        tipo: "verdadeiro_falso",
        enunciado:
          "O Chile é referência mundial em astroturismo e proteção do céu noturno.",
        resposta: true,
        explicacao:
          "VERDADEIRO. O Chile se destaca com infraestrutura, leis específicas e políticas públicas eficazes para a proteção do céu noturno, hospedando também grandes observatórios internacionais.",
      },
      {
        id: "m5q3",
        tipo: "multipla_escolha",
        enunciado: "Quantas categorias de certificação a IDA possui para locais de céus escuros?",
        alternativas: ["3", "4", "5", "7"],
        resposta: "5",
        explicacao:
          "A IDA possui 5 categorias: Santuários, Reservas, Parques, Comunidades e Desenvolvimentos de Distinção de Céus Escuros.",
      },
      {
        id: "m5q4",
        tipo: "verdadeiro_falso",
        enunciado:
          "A Fundação Starlight é uma organização americana sem vínculo com a UNESCO.",
        resposta: false,
        explicacao:
          "FALSO. A Fundação Starlight é espanhola e possui apoio da UNESCO, da Organização Mundial do Turismo (UNWTO) e da União Astronômica Internacional (UAI).",
      },
      {
        id: "m5q5",
        tipo: "multipla_escolha",
        enunciado: "Qual tipo de local recebe o título 'Santuário de Céus Escuros' pela IDA?",
        alternativas: [
          "Parques nacionais com iluminação controlada",
          "Localidades com população engajada na preservação",
          "Locais remotos com céus totalmente preservados",
          "Áreas urbanas com iluminação eficiente",
        ],
        resposta: "Locais remotos com céus totalmente preservados",
        explicacao:
          "Santuários de Céus Escuros são locais remotos com céus totalmente preservados da luz artificial — a categoria mais rigorosa da IDA.",
      },
      {
        id: "m5q6",
        tipo: "multipla_escolha",
        enunciado: "O astroturismo contribui para quais aspectos do desenvolvimento local?",
        alternativas: [
          "Apenas econômicos",
          "Apenas ambientais",
          "Econômicos, ambientais e sustentáveis",
          "Somente científicos e educacionais",
        ],
        resposta: "Econômicos, ambientais e sustentáveis",
        explicacao:
          "Segundo Tapada et al. (2020), o astroturismo contribui para o envolvimento das comunidades locais e para o desenvolvimento de territórios, promovendo economia, meio ambiente e sustentabilidade.",
      },
      {
        id: "m5q7",
        tipo: "verdadeiro_falso",
        enunciado: "O Brasil investe significativamente em astroturismo comparado ao Chile.",
        resposta: false,
        explicacao:
          "FALSO. O Brasil ainda investe pouco em astroturismo. O Chile se destaca como líder latino-americano e mundial na proteção do céu noturno e desenvolvimento do astroturismo.",
      },
      {
        id: "m5q8",
        tipo: "multipla_escolha",
        enunciado: "A Escala Bortle serve para medir o quê?",
        alternativas: [
          "A intensidade da luz de uma lâmpada",
          "A escuridão do céu noturno de um local",
          "A poluição do ar de uma cidade",
          "A distância das estrelas",
        ],
        resposta: "A escuridão do céu noturno de um local",
        explicacao:
          "A Escala Bortle (de 1 a 9) classifica a escuridão do céu noturno: 1 = céu perfeitamente escuro e natural; 9 = céu urbano extremamente brilhante.",
      },
    ],
    textoCompleto: `
## Texto Completo para Professores – Módulo 5

### Astroturismo e Patrimônio do Céu

O astroturismo surge como resposta cultural e econômica à perda do céu escuro. Ao valorizar locais com baixa PL, cria-se uma razão econômica para protegê-los — o que beneficia tanto o turismo quanto o ambiente.

**Organizações de certificação:**
- IDA (1988/2001): 5 categorias (Santuários, Reservas, Parques, Comunidades, Desenvolvimentos)
- Fundação Starlight: 4 categorias, com apoio UNESCO/UNWTO/UAI
- RASC: 3 categorias específicas para o Canadá

**O Brasil no contexto global:**
Investe pouco em astroturismo. Chile é o exemplo a seguir: legislação, infraestrutura, grandes observatórios internacionais.

**Conexão cultural:** O céu noturno é patrimônio da humanidade. Indígenas, agricultores e diversas culturas ao longo da história utilizaram o céu para navegação, calendário agrícola, rituais e identidade cultural.

**Astrofotografia:** Uma das formas mais acessíveis de astroturismo, conectando arte, ciência e preservação ambiental.
    `,
    orientacoesDidaticas: `
## Orientações Didáticas – Módulo 5

**Interdisciplinaridade:** Geografia (turismo sustentável), História (astronomia cultural), Arte (astrofotografia).

### Atividade Sugerida
**"Roteiro de Astroturismo Local":**
- Pesquisar locais com baixa PL na região
- Elaborar um roteiro de astroturismo com guia básico de observação
- Incluir aspectos culturais, históricos e ecológicos do local
- Apresentar o roteiro como se fosse um guia turístico
    `,
    perguntasRevisao: [
      {
        pergunta: "Defina astroturismo e explique seus benefícios para comunidades locais.",
        gabarito:
          "Astroturismo é a prática turística de observar o céu noturno. Beneficia comunidades locais ao gerar economia sustentável, preservar o ambiente noturno e promover educação ambiental.",
      },
      {
        pergunta: "Quais são as 5 categorias de certificação da IDA?",
        gabarito:
          "1) Santuários de Céus Escuros; 2) Reservas de Céus Escuros; 3) Parques de Céus Escuros; 4) Comunidades de Céus Escuros; 5) Desenvolvimentos de Distinção.",
      },
    ],
    atividadePratica: `
## Atividade Prática – Módulo 5

### "Fotografia do Céu Noturno"

**Objetivo:** Registrar e comparar a qualidade do céu noturno em diferentes locais.

**Desenvolvimento:**
1. Fotografar o céu à noite no bairro da escola.
2. Se possível, fotografar em local afastado durante uma viagem ou visita.
3. Comparar as duas fotografias: quantas estrelas são visíveis? Há Via Láctea?
4. Relacionar os resultados com o conceito de Escala Bortle.
5. Criar uma exposição fotográfica na escola.
    `,
    conexaoBNCC: `
## Conexão com a BNCC – Módulo 5

- **(EF07GE01)** Avaliar, por meio de exemplos extraídos dos meios de comunicação, ideias e estereótipos acerca das paisagens e da biodiversidade dos diferentes países, incluindo o Brasil.
- **(EM13CHS302)** Analisar e avaliar os processos de ocupação do espaço e a produção territorial, considerando o papel dos conflitos e negociações para a resolução de problemas de natureza socioambiental.
    `,
  },
  {
    id: 6,
    slug: "leis-normas-medidas",
    titulo: "Leis, Normas e Medidas Relacionadas",
    subtitulo: "O quadro legal brasileiro e internacional",
    icone: "⚖️",
    cor: "from-slate-500 to-gray-700",
    resumo:
      "No Brasil, há poucas leis específicas sobre poluição luminosa. Alguns municípios criaram medidas pontuais, mas a fiscalização é ineficaz. Países como República Tcheca, Chile e Itália possuem legislação mais avançada. Normas técnicas da ABNT orientam a iluminação pública.",
    conteudo: `
## O Panorama Legal Brasileiro

No Brasil, há poucas medidas legais para o combate da poluição luminosa (PL). Não existe uma lei federal abrangente que trate do tema de forma integral.

"A conscientização no mundo tem aumentado nos últimos anos. Ao redor do globo, diversos países tomaram medidas para minimizar os problemas da poluição luminosa. Os Estados Unidos foram pioneiros na criação de legislação contra seus efeitos nocivos. Itália, Espanha e Chile também possuem leis voltadas para o combate da poluição luminosa. **A República Tcheca foi o primeiro país a aprovar legislação federal sobre o tema, em 2002**." (GARGAGLIONI, 2009)

## Legislação Brasileira Existente

### Histórica (Patrimônio Cultural)
- **Decreto-Lei nº 25/1937** — Define patrimônio histórico e artístico nacional. Embora não trate de PL diretamente, é base para proteção de locais históricos afetados pela luz.

### Proteção de Tartarugas Marinhas
- **Portaria IBAMA nº 11/1992** e **Lei Estadual da Bahia nº 7.034/1997** — Proíbem iluminação que cause mais de zero lux próximo a praias de nidificação de tartarugas.

### Municípios
- **Lei Municipal nº 10.850/2001 – Campinas/SP:** Criou a APA do Observatório Municipal Jean Nicolini, com critérios para construção e iluminação em raio de 300m a 10km.
- **Lei Municipal nº 3.722/2013 – Amparo/SP:** Criou a Unidade de Conservação do Sítio de Observações Astronômicas, voltada para atividades culturais, educacionais, turísticas e científicas.

### Paisagem Cultural
- **Portaria IPHAN nº 127/2009** — Chancela de "Paisagem Cultural Brasileira":
  - *Art. 1º:* Paisagem Cultural Brasileira é porção do território representativa do processo de interação do homem com o meio natural.
  - *Art. 3º:* Considera o caráter dinâmico da cultura e valorizando a preservação responsável do patrimônio.

### Eficiência Energética
- **Portaria nº 1.007/2010** — Determinou a substituição progressiva das lâmpadas incandescentes.

## Normas Técnicas da ABNT

A ABNT publicou normas que visam padronizar a iluminação para mitigar os efeitos da PL:

| Norma | Assunto |
|-------|---------|
| ABNT NBR 5101/1992 | Iluminação Pública – requisitos mínimos para vias públicas |
| ABNT NBR 5181/1976 | Iluminação de túneis |
| ABNT NBR IEC 60598/1999 | Luminárias |
| ABNT NBR 15129/2004 | Luminárias para iluminação pública |
| ABNT NBR IEC 60662/1997 | Lâmpadas a vapor de sódio de alta pressão |
| ABNT NBR 13593/2003 | Reator e ignitor para lâmpadas a vapor de sódio |
| ABNT NBR 5123/1998 | Relé fotoelétrico e tomada para iluminação pública |

## Iniciativas Internacionais

### Resolução da UAI (2009)
A 27ª Assembleia Geral da União Astronômica Internacional, realizada no Rio de Janeiro em agosto de 2009, lançou uma resolução *"em defesa do céu noturno e pelo direito à luz das estrelas"*, pedindo que o céu seja tratado como **patrimônio natural e preservado**.

### Referência Constitucional
A Constituição Federal determina no Art. 23:
> "É competência comum da União, dos Estados, do Distrito Federal e dos Municípios: [...] VI – proteger o meio ambiente e combater a poluição em qualquer de suas formas."

Isso inclui, em tese, a poluição luminosa.

## Problema da Efetividade

"As leis federais e estaduais encontradas no Brasil são pouco conhecidas pelo público. Alguns municípios tentaram implementar medidas contra a PL, mas na maioria dos casos elas são ineficazes e deixam de ser cumpridas pela falta de **fiscalização, punições e conscientização da população**." (DE OLIVEIRA; GOMES, s.d.; ARAÚJO; PICAZZIO, 2021)
    `,
    glossario: [
      {
        termo: "APA",
        definicao:
          "Área de Proteção Ambiental — categoria de unidade de conservação brasileira que permite uso sustentável dos recursos naturais.",
      },
      {
        termo: "IBAMA",
        definicao:
          "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis — órgão federal responsável pela proteção ambiental.",
      },
      {
        termo: "IPHAN",
        definicao:
          "Instituto do Patrimônio Histórico e Artístico Nacional — órgão responsável pela preservação do patrimônio cultural brasileiro.",
      },
      {
        termo: "ABNT",
        definicao:
          "Associação Brasileira de Normas Técnicas — organização privada que estabelece padrões técnicos para diversos setores no Brasil.",
      },
      {
        termo: "UAI",
        definicao:
          "União Astronômica Internacional — organização que reúne astrônomos de todo o mundo e emite recomendações sobre o céu noturno.",
      },
      {
        termo: "Unidade de Conservação",
        definicao:
          "Espaço territorial com características naturais relevantes, legalmente instituído pelo poder público, com objetivos de conservação.",
      },
    ],
    exemplos: [
      {
        titulo: "República Tcheca — pioneira mundial",
        descricao:
          "Em 2002, a República Tcheca foi o primeiro país a aprovar uma lei federal específica sobre poluição luminosa, estabelecendo limites e exigências para instalações de iluminação.",
      },
      {
        titulo: "Campinas/SP — APA do Observatório",
        descricao:
          "A Lei Municipal nº 10.850/2001 de Campinas criou uma área de proteção em torno do Observatório Municipal Jean Nicolini (o primeiro observatório municipal do Brasil, 1997), estabelecendo critérios de iluminação em raio de até 10km.",
      },
    ],
    revisao: [
      "Não existe lei federal abrangente sobre PL no Brasil.",
      "A República Tcheca foi o primeiro país com legislação federal específica (2002).",
      "A Bahia tem lei estadual que proíbe iluminação em praias de tartarugas.",
      "A Constituição Federal prevê o combate a toda forma de poluição.",
      "Normas ABNT regulam aspectos técnicos da iluminação pública.",
      "A falta de fiscalização torna as leis existentes pouco efetivas.",
    ],
    quiz: [
      {
        id: "m6q1",
        tipo: "multipla_escolha",
        enunciado: "Qual foi o primeiro país a ter lei federal específica sobre poluição luminosa?",
        alternativas: ["Estados Unidos", "Espanha", "República Tcheca", "Brasil"],
        resposta: "República Tcheca",
        explicacao:
          "A República Tcheca foi o primeiro país a aprovar legislação federal específica sobre poluição luminosa, em 2002.",
      },
      {
        id: "m6q2",
        tipo: "verdadeiro_falso",
        enunciado:
          "O Brasil possui lei federal abrangente que trata especificamente da poluição luminosa.",
        resposta: false,
        explicacao:
          "FALSO. No Brasil não há lei federal específica e abrangente sobre PL. As medidas existentes são pontuais, focadas em proteção de tartarugas ou observatórios específicos.",
      },
      {
        id: "m6q3",
        tipo: "multipla_escolha",
        enunciado:
          "Qual legislação brasileira protege praias de tartarugas contra iluminação artificial?",
        alternativas: [
          "Lei Federal nº 9.985/2000",
          "Portaria IBAMA nº 11/1992 e Lei da Bahia nº 7.034/1997",
          "Decreto-Lei nº 25/1937",
          "Portaria IPHAN nº 127/2009",
        ],
        resposta: "Portaria IBAMA nº 11/1992 e Lei da Bahia nº 7.034/1997",
        explicacao:
          "A Portaria IBAMA nº 11/1992 e a Lei Estadual da Bahia nº 7.034/1997 proíbem iluminação superior a zero lux em praias para proteger as tartarugas marinhas.",
      },
      {
        id: "m6q4",
        tipo: "verdadeiro_falso",
        enunciado:
          "A Constituição Federal inclui a competência de combater a poluição em qualquer forma.",
        resposta: true,
        explicacao:
          "VERDADEIRO. O Art. 23 da CF estabelece como competência comum da União, Estados e Municípios 'proteger o meio ambiente e combater a poluição em qualquer de suas formas', o que abrangeria a PL.",
      },
      {
        id: "m6q5",
        tipo: "multipla_escolha",
        enunciado:
          "Qual portaria determinou a substituição das lâmpadas incandescentes no Brasil?",
        alternativas: [
          "Portaria ABNT nº 100/2008",
          "Portaria nº 1.007/2010",
          "Portaria IBAMA nº 50/2012",
          "Portaria ANEEL nº 200/2011",
        ],
        resposta: "Portaria nº 1.007/2010",
        explicacao:
          "A Portaria nº 1.007, de 31 de dezembro de 2010, determinou que lâmpadas incandescentes não atendem aos critérios de eficiência energética, resultando em sua substituição progressiva.",
      },
      {
        id: "m6q6",
        tipo: "multipla_escolha",
        enunciado:
          "O que a Portaria IPHAN nº 127/2009 criou?",
        alternativas: [
          "A lei de proteção de tartarugas marinhas",
          "A chancela de Paisagem Cultural Brasileira",
          "O programa nacional de eficiência energética",
          "A norma técnica de iluminação pública",
        ],
        resposta: "A chancela de Paisagem Cultural Brasileira",
        explicacao:
          "A Portaria IPHAN nº 127/2009 criou a chancela de 'Paisagem Cultural Brasileira', que pode ser aplicada na proteção de locais afetados pela PL.",
      },
      {
        id: "m6q7",
        tipo: "verdadeiro_falso",
        enunciado:
          "A ABNT possui normas técnicas específicas para iluminação pública.",
        resposta: true,
        explicacao:
          "VERDADEIRO. A ABNT possui diversas normas técnicas relacionadas à iluminação pública, como a ABNT NBR 5101/1992 e ABNT NBR 15129/2004.",
      },
      {
        id: "m6q8",
        tipo: "multipla_escolha",
        enunciado: "Qual órgão internacional emitiu resolução 'em defesa do céu noturno' em 2009?",
        alternativas: [
          "ONU",
          "NASA",
          "União Astronômica Internacional (UAI)",
          "IDA",
        ],
        resposta: "União Astronômica Internacional (UAI)",
        explicacao:
          "A 27ª Assembleia Geral da UAI, realizada no Rio de Janeiro em 2009, lançou resolução pedindo que o céu seja tratado como patrimônio natural preservado.",
      },
    ],
    textoCompleto: `
## Texto Completo para Professores – Módulo 6

### Quadro Legal da Poluição Luminosa

**Brasil — Situação Atual:**
Não há lei federal específica e abrangente. As medidas existentes são:
- Proteção de tartarugas (IBAMA Portaria nº 11/1992; Lei Bahia nº 7.034/1997)
- Proteção de observatórios (leis municipais de Campinas e Amparo)
- Base constitucional (Art. 23, VI — combate a toda poluição)
- Normas técnicas ABNT para iluminação pública

**Contexto Internacional:**
- República Tcheca: 1ª lei federal mundial (2002)
- EUA: pioneiros na legislação estadual
- Chile, Itália, Espanha, França, Portugal: medidas mais avançadas
- UAI (2009): resolução pelo direito à luz das estrelas

**Problema central:** Mesmo onde as leis existem, a fiscalização é fraca e a conscientização é baixa.
    `,
    orientacoesDidaticas: `
## Orientações Didáticas – Módulo 6

**Interdisciplinaridade:** Direito (legislação ambiental), Sociologia (políticas públicas), Ciências (normas técnicas).

### Atividade Sugerida
**"Projeto de Lei Escolar":**
- Em grupos, os alunos elaboram uma proposta de "lei municipal" para combater a PL
- Pesquisam leis existentes em outros países como modelo
- Apresentam e debatem as propostas em plenário simulado
    `,
    perguntasRevisao: [
      {
        pergunta: "Por que a legislação existente no Brasil sobre PL é considerada insuficiente?",
        gabarito:
          "Porque não há lei federal abrangente, as medidas são pontuais, há baixa fiscalização, punições insuficientes e pouca conscientização da população.",
      },
      {
        pergunta: "Qual país foi pioneiro em lei federal sobre PL e quando?",
        gabarito:
          "A República Tcheca, em 2002, foi o primeiro país a aprovar lei federal específica sobre poluição luminosa.",
      },
      {
        pergunta: "Como a Constituição Federal pode ser usada para combater a PL?",
        gabarito:
          "O Art. 23, VI estabelece como competência de todos os entes da federação 'combater a poluição em qualquer de suas formas', o que inclui a poluição luminosa.",
      },
    ],
    atividadePratica: `
## Atividade Prática – Módulo 6

### "Pesquisa Legal"

**Objetivo:** Compreender o quadro legal da PL no Brasil e propor melhorias.

**Desenvolvimento:**
1. Pesquisar em sites de câmaras municipais se há legislação local sobre PL.
2. Comparar com legislação de outros países (sugestão: Chile e República Tcheca).
3. Identificar lacunas na legislação local.
4. Elaborar um texto argumentativo propondo uma lei municipal sobre PL.
5. Apresentar para a turma com debate.
    `,
    conexaoBNCC: `
## Conexão com a BNCC – Módulo 6

- **(EF09CI13)** Construir propostas coletivas para um consumo mais consciente e criar soluções tecnológicas para o descarte adequado e a reutilização ou reciclagem de materiais consumidos na escola e/ou na vida cotidiana.
- **(EM13CHS101)** Analisar e comparar diferentes formas de compreensão do ser humano como sujeito político, social, cultural, histórico e racional.
- **(EM13CHS106)** Utilizar as linguagens cartográfica, gráfica e iconográfica e de diferentes gêneros textuais e as tecnologias digitais de informação e comunicação de forma crítica, significativa, reflexiva e ética nas diversas práticas sociais.
    `,
  },
  {
    id: 7,
    slug: "conclusoes-propostas",
    titulo: "Conclusões e Propostas",
    subtitulo: "Caminhos para um céu mais escuro e um futuro mais sustentável",
    icone: "🌠",
    cor: "from-pink-500 to-rose-600",
    resumo:
      "A poluição luminosa pode ser controlada com medidas simples: escolha adequada de luminárias e lâmpadas, posicionamento correto e educação. A transformação exige políticas públicas, campanhas educativas e conscientização individual. Boa iluminação não é 'antes sobrar do que faltar' — é iluminar somente o necessário.",
    conteudo: `
## Síntese do Problema

A poluição luminosa (PL) é resultado do mau planejamento dos sistemas de iluminação. Sua resolução pode trazer benefícios como economia de energia, melhoria da saúde e preservação da biodiversidade.

De acordo com a Constituição Federal (Art. 23), é competência comum de todos os entes da federação "proteger o meio ambiente e combater a poluição em qualquer de suas formas". Isso inclui a poluição luminosa.

## O Que Pode Ser Feito

### Medidas Técnicas Simples
A poluição luminosa pode ser controlada com medidas simples como:
- **Escolha adequada de luminárias** — que dirijam a luz apenas para baixo
- **Lâmpadas eficientes** — LED com espectro adequado
- **Correto posicionamento** em relação ao solo
- **Sensores e temporizadores** para evitar iluminação desnecessária

"A poluição luminosa pode ser controlada com medidas simples, como a escolha adequada de luminárias e lâmpadas para iluminação externa, além do correto posicionamento em relação ao solo, o que é suficiente para conter e até reverter seus efeitos." (PEREIRA DOMINICI; FERREIRA RANGEL, 2017)

### Políticas Públicas
- Regulamentação específica sobre PL
- Atualização dos padrões de iluminação pública
- Incentivos para retrofit de iluminação eficiente
- Criação de Parques de Céus Escuros no Brasil

### Educação e Conscientização
"A educação é o método sugerido para transformar essa situação confusa em relação aos danos provocados pela PL. A transformação pode ocorrer por meio de um processo educativo participativo que amplia o conhecimento individual sobre o tema, fazendo com que as pessoas valorizem o que aprenderam e passem a agir de forma diferente." (DE OLIVEIRA; GOMES, s.d.)

**A recuperação do céu escuro não depende apenas de medidas legais, mas também de campanhas educativas, com caráter sensibilizador e didático, incentivando cada pessoa a colaborar na redução da PL.**

### O Astroturismo Como Ferramenta
O astroturismo possibilita o desenvolvimento de práticas turísticas sustentáveis que englobam debates sobre a PL e a proteção do céu escuro, promovendo a integração entre sociedade e natureza.

## Sobre Este Projeto

Este site faz parte do projeto de pesquisa **"Tem Luz Aí? Investigações quanto à presença de abordagens acerca da poluição luminosa nas ementas do ensino básico dos municípios da Região Metropolitana de Salvador"**, desenvolvido por Joabe Carmo de Santana, do IFBA, no grupo de iniciação científica CientificAção, sob orientação de Gorhan Freitas Noronha (UFBA) e coorientação de Júlia Oliveira dos Santos (IFBA).

**A metodologia envolve:**
- Análise de literatura científica
- Entrevistas com docentes e gestores
- Criação de sequências didáticas interdisciplinares
- Avaliação da efetividade em instituições de ensino da RMS

## Um Bordão Final

"Boa iluminação não significa 'antes sobrar do que faltar': o uso consciente é fundamental para que não percamos o equilíbrio, já que precisamos tanto da escuridão quanto da luz."

*— Autor: Joabe Carmo de Santana (Apostila PL)*
    `,
    glossario: [
      {
        termo: "Retrofit",
        definicao:
          "Processo de modernização de sistemas existentes, como a substituição de luminárias antigas por modelos mais eficientes.",
      },
      {
        termo: "Sequência Didática",
        definicao:
          "Conjunto de atividades pedagógicas organizadas em uma sequência lógica para atingir objetivos de aprendizagem específicos.",
      },
      {
        termo: "Região Metropolitana de Salvador (RMS)",
        definicao:
          "Conjunto de municípios que formam a área metropolitana de Salvador, Bahia, incluindo cidades como Camaçari, Lauro de Freitas, Simões Filho e outras.",
      },
      {
        termo: "CientificAção",
        definicao:
          "Grupo de iniciação científica no qual este projeto de pesquisa está inserido.",
      },
      {
        termo: "IFBA",
        definicao:
          "Instituto Federal de Educação, Ciência e Tecnologia da Bahia — instituição de ensino técnico e superior onde o autor do projeto estuda.",
      },
      {
        termo: "Iniciação Científica",
        definicao:
          "Programa que permite que estudantes de graduação ou ensino médio participem de pesquisas científicas orientadas por professores pesquisadores.",
      },
    ],
    exemplos: [
      {
        titulo: "Iluminação direcionada — menos é mais",
        descricao:
          "Uma luminária que direciona 100% da luz para baixo é mais eficiente e menos poluidora do que uma que envia 50% para o solo e 50% para o céu. Mesma quantidade de luz, metade do custo e zero de skyglow.",
      },
      {
        titulo: "O projeto 'Tem Luz Aí?'",
        descricao:
          "Este projeto de pesquisa investigou se a poluição luminosa é abordada nos currículos escolares da Região Metropolitana de Salvador, propondo sequências didáticas como forma de incluir o tema no ensino básico.",
      },
    ],
    revisao: [
      "A PL pode ser reduzida com escolhas simples de luminárias e lâmpadas.",
      "Educação é a principal ferramenta de transformação proposta.",
      "Políticas públicas são necessárias para uma mudança sistêmica.",
      "O astroturismo pode ser aliado na conscientização e proteção do céu.",
      "Boa iluminação é iluminar o necessário, não o máximo possível.",
    ],
    quiz: [
      {
        id: "m7q1",
        tipo: "multipla_escolha",
        enunciado: "Qual é a principal ferramenta de transformação proposta para combater a PL?",
        alternativas: [
          "Tecnologia de supressão de luz",
          "Educação e conscientização",
          "Proibição total da iluminação noturna",
          "Tributação sobre lâmpadas",
        ],
        resposta: "Educação e conscientização",
        explicacao:
          "A educação é o método sugerido para transformar a situação da PL. Processos educativos participativos ampliam o conhecimento e levam as pessoas a agir de forma diferente.",
      },
      {
        id: "m7q2",
        tipo: "verdadeiro_falso",
        enunciado:
          "A poluição luminosa só pode ser combatida com leis e regulamentações governamentais.",
        resposta: false,
        explicacao:
          "FALSO. A PL pode ser combatida por medidas individuais e técnicas simples, como escolha de luminárias corretas e lâmpadas eficientes, além de campanhas educativas. Leis ajudam, mas não são o único caminho.",
      },
      {
        id: "m7q3",
        tipo: "multipla_escolha",
        enunciado: "Qual instituição está ligada ao projeto 'Tem Luz Aí?'?",
        alternativas: [
          "Universidade de São Paulo (USP)",
          "Instituto Federal da Bahia (IFBA) e UFBA",
          "Instituto Astronômico e Geofísico",
          "Observatório Nacional",
        ],
        resposta: "Instituto Federal da Bahia (IFBA) e UFBA",
        explicacao:
          "O projeto é desenvolvido por Joabe Carmo de Santana, do IFBA, no grupo CientificAção, sob orientação de Gorhan Freitas Noronha (UFBA).",
      },
      {
        id: "m7q4",
        tipo: "verdadeiro_falso",
        enunciado:
          "Luminárias que direcionam a luz para baixo podem reduzir a poluição luminosa.",
        resposta: true,
        explicacao:
          "VERDADEIRO. O correto posicionamento e direcionamento das luminárias é uma das medidas mais simples e eficazes para conter e até reverter os efeitos da PL.",
      },
      {
        id: "m7q5",
        tipo: "multipla_escolha",
        enunciado: "O projeto 'Tem Luz Aí?' investiga qual questão principal?",
        alternativas: [
          "A eficiência das lâmpadas LED no Brasil",
          "A presença de PL como tema nos currículos escolares da RMS",
          "A legislação federal sobre poluição luminosa",
          "O impacto da PL nas tartarugas marinhas da Bahia",
        ],
        resposta: "A presença de PL como tema nos currículos escolares da RMS",
        explicacao:
          "O projeto investiga se a poluição luminosa é abordada nas ementas do ensino básico dos municípios da Região Metropolitana de Salvador (RMS).",
      },
      {
        id: "m7q6",
        tipo: "multipla_escolha",
        enunciado: "O que significa 'retrofit' no contexto da iluminação?",
        alternativas: [
          "Instalação de iluminação nova em locais sem luz",
          "Modernização de sistemas de iluminação existentes",
          "Remoção de todas as luminárias antigas",
          "Programa de multas para iluminação excessiva",
        ],
        resposta: "Modernização de sistemas de iluminação existentes",
        explicacao:
          "Retrofit é o processo de modernização, como substituir luminárias antigas por modelos eficientes e bem direcionados, sem necessidade de reformas estruturais.",
      },
      {
        id: "m7q7",
        tipo: "verdadeiro_falso",
        enunciado:
          "O astroturismo pode ajudar na conscientização sobre poluição luminosa.",
        resposta: true,
        explicacao:
          "VERDADEIRO. O astroturismo cria valor econômico para o céu escuro, incentivando sua proteção e promovendo debates sobre PL nas comunidades locais.",
      },
      {
        id: "m7q8",
        tipo: "multipla_escolha",
        enunciado:
          "Qual é a filosofia correta sobre o uso da iluminação, segundo o autor da apostila?",
        alternativas: [
          "Quanto mais luz, mais segurança",
          "Antes sobrar do que faltar",
          "Iluminar somente o necessário — precisamos tanto da escuridão quanto da luz",
          "A luz artificial é sempre melhor que a natural",
        ],
        resposta:
          "Iluminar somente o necessário — precisamos tanto da escuridão quanto da luz",
        explicacao:
          "O autor defende que 'boa iluminação não significa antes sobrar do que faltar'. O uso consciente é fundamental para preservar o equilíbrio entre luz e escuridão.",
      },
    ],
    textoCompleto: `
## Texto Completo para Professores – Módulo 7

### Conclusões e Propostas

A PL pode ser controlada com medidas simples: escolha de luminárias que direcionem luz para baixo, lâmpadas eficientes (LED), posicionamento correto, sensores e temporizadores.

**Base legal:** Art. 23 da CF — combate a toda forma de poluição é dever do poder público.

**Educação como transformação:** Processos educativos participativos que ampliam o conhecimento individual são o principal instrumento de mudança comportamental.

**Astroturismo:** Aliado na conscientização e geração de valor econômico para a preservação do céu escuro.

**Sobre o projeto "Tem Luz Aí?":**
- Autor: Joabe Carmo de Santana (IFBA)
- Orientação: Gorhan Freitas Noronha (UFBA)
- Coorientação: Júlia Oliveira dos Santos (IFBA)
- Grupo: CientificAção
- Metodologia: análise de literatura + entrevistas + sequências didáticas
- Foco: ementas do ensino básico na Região Metropolitana de Salvador

**Proposta final:** Criação de sequências didáticas interdisciplinares para incluir a PL nos currículos escolares, sensibilizando professores e alunos sobre este tema emergente.
    `,
    orientacoesDidaticas: `
## Orientações Didáticas – Módulo 7

**Objetivo:** Consolidar os aprendizados de todos os módulos e transformar em ação.

### Projeto Final — "Cidadãos do Céu"

**Etapas:**
1. Revisão dos 7 módulos
2. Diagnóstico da PL na comunidade escolar
3. Escolha de uma ação concreta (carta para a prefeitura, campanha, mural, podcast)
4. Execução da ação
5. Apresentação e reflexão

**Conexão com BNCC:** Competências socioemocionais, protagonismo juvenil e resolução de problemas reais.
    `,
    perguntasRevisao: [
      {
        pergunta:
          "Quais são as medidas técnicas simples para reduzir a PL?",
        gabarito:
          "Usar luminárias que direcionem a luz para baixo; escolher lâmpadas eficientes (LED); posicionar corretamente as luminárias; usar sensores de presença e temporizadores.",
      },
      {
        pergunta:
          "Por que a educação é considerada o principal método para combater a PL?",
        gabarito:
          "Porque a PL é resultado de comportamentos e escolhas individuais e coletivas. A educação muda a percepção das pessoas sobre o problema, fazendo-as agir de forma diferente.",
      },
      {
        pergunta: "O que investiga o projeto 'Tem Luz Aí?' e quem o desenvolve?",
        gabarito:
          "Investigada a presença de abordagens sobre PL nos currículos escolares da RMS. É desenvolvido por Joabe Carmo de Santana (IFBA), orientado por Gorhan Freitas Noronha (UFBA).",
      },
    ],
    atividadePratica: `
## Atividade Prática – Módulo 7

### "Plano de Ação — Menos Luz, Mais Céu"

**Objetivo:** Criar um plano concreto para reduzir a PL na escola ou comunidade.

**Desenvolvimento:**
1. Revisar todos os módulos e listar os problemas identificados localmente.
2. Priorizar 3 problemas mais urgentes.
3. Para cada problema, propor uma solução técnica E uma ação educativa.
4. Definir responsáveis, prazo e recursos necessários.
5. Apresentar o plano para a direção da escola.
6. Se possível, implementar ao menos uma ação.
    `,
    conexaoBNCC: `
## Conexão com a BNCC – Módulo 7

- **(EM13CNT301)** Construir questões, elaborar hipóteses, previsões e estimativas [...] para construir, avaliar e justificar conclusões no enfrentamento de situações-problema.
- **(EM13CHS502)** Analisar situações da vida cotidiana, dos meios de comunicação e da tradição oral ou escrita, que expressem valores, normas, crenças e visões de mundo distintas, reconhecendo-as como contingentes e situadas histórica e geograficamente.
- **(EM13LP52)** Analisar e criar textos argumentativos, com base em resultados de pesquisa, para publicação em suporte digital ou impresso, considerando o contexto de produção dado.
    `,
  },
];
