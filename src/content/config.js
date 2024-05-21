var config = {
    python: true,
    java: true,
    c: true,
    javascript: true,
}

var getLangs = () => {
    let list = [];

    if (config.python) {
        list.push("python");
    }

    if (config.java) {
        list.push("java");
    }

    if (config.c) {
        list.push("c");
    }

    if (config.javascript) {
        list.push("javascript");
    }

    return list;
}

export { config, getLangs };

