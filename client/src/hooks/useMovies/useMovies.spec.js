import { renderHook, act } from '@testing-library/react-hooks';
import { useMovies } from './useMovies';
import { MAX_SELECTED_MOVIES } from '../../constants';


describe('useMovies hook', () => {

  const movie = {
    id: 1,
    title: 'title movie'
  };

  it('should select movie', () => {
    const { result } = renderHook(() => useMovies());

    act(() => {
      result.current.selectMovie(movie);
    });

    expect(result.current.selectedMovies.length).toBe(1);
    expect(result.current.selectedMovies[0].id).toBe(1);
  });

  it('should delete movie', () => {
    const { result } = renderHook(() => useMovies());

    act(() => {
      result.current.selectMovie(movie);
    });

    expect(result.current.selectedMovies.length).toBe(1);

    act(() => {
      result.current.deleteMovie(movie);
    });

    expect(result.current.selectedMovies.length).toBe(0);
  })

  it('should select movie only once', () => {
    const { result } = renderHook(() => useMovies());

    act(() => {
      result.current.selectMovie(movie);
    });

    act(() => {
      result.current.selectMovie(movie);
    });

    expect(result.current.selectedMovies.length).toBe(1);
    expect(result.current.selectedMovies[0].id).toBe(1);
  })

  it('should add no more movies than it is allowed', () => {
    const { result } = renderHook(() => useMovies());


    for(let i = 0; i < MAX_SELECTED_MOVIES; i++) {
      act(() => {
        result.current.selectMovie({
          ...movie,
          id: i
        });
      });
    }

    expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES);

    act(() => {
      result.current.selectMovie({
        ...movie,
        id: MAX_SELECTED_MOVIES + 1
      });
    });

    expect(result.current.selectedMovies.length).toBe(MAX_SELECTED_MOVIES);

  })
});
