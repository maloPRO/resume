#!/bin/bash

# Define source and destination directories and the old and new extensions
src_folder="./src/components/"       # Adjusted to relative path
dest_folder="./src/styles/"            # Ensure this is the correct path
old_ext=".tsx"                        # Current extension
new_ext=".css"                        # New extension

# Create the destination directory if it doesn't exist
mkdir -p "$dest_folder"

# Iterate over files with the old extension in the source folder
for file in "$src_folder"*"$old_ext"; do
    if [[ -f "$file" ]]; then
        base_name=$(basename "$file" "$old_ext")
        new_file="$dest_folder$base_name$new_ext"
        
        # Copy the file to the new location with the new extension
        cp "$file" "$new_file"
        echo "Copied $file to $new_file"

        # Truncate the contents of the new file
        > "$new_file"
        echo "Emptied the contents of $new_file"
    fi
done

