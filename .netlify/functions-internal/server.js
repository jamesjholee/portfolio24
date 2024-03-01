var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/components/NavBar.jsx
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_jsx_runtime2 = require("react/jsx-runtime");
function NavBar() {
  let [isOpen, setIsOpen] = (0, import_react3.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: "sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center justify-between px-4 py-2 sm:p-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.NavLink, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { role: "img", "aria-label": "dog", className: "text-5xl", children: "\u{1F436}" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          type: "button",
          className: "text-primary focus:text-gray-800 hover:text-primary sm:hidden dark:text-white dark:focus:text-primary",
          onClick: (e) => {
            e.preventDefault(), setIsOpen((previous) => !previous);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "svg",
            {
              className: "fill-current h-6 w-6",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                isOpen ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("title", { children: "Menu" })
              ]
            }
          )
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "px-4 pb-2 items-center flex", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        className: `${isOpen ? "block" : "hidden"} sm:flex sm:justify-between sm:p-0 sm:text-lg dark:text-white`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.NavLink, { to: "/projects", className: "mt-1 block py-1 underline-anim underline-animate sm:mt-0 sm:ml-4  text-primary", children: "Projects" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.NavLink, { to: "/about", className: "mt-1 block py-1 underline-anim underline-animate sm:mt-0 sm:ml-4  text-primary", children: "About" })
        ]
      }
    ) })
  ] });
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-UEVTMCTM.css";

// app/root.jsx
var import_jsx_runtime3 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Corgi's Playground",
  description: "Meet Corgi, the smart cuddly creature that everyone loves!",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(NavBar, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("main", { className: "container mx-auto pt-8 sm:pt-16", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.Outlet, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react4.LiveReload, {})
    ] })
  ] });
}

// app/routes/writings/$slug.jsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  loader: () => loader,
  meta: () => meta2,
  richTextRenderOptions: () => richTextRenderOptions
});
var import_node = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/models/contentful.server.js
var import_plaiceholder = require("plaiceholder"), SPACE = process.env.CONTENTFUL_SPACE_ID, TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
async function apiCall(query, variables) {
  let fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`, options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({ query, variables })
  };
  return await fetch(fetchUrl, options);
}
async function getProjects() {
  let formattedData = await (await (await apiCall(`
    {
        projectsCollection (order:publishDate_DESC){
            items {
                title
                description {
                    json
                }
                publishDate
                link
                previewImage {
                    description
                    url
                }
            }
        }
    }`)).json()).data.projectsCollection.items.map(
    async (project) => {
      console.log(project);
      let { title, description, publishDate, link, previewImage } = project, { css, img } = await (0, import_plaiceholder.getPlaiceholder)(previewImage.url);
      return {
        title,
        description,
        publishDate,
        link,
        image: img,
        imageAlt: previewImage.description,
        css
      };
    }
  );
  return console.log("zzzzz", formattedData), Promise.all(formattedData);
}
async function getTalks() {
  return await (await (await apiCall(`{
        talksCollection {
            items {
                sys {
                    id
                }
                title
                description {
                    json
                }
                link
                type
                previewImage {
                    description
                    url
                }
            }
        }
    }`)).json()).data.talksCollection.items;
}
async function getAllBlogs() {
  return await (await (await apiCall(`
    {
        blogCollection(order:sys_firstPublishedAt_DESC) {
        items {
          title
          slug
          description
          tag
          sys {
            firstPublishedAt
          }
        }
      }
    }
    `)).json()).data.blogCollection.items;
}
async function getSingleBlog(slug) {
  return await (await (await apiCall(`
    query($slug: String){
        blogCollection(where: {slug:$slug}) {
            items {
                title
                description
                tag
                canonicalUrl
                blogBody {
                  json
                }
                sys {
                  publishedAt
                }
                openGraphImage {
                  url
                }
              }
            }
    }
    `, {
    slug
  })).json()).data.blogCollection.items[0];
}
async function getPage(title) {
  return await (await (await apiCall(`
    query($title:String) {
        pageCollection(where:{title:$title}){
          items{
            title
            description{
              json
            }
            rolesCollection{
              items{
                roleTitle
              }
            }
            linksCollection{
              items {
                name
                url
              }
            }
            seoMetadata{
              title
              ogImage {
                url
              }
              description
            }
          }
        }
      }
    `, {
    title
  })).json()).data.pageCollection.items[0];
}
var client = { getProjects, getTalks, getAllBlogs, getSingleBlog, getPage };

// app/components/Title.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Title({ title, emoji }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("h1", { className: "text-3xl leading-normal sm:text-5xl sm:leading-normal font-body dark:text-white", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "rounded border-b-4 border-primary dark:border-secondary", children: title }),
    "\xA0",
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { role: "img", "aria-label": title, children: emoji })
  ] });
}

// app/routes/writings/$slug.jsx
var import_rich_text_react_renderer = require("@contentful/rich-text-react-renderer"), import_rich_text_types = require("@contentful/rich-text-types"), import_jsx_runtime5 = require("react/jsx-runtime"), loader = async ({ params }) => {
  let { slug } = params;
  return (0, import_node.json)(await client.getSingleBlog(slug));
}, meta2 = ({ data }) => {
  let { title, description, openGraphImage } = data;
  return {
    title,
    description,
    "og:image": `${openGraphImage.url}`
  };
}, richTextRenderOptions = {
  renderNode: {
    [import_rich_text_types.INLINES.HYPERLINK]: (node, children) => {
      let { data } = node, { uri } = data;
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "a",
        {
          className: "text-primary underline dark:text-secondary",
          target: "_blank",
          href: uri,
          children: children[0]
        }
      );
    },
    [import_rich_text_types.BLOCKS.PARAGRAPH]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-gray-700 text-base dark:text-gray-400 leading-relaxed mb-4 text-justify", children }),
    [import_rich_text_types.BLOCKS.HEADING_1]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "text-4xl", children }),
    [import_rich_text_types.BLOCKS.HEADING_2]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "text-3xl", children })
  }
};
function PostSlug() {
  let { title, description, tag, blogBody, sys, canonicalUrl } = (0, import_react5.useLoaderData)(), canonicalName = "";
  return canonicalUrl && (canonicalName = canonicalUrl.replace("https://", "").split("/")[0]), /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "sm:max-w-3xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "px-4 sm:px-0", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Title, { title }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("article", { className: "mt-4", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "post px-4 sm:px-0", children: [
      canonicalUrl ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "text-lg mb-6 italic", children: [
        "This blog was originally shared on",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: canonicalUrl, children: canonicalName }),
        "."
      ] }) : null,
      (0, import_rich_text_react_renderer.documentToReactComponents)(blogBody.json, richTextRenderOptions)
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "text-hover italic", children: [
      "Last Updated: ",
      new Date(sys.publishedAt).toDateString()
    ] })
  ] });
}

// app/routes/writings/index.jsx
var writings_exports = {};
__export(writings_exports, {
  default: () => Writings,
  loader: () => loader2,
  meta: () => meta3
});
var import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_jsx_runtime6 = require("react/jsx-runtime");
async function loader2() {
  let blogs = await client.getAllBlogs(), page = await client.getPage("Writings");
  return (0, import_node2.json)({ blogs, page });
}
var meta3 = ({ data }) => {
  let { seoMetadata } = data.page;
  return {
    title: seoMetadata.title,
    description: seoMetadata.description,
    "og:image": `${seoMetadata.ogImage.url}`
  };
};
function PostList(data) {
  return data.map((post) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-8 pb-2 border-b-2 border-light last:border-0", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.Link, { to: post.slug, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "text-xl font-medium sm:text-3xl cursor-pointer hover:text-gray-800 dark:text-gray-300 dark:hover:text-secondary", children: post.title }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "py-2 sm:py-4 text-sm sm:text-lg font-body dark:text-gray-400", children: post.description }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex justify-between mb-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "text-sm sm:text-lg dark:text-gray-300", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { role: "image", "aria-label": "calendar emoji", children: [
          "\u{1F5D3} ",
          " "
        ] }),
        new Date(post.sys.firstPublishedAt).toDateString()
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "", children: post.tag.map(
        (item) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "mr-1 sm:mr-2 text-xs sm:text-sm rounded-full py-1 px-2 sm:px-3 text-primary dark:text-secondary", children: [
          "#",
          item
        ] }, item)
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { href: `writings/${post.slug}`, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "pt-1 sm:pt-2 text-xs sm:text-base text-primary cursor-pointer hover:text-hover w-fit dark:text-secondary", children: [
      "Read More ",
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { role: "image", "aria-label": "arrow", children: "\u2192" })
    ] }) })
  ] }, post.slug));
}
function Writings() {
  let { blogs } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "px-8 sm:px-0 sm:max-w-2xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Title, { title: "Writings", emoji: "\u{1F4DD}" }),
    PostList(blogs)
  ] });
}

// app/routes/projects.jsx
var projects_exports = {};
__export(projects_exports, {
  default: () => Projects,
  loader: () => loader3,
  meta: () => meta4,
  richTextRenderOptions: () => richTextRenderOptions2
});
var import_node3 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_framer_motion = require("framer-motion"), import_rich_text_react_renderer2 = require("@contentful/rich-text-react-renderer"), import_rich_text_types2 = require("@contentful/rich-text-types"), import_jsx_runtime7 = require("react/jsx-runtime");
async function loader3() {
  let projects = await client.getProjects(), page = await client.getPage("Projects");
  return (0, import_node3.json)({ projects, page });
}
var meta4 = ({ data }) => {
  let { title, description, ogImage } = data.page.seoMetadata;
  return {
    title,
    description,
    "og:image": `${ogImage.url}`
  };
}, richTextRenderOptions2 = {
  renderNode: {
    [import_rich_text_types2.INLINES.HYPERLINK]: (node, children) => {
      let { data } = node, { uri } = data;
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "a",
        {
          className: "text-primary underline dark:text-secondary",
          target: "_blank",
          href: uri,
          rel: "noreferrer",
          children: children[0]
        }
      );
    },
    [import_rich_text_types2.BLOCKS.PARAGRAPH]: (node, children) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-gray-700 text-base dark:text-gray-400", children })
  }
};
function Projects() {
  let { projects } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "px-4 sm:px-48", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Title, { title: "Projects", emoji: "\u{1F4BB}" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "grid gap-4 sm:grid-cols-3", children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      import_framer_motion.motion.div,
      {
        className: "mt-8 max-w-sm rounded overflow-hidden shadow-lg bg-white h-auto dark:bg-gray-700",
        whileHover: {
          scale: 1.02,
          transition: {
            duration: 0.2,
            ease: "easeInOut"
          }
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
            "div",
            {
              style: {
                position: "relative",
                display: "block",
                overflow: "hidden"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      transform: "scale(1.5)",
                      filter: "blur(40px)"
                      // ...project.css,
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("img", { ...project.image })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "px-6 py-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("h2", { className: "font-bold text-lg sm:text-xl mb-2 dark:text-secondary", children: [
              project.title,
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", { href: project.link, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "span",
                {
                  role: "image",
                  "aria-label": "internet",
                  className: "cursor-pointer",
                  children: "\u{1F517}"
                }
              ) })
            ] }),
            (0, import_rich_text_react_renderer2.documentToReactComponents)(
              project.description.json,
              richTextRenderOptions2
            )
          ] })
        ]
      },
      project.title
    )) })
  ] });
}

// app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  loader: () => loader4,
  meta: () => meta5,
  richTextRenderOptions: () => richTextRenderOptions3
});
var import_node4 = require("@remix-run/node"), import_react8 = require("@remix-run/react");
var import_rich_text_react_renderer3 = require("@contentful/rich-text-react-renderer"), import_rich_text_types3 = require("@contentful/rich-text-types"), import_jsx_runtime8 = require("react/jsx-runtime");
async function loader4() {
  return (0, import_node4.json)(await client.getPage("About"));
}
var meta5 = ({ data }) => {
  let { seoMetadata } = data;
  return {
    title: seoMetadata.title,
    description: seoMetadata.description
  };
}, richTextRenderOptions3 = {
  renderNode: {
    [import_rich_text_types3.INLINES.HYPERLINK]: (node, children) => {
      let { data } = node, { uri } = data;
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "a",
        {
          className: "text-primary underline dark:text-secondary",
          target: "_blank",
          href: uri,
          rel: "noreferrer",
          children: children[0]
        }
      );
    }
  }
};
function About() {
  let { description } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "px-8 sm:px-0 sm:max-w-2xl mx-auto", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Title, { title: "About", emoji: "\u{1F64B}\u200D\u2642\uFE0F" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mt-4 text-lg dark:text-gray-300", children: (0, import_rich_text_react_renderer3.documentToReactComponents)(description.json, richTextRenderOptions3) })
  ] });
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader5,
  meta: () => meta6
});
var import_react_text_loop_next = require("react-text-loop-next"), import_framer_motion2 = require("framer-motion"), import_node5 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_fa = require("react-icons/fa"), import_node6 = require("@remix-run/node"), import_jsx_runtime9 = require("react/jsx-runtime");
async function loader5() {
  return (0, import_node5.json)(await client.getPage("James Jaeho Lee"));
}
var meta6 = ({ data }) => {
  let { seoMetadata } = data;
  return {
    title: seoMetadata.title,
    description: seoMetadata.description,
    "og:image": `${seoMetadata.ogImage.url}`
  };
};
function Index() {
  let { title, rolesCollection, linksCollection } = (0, import_react9.useLoaderData)(), links2 = {};
  return linksCollection.items.forEach((link) => {
    Object.assign(links2, Object.fromEntries([Object.values(link)]));
  }), /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "text-center mt-24 sm:mt-24 dark:text-white", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("h1", { className: "text-3xl sm:text-6xl", children: [
      "Hello",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        import_framer_motion2.motion.div,
        {
          animate: {
            rotate: [0, 5, 0, -5, 0]
          },
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            loop: "Infinity",
            repeatDelay: 2
          },
          className: "inline-block",
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { role: "img", "aria-label": "wave", children: "\u{1F44B}" })
        }
      ),
      ", I'm ",
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "text-primary dark:text-secondary", children: [
        " ",
        title
      ] }),
      "!"
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_text_loop_next.TextLoop, { children: rolesCollection.items.map((role) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h1", { className: "text-2xl sm:text-4xl w-48", children: role.roleTitle }, role.roleTitle)) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "mt-8 sm:mt-16 flex justify-between sm:mx-64 mx-12 dark:text-secondary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { href: links2.GitHub, target: "_blank", "aria-label": "GitHub", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_fa.FaGithub, { className: "h-12 w-12 sm:h-16 sm:w-16 fill-current" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { href: links2.Twitter, target: "_blank", "aria-label": "Twitter", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_fa.FaTwitter, { className: "h-12 w-12 sm:h-16 sm:w-16 fill-current" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { href: links2.LinkedIn, target: "_blank", "aria-label": "LinkedIn", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_fa.FaLinkedin, { className: "h-12 w-12 sm:h-16 sm:w-16 fill-current" }) })
    ] })
  ] });
}

// app/routes/talks.jsx
var talks_exports = {};
__export(talks_exports, {
  default: () => Talks,
  loader: () => loader6,
  meta: () => meta7
});
var import_node7 = require("@remix-run/node"), import_react10 = require("@remix-run/react");
var import_framer_motion3 = require("framer-motion"), import_rich_text_react_renderer4 = require("@contentful/rich-text-react-renderer"), import_jsx_runtime10 = require("react/jsx-runtime");
async function loader6() {
  let talks = await client.getTalks(), page = await client.getPage("Talks");
  return (0, import_node7.json)({ talks, page });
}
var meta7 = ({ data }) => {
  let { title, description, ogImage } = data.page.seoMetadata;
  return {
    title,
    description,
    "og:image": `${ogImage.url}`
  };
};
function Talks() {
  let { talks } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "px-4 sm:px-48", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Title, { title: "Talks", emoji: "\u{1F399}" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "grid gap-6 sm:grid-cols-3", children: talks.map((item) => {
      let { link, sys, description, title, type, previewImage } = item;
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "a",
        {
          href: link,
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
            import_framer_motion3.motion.div,
            {
              className: "mt-8 max-w-sm rounded overflow-hidden shadow-lg bg-white cursor-pointer dark:bg-gray-700",
              whileHover: {
                scale: 1.05,
                transition: {
                  duration: 0.4,
                  ease: "easeInOut"
                }
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                  "div",
                  {
                    style: {
                      position: "relative",
                      display: "block",
                      overflow: "hidden"
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                        "div",
                        {
                          style: {
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            transform: "scale(1.5)",
                            filter: "blur(40px)"
                          }
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", { src: previewImage.url, alt: previewImage.description })
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "px-6 py-4", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { className: "font-semibold text-lg mb-2 dark:text-secondary", children: title }),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: (0, import_rich_text_react_renderer4.documentToReactComponents)(
                    description.json
                  ) })
                ] })
              ]
            }
          )
        },
        sys.id
      );
    }) })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HRUD35IR.js", imports: ["/build/_shared/chunk-UIVENCV4.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GVTCNMZF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-VOBB4MFN.js", imports: ["/build/_shared/chunk-WY5YCCSF.js", "/build/_shared/chunk-TWZS4UWA.js", "/build/_shared/chunk-VGO5T5HA.js", "/build/_shared/chunk-LUQ2XYTT.js", "/build/_shared/chunk-IOHTK4DT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-I4XLK5QC.js", imports: ["/build/_shared/chunk-2DOEL36E.js", "/build/_shared/chunk-LUQ2XYTT.js", "/build/_shared/chunk-IOHTK4DT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/projects": { id: "routes/projects", parentId: "root", path: "projects", index: void 0, caseSensitive: void 0, module: "/build/routes/projects-LP3IYRH2.js", imports: ["/build/_shared/chunk-WY5YCCSF.js", "/build/_shared/chunk-TWZS4UWA.js", "/build/_shared/chunk-VGO5T5HA.js", "/build/_shared/chunk-2DOEL36E.js", "/build/_shared/chunk-LUQ2XYTT.js", "/build/_shared/chunk-IOHTK4DT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/talks": { id: "routes/talks", parentId: "root", path: "talks", index: void 0, caseSensitive: void 0, module: "/build/routes/talks-RXQTYI4R.js", imports: ["/build/_shared/chunk-TWZS4UWA.js", "/build/_shared/chunk-VGO5T5HA.js", "/build/_shared/chunk-2DOEL36E.js", "/build/_shared/chunk-LUQ2XYTT.js", "/build/_shared/chunk-IOHTK4DT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/writings/$slug": { id: "routes/writings/$slug", parentId: "root", path: "writings/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/writings/$slug-2W52RTRI.js", imports: ["/build/_shared/chunk-I46MUDMW.js", "/build/_shared/chunk-WY5YCCSF.js", "/build/_shared/chunk-TWZS4UWA.js", "/build/_shared/chunk-VGO5T5HA.js", "/build/_shared/chunk-IOHTK4DT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/writings/index": { id: "routes/writings/index", parentId: "root", path: "writings", index: !0, caseSensitive: void 0, module: "/build/routes/writings/index-2WZNDBY2.js", imports: ["/build/_shared/chunk-I46MUDMW.js", "/build/_shared/chunk-VGO5T5HA.js", "/build/_shared/chunk-IOHTK4DT.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "6123f40f", hmr: void 0, url: "/build/manifest-6123F40F.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/writings/$slug": {
    id: "routes/writings/$slug",
    parentId: "root",
    path: "writings/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/writings/index": {
    id: "routes/writings/index",
    parentId: "root",
    path: "writings",
    index: !0,
    caseSensitive: void 0,
    module: writings_exports
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: projects_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/talks": {
    id: "routes/talks",
    parentId: "root",
    path: "talks",
    index: void 0,
    caseSensitive: void 0,
    module: talks_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
