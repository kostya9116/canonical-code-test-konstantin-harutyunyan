// Container HTML template with placeholder for dynamic content
const BlogPostsContainer = `<div class="u-equal-height u-clearfix row">{content}</div>`

// Template function for individual blog post items. It accepts a data object and uses it to populate the template.
const BlogPostsTemplate = (data) => `
  <div class="blog-post-card col-4 col-medium-3">
    <header class="u-no-padding--top"> 
      <h3 class="p-muted-heading">Cloud and server</h3>
    </header>
    <div class="blog-post-card__content">
      <div class="blog-post-card__inner-content">
        <a href="${data.postLink}" target="_blank" rel="noreferrer">
          <img class="p-card__image" src="${data.featuredMedia}" loading="lazy" alt="${data.title}">
        </a>
        <h3 class="p-heading--4">
          <a href="${data.postLink}" target="_blank" rel="noreferrer">${data.postTitle}</a>
        </h3>
        <em>By <a href="${data.authorLink}" target="_blank" rel="noreferrer">${data.authorName}</a> on ${data.date}</em>
      </div>
      <p class="p-card__inner blog-post-card__footer">Article</p>
    </div>
  </div>`;

// BlogPosts class responsible for rendering blog posts into a specified container element
class BlogPosts {
    // Constructor takes a container element ID and an optional posts list
    constructor(containerElementId, postsList = []) {
        this.containerElement = document.getElementById(containerElementId)
        this.postsList = postsList
        this.renderPostsList() // render posts immediately upon class instantiation
    }

    // renderPostsList method responsible for rendering the posts into the container
    renderPostsList() {
        // Return, if the container element is not defined
        if (!this.containerElement) {
            return;
        }
        // If the posts list is not defined, clear the container and return
        if (!this.postsList.length) {
            this.containerElement.innerHTML = '';
            return;
        }

        // Map over postsList and convert each post object into HTML string, then join them into one string
        let renderedHTML = this.postsList.map(post => {
            const date = convertDateFormat(post.date);
            return BlogPostsTemplate({
                postLink: post.link,
                featuredMedia: post.featured_media,
                postTitle: post.title.rendered,
                date,
                authorLink: post._embedded.author[0].link,
                authorName: post._embedded.author[0].name,
            });
        }).join('');

        // Replace the content placeholder in the container template with the generated HTML and set the container's innerHTML
        this.containerElement.innerHTML = BlogPostsContainer.replace('{content}', renderedHTML);
    }
}

