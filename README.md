# Indranil Paul — academic website

A static academic portfolio built with HTML, CSS, and JavaScript. No installation or build command is needed.

## Publish on GitHub Pages

1. Sign in to GitHub as Indra23-25.
2. Create a public repository named exactly Indra23-25.github.io. If it already exists, inspect it before replacing any content.
3. Extract this ZIP. Upload the contents of this folder to the repository, preserving the assets folder. The index.html file must be at the repository root, not inside another folder. Do not upload the ZIP itself.
4. Commit the files to the main branch.
5. In the repository, open Settings > Pages.
6. Under Build and deployment, choose Deploy from a branch. Select main and /(root), then Save.
7. Wait for deployment to finish. GitHub says publication can take up to 10 minutes.
8. Open https://indra23-25.github.io/ and check the CV download, navigation, project links, and email button.

The included .nojekyll file disables Jekyll processing. If your upload interface omits it, you can create an empty file with that name in the repository. The ordinary HTML and asset filenames are compatible with GitHub Pages either way.

This package prepares the website for that address; it does not create a repository or publish it automatically.

## Files

- index.html: content and page structure.
- styles.css: layout, typography, and responsive styles.
- script.js: navigation highlighting and email copying.
- assets/: downloadable CV and favicon.

## Making changes

Edit the files and commit them to the main branch; GitHub Pages will publish the changes. Replace assets/Indranil-Paul-CV.pdf to update the CV. Update the manuscript status in index.html if it changes.

## Another host or a custom domain

These same files can also be served by other static hosts. This copy's canonical and Open Graph URLs are set to https://indra23-25.github.io/. If you use a different address, update those two fields in index.html to match the final address.

A domain is optional. To add one, first register a domain you own, then follow GitHub's custom-domain setup and DNS instructions. Domain registration is separate from hosting.

## Official documentation

- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
