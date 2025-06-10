// Example article data
const articles = [
    { 
        title: "The Art of Blogging", 
        description: "Tips and tricks for creating engaging blog posts.", 
        url: "blogging-tips.html" 
    },
    { 
        title: "SEO Basics", 
        description: "Learn how to optimize your blog for search engines.", 
        url: "seo-basics.html" 
    },
    { 
        title: "Social Media Marketing", 
        description: "Promote your blog using social platforms.", 
        url: "social-media-marketing.html" 
    },
];

/**
 * Handles the search form submission event
 * @param {Event} event - The search form submission event
 */
function handleSearch(event) {
    event.preventDefault(); // Prevent the page from refreshing

    // Get the user's search query
    const query = document.getElementById("query").value.trim().toLowerCase();

    // Get the container for displaying results
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; // Clear previous results

    if (query) {
        // Filter articles based on the query
        const filteredArticles = articles.filter(article =>
            article.title.toLowerCase().includes(query) ||
            article.description.toLowerCase().includes(query)
        );

        // Display filtered results
        if (filteredArticles.length > 0) {
            filteredArticles.forEach(article => {
                const resultDiv = document.createElement("div");
                resultDiv.innerHTML = `
                    <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                    <p>${article.description}</p>
                `;
                resultsContainer.appendChild(resultDiv);
            });
        } else {
            resultsContainer.innerHTML = `<p>No results found for "${query}".</p>`;
        }
    } else {
        // Display a message if no search term is entered
        resultsContainer.innerHTML = `<p>Please enter a search term.</p>`;
    }
}