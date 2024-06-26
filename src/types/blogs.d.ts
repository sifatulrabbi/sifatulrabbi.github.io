export enum BlogContentType {
    markdown = "markdown",
    image = "image",
    code = "code",
    video = "video",
    gif = "gif",
    iframe = "iframe",
}

export type ArticleContent = {
    contentType: BlogContentType;
    content: string;
    index: number;
};

export type ArticleEntry = {
    id: string;
    title: string;
    summary: string;
    category: string;
    tags: string[];
    created_at: string;
    updated_at: string;
};

export type ArticleItem = ArticleEntry & {
    body: ArticleContent[];
};
