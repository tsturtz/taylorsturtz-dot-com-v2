# Taylor Sturtz Blog
*Musings about web dev*

> **Please feel free** to create a post about any software topic you want (could be related to engineering, devops, design, qa, development process, etc). Also feel free to edit this readme to add topics to consider.

### Possible Topics:
- Implement google recaptcha on different environments with instruction on how to make dev captcha work for QA (so it passes automated tests). Focus on showing the React implementation?
- Building a widget that can be inserted via `<script>` tags anywhere.
- Code splitting with webpack.
- Lazy loading. `React.lazy`?
- Consistent semantic variable/function naming. Redux/redux-saga focus?
- How to implement sockets in redux-sagas. (Event-emitters, etc).

### To Contribute:
1. Get someone to grant admin access to this repo.
2. Clone the project (no need to fork).
3. Run the following to install the [gatsby](https://www.gatsbyjs.org/docs/quick-start/) CLI tool:
```bash
npm i --global gatsby-cli
```
4. Run the following to run the project locally and view at [localhost:8000](http://localhost:8000/):
```bash
npm run dev
# or
gatsby develop
```
5. In the **/pages** directory, copy-pasta a folder that has a `index.md` file in it (name the new folder the desired URL slug of your post).
6. Replace the frontmatter at the top (everything above the first `---`) and replace the markdown content with your post markdown.
7. Pull from and push your code to the `master` branch. You can create feature branches if you want.
8. Create a PR to the `deploy` branch. Once it gets merged, [Netlify](https://www.netlify.com/) will auto-deploy to [taylorsturtz.com](https://taylorsturtz.com).

🙌 You're awesome. We're awesome.

---

*Forked from [**Gatsby Starter Blog**](https://github.com/gatsbyjs/gatsby-starter-blog)*

*Borrowed and slightly modified the code syntax theme from [@gaearon](https://github.com/gaearon) (which is based on [@sdras](https://github.com/sdras)'s Night Owl theme).*
