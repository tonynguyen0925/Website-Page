module.exports = {

    author: "@konstantinmuenster | modified by @tonynguyen98",
    siteTitle: "Tony Nguyen - Portfolio",
    siteShortTitle: "tony.", // Used as logo text in header, footer, and splash screen
    siteDescription: "A modern one-page portfolio with a clean yet expressive design.",
    siteUrl: "https://tonynguyen.app/",
    siteLanguage: "en_US",
    siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

    splashScreen: true, // Set this to true if you want to use the splash screen

    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/tony-n-286465169/"
        },
        {
            name: "GitHub",
            url: "https://github.com/tonynguyen98"
        },
        {
            name: "Resume",
            url: "./NGUYEN_TONY_RESUME_CS_V4.1.pdf"
        },
        {
            name: "Email",
            url: "mailto:hello@tonynguyen.app"
        },
    ],

    navLinks: {
        menu: [
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
    ]
}