const t = document.querySelector("#tagChanger");

function changeTag() {
    const tag = t.value;
    const regexTag = new RegExp(tag, "g");
  
    let blog = document.getElementById("mainBlog");
    let blogText = blog.innerText;

    let matched = regexTag.exec(blogText);
    const newBlogText = blogText.replace(regexTag, `<a href='https://twitter.com/search?q=#${tag}'>#${tag}</a>`);

    blog.innerText = newBlogText;
}
