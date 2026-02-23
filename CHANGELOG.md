# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Global site search with Pagefind and ⌘K / Ctrl+K modal (#13)
- Keyboard navigation for search results (arrow keys + Enter)
- Stretched-link pattern for full-row clickable search results
- Eased underlit gradient glow on search input focus
- Active result cyan left-border glow effect
- Search trigger icon in site header navigation
- Pagefind Jekyll plugin for automatic indexing on build
- Design tokens system: opacity, surface overlay, duration, radius, and z-index scales
- Lightbox refresh (`refreshFsLightbox`) on Swup page transitions
- Twitter widget reload (`twttr.widgets.load`) on Swup page transitions

### Changed

- Refactored ~35 raw CSS values to use design tokens across stylesheets
- Moved fslightbox script from project layout to global `<head>` for site-wide availability
- Moved typed.js script from inline hero/404 to global `<head>` for reliable Swup transitions
- Loaded Twitter widgets.js globally for consistent embed rendering across SPA navigation

### Fixed

- Resolved SPA script reliability issues with Swup page transitions (#13)

### Removed

- Per-page fslightbox script tag from project layout
- Per-page typed.js CDN script tags from hero intro and 404 page

## [2026-02-22]

### Added

- `.well-known/COMMS.md` communication preferences document
- GitHub Actions workflow for serving COMMS.md as raw Markdown

## [2026-01-27]

### Added

- "The Perceptual Reasoning Gap" blog post
- "Vibecoding" blog post
- Post descriptions and tags to blog collection layouts

### Changed

- Blog footer updates
- Bundle dependency updates

## [2026-01-21]

### Added

- "Training Intuition" blog post

### Changed

- About page content updates

## [2026-01-11]

### Added

- skrrtStats 2025 blog post
- Batch processing scripts for posters and WebP conversion
- Project navigation on work pages
- Remotion stats video embed

### Fixed

- Twitter DM snippet display

## [2026-01-05]

### Added

- RGB color mixing cross-reference link

### Changed

- Bio and about page updates
