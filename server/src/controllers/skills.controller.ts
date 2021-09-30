interface ISkills {
    title: string;
    desc: string;
}

class Works {
    private skills: ISkills[] = [
        {
            title: 'TypeScript',
            desc: '',
        },
        {
            title: 'JavaScript',
            desc: '',
        },
    ];

    public async getSkills(): Promise<ISkills[]> {
        return await this.skills;
    }
}

export default new Works();
