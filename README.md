## STYLED-COMPONENTS 실습
button, modal, input, select 요소로 styled-components의 기능 학습 목적<br>
완성된 프로젝트는 [링크](https://styled-component-assignment-taupe.vercel.app/)에서 확인하실 수 있습니다.

## 기능 구현

### 1. Button
- styled-components props를 활용해 버튼의 조건부 스타일링 구현

### 2. Modal
- 닫기버튼을 클릭했을때만 모달이 닫힘. 모달 외부 클릭시 모달이 닫히지 않도록 구현
- 닫기 아이콘을 클릭했을때, 모달 외부 클릭시 모달이 닫히도록 구현
### 3. Input
- 일반 텍스트형식의 input
- 숫자를 넣었을 때, 3자리 수마다 콤마(,)가 찍히는 input 구현
- form을 구현 후 저장을 눌렀을때 입력한 데이터 값을 alert에 표시

### 4. Select
- select를 클릭했을 때 특정 option을 클릭하면 select 값이 변경되도록 구현
- selet를 클릭했을 때 부모 요소에 의해 가려지지 않도록 구현

## 트러블 슈팅
- 4.25 모달 창의 닫기 아이콘을 클릭했을 때만 모달이 닫혀야 하는데,모달 창 내부 영역을 클릭할 경우에도 모달이 닫히는 현상이 발생함
### 원인
이벤트 버블링 현상으로 닫기아이콘(x) 클릭시 모달이 닫히도록한 이벤트가 상위 노드인 ModalContainer에 전파되어 적용되고 있었음

### 시도 
1) return false로 모달 내부 클릭시 이벤트를 호출해 모달내부영역 클릭(e.target.value)와 아이콘이 같지 않다면 false로 이벤트 처리되지 않도록함
-> 이 방안은 react 이벤트 핸들러 함수에서 권장되지 않음. 이벤트 핸들러 함수값이 false를 반환하면 이벤트가 전파되지 않아 가상돔이 업데이트 되지 않을 수 있는 케이스가 발생됨

2) icon- modal - 외부 트리구조에서 modal영역에 e.stopPropagation()함수 호출해 modal 영역에 이벤트 적용되지 않도록 처리
-> 모달외부에서도 모달이 닫히지 않는 케이스 발생

 #### 해결방안
 모달내부 클릭이벤트 핸들러 함수(handleModalClick()에 e.stopPropagation()함수를 호출해 닫기 이벤트가 전파되지 않도록 하여 모달이 닫하지 않도록하고
 wrap(외부)영역 클릭시는 modal close함수를 호출함
 
