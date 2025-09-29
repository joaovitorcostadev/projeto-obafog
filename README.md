# README - Projeto.OBAFOG

## 📝 Descrição do Projeto

Site de arrecadação para a equipe do Colégio Carmen Miranda participar da Olimpíada Brasileira de Foguetes (OBAFOG) no Rio de Janeiro. O site tem como objetivo converter visitantes em doadores através de um design atrativo e funcionalidades de conversão otimizadas.

## 🌟 Funcionalidades

- **Barra de progresso** animada mostrando a arrecadação
- **Formulário de doação** com valores sugeridos e customizáveis
- **Design responsivo** para todos os dispositivos
- **Galeria da equipe** com fotos dos participantes
- **Seção de depoimentos** para aumentar credibilidade
- **Animações suaves** para melhor experiência do usuário

## 🛠️ Tecnologias Utilizadas

- HTML5 semântico
- CSS3 com variáveis e Flexbox/Grid
- JavaScript puro (sem dependências)
- Design responsivo (mobile-first)
- Animações CSS

## 📂 Estrutura de Arquivos

```
projeto-obafog/
├── index.html                 # Página principal
├── styles/
│   ├── main.css               # Estilos principais
│   ├── responsive.css         # Estilos responsivos
│   └── animations.css         # Animações e efeitos
├── scripts/
│   ├── main.js                # Lógica principal
│   └── donation-counter.js    # Contador de doações
├── images/                    # Assets visuais
│   ├── team-photo.jpg         # Foto da equipe
│   ├── rocket-icon.svg        # Ícone do projeto
│   ├── background-pattern.png # Padrão de fundo
│   └── membro[1-4].jpg       # Fotos dos membros
└── README.md                  # Este arquivo
```

## 🚀 Como Executar o Projeto

1. Clone o repositório ou baixe os arquivos
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Para desenvolvimento, utilize um servidor local (ex: Live Server do VSCode)

## 🎨 Personalização

### Para alterar as fotos dos membros:

1. Adicione as fotos na pasta `images` (sugestão: 400x400px, formato JPG)
2. No CSS, atualize as regras para cada membro:

```css
.team-member:nth-child(1) .member-photo {
  background-image: url("../images/membro1.jpg");
}
```

### Para alterar valores de arrecadação:

Edite o arquivo `scripts/donation-counter.js`:

```javascript
const donationData = {
  goal: 15000, // Meta total
  raised: 6750, // Valor já arrecadado
  donors: 84, // Número de doadores
};
```

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first e inclui breakpoints para:

- Telas grandes (> 1200px)
- Tablets (992px)
- Celulares grandes (768px)
- Celulares pequenos (576px)
- Dispositivos muito pequenos (400px)

## ✨ Recursos Adicionais

- **Smooth scrolling** para navegação suave
- **Menu mobile** adaptável
- **Slider automático** de depoimentos
- **Efeitos hover** interativos
- **Ícones Font Awesome** integrados

## 📄 Licença

Este projeto é de uso livre para fins educacionais. Para uso comercial, entre em contato com os desenvolvedores.

---

**📧 Contato**: joaovitorcostadev@gmail.com
