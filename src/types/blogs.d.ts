export enum BlogContentType {
    text = "text",
    image = "image",
    code = "code",
    video = "video",
    gif = "gif",
    iframe = "iframe",
}

export type BlogContent = {
    contentType: BlogContentType;
    content: string;
};

export type Blog = {
    id: string;
    title: string;
    summary: string;
    body: BlogContent[];
};
