# Guia Rápido - Leo Marble Installation Website

## 🎯 Visão Geral

Este é o site oficial da **Leo Marble Installation LLC** com suporte completo para **Inglês e Espanhol**.

## 📞 Informações de Contato Configuradas

✅ **Telefone**: (407) 953-0043
✅ **WhatsApp**: (407) 953-0043  
✅ **Email**: leodan657@hotmail.com
✅ **Instagram**: [@lmendo65](https://instagram.com/lmendo65)

## 🔄 Como Funciona o Site

### Troca de Idioma

- **Botão EN/ES** no topo do site permite trocar entre inglês e espanhol
- O idioma escolhido é salvo no navegador do usuário
- Todo o conteúdo muda automaticamente

### Botões Flutuantes (Canto Inferior Direito)

1. **🟢 WhatsApp** - Abre conversa direta no WhatsApp
2. **☎️ Telefone** - Liga diretamente para (407) 953-0043
3. **✉️ Email** - Abre client de email com seu endereço

### Páginas do Site

| Página | Descrição |
|--------|-----------|
| **Home** | Página principal com hero, serviços, sobre e portfólio |
| **Services** | Detalhes dos 3 serviços principais |
| **Portfolio** | Galeria com todas as fotos dos projetos |
| **About** | História da empresa, experiência e valores |
| **Contact** | Informações de contato e áreas atendidas |

## 📸 Fotos Usadas

### Hero (Primeira Imagem Grande)
- `LEO BATH 02.jpg`

### Background (Fundo Mármore)
- `Leo Marble backgorund.png` - usado como textura sutil em várias seções

### Portfólio (14 fotos)
- `LEO BATH 01.jpg, 04.jpg, 05.jpg, 06.jpg, 07.jpg`
- `LEO FLOOR 01.jpg`
- `LEO WALL 01.jpg, 02.jpg, 04.jpg, 05.jpg, 06.jpg, 07.jpg, 08.jpg, 09.jpg`

### Logo
- Usado: `LOGO COMPLETO TRANPARENTE.png` (logo branco para header e footer)

## ✏️ Como Editar Conteúdo

### Onde está tudo?

Todo o conteúdo está em: `/lib/siteConfig.ts`

### Exemplos de Edição

#### Mudar o telefone:
```typescript
phone: '4079530043',
phoneFormatted: '(407) 953-0043',
```

#### Adicionar nova área de atendimento:
```typescript
serviceAreas: [
  'Orlando',
  'Daytona Beach',
  'Tampa',
  'Kissimmee',
  'Winter Park',
  'Altamonte Springs',
  'Sua Nova Cidade Aqui'  // <- Adicione aqui
],
```

#### Mudar texto do Hero (primeira seção):
```typescript
heroTitle: {
  en: 'Seu texto em inglês aqui',
  es: 'Su texto en español aquí'
}
```

## 🎨 Cores da Marca

- **Branco Mármore**: `#F2F2F2` - fundo claro
- **Prata**: `#C9CCD1` - botões e detalhes
- **Preto Profundo**: `#111111` - texto e fundos escuros

## 📝 Informações Importantes do Negócio

- ✅ **25+ anos** de experiência
- ✅ **2014** - estabelecido na Florida
- ✅ **600+** projetos nos EUA
- ✅ **1,200+** projetos no Brasil
- ✅ **1,800+** projetos totais
- ✅ **Licenciado e Segurado**

## 🗺️ Áreas Atendidas

- Orlando
- Daytona Beach
- Tampa
- Kissimmee
- Winter Park
- Altamonte Springs

## 🚀 Rodando o Site Localmente

Se você instalou Node.js:

```bash
# Instalar dependências (primeira vez)
npm install

# Rodar em modo desenvolvimento
npm run dev
```

Depois abra: `http://localhost:3000`

## 📱 Redes Sociais

Instagram: [@lmendo65](https://instagram.com/lmendo65)

**Dica**: Adicione fotos novas regularmente no Instagram e atualize as fotos do portfólio no site!

## 🔧 Para Adicionar Mais Fotos no Portfólio

1. Coloque as fotos em: `/public/images/portfolio/`
2. Abra: `/app/portfolio/page.tsx`
3. Adicione à lista `portfolioItems`:

```typescript
{
  id: 15,  // próximo número
  title: 'Nome da foto',
  category: 'Bathroom',  // ou 'Flooring', 'Wall'
  imageSrc: '/images/portfolio/SUA_FOTO.jpg',
  alt: 'Descrição da foto',
},
```

## ❓ Perguntas Frequentes

### Como mudo o horário de atendimento?

Edite em `/lib/siteConfig.ts`:
```typescript
businessHours: {
  en: 'Mon–Sat: 8AM–6PM',
  es: 'Lun–Sáb: 8AM–6PM'
}
```

### Como adiciono mais serviços?

Em `/lib/siteConfig.ts`, adicione no array `services`:
```typescript
{
  title: {
    en: 'Nome em Inglês',
    es: 'Nombre en Español'
  },
  description: {
    en: 'Descrição em inglês',
    es: 'Descripción en español'
  },
  image: '/images/portfolio/FOTO.jpg',
  alt: 'Descrição da imagem',
}
```

### Como faço deploy do site (colocar no ar)?

Recomendações:
- **Vercel** (mais fácil, grátis) - conecta direto com GitHub
- **Netlify** (fácil, grátis)
- **Domínio sugerido**: 
  - leomarbleinstallation.com
  - leotileandmarble.com
  - leomarblefl.com

## 📞 Suporte

Para dúvidas sobre o site, contate o desenvolvedor ou ligue:
**(407) 953-0043**

---

**Site criado com precisão e atenção aos detalhes** ✨

*Última atualização: Fevereiro 2026*
