module PagefindIndexer
  @@has_run = false

  def self.run(site)
    if @@has_run
      Jekyll.logger.info "Pagefind:", "Skipping re-index (already indexed this session)."
      return
    end

    unless system("which npx > /dev/null 2>&1")
      Jekyll.logger.warn "Pagefind:", "npx not found. Install Node.js to enable search indexing."
      return
    end

    dest = site.dest
    Jekyll.logger.info "Pagefind:", "Indexing site..."

    unless system("npx -y pagefind --site \"#{dest}\"")
      Jekyll.logger.warn "Pagefind:", "Indexing failed."
      return
    end

    @@has_run = true
    Jekyll.logger.info "Pagefind:", "Done."
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  PagefindIndexer.run(site)
end
