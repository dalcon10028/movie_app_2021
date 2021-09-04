import { queryByText, render, waitFor, screen } from '@testing-library/react';
import MockAdapter from "axios-mock-adapter";
import { moviesMock } from "./moviesMock";
import axios from "axios";
import App from './App';

describe("App 컴포넌트", () => {

  const fetchMoviesMock = new MockAdapter(axios);
  const movieApi = 'https://yts-proxy.now.sh/list_movies.json/sort_by=rating'

  it("컴포넌트 시작시 로딩이 먼저 나온 후 영화 목록이 나온다.", async () => {
    fetchMoviesMock.onGet(movieApi).reply(200, moviesMock);
    const { getByText } = render(<App />);
    const loadingElement = getByText(/Loading.../i);
    expect(loadingElement).not.toBeNull();
    expect(loadingElement).toBeInstanceOf(HTMLDivElement);
    
    // await waitFor(() => );
    // expect(loadingElement).not.toBeInTheDocument();
  });
});

