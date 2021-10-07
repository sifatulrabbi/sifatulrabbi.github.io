export interface IWork {
    id: string;
    title: string;
    desc: string;
    link: {
        github: string;
        live?: string;
    };
    imgUrl?: string;
    reverse: boolean;
}

const data: IWork[] = [
    {
        id: 'arkanoidGame01',
        title: 'arkanoid_<br/>game',
        desc: 'img elements must have an alt prop, either with meaningful text, or an empty string for decorative images',
        link: {
            github: 'https:github.com/temujins',
            live: 'https://socialize-react-app.web.app',
        },
        reverse: false,
    },
    {
        id: 'fullsatckMern01',
        title: 'Blog_<br/>website',
        desc: 'img elements must have an alt prop, either with meaningful text, or an empty string for decorative images',
        link: {
            github: 'https:github.com/temujins',
            live: 'https://socialize-react-app.web.app',
        },
        reverse: true,
    },
    {
        id: 'socialMediaApp01',
        title: 'social_media_<br/>app',
        desc: 'img elements must have an alt prop, either with meaningful text, or an empty string for decorative images',
        link: {
            github: 'https:github.com/temujins',
            live: 'https://socialize-react-app.web.app',
        },
        reverse: false,
    },
];

export default data;
