# stedmanhalliday.com
Stedman Halliday on the Web

## Running and testing locally
serve locally
```
npm run build && bundle exec jekyll serve --baseurl=""  --watch
```

serve locally with drafts
```
npm run build && bundle exec jekyll serve --baseurl="" --watch --drafts
```

## Building for production (GitHub Pages deployment)
```
npm run build && JEKYLL_ENV=production jekyll build
```

## Command aliases
set aliases in `~/.zshrc`
```
alias jekyll-run='npm run build && bundle exec jekyll serve --baseurl=""  --watch'
alias jekyll-drafts='npm run build && bundle exec jekyll serve --baseurl="" --watch --drafts'
alias jekyll-build='npm run build && JEKYLL_ENV=production jekyll build'
```
