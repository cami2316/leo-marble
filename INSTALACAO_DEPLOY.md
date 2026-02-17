# 🚀 Instalação e Deploy - Leo Marble Installation Website

## 📦 Instalação Local

### Pré-requisitos
- Node.js 18+ instalado
- NPM ou Yarn

### Passo a Passo

1. **Instalar dependências:**
```bash
npm install
```

Isso vai instalar:
- Next.js 16.1.6
- React 19.2.4
- Tailwind CSS 4.1.18
- TypeScript 5.9.3
- Lucide React 0.344.0 (ícones)

2. **Rodar em desenvolvimento:**
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

3. **Testar build de produção:**
```bash
npm run build
npm start
```

## 🌐 Deploy para Produção

### Opção 1: Vercel (RECOMENDADO) ⭐

**Vantagens:**
- Deploy em 2 minutos
- HTTPS/SSL grátis
- Otimizado para Next.js
- Atualizações automáticas via Git
- Domínio gratuito .vercel.app
- 100% grátis para projetos pessoais

**Passos:**

1. Criar conta em [vercel.com](https://vercel.com)

2. Instalar Vercel CLI (opcional):
```bash
npm install -g vercel
vercel login
vercel
```

3. Ou usar a interface web:
   - Clicar em "New Project"
   - Importar do GitHub
   - Selecionar o repositório
   - Clicar em "Deploy"

4. Site no ar em ~2 minutos! 🎉

**Configurar Domínio Personalizado:**
- Settings > Domains
- Adicionar seu domínio (ex: leomarbleinstallation.com)
- Seguir instruções para apontar DNS

### Opção 2: Netlify

**Passos:**

1. Criar conta em [netlify.com](https://netlify.com)

2. Deploy via Git:
   - New site from Git
   - Conectar GitHub
   - Selecionar repositório
   - Build command: `npm run build`
   - Publish directory: `.next`

3. Deploy manual (arrastar pasta):
   - Criar build: `npm run build`
   - Arrastar pasta `.next` para Netlify

### Opção 3: Hostinger / cPanel

**Para hospedagem tradicional:**

1. Criar build estático:
```bash
npm run build
```

2. Fazer upload via FTP:
   - Pasta `.next`
   - Arquivos `public/`
   - `package.json`
   - `next.config.js`

3. No servidor, instalar Node.js e rodar:
```bash
npm install --production
npm start
```

## 🔧 Configurações de Ambiente

### Variáveis de Ambiente (se necessário)

Criar arquivo `.env.local`:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://seudominio.com

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form (se adicionar)
CONTACT_EMAIL=leodan657@hotmail.com
```

## 📱 Depois do Deploy

### 1. Testar Site

Verificar:
- ✅ Todas as páginas carregam
- ✅ Imagens aparecem
- ✅ Botões de contato funcionam
- ✅ WhatsApp abre corretamente
- ✅ Telefone funciona no mobile
- ✅ Email abre client
- ✅ Troca de idioma EN/ES funciona
- ✅ Site responsivo (mobile/tablet/desktop)

### 2. Configurar Google My Business

1. Criar perfil em [business.google.com](https://business.google.com)
2. Adicionar:
   - Nome: Leo Marble Installation LLC
   - Endereço
   - Telefone: (407) 953-0043
   - Website: seu-dominio.com
   - Categoria: Tile Contractor, Marble Contractor
   - Fotos dos projetos

### 3. Google Search Console

1. Ir em [search.google.com/search-console](https://search.google.com/search-console)
2. Adicionar propriedade (seu domínio)
3. Verificar propriedade
4. Enviar sitemap: `seu-dominio.com/sitemap.xml`

### 4. Google Analytics (Opcional)

1. Criar conta em [analytics.google.com](https://analytics.google.com)
2. Criar propriedade para o site
3. Adicionar código de tracking
4. Monitorar visitas e conversões

### 5. Facebook/Instagram Business

- Atualizar link na bio: seu-dominio.com
- Criar posts com link do site
- Adicionar informações de contato

## 🎯 SEO Checklist

✅ **Já Configurado:**
- Meta tags otimizadas
- Open Graph para redes sociais
- Estrutura de URLs limpa
- Sitemap automático (Next.js)
- Keywords locais (Orlando, Tampa, etc.)
- Responsivo (mobile-first)
- Performance otimizada

📝 **Para Fazer:**
- [ ] Configurar Google My Business
- [ ] Registrar no Google Search Console
- [ ] Pedir reviews de clientes
- [ ] Criar perfil no Yelp
- [ ] Criar perfil no Angi/HomeAdvisor
- [ ] Postar regularmente no Instagram

## 🔒 Segurança

### SSL/HTTPS
- Vercel e Netlify incluem SSL grátis
- Para outros hosts, usar Let's Encrypt

### Variáveis Sensíveis
- Nunca colocar senhas no código
- Usar variáveis de ambiente (.env.local)
- Adicionar `.env.local` ao `.gitignore`

## 📊 Monitoramento

### Verificar Regularmente:

1. **Uptime** (site está no ar?)
   - Use: uptimerobot.com (grátis)

2. **Performance**
   - PageSpeed Insights
   - GTmetrix

3. **Analytics**
   - Google Analytics
   - Vercel Analytics (se usar Vercel)

## 🐛 Troubleshooting

### Problema: Imagens não aparecem

**Solução:**
- Verificar se as imagens estão em `/public/images/`
- Caminhos devem começar com `/` (ex: `/images/hero/LEO BATH 02.jpg`)

### Problema: Botões não funcionam

**Solução:**
- Verificar links em `/lib/siteConfig.ts`
- Tel: `tel:+14079530043`
- WhatsApp: `https://wa.me/14079530043`
- Email: `mailto:leodan657@hotmail.com`

### Problema: Erro de build

**Solução:**
```bash
# Limpar cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Problema: Site lento

**Solução:**
- Otimizar imagens (usar Next.js Image component) ✅ Já feito
- Habilitar cache no servidor
- Usar CDN (Vercel/Netlify já incluem)

## 📞 Suporte

**Para questões técnicas:**
- Documentação Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Documentação Vercel: [vercel.com/docs](https://vercel.com/docs)

**Para suporte específico do site:**
- Entre em contato com o desenvolvedor

## ✨ Dicas Finais

1. **Mantenha fotos atualizadas**
   - Adicione novos projetos regularmente
   - Use fotos de alta qualidade

2. **Colete Reviews**
   - Peça feedback de clientes satisfeitos
   - Adicione no Google My Business

3. **Atualize redes sociais**
   - Poste projetos no Instagram
   - Link sempre para o site

4. **Monitore resultados**
   - Veja de onde vêm seus clientes
   - Ajuste estratégia conforme necessário

---

**Site pronto para seu sucesso!** 🚀

Desenvolvido para Leo Marble Installation LLC
(407) 953-0043

*Última atualização: Fevereiro 2026*
