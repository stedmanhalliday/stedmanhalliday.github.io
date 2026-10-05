# Social cards: some platforms don't preview WebP or AVIF og:images.
# Fail the build when a published page's `image` isn't JPG, PNG, or GIF.
module OgImageFormat
  ALLOWED = %w[.jpg .jpeg .png .gif].freeze

  def self.check(site)
    bad = (site.pages + site.documents).filter_map do |doc|
      next if doc.relative_path.start_with?("_drafts")

      image = doc.data["image"]
      path = (image.is_a?(Hash) ? image["path"] : image).to_s
      next if path.empty? || ALLOWED.include?(File.extname(path).downcase)

      "#{doc.relative_path}: image: #{path}"
    end
    return if bad.empty?

    raise Jekyll::Errors::FatalException,
          "og:image must be JPG, PNG, or GIF:\n  #{bad.join("\n  ")}"
  end
end

Jekyll::Hooks.register :site, :post_read do |site|
  OgImageFormat.check(site)
end
