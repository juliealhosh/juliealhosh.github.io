#!/bin/bash

# Step 1: Replace "/_next/static" with "/static" in all .html files in "server/app"
find server/app -type f -name "*.html" -exec sed -i 's|/_next/static|/static|g' {} \;

# Step 2: Move all .html files from "server/app" to the current directory
find server/app -type f -name "*.html" -exec cp {} . \;

# Step 3: Download all files from the GitHub repository and install them into the "/static" subdirectory

# Create /static directory if it doesn't exist
mkdir -p ./static

# Clone the repository's public/static folder into the /static directory
git clone --depth 1 --branch main https://github.com/juliealhosh/juliealhosh.github.io.git temp_repo

# Move the files from the cloned repo's "public/static" folder into your current /static directory
mv temp_repo/public/static/* ./static/

# Clean up by removing the temporary cloned repository
rm -rf temp_repo

echo "Script execution complete."