export enum BlogContentType {
    text = "text",
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
    category: string;
    tags: string[];
    summary: string;
    created_at: string;
    updated_at: string;
};

export type ArticleItem = ArticleEntry & {
    body: ArticleContent[];
};
