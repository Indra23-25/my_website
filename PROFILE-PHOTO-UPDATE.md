# Add the profile photo

The supplied portrait is displayed in a circular frame beside the name on desktop, and above the name on small phones. The original photograph is unchanged; CSS controls the visible framing.

## Update your existing GitHub Pages site

Only these three files are needed for the photo update:

- assets/profile.jpg (new)
- index.html (updated)
- styles.css (updated)

1. Extract the ZIP on your computer.
2. Open your website repository on GitHub. Open its assets folder, choose Add file > Upload files, and upload profile.jpg from the extracted assets folder. Commit the change.
3. Return to the repository root. Choose Add file > Upload files and upload index.html and styles.css from the extracted ZIP, replacing the existing files. Commit the change to the branch used by Pages (main in the earlier setup).
4. GitHub Pages will publish the changes. Refresh the website after deployment finishes. If the old layout remains cached, use Ctrl+Shift+R.

Keep the image inside assets: the page references assets/profile.jpg. The photo path is relative, so it works for a personal GitHub Pages address or a repository subpath such as /my_website/.

This package updates the version prepared in this conversation. It has not been pushed to your GitHub repository. Browser rendering could not be verified in this environment.

## If you have edited the site's text since the original download

Preserve your current index.html and styles.css. Instead, upload assets/profile.jpg, replace just the name heading in your current index.html with the block below, and copy the final Profile portrait CSS section from the supplied styles.css to the end of your current stylesheet.

```html
<div class="hero-identity">
  <div class="profile-portrait">
    <img src="assets/profile.jpg" alt="Portrait of Indranil Paul"
         width="1518" height="2048" decoding="async" fetchpriority="high">
  </div>
  <h1 id="name">Indranil Paul<span class="name-period">.</span></h1>
</div>
```

The browser-tab icon remains the existing initials design.
