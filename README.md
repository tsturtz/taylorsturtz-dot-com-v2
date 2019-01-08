# Nothing Too Crazy Blog
*A collection of thoughts by a collection of devs.*

### Possible Topics:
- Implement google recaptcha on different environments with instruction on how to make dev captcha work for QA (so it passes automated tests). Focus on showing the React implementation?
- Building a widget that can be inserted via <script> tags anywhere.
- Code splitting with webpack.
- Lazy loading. React.lazy?
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
#or
gatsby develop
```
5. In the **/pages** directory, copy-pasta a folder that has a `index.md` file in it (name the new folder the desired URL slug of your post).
6. Replace the frontmatter at the top (everything above the first `---`) and replace the markdown content with your post markdown.
7. Pull from and push your code to the `master` branch. [Netlify](https://www.netlify.com/) will auto-deploy any commits to `master`. Head to https://nothingtoocrazy.netlify.com to see your post live!

🙌 You're awesome. We're awesome.

---

*Started with [**Gatsby Starter Blog**](https://github.com/gatsbyjs/gatsby-starter-blog)*
