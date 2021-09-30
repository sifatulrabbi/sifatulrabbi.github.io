interface IWorks {
    title: string;
    desc: string;
    links: {
        github: string;
        live?: string;
    };
}

class Works {
    private works: IWorks[] = [
        {
            title: 'socialize_web app',
            desc: '',
            links: {
                github: 'https://github.com/temujins',
            },
        },
        {
            title: 'socialize_web app',
            desc: '',
            links: {
                github: 'https://github.com/temujins',
            },
        },
    ];

    public async getWorks(): Promise<IWorks[]> {
        return await this.works;
    }
}

export default new Works();
