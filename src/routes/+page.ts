// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import type { PageLoad } from './$types';

let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
}

export const load = (async ({ fetch, params }) => {
    const response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=2dbe37ae0f9d4fa5be85e2d02f1d0011&language=pt&sortBy=popularity", {
        method: "GET",
        headers: headersList,
        mode: 'no-cors'
    });

    let data = await response.text();
    console.log(data);
    return { data };
}) satisfies PageLoad;


interface Main {
    status:       string;
    totalResults: number;
    articles:     Article[];
}

interface Article {
    source:      Source;
    author:      null | string;
    title:       null | string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: Date;
    content:     string;
}

interface Source {
    id:   ID | null;
    name: string;
}

enum ID {
    Globo = "globo",
    Ign = "ign",
    InfoMoney = "info-money",
}
