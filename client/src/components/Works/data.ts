interface IWork {
    id: string;
    title: string;
    desc: string;
    link: {
        github: string;
        live?: string;
    };
    imgUrl?: string;
}

const data: IWork[] = [
    {
        id: 'socialMediaApp01',
        title: 'social_media_<br/>app',
        desc: '',
        link: {
            github: 'https:github.com/temujins/socialize-react-app',
            live: 'https://socialize-react-app.web.app',
        },
    },
    {
        id: 'socialMediaApp01',
        title: 'social_media_<br/>app',
        desc: '',
        link: {
            github: 'https:github.com/temujins/socialize-react-app',
            live: 'https://socialize-react-app.web.app',
        },
    },
    {
        id: 'socialMediaApp01',
        title: 'social_media_<br/>app',
        desc: '',
        link: {
            github: 'https:github.com/temujins/socialize-react-app',
            live: 'https://socialize-react-app.web.app',
        },
    },
];

export default data;
