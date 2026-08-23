# BOMBA LAND — publicação estática

Este repositório local contém a release pública aprovada da BOMBA LAND. Ele é deliberadamente separado dos fontes de desenvolvimento, checkpoints e protótipos.

## Conteúdo publicado

Todo o conteúdo publicável está em `site/`:

- `/` — mapa BOMBA LAND;
- `/rich-house-24h/` — Rich House 24H;
- `assets/` — imagem do mapa e recursos estáticos;
- `INTEGRITY.sha256` — hashes SHA-256 da release;
- `DEPLOYMENT_MANIFEST.md` — contrato de rotas da publicação.

## Cloudflare Pages

Configuração prevista para o primeiro deploy:

| Campo | Valor |
| --- | --- |
| Projeto | `bomba-land` |
| Branch de produção | `main` |
| Framework preset | None / Static HTML |
| Root directory | raiz deste repositório |
| Build command | `exit 0` |
| Build output directory | `site` |
| URL pública inicial | `https://bomba-land.pages.dev/` |

O CTA `ENTRAR NA BOMBA LAND` no Bomba Trends deve apontar para a URL pública da aplicação independente.

## Verificação antes de publicar

1. Verifique a integridade de `site/INTEGRITY.sha256`.
2. Confirme as rotas `/` e `/rich-house-24h/` em uma preview do Cloudflare Pages.
3. Execute o QA desktop e mobile da release publicada.
4. Só então faça merge em `main` ou promova o deploy de produção.

## Histórico e rollback

- Cada release aprovada deve ser registrada em `RELEASES.md` e receber uma tag Git.
- Não altere uma release já aprovada; crie uma nova candidata e substitua `site/` apenas após validação.
- Para rollback, use a tag Git correspondente e o rollback de produção do Cloudflare Pages.

Nenhuma conta, repositório remoto, push ou deploy foi criado por esta preparação local.
