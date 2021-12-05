# 2021년 12월 1일 ( 12주차 )

## 자신만의 Hook 만들기

::: tip
[깃허브에서 보기](https://github.com/dalcon10028/movie_app_2021/tree/master/docs/src/review-note/2021-12-01)
:::

자신만의 Hook을 만들면 컴포넌트 로직을 함수로 뽑아내어 재사용할 수 있습니다.

Effect Hook 사용하기를 배울 때, 채팅 애플리케이션에서 친구가 온라인 상태인지 아닌지에 대한 메시지를 표시하는 컴포넌트를 보았을 것입니다.

## 사용자 정의 Hook 추출하기

두 개의 자바스크립트 함수에서 같은 로직을 공유하고자 할 때는 또 다른 함수로 분리합니다. 컴포넌트와 Hook 또한 함수이기 때문에 같은 방법을 사용할 수 있습니다!

사용자 정의 Hook은 이름이 use로 시작하는 자바스크립트 함수입니다. 사용자 Hook은 다른 Hook을 호출할 수 있습니다. 예를 들자면, 아래의 useFriendStatus가 우리의 첫 번째 사용자 정의 Hook입니다.

```jsx
import { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```

딱히 새로운 것은 없습니다. 로직은 위의 컴포넌트로부터 복사해왔습니다. 다만 컴포넌트에서처럼 다른 Hook들은 사용자 Hook의 위로 놓여야 하며 사용자 정의 Hook은 조건부 함수가 아니어야 합니다.

React 컴포넌트와는 다르게 사용자 정의 Hook은 특정한 시그니처가 필요 없습니다. 무엇을 인수로 받아야 하며 필요하다면 무엇을 반환해야 하는 지를 사용자가 결정할 수 있습니다. 다시 말하지만, 보통의 함수와 마찬가지입니다. 이름은 반드시 `use`로 시작해야 하는데 그래야만 한눈에 보아도 Hook 규칙이 적용되는지를 파악할 수 있기 때문입니다.

`useFriendStatus` Hook의 목표는 친구의 상태를 구독하기 위함입니다. 이를 위하여 `friendID`를 인수로 받고 온라인 상태의 여부를 반환합니다.

## Hook에서 Hook으로 정보 전달하기

Hook은 함수이기 때문에 Hook 사이에서도 정보를 전달할 수 있습니다.

상황설명을 위해 채팅 예시에 있는 다른 컴포넌트를 사용하겠습니다. 현재 선택된 친구가 온라인 상태인지를 표시하는 채팅 수신자 선택기입니다.

```jsx
const friendList = [
  { id: 1, name: 'Phoebe' },
  { id: 2, name: 'Rachel' },
  { id: 3, name: 'Ross' },
];

function ChatRecipientPicker() {
  const [recipientID, setRecipientID] = useState(1);
  const isRecipientOnline = useFriendStatus(recipientID);

  return (
    <>
      <Circle color={isRecipientOnline ? 'green' : 'red'} />
      <select
        value={recipientID}
        onChange={(e) => setRecipientID(Number(e.target.value))}
      >
        {friendList.map((friend) => (
          <option key={friend.id} value={friend.id}>
            {friend.name}
          </option>
        ))}
      </select>
    </>
  );
}
```

현재 선택된 친구의 ID를 `recipientID` `state` 변수에 저장하고 사용자가 `<select>` 선택기에 있는 다른 친구를 선택하면 이를 업데이트합니다.

`useState` Hook 호출은 `recipientID` state 변수의 최신값을 돌려주기 때문에 이를 `useFriendStatus` Hook에 인수로 보낼 수 있습니다.

### 참고

[자신만의 Hook 만들기](https://ko.reactjs.org/docs/hooks-custom.html)
