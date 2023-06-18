export interface BlogPost {
    id: number;
    date: string;
    link: string;
    title: { rendered: string };
    author: number;
    featured_media: string;
    _embedded: {
        author: {
            id: number;
            name: string;
            link: string;
        }[];
    };
}