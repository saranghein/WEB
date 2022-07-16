# Web 7주차 워크북

# 핵심 키워드 🎯

- 동기
    - synchronous
    - 순서대로 일을 처리하는 방식
- 비동기
    - asynchronous
    - 순서대로 일을 처리하지 않고 빨리 처리할 수 있는 것들을 먼저 처리하는 방식
    - callback, Promise
    - 동기→비동기

### callback

- 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수
- 함수 안에서 실행하는 또 다른 함수
- 함수를 만들 때 parameter 을 함수로 받아서 사용할 수 있는데, 이때 인자로 사용되는 함수
- callback Hell
    - 콜백안에 콜백을 물어서 오른쪽 아래로 코드가 내려가는 형태
    - 코드의 흐름을 추적하기도 쉽지 않고, 만약 수정할 일이 생기면 콜백의 구조 특성상 수정이 어려움

### Promise

- 서버에서 받아온 데이터를 화면에 표시할 때 사용
- 콜백 함수 인자로 `resolve` `reject` 사용 가능
- 2줄 이상은 return 사용
- `new Promise()`로 프로미스를 생성하고 종료될 때까지 3가지 상태
    - Pending(대기)
    - Fullfiled(이행)
    
    ```jsx
    function getData() {
      return **new Promise**(function(resolve, reject) {
        var data = 100;
        **resolve**(data);
      });
    }
    
    // resolve()의 결과 값 data를 resolvedData로 받음
    //then()을 이용하여 처리 결과 값을 받음
    getData()**.then**(function(resolvedData) {
      console.log(resolvedData); // 100
    });
    ```
    
    - Rejected(실패)
        - `reject()`를 호출하면 실패(Rejected) 상태
        - 실패 처리의 결과 값을 `catch()`로 받을 수 있음
        
        ```jsx
        function getData() {
          return new Promise(function(resolve, reject) {
            reject(new Error("Request is failed"));
          });
        }
        
        getData().then().catch(function(err) {
          console.log(err);
        });
        ```
        
        1. `then()` 의 두 번째 인자로 에러처리
        2. `catch()`
        
        ```jsx
        //1.
        getData().then(
          handleSuccess,
          handleError
        );
        
        //2.
        getData().then().catch();//더 선호
        ```
        
- `then()`메서드를 호출하고 나면 새로운 프로미스 객체가 반환 되므로 여러개의 promise를 연결하여 사용가능

![Untitled](Web%207%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3%E1%84%87%E1%85%AE%E1%86%A8%207dad14c614e84870b3e63ffe01fafabb/Untitled.png)

### async, await

- 직관적
- 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 `await`가 의도한 대로 동작

```jsx
async function 함수명() {
  await 비동기_처리_메서드_명();
}
```

# 7주차 수업 후기 📢

- 7주차 **수업을 듣고 서로 느낀 점을 이야기해주세요!**
- **핵심 키워드에 대해 완벽하게 이해했는지? 혹시 이해가 안 되는 부분은 뭐였는지?
서로 이야기해주세요!**

# 실습 체크리스트✅

- [x]  setTimeout
    
    ```
    setTimeout(function(){console.log("hello")},0);
    console.log("nice meet you, too")
    
    ```
    
    위의 코드를 실행시킨다면 어떤 코드가 먼저 실행될까? 자신의 생각을 먼저 적고, 실제로 코드를 작동시킨 후 결과에 대해 찾아보세요
    
    → 동기가 먼저 실행되어 nice meet you가 실행 후 바동기가 실행되어 hello가 출력될 것이라 생각한다.
    
    ![Untitled](Web%207%E1%84%8C%E1%85%AE%E1%84%8E%E1%85%A1%20%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3%E1%84%87%E1%85%AE%E1%86%A8%207dad14c614e84870b3e63ffe01fafabb/Untitled%201.png)
    
- [x]  Callback 이란:어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수
- [x]  Callback 지옥의 예시를 생각해보고 여기에 적어주세요:

```bash
function add(x, callback) {
	let sum = x + x;
	console.log(sum);
	callback(sum);
}
add(2, function(result) {
	add(result, function(result) {
		add(result, function(result) {
			...
		})
	})
})

```

- [ ]  서버와 `동기적`으로 통신한다면 어떤 문제가 발생할지 의견을 적어주세요:

로딩바 

# !주의사항

1. **과제 피드백 기반 진행입니다** - 한명씩 본인의 **과제를 발표**하는 시간 그리고 해온 **과제에 대한 피드백**을 하는 시간 (ex:전 이렇게 생각해서 이런 부분 다르게 해왔는데 저것도 괜찮은 것 같아요!)이 **무조건 기반**이 되어야 합니다!
2. 부가적으로 **워크북에서 제공되는 키워드 혹은 강의에서 들은 디테일 적인 부분**에서 더 토의해봐도 좋을 것 같습니다

# 논의해보면 좋은 것들 🔥

- 왜 Callback 함수를 안쓰고 promise와 async, await를 사용하는지 토론해보기→ 콜백 지옥에 빠지지 않기 위해
- Promise와 async, await를 어느 기능에서 활용하면 좋을지 토의해보기 →로그인, 사용자의 데이터를 받아야 할 때