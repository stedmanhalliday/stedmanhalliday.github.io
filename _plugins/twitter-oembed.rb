# jekyll-twitter-plugin 2.1.0 calls publish.twitter.com, which now 301s to
# publish.x.com. The plugin doesn't follow redirects, so point it there directly.
# Require the gem first: _plugins loads before it, and it would overwrite this.
require "jekyll-twitter-plugin"

module TwitterJekyll
  class ApiRequest
    def to_uri
      URI.parse("https://publish.x.com/oembed").tap do |uri|
        uri.query = URI.encode_www_form url_params
      end
    end
  end

  # On a failed fetch, render nothing instead of error text; CSS hides the
  # empty figure. Link the tweet in prose so readers lose nothing.
  class ErrorResponse
    def html
      Jekyll.logger.warn "Twitter:", "#{message} fetching #{request.entity_url}"
      ""
    end

    def to_h
      { html: html, error: true }
    end
  end

  class ApiClient
    alias_method :fetch_without_rescue, :fetch

    # Offline builds raise SocketError etc.; fall back instead of crashing.
    def fetch(api_request)
      fetch_without_rescue(api_request)
    rescue StandardError => e
      ErrorResponse.new(api_request, e.class.name).to_h
    end
  end

  class TwitterTag
    private

    # Don't cache failures, so the next build tries again.
    def live_response
      response = api_client.fetch(@api_request)
      return unless response

      cache.write(@api_request.cache_key, response) unless response[:error]
      build_response(response)
    end
  end
end
