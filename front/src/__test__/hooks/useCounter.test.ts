// @ts-ignore
import { HookResult, renderHook, act } from '@testing-library/react-hooks';
import { useCounter, UseCounterReturnType } from '../../hooks/useCounter';
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({greeting: 'hello there!!'}))
  }),
)

describe('useCounter', () => {
  /**
    カスタムフックの結果を受け取る変数です
    カスタムフックの引数が変わる場合、各test()で作ることになりますが、そうでない場合は
    こんな感じでletで変数を定義してbeforeEachで受け取ればいいと思います🙆🏻♂️‍
  */
  let result: HookResult<UseCounterReturnType>;
  beforeEach(() => {
    /**
      カスタムフックを使う場合はrenderHookを使用します
      renderHookの中でhookをよび、返り値のresultを上記の変数に格納します
      返り値はresult.current.countのようにして入っているので、テストではresult.currentを使うことになります
      result以外ではrerenderやwaitForNextUpdateなどが入っているので、
      それらを使う場合はresultではなくrenderHookの返り値自体を格納するか別途受け取る変数を定義してやるといいでしょう
    */
    result = renderHook(() => useCounter()).result;
    // server.resetHandlers();
  });

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('countの初期値は0になっている', () => {
    expect(result.current.count).toBe(0);
  });

  test('incrementを呼ぶと、countが期待通りの値に変更される', () => {
    expect(result.current.count).toBe(0);
    /**
      useStateの更新関数を呼ぶ場合はactの中で呼びます。
      そうしないとエラーになります
      Warning: An update to TestHook inside a test was not wrapped in act(...).
      When testing, code that causes React state updates should be wrapped into act(...):
     */
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  test('axiosTest 正常系', () => {
    // act(async () => {
    //   const data = result.current.axiosTest()
    //   expect(data.greeting).toBe('hello there!!');
    // });

    // act(async () => {
    //   result.current.axiosTest()
    //     .then(data => {
    //       expect(data.data.greeting).toBe('hello there!!');
    //     })
    // })
    // @ts-ignore
    return result.current.axiosTest().then(res => {
      expect(res.data.greeting).toBe('hello there!!');
    });
  });

  test('axiosTest 異常系', () => {
    server.use(
      rest.get('/greeting', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    );

    // @ts-ignore
    return result.current.axiosTest().catch(e => {
      expect(e.response.status).toBe(500);
    });
  });
});
