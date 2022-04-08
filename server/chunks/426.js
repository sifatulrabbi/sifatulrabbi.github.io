"use strict";
exports.id = 426;
exports.ids = [426];
exports.modules = {

/***/ 9784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kj": () => (/* reexport */ databaseData),
  "E1": () => (/* reexport */ featuredProjectsData),
  "M9": () => (/* reexport */ frameworksData),
  "Fs": () => (/* reexport */ languagesData),
  "nD": () => (/* reexport */ projectsData),
  "Gb": () => (/* reexport */ softSkills),
  "Vm": () => (/* reexport */ toolsData),
  "ZB": () => (/* reexport */ workExperiences)
});

// UNUSED EXPORTS: cssData, homeData, profileLinks, servicesData, siteLinks

// EXTERNAL MODULE: ./assets/images/index.ts + 8 modules
var assets_images = __webpack_require__(2550);
;// CONCATENATED MODULE: ./assets/data/home.ts

const homeData = {
    caption: "Hi there, I'm Sifatul",
    mainTitle: "A Full Stack<br/>Web Developer<br/>to help you grow<br/>your business<br/>online",
    img: assets_images/* introImg */.wR
};

;// CONCATENATED MODULE: ./assets/data/services.ts
const servicesData = {
    caption: "My Services",
    title: "Personalized solutions for your web applications",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam ",
    services: [
        {
            id: "1",
            name: "Full stack development",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, ",
            overview: {}
        },
        {
            id: "2",
            name: "Full stack development",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, ",
            overview: {}
        },
        {
            id: "3",
            name: "Full stack development",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, ",
            overview: {}
        }, 
    ]
};

// EXTERNAL MODULE: external "react-icons/si"
var si_ = __webpack_require__(764);
;// CONCATENATED MODULE: ./assets/data/projects.ts


const featuredProjectsData = [
    {
        title: "Meta messenger like chat application",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugiat",
        img: assets_images/* socialMediaBanner */.Hk,
        links: {
            live: "https://meta-messenger-clone.vercel.app",
            github: "https://github.com/sifatulrabbi/meta-messenger-clone"
        },
        icons: [
            si_.SiTypescript,
            si_.SiNodedotjs,
            si_.SiReact,
            si_.SiTailwindcss,
            si_.SiPostgresql, 
        ]
    },
    {
        title: "Business to business management application",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugiat",
        img: assets_images/* b2bApplication */.O8,
        links: {
            live: "https://healthos-test.vercel.app",
            github: "https://github.com/sifatulrabbi/healtos-test"
        },
        icons: [
            si_.SiJavascript,
            si_.SiReact,
            si_.SiTailwindcss
        ]
    },
    {
        title: "To do application",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugiat",
        img: assets_images/* todoAppBanner */.EZ,
        links: {
            live: "https://todo-app-fm.vercel.app",
            github: "https://github.com/sifatulrabbi"
        },
        icons: [
            si_.SiJavascript,
            si_.SiReact,
            si_.SiStyledcomponents
        ]
    }, 
];
const projectsData = [
    {
        title: "API for ECommerce store",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugiat",
        link: "https://github.com/sifatulrabbi",
        icons: [
            si_.SiTypescript,
            si_.SiNodedotjs,
            si_.SiMongodb,
            si_.SiPassport,
            si_.SiJsonwebtokens, 
        ]
    },
    {
        title: "My portfolio website",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugiat",
        link: "https://github.com/sifatulrabbi",
        icons: [
            si_.SiTypescript,
            si_.SiNextdotjs,
            si_.SiFirebase
        ]
    },
    {
        title: "Chrome custom homepage extension",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugiat",
        link: "https://github.com/sifatulrabbi",
        icons: [
            si_.SiJavascript,
            si_.SiNodedotjs,
            si_.SiCss3,
            si_.SiHtml5
        ]
    },
    {
        title: "Wottery | Lottery selling and buying website",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusamus maiores soluta id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, fugiat",
        link: "https://github.com/sifatulrabbi",
        icons: [
            si_.SiTypescript,
            si_.SiNodedotjs,
            si_.SiExpress,
            si_.SiNextdotjs,
            si_.SiTailwindcss,
            si_.SiPostgresql, 
        ]
    }, 
];

;// CONCATENATED MODULE: ./assets/data/site-links.ts
const siteLinks = [
    {
        name: "Portfolio",
        path: "/portfolio"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Contact",
        path: "/contact"
    },
    {
        name: "Resume",
        path: "/resume"
    }, 
];

;// CONCATENATED MODULE: ./assets/data/profile-links.ts
const profileLinks = [
    {
        name: "Github",
        path: "https://github.com/sifatulrabbi"
    },
    {
        name: "Upwork",
        path: "https://upwork.com/sifatul_rabbi"
    },
    {
        name: "Fiverr",
        path: "https://fiverr.com/temujins"
    },
    {
        name: "Linkedin",
        path: "https://linkedin.com/in/temujins"
    },
    {
        name: "Facebook",
        path: "https://facebook.com/ttemujins"
    },
    {
        name: "Twitter",
        path: "https://twitter.com/sifatul_rabbi"
    }, 
];

;// CONCATENATED MODULE: ./assets/data/resume.data.ts
const languagesData = [
    "TypeScript",
    "JavaScript",
    "CSS",
    "SQL"
];
const frameworksData = [
    "Node.js",
    "Express.js",
    "Next.js",
    "React.js"
];
const cssData = (/* unused pure expression or super */ null && ([
    "SASS",
    "TailwindCSS",
    "Bootstrap"
]));
const databaseData = [
    "MongoDB",
    "PostgreSQL"
];
const toolsData = [
    "Github",
    "Firebase",
    "Linux",
    "VPS",
    "cPanel"
];
const softSkills = [
    "Hard working",
    "Passionate",
    "Honesty",
    "Team work",
    "Punctuality", 
];
const workExperiences = [
    {
        title: "Full stack developer",
        company: "Upwork",
        details: [
            "Lorem ipsum dolor sit amet consectetur adipisicing",
            "Lorem ipsum dolor sit amet consectetur",
            "Lorem ipsum dolor sit amet consectetur adipisicing adipisicing", 
        ]
    },
    {
        title: "Backend developer",
        company: "Fiverr",
        details: [
            "Lorem ipsum dolor sit amet consectetur adipisicing",
            "Lorem ipsum dolor sit amet consectetur",
            "Lorem ipsum dolor sit amet consectetur adipisicing adipisicing", 
        ]
    },
    {
        title: "Frontend developer",
        company: "Fiverr",
        details: [
            "Lorem ipsum dolor sit amet consectetur adipisicing",
            "Lorem ipsum dolor sit amet consectetur",
            "Lorem ipsum dolor sit amet consectetur adipisicing adipisicing", 
        ]
    }, 
];

;// CONCATENATED MODULE: ./assets/data/index.ts








/***/ }),

/***/ 2550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O8": () => (/* reexport */ b2b_application),
  "wR": () => (/* reexport */ intro_img),
  "me": () => (/* reexport */ me),
  "Hk": () => (/* reexport */ social_media_app),
  "EZ": () => (/* reexport */ todo_app_fm)
});

// UNUSED EXPORTS: fullstackBlogBanner, logo, servicesImg

;// CONCATENATED MODULE: ./assets/images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.a9732503.png","height":1001,"width":936,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAaVBMVEUAcP4Ab/4AcP4AcP4AcP4Ab/4AcP4AcP4Ab/4AcP4Ab/4AcP4AcP4AcP4AcP4AcP4AcP4AcP4AcP4AcP4AcP4AcP4AcP4AcP4Ab/4AcP4AcP4AcP4Ab/4AcP4AcP4AcP4AcP4AcP4Ab/7rxTsoAAAAIXRSTlMAADIzNDQ1UW9wc3V2e3yEiIyPn7G9wsXGydLW197l5/OBWS4wAAAAP0lEQVR42g3FRQKAMBADwCzuViguyf8fSecyMCve0oB0o7Rk0N06kdA4rf4SeLo+P8J7N1QiEv+pmWPA6icy/It1BDapfplcAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./assets/images/me.png
/* harmony default export */ const me = ({"src":"/_next/static/media/me.45a3d86f.png","height":435,"width":435,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAeFBMVEX////+/v7+/v39/f37+/z08/Xy8fTw8vPx8fLy7/Lv7vPv7fLu7PLp6+vp5uvn5erl4+Pk4ujh2dTO3ebb19XN2eLYxrzLysnPwLnIvLrcr5PAt7LJsaW7rKTPoIe6opfNnX3CnIe/j3Otg2yDbmSDYVSBRxhgRTe0jnoaAAAAQklEQVR42h2IBQrAMBDA0t3c3V3//8OVEkggKEg8tIXuu3Mdi2XcJwTFfFy9Oe16loimfh8fBXawDaEjuFFcNWmR/Wl1AyTbdXxcAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./assets/images/intro-img.png
/* harmony default export */ const intro_img = ({"src":"/_next/static/media/intro-img.ea0cbfd5.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AUM8NwDX7/pqMSIejvj5E+oF+wQEAA7v//X87wb+6/XcAQAAAABdSz2nBxYkWC0bJQD4AwkAvPjkAATg2wD35PDsAXNXQrgSDwxH9PTs/PIBHwMUGjoA0unU//jv4gL58/nmAauGZvPAy9gMFxIN/RsZFAHt9ywCyfbq/uTszgL6zOTkAeu7krHO1+FOEg8LAOb2BgChwvP9GBj9A////AD99vr1Af/4AAv9y4LJ/AQQ7ssDQv3+/fxAAwEC4wYGB8cAAQHwAQBv/zJ2HNek5vwK01Ew7g4OA/JI/gAC7QP7932+S0etATOE6szN/QQoDQEAC1gG6atY9SmC5wyIGAQHAwrt1b7mhPeAYBNQwUkAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./assets/images/services-img.png
/* harmony default export */ const services_img = ({"src":"/_next/static/media/services-img.21af8d01.png","height":308,"width":371,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAzklEQVR42mPgY2Ao5WVg2MkrorGGl5lhNy8DQy0DCOT/W8CY/6+ZgUcrdRO3Suh/Xk6G/zxKAf+5NZNOizMwCDPk/brOUPB/OQND+f/ljJkf//MyMPxnSn3xnyn99S8Qm1c/34QBBNj9t29m91r7nZ+BIYPDe90NDpd5YMUC0taGDCDAx8CwmpeB4TKUvR0kySOs8ZFP3kufAQSMGBiYWJKfODMU/f/PadP7n5eB4YRQyhNOUdUANgYYYC79L8VQ9H8Bl/3kxXwMDLkMSAAAlHc8HkBdnTkAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./assets/images/fullstack-blog.png
/* harmony default export */ const fullstack_blog = ({"src":"/_next/static/media/fullstack-blog.cae41122.png","height":1080,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAhklEQVR42g3I0Q7BMBhA4T4q4lHYQwlCrNONZlm6/KpbrFmnTKlhC+FGk5Nz8SFP9MmVUMugYYkJcTnbGn8shsgTvfiewlPKrsgbYDXlj2QkBkhbnulQHANQmFdkryNQgUP062xKo/VivvGXrtV0EhP8fd3QpzW1zpXcuZ+qrCzAnA/v9vIHpk1jV2VLGsoAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./assets/images/social-media-app.png
/* harmony default export */ const social_media_app = ({"src":"/_next/static/media/social-media-app.bf263d18.png","height":380,"width":740,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AFC80mrA0XnH2oXA1ZDK4ZXL2mu91Gm6zQCJuM54xNeo1ObCzu291+2X0+Jtwd9pu84AdLzOcsTZoNHosMb4qsvwodbkdcLVWL3TAE262GO+2JvU44a71pHD3IXM4mG/21K8000lRETrDXEJAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./assets/images/todo-app-fm.jpg
/* harmony default export */ const todo_app_fm = ({"src":"/_next/static/media/todo-app-fm.810ab8b1.jpg","height":660,"width":900,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAKxR/8QAHhAAAgIABwAAAAAAAAAAAAAAAgQDEgABBQYRE3L/2gAIAQEAAT8ATh3IWqw97sRrE1yY3K2YW84//8QAGBEAAgMAAAAAAAAAAAAAAAAAAQMAAkL/2gAIAQIBAT8As1h2Z//EABcRAQADAAAAAAAAAAAAAAAAAAEAITH/2gAIAQMBAT8Ab0n/2Q=="});
;// CONCATENATED MODULE: ./assets/images/b2b-application.png
/* harmony default export */ const b2b_application = ({"src":"/_next/static/media/b2b-application.d6da1c48.png","height":769,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAfElEQVR42hXKsQ4BQRQF0HtnnpEgoxCJ6FU+0K/4CJ1eoxK1VvgAibU2M7tr37N76sP97iUBPqCXv/Y8KT0AyuOiFIQpu9aaEsXVeUChPB7eccFca05MNZfzlvyVHyebrazWjkOCmXVV0slYc5TbubnPQNAL1QyMI2FVpD+NiTVFYadddwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./assets/images/index.ts










/***/ }),

/***/ 6147:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ FeaturedProjectCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(764);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_6__]);
uuid__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const FeaturedProjectCard = ({ img , title , summary , links: { live , github  } , icons ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "max-w-[500px] lg:max-w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden w-full gap-4 border-[1px] border-gray-400 p-4 rounded-lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-w-[500px] w-full max-h-[260px] overflow-hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    src: img,
                    alt: "Featured project of Md Sifatul Islam Rabbi",
                    layout: "intrinsic",
                    className: "object-cover w-auto h-auto"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-start items-start",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "bottom-0 left-0 right-0 font-primary font-medium text-lg text-start block mb-4",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm",
                        children: summary
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-row justify-start items-center gap-4 mt-4",
                        children: icons.map((Icon)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                className: "text-2xl"
                            }, (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)())
                        )
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-8 flex justify-start items-center gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                href: live,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    target: "_blank",
                                    className: "btn-primary flex items-center gap-2",
                                    children: [
                                        "Live site ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineLink, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                href: github,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    target: "_blank",
                                    className: "btn-secondary flex items-center gap-2",
                                    children: [
                                        "Github ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_4__.SiGithub, {})
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(764);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_3__);




const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "w-full p-4 mt-[5vh] mb-[60px] lg:mb-0 theme-styles",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "border-t-[1px] flex flex-col justify-center items-center gap-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-center items-center gap-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiGithub, {
                                    className: "text-2xl "
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiLinkedin, {
                                    className: "text-2xl "
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiTwitter, {
                                    className: "text-2xl "
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiFacebook, {
                                    className: "text-2xl "
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-primary text-sm text-center",
                    children: "\xa9 2022 Md Sifatul Islam Rabbi"
                })
            ]
        })
    });
};


/***/ }),

/***/ 255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ FormGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FormGroup = ({ required =false , type ="text" , name , label , placeholder ="" ,  })=>{
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    function handleChange(e) {
        setValue(e.currentTarget.value);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-col justify-start items start",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                htmlFor: name,
                className: "w-full font-primary font-medium mb-1",
                children: [
                    label,
                    required ? "*" : ""
                ]
            }),
            type === "textarea" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                id: name,
                name: name,
                required: required,
                placeholder: placeholder,
                value: value,
                onChange: handleChange,
                className: "w-full p-2 rounded-md border-[1px] bg-transparent text-black dark:text-white outline-none min-h-[140px] focus:border-primary"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "email",
                id: name,
                name: name,
                required: required,
                placeholder: placeholder,
                value: value,
                onChange: handleChange,
                className: "w-full p-2 rounded-md border-[1px] bg-transparent text-black dark:text-white outline-none focus:border-primary"
            })
        ]
    });
};


/***/ }),

/***/ 4049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Head)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);



const Head = ({ title  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                children: [
                    "Md Sifatul Islam Rabbi | Fullstack web developer | ",
                    title
                ]
            })
        ]
    });
};


/***/ }),

/***/ 8641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Logo = ({ width , height , white  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: "/",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                width: width ? width : 46,
                height: height ? height : 50,
                viewBox: "0 0 46 50",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M23 0L0 13.2743V36.7257L23 50L27.9798 47.1019L27.7583 47.2278V36.2471V23.3871H31.7239L31.6992 36.2471V44.9374L46 36.6147V13.2743L23 0ZM31.7239 23.3871H35.6894V26.6129H31.7239V23.3871ZM11.376 16.4056C10.1861 17.6156 9.51764 19.2567 9.51764 20.9677C9.51764 22.6788 10.1861 24.3197 11.376 25.5296C12.5659 26.7395 14.1797 27.4193 15.8625 27.4193H19.0349C19.8763 27.4193 20.6832 27.7591 21.2781 28.364C21.8731 28.969 22.2073 29.7896 22.2073 30.6451C22.2073 31.5007 21.8731 32.3211 21.2781 32.9261C20.6832 33.531 19.8763 33.871 19.0349 33.871H15.8625C15.0211 33.871 14.2142 33.531 13.6192 32.9261C13.0243 32.3211 12.6901 31.5007 12.6901 30.6451H9.51764C9.51764 32.3562 10.1861 33.9971 11.376 35.207C12.5659 36.4169 14.1797 37.0968 15.8625 37.0968H19.0349C20.7176 37.0968 22.3315 36.4169 23.5214 35.207C24.7112 33.9971 25.3797 32.3562 25.3797 30.6451C25.3797 28.9341 24.7112 27.293 23.5214 26.0831C22.3315 24.8732 20.7176 24.1935 19.0349 24.1935H15.8625C15.0211 24.1935 14.2142 23.8536 13.6192 23.2487C13.0243 22.6437 12.6901 21.8233 12.6901 20.9677C12.6901 20.1122 13.0243 19.2915 13.6192 18.6866C14.2142 18.0816 15.0211 17.7419 15.8625 17.7419H19.5647C19.9117 17.7419 20.2553 17.8114 20.576 17.9465C20.8966 18.0815 21.1879 18.2794 21.4333 18.5289C21.6787 18.7784 21.8733 19.0747 22.0061 19.4007C22.1389 19.7267 22.2073 20.0762 22.2073 20.429V20.9677H25.3797V20.429C25.3797 17.1613 22.7752 14.5161 19.5647 14.5161H15.8625C14.1797 14.5161 12.5659 15.1957 11.376 16.4056Z",
                    fill: "#0070FF"
                })
            })
        })
    });
};


/***/ }),

/***/ 6874:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ ProjectCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(764);
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_si__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_4__]);
uuid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ProjectCard = ({ title , link , summary , icons  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: link,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            className: "relative overflow-hidden rounded-md border-[1px] border-gray-400 p-4 flex flex-col justify-start items-start transition-all hover:border-primary hover:-translate-y-1",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: "mb-4 mr-6",
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-sm mb-4",
                    children: summary
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-row justify-start items-center gap-4",
                    children: icons.map((Icon)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                            className: "text-2xl"
                        }, (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)())
                    )
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-xl absolute top-4 right-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_si__WEBPACK_IMPORTED_MODULE_3__.SiGithub, {})
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ SkillsSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SkillChip = ({ name  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "rounded-full border-[1px] border-gray-500 text-sm px-2 py-[2px]",
        children: name
    });
};
const SkillsSection = ({ data  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-row flex-wrap justify-start items-center gap-2",
        children: data.map((skill)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SkillChip, {
                name: skill
            }, (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)())
        )
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ WorkCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const WorkCard = ({ title , company , details  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border-[1px] rounded-md border-gray-500 p-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                className: "mb-2",
                children: [
                    title,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("i", {
                        className: "text-base",
                        children: [
                            "@",
                            company
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "text-sm list-disc pl-4",
                children: details.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: item
                    }, item)
                )
            })
        ]
    });
};


/***/ }),

/***/ 4176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fb": () => (/* reexport safe */ _Head__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   "TR": () => (/* reexport safe */ _Logo__WEBPACK_IMPORTED_MODULE_1__.T),
/* harmony export */   "Xi": () => (/* reexport safe */ _FeaturedProjectCard__WEBPACK_IMPORTED_MODULE_2__.X),
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_3__.$),
/* harmony export */   "t": () => (/* reexport safe */ _ProjectCard__WEBPACK_IMPORTED_MODULE_4__.t),
/* harmony export */   "cw": () => (/* reexport safe */ _FormGroup__WEBPACK_IMPORTED_MODULE_5__.c),
/* harmony export */   "C$": () => (/* reexport safe */ _WorkCard__WEBPACK_IMPORTED_MODULE_6__.C),
/* harmony export */   "Ui": () => (/* reexport safe */ _SkillsSection__WEBPACK_IMPORTED_MODULE_7__.U)
/* harmony export */ });
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4049);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8641);
/* harmony import */ var _FeaturedProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6147);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4260);
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6874);
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(255);
/* harmony import */ var _WorkCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9219);
/* harmony import */ var _SkillsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2060);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FeaturedProjectCard__WEBPACK_IMPORTED_MODULE_2__, _ProjectCard__WEBPACK_IMPORTED_MODULE_4__, _SkillsSection__WEBPACK_IMPORTED_MODULE_7__]);
([_FeaturedProjectCard__WEBPACK_IMPORTED_MODULE_2__, _ProjectCard__WEBPACK_IMPORTED_MODULE_4__, _SkillsSection__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3191:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ ContactMeForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4176);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6555);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_3__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const formData = [
    {
        name: "name",
        label: "Name",
        type: "text",
        required: true,
        placeholder: "Your Name"
    },
    {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "Your Email"
    },
    {
        name: "subject",
        label: "Subject",
        type: "text",
        required: true,
        placeholder: "Your Subject"
    },
    {
        name: "message",
        label: "Message",
        type: "textarea",
        required: true,
        placeholder: "Your Message"
    }, 
];
const ContactMeForm = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        action: "submit",
        className: "w-full flex flex-col justify-start items-start gap-4 p-4 rounded-lg border-4 text-sm",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                children: "Send an Email"
            }),
            formData.map((data)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .FormGroup */ .cw, {
                    ...data
                }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)())
            ),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "submit",
                className: "btn-primary flex items-center gap-2",
                children: [
                    "Send now ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiSend, {})
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7714:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ FeaturedProjectsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4176);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(245);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_5__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const FeaturedProjectsView = ()=>{
    const featuredProjects = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_states__WEBPACK_IMPORTED_MODULE_3__/* .featuredProjectsSelector */ .Hn);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-col justify-start items-start",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "text-xl font-medium font-primary mb-4",
                children: "Featured Projects"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full flex flex-col justify-start items-center gap-4",
                children: featuredProjects.map((project)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .FeaturedProjectCard */ .Xi, {
                        ...project
                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)())
                )
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ MobileBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9775);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5609);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_2__]);
uuid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Icon({ name  }) {
    return name === "Home" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiHomeAlt, {}) : name === "Projects" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiArchive, {}) : name === "Contact" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiMessageSquareDetail, {}) : name === "Resume" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiReceipt, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {});
}
const MobileBar = ()=>{
    const { darkMode , active  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useNavbar */ .R)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: `z-50 fixed lg:hidden bottom-0 right-0 left-0 h-[60px] flex ${darkMode ? "dark" : "light"}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-container flex flex-row justify-around items-center px-4 theme-styles bg-white dark:bg-slate-700 bg-opacity-95 dark:opacity-95",
            children: _data__WEBPACK_IMPORTED_MODULE_3__/* .links.map */ .O.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    href: link.path,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: `flex flex-col justify-center items-center p-2 text-2xl ${active === link.path ? "text-primary" : ""}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                name: link.name,
                                active: active === link.path
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-[10px] leading-4 font-primary",
                                children: link.name
                            })
                        ]
                    })
                }, (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)())
            )
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9725:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4176);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6555);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9775);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5609);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_4__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Navbar = ()=>{
    const { active , toggleDarkMode , darkMode  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useNavbar */ .R)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: `z-[50] fixed top-0 left-0 right-0 bg-white dark:bg-slate-700 bg-opacity-95 dark:opacity-95 px-4 flex justify-center items-center h-[60px] ${darkMode ? "dark" : "light"}`,
        style: {
            borderTop: "5px solid #0077ff"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-container w-full flex justify-between items-center theme-styles bg-transparent dark:bg-transparent",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Logo */ .TR, {
                    height: 40,
                    width: 40
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row justify-center items-center gap-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hidden lg:flex flex-row justify-center items-center gap-4",
                            children: _data__WEBPACK_IMPORTED_MODULE_5__/* .links.map */ .O.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                    href: link.path,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: `font-primary p-1 hover:border-b-2 theme-styles bg-transparent dark:bg-transparent ${active === link.path ? "font-bold" : "font-normal"}`,
                                        children: link.name
                                    })
                                }, (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)())
                            )
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "flex justify-center items-center text-2xl p-1 bg-gray-200 dark:bg-gray-600 rounded-full",
                            onClick: toggleDarkMode,
                            children: darkMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiSun, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiMoon, {})
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ links)
/* harmony export */ });
const links = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Projects",
        path: "/projects"
    },
    {
        name: "Resume",
        path: "/resume"
    },
    {
        name: "Contact",
        path: "/contact"
    }, 
];


/***/ }),

/***/ 7389:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "M": () => (/* reexport safe */ _MobileBar__WEBPACK_IMPORTED_MODULE_1__.M)
/* harmony export */ });
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9725);
/* harmony import */ var _MobileBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8984);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navbar__WEBPACK_IMPORTED_MODULE_0__, _MobileBar__WEBPACK_IMPORTED_MODULE_1__]);
([_Navbar__WEBPACK_IMPORTED_MODULE_0__, _MobileBar__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ ProjectsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4176);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(245);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_5__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ProjectsView = ()=>{
    const otherProjects = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_states__WEBPACK_IMPORTED_MODULE_3__/* .otherProjectsSelector */ .sY);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex flex-col justify-center items-start",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "text-xl font-medium font-primary text-black",
                children: "Other projects"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4",
                children: otherProjects.map((project)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .ProjectCard */ .t, {
                        ...project
                    }, (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)())
                )
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(245);




const ThemeProvider = ({ children  })=>{
    const darkMode = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_states__WEBPACK_IMPORTED_MODULE_3__/* .darkModeState */ .W9);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: (darkMode ? "dark bg-slate-700" : "light bg-white") + " min-h-screen",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-0 h-[70px] right-0 left-0 theme-styles"
            }),
            children
        ]
    });
};


/***/ }),

/***/ 8815:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ WorkSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4176);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6555);
/* harmony import */ var _assets_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9784);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_3__]);
([_components__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const WorkSection = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid gap-4 grid-cols-1 lg:grid-cols-2",
        children: _assets_data__WEBPACK_IMPORTED_MODULE_4__/* .workExperiences.map */ .ZB.map((data)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .WorkCard */ .C$, {
                ...data
            }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)())
        )
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mv": () => (/* reexport safe */ _Navigation__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   "wp": () => (/* reexport safe */ _Navigation__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "f6": () => (/* reexport safe */ _ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.f),
/* harmony export */   "yf": () => (/* reexport safe */ _ProjectsView__WEBPACK_IMPORTED_MODULE_2__.y),
/* harmony export */   "MW": () => (/* reexport safe */ _FeaturedProjectsView__WEBPACK_IMPORTED_MODULE_3__.M),
/* harmony export */   "pL": () => (/* reexport safe */ _ContactMeForm__WEBPACK_IMPORTED_MODULE_4__.p),
/* harmony export */   "kZ": () => (/* reexport safe */ _WorkSection__WEBPACK_IMPORTED_MODULE_5__.k)
/* harmony export */ });
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7389);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4545);
/* harmony import */ var _ProjectsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6201);
/* harmony import */ var _FeaturedProjectsView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7714);
/* harmony import */ var _ContactMeForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3191);
/* harmony import */ var _WorkSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8815);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navigation__WEBPACK_IMPORTED_MODULE_0__, _ProjectsView__WEBPACK_IMPORTED_MODULE_2__, _FeaturedProjectsView__WEBPACK_IMPORTED_MODULE_3__, _ContactMeForm__WEBPACK_IMPORTED_MODULE_4__, _WorkSection__WEBPACK_IMPORTED_MODULE_5__]);
([_Navigation__WEBPACK_IMPORTED_MODULE_0__, _ProjectsView__WEBPACK_IMPORTED_MODULE_2__, _FeaturedProjectsView__WEBPACK_IMPORTED_MODULE_3__, _ContactMeForm__WEBPACK_IMPORTED_MODULE_4__, _WorkSection__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* reexport */ useNavbar)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./states/index.ts + 3 modules
var states = __webpack_require__(245);
;// CONCATENATED MODULE: ./hooks/useNavbar.ts




function useNavbar() {
    const router = (0,router_.useRouter)();
    const [active, setActive] = external_react_default().useState("/");
    const [darkMode, setDarkMode] = (0,external_recoil_.useRecoilState)(states/* darkModeState */.W9);
    function toggleDarkMode() {
        setDarkMode((prev)=>!prev
        );
    }
    external_react_default().useEffect(()=>{
        setActive(router.pathname);
    }, [
        router.pathname
    ]);
    external_react_default().useEffect(()=>{
        const mode = new Promise((resolve)=>{
            const matchMedia = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;
            return resolve(matchMedia);
        });
        mode.then((matchMedia)=>setDarkMode(matchMedia)
        );
    }, [
        setDarkMode
    ]);
    return {
        active,
        toggleDarkMode,
        darkMode
    };
}

;// CONCATENATED MODULE: ./hooks/index.ts



/***/ }),

/***/ 245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W9": () => (/* reexport */ darkModeState),
  "Hn": () => (/* reexport */ featuredProjectsSelector),
  "sY": () => (/* reexport */ otherProjectsSelector)
});

// UNUSED EXPORTS: activePathState, projectsState

// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
;// CONCATENATED MODULE: ./states/activePath.ts

const activePathState = (0,external_recoil_.atom)({
    key: "activePathState",
    default: "/"
});

;// CONCATENATED MODULE: ./states/darkMode.ts

const darkModeState = (0,external_recoil_.atom)({
    key: "darkModeState",
    default: false
});

// EXTERNAL MODULE: ./assets/data/index.ts + 6 modules
var data = __webpack_require__(9784);
;// CONCATENATED MODULE: ./states/projects.ts


const projectsState = (0,external_recoil_.atom)({
    key: "projectsAtom",
    default: []
});
const featuredProjectsSelector = (0,external_recoil_.selector)({
    key: "featuredProjectsSelector",
    get: ({ get  })=>{
        const defaultValues = get(projectsState);
        return data/* featuredProjectsData */.E1;
    }
});
const otherProjectsSelector = (0,external_recoil_.selector)({
    key: "otherProjectsSelector",
    get: ({ get  })=>{
        const defaultValues = get(projectsState);
        return data/* projectsData */.nD;
    }
});

;// CONCATENATED MODULE: ./states/index.ts





/***/ })

};
;