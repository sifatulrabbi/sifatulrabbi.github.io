import { Octokit } from '@octokit/core';

export interface IData {
  name: string;
  html_url: string;
  homepage?: string;
  topics?: string[];
}

const octokit = new Octokit();

const repos = [
  'temujins.github.io',
  'ts-arkanoid-game',
  'social_media_app',
  'react-quiz',
];

export const getRepos = (): IData[] => {
  let data: IData[] = [];

  repos.map(async (repo) => {
    try {
      const res = await octokit.request('GET /repos/temujins/{repo}', { repo });
      const { name, html_url, homepage, topics } = res.data;

      data.push({ name, html_url, homepage, topics });
    } catch (err) {
      console.log(err);
    }
  });

  return data;
};
