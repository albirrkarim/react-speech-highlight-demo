# CHANGELOG

# 4.6.5

![backend](/img/chat_gpt_api.png)
- Securing secret key with make backend server as a proxy

# 4.6

- Optional integration with openai (chatgpt api)
```jsx
 convertAllNumberIntoWord()
 getLangForThisText()
```

- Fix bug

# 4.5

- Add precentage of TTS reading by word and sentence

```
spokenHL.precentageWord
spokenHL.precentageSentence
```

- Change config while TTS playing `controlHL.changeConfig()`

- Fix more bug

# 4.4

- Convert into npm package, you can implement this package as local npm package

- Add seeking by sentence and paragraph

```jsx
controlHL.seekSentenceBackward()
controlHL.seekSentenceForward()
controlHL.seekParagraphBackward()
controlHL.seekParagraphForward()
```
- Add Gesture Based
```jsx
controlHL.activateGesture()
```

- Update demo website
- Fix more bug
- Refactor

# 4.3 

- Still buggy