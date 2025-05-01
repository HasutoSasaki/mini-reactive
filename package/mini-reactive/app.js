import { reactive, effect } from './lib/reactive.js';

// 実際の使用例：リアクティブな状態の作成
const state = reactive({
    count: 0,
    name: ''
});

// DOMの更新を行う副作用の定義
effect(() => {
    document.getElementById('count').textContent = state.count;
    document.getElementById('direct-input').value = state.count;
    document.getElementById('output').textContent = state.name;
});

// イベントハンドラの設定
document.getElementById('increment').addEventListener('click', () => {
    state.count++;
});

document.getElementById('decrement').addEventListener('click', () => {
    state.count--;
});

document.getElementById('direct-input').addEventListener('input', (event) => {
    state.count = Number(event.target.value);
});

document.getElementById('input').addEventListener('input', (event) => {
    state.name = event.target.value;
});