const defaultHandler = () => {};
const defaultCallback = () => {};

class JsonObj {
    constructor(vendorId, vendorAuth, components) {
        this.vendorId = vendorId;
        this.vendorAuth = vendorAuth;
        this.components = components;
    }

    addComponent(component) {
        components.push(component);
    }

    toJson() {
        return {
            //...
        };
    }
}

function parseField(fieldObj) {
    let callback = fieldObj.Callback;
    if (callback === undefined) {
        callback = defaultCallback;
    }

    return {
        type: fieldObj.Child,
        title: fieldObj.Title,
        callback: callback,
        content: fieldObj.Content,
    }
}

function parseForm(formObj) {
    let handler = formObj.Handler;
    if (handler === undefined) {
        handler = defaultHandler;
    }

    let children = []

    for (let f of formObj.Fields) {
        children.push(parseField(f));
    }

    let submit = formObj.Submit;
    if (submit === undefined) {
        children.push({
            type: "submit",
            content: "Submit",
        });
    }

    return {
        handler: handler,
        title: formObj.Title,
        description: formObj.Description,
        children: children,
    };
}

function parseComponent(componentObj) {
    switch (componentObj.Component) {
        case "form":
            return parseForm(componentObj);
    }
}

export default function jsonParser(inObj) {
    let outObj = new JsonObj(inObj.VendorId, inObj.VendorAuth, []);

    for (let c of inObj.Components) {
        outObj.addComponent(parseComponent(c));
    }

    return outObj.toJson();
}