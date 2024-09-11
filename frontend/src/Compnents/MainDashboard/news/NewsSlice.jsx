import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  News:[] , 
  rejectedNews: [],
  publishedNews: [],
  isLoading: true,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setPublishedNews: (state, action) => {
      state.publishedNews = action.payload;
    },

    setNews: (state, action) => {
      state.News = action.payload;
    },
    setRejectedNews: (state, action) => {
      state.rejectedNews = action.payload;
    },
    rejectNews: (state, action) => {
      const newsItem = action.payload;
      const isAlreadyRejected = state.rejectedNews.some(
        (news) => news.id === newsItem.id
      );
      if (!isAlreadyRejected) {
        state.rejectedNews.push(newsItem);
      }
      state.News = state.News.filter(
        (news) => news.id !== newsItem.id
      );
    },

    approveNews: (state, action) => {
      const newsItem = action.payload;
      state.publishedNews.push(newsItem);
      state.News = state.News.filter((news) => news.id !== newsItem.id);
    },
 
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setNews, setRejectedNews, rejectedNews,rejectNews , setLoading  , approveNews , setPublishedNews } =
  newsSlice.actions;
export default newsSlice.reducer;
