#!/usr/bin/env bash

# Usage: ./batch_webp.sh <input_dir> <output_prefix>
# Example: ./batch_webp.sh ./images 2020-01-01-

INPUT_DIR="$1"

if [ -z "$INPUT_DIR" ]; then
  echo "Usage: $0 <input_dir> [output_prefix]"
  exit 1
fi

# Create output dir if not exists
OUTPUT_DIR="webp"
mkdir -p "$OUTPUT_DIR"

# Loop through video files in the input dir
for file in "$INPUT_DIR"/*.{mp4,webm}; do
  # Skip if no match
  [ -e "$file" ] || continue

  filename=$(basename "$file")
  base="${filename%.*}"
  ext="${filename##*.}"

  output_file="${OUTPUT_DIR}/${base}-poster.webp"

  echo "Converting $file -> $output_file"
  cwebp "$file" -o "$output_file"
  ffmpeg -i "$file" -vf "select=eq(n\,0)" -vframes 1 -q:v 99 "$output_file"
done