import React from 'react';

function Option(props) {
    return (
        <option value={props.value}>
            {props.text}
        </option>
    );
}

function Select(props) {
    return (
        <select name={props.name} onChange={props.callback}>
            {props.children}
        </select>
    );
}

function Submit(props) {
    return (
        <input type="submit" value={props.text} />
    );
}

function Label(props) {
    return (
        <label>
            {props.text}
            {props.children}
        </label>
    );
}

function Form(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.description}
            <form onSubmit={props.handler}>
                {props.children}
            </form>
        </div>
    );
}

function parse(jsonObj) {
    switch (jsonObj.type) {
        case "dropdown":
            let children = [];
            for (let c of jsonObj.content) {
                children.push(<Option value={c.toLowerCase()} text={c}/>);
            }

            return (
                <Label text={jsonObj.title}>
                    <Select
                        name={jsonObj.name}
                        callback={jsonObj.callback}
                    >
                        {children}
                    </Select>
                </Label>
            );
        case "submit":
            return (
                <Submit text={jsonObj.content} />
            );
        // extend to include other types
    }
}

export default function generateForm(jsonObj) {
    var children = []

    for (let c of jsonObj.children) {
        children.push(parse(c));
    }

    return (
        <Form
            handler={jsonObj.handler}
            title={jsonObj.title}
            description={jsonObj.description}
        >
            {children}
        </Form>
    );
}