import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: 'https://time.com/6266679/musk-ai-open-letter/',
    length: '3'
  },
  headers: {
    'X-RapidAPI-Key': '4b0e617258msh2e7a18aba84db58p1e04c6jsn4b5b8e431f2b',
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const articleApi = createApi({
  reducerPath: "articleApi",
baseQuery: fetchBaseQuery({
  baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',

})
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => "test",
    }),
  }),
});
