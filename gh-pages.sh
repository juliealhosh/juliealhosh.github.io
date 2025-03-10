#!/bin/bash

# Step 1: Replace "/_next/static" with "/static" in all server/ and build/ 
find server build -type f -exec sed -i 's|/_next/static|/static|g' {} \;

# Step 2: Copy all files and subdirectories from "server/app" to the home directory
cp -r server/app/* ./
mv sitemap.xml.body sitemap.xml
# Step 3: Download all files from the GitHub repository and install them into the "/static" subdirectory

# Create /static directory if it doesn't exist
mkdir -p ./static

# Clone the repository's public/static folder into the /static directory
git clone --depth 1 --branch main https://github.com/juliealhosh/juliealhosh.github.io.git temp_repo

# Move the files from the cloned repo's "public/static" folder into your current /static directory
mv temp_repo/public/static/* ./static/

# Clean up by removing the temporary cloned repository
rm -rf temp_repo

find static -type f -exec sed -i 's|/_next/static|/static|g' {} \;
# Step 4: commit and push updated files to the GitHub repository
git add server/ *.html *.meta *.rsc about/ blog/ *.json *.js projects/ *.body robots.txt/ sitemap.xml/ static/ tags/ _not-found/ gh-pages.sh
git commit -m "gh-pages.sh update"

echo "Script execution complete."