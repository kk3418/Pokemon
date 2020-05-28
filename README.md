## React, GraphQL

### 功能：
有`<input>`可以輸入名稱但必須名稱完全一樣，以及`<select>`可以選擇顯示個數
畫面呈現上每次更新畫面時會有最少一秒loading 畫面，直到下載到所需資料並重新更新state為止

## 心得：
學到GraphQL引用到react的實作，用到的函式庫還有程式碼的寫法等基本概念，而比較深入的部份是react useEffect hook的使用。例如：
```javascript 
  useEffect(() => {
    const f = document.getElementById("need-focus")
    if (null !== f) {
      console.trace("focus")
      f.focus({preventScroll: false})
    }
  })
```
這段程式碼是為了要讓`<button id="need-focus">`這個標籤在每次重選新的顯示範圍時能用`.focus()`聚焦到最底下的項目，但是這個標籤未必在這次render後存在，因此為了確保每次更新DOM時能檢查這個`button`是否建立以及若存在則聚焦到它的邏輯確實執行，這時候用useEffect對我而言就顯得很有用。

![](https://media.giphy.com/media/YqiV1dpZB3LOweOzPP/giphy.gif)