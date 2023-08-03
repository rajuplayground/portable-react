export default [
    {
        _type: "block",
        style: "h1",
        children: [
            {
                _type: "span",
                text: "Aim and Scope",
            }
        ],
    },
    {
        _type: "block",
        style: "normal",
        markDefs: [
            {
                _type: "link",
                _key: "key1",
                href: "https://www.codefidence.us"
            },
            {
                _type: "randomtype",
                _key: "boldKey",
                leverage: "one"
            }
        ],
        children: [
            {
                _type: "span",
                text: "The aim of the ",
            },
            {
                _type: "span",
                text: "\n",
            },
            {
                _type: "span",
                text: "Journal of Applied Engineering and Science (JAES) ",
                marks: ["key1", "randomtype"]
            },
            {
                _type: "span",
                text: "is to provide a platform for Academics, Researchers, and Professionals to share their work and ideas with a wider audience. The scope of the Journal of Applied Engineering and Science (JAES) includes publishing original research articles, review articles, case studies, and other scholarly works related to a particular field or discipline. The scope of the Journal of Applied Engineering and Science (JAES) also includes:",
            },
        ],
    },
    {
        _type: "block",
        style: "normal",
        children: [
            {
                _type: "span",
                text: "The aim of the Journal of Applied Engineering and Science (JAES) is to provide a platform for Academics, Researchers, and Professionals to share their work and ideas with a wider audience. The scope of the Journal of Applied Engineering and Science (JAES) includes publishing original research articles, review articles, case studies, and other scholarly works related to a particular field or discipline. The scope of the Journal of Applied Engineering and Science (JAES) also includes:",
            },
        ],
    },
    {
        _type: "block",
        level: 1,
        listItem: "bullet",
        children: [
            {
                _type: "span",
                text: "Peer Review: ",
                marks: ["strong"],
            },
            {
                _type: "span",
                text: "Rigorous peer-review process to ensure the quality and accuracy of the research they publish. Open Access: Operate on an open-access model, meaning that their content is freely available to anyone with an internet connection.",
            },
        ],
    },
    {
        _type: "block",
        level: 1,
        listItem: "bullet",
        children: [
            {
                _type: "span",
                text: "Interdisciplinary Approach: ",
                marks: ["strong"],
            },
            {
                _type: "span",
                text: "Aim to foster interdisciplinary collaboration by publishing research from multiple disciplines",
            },
        ],
    },
    {
        _type: "block",
        level: 1,
        listItem: "bullet",
        children: [
            {
                _type: "span",
                text: "Peer Review: ",
                marks: ["strong"],
            },
            {
                _type: "span",
                text: "Rigorous peer-review process to ensure the quality and accuracy of the research they publish. Open Access: Operate on an open-access model, meaning that their content is freely available to anyone with an internet connection.",
            },
        ],
    },
    {
        _type: "block",
        level: 1,
        listItem: "bullet",
        children: [
            {
                _type: "span",
                text: "Interdisciplinary Approach: ",
                marks: ["strong"],
            },
            {
                _type: "span",
                text: "Aim to foster interdisciplinary collaboration by publishing research from multiple disciplines",
            },
        ],
    },
    {
        _type: "image",
        asset: {
            _ref: "https://placekitten.com/48/48"
        },
        alt: "kitten image"
    }, {
        "_type": "code",
        "language": "javascript",
        "code": `// html string
        const htmlStr = '<h1>Hello World!</h1>';
        // make a new parser
        const parser = new DOMParser();
        // convert html string into DOM
        const document = parser.parseFromString(htmlStr, "text/html");`
    }
];
