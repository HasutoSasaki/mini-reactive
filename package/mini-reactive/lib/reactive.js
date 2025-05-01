//グローバル変数：現在追跡中の副作用（effect）を保持
let activeEffect = null;

//副作用関数を実行し、その過程で使用されるリアクティブな値との依存関係を追跡
function effect(fn) {
    activeEffect = fn;
    fn();
    activeEffect = null;
}

// データの依存関係を保持するためのMap
const targetMap = new Map();

// 依存関係の追跡を行う関数
function track(target, key) {
    if (!activeEffect) return;

    let depMap = targetMap.get(target);
    if (!depMap) {
        depMap = new Map();
        targetMap.set(target, depMap);
    }

    let dep = depMap.get(key);
    if (!dep) {
        dep = new Set();
        depMap.set(key, dep);
    }

    dep.add(activeEffect);
}

// 依存関係にある副作用を実行する関数
function trigger(target, key) {
    const depMap = targetMap.get(target);
    if (!depMap) return;

    const dep = depMap.get(key);
    if (dep) {
        dep.forEach(effect => effect());
    }
}

function reactive(obj) {
    return new Proxy(obj, {
        get(target, key, receiver) {
            const result = Reflect.get(target, key, receiver);
            track(target, key);
            return result;
        },
        set(target, key, value, receiver) {
            const result = Reflect.set(target, key, value, receiver);
            trigger(target, key);
            return result;
        }
    });
}

export { effect, reactive };