# stedmanhalliday.com
Stedman Halliday on the Web

## Run and test locally
serve locally
```
npm run build && bundle exec jekyll serve --baseurl=""  --watch
```

serve locally with drafts in `_drafts`
```
npm run build && bundle exec jekyll serve --baseurl="" --watch --drafts
```

## Build for production (GitHub Pages deployment)
```
npm run build && JEKYLL_ENV=production jekyll build
```

## Deploy to production (GitHub pages deployment)
deploy to production via script configured in `_config.yml`
```
jekyll deploy
```

## Command aliases
set aliases in `~/.zshrc`
```
alias jekyll-run='npm run build && bundle exec jekyll serve --baseurl=""  --watch'
alias jekyll-drafts='npm run build && bundle exec jekyll serve --baseurl="" --watch --drafts'
alias jekyll-build='npm run build && JEKYLL_ENV=production jekyll build'
alias jekyll-deploy='jekyll deploy'
```
