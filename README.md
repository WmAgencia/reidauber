# Bahiano Rei da 99

Landing page Next.js 16 / React 19 para atendimento de motoristas.

## Rodar localmente

```bash
npm install
npm run dev
```

## Configuração

Copie `.env.example` para `.env.local`. Configure:

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: número completo com DDI 55, DDD e telefone. O valor pré-configurado é 557591924597, mas **confirme com o proprietário** antes de divulgar.
- `NEXT_PUBLIC_SITE_URL`: URL pública definitiva para canonical e sitemap.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: código de verificação do Google, quando disponível.

## Publicação

Na Vercel: Add New → Project → Import Git Repository → `WmAgencia/reidauber`. Framework Next.js. Defina as variáveis de ambiente e faça Deploy. O conector Vercel deste chat recebeu 403 para a equipe `consecom`, portanto a publicação ainda depende de autorização.

## Avisos

Esta é uma reconstrução funcional a partir dos arquivos de configuração e da referência visual. Os componentes originais da versão anterior não estavam entre os arquivos enviados. Depoimentos não foram fabricados. Aprovação de contas depende das plataformas e de seus requisitos. O preço de R$150 para veículo atrasado refere-se a atendimento/análise, não à garantia de aceitação de veículo fora das regras.

## Verificação

O GitHub Actions executa typecheck e build a cada push.
